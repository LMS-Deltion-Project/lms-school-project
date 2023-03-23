using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using BCrypt.Net;
using lms.Dtos.User;
using lms.Model;
using Microsoft.IdentityModel.Tokens;

namespace lms.Services.AccountService;

public class AccountService : IAccountService
{
    
    public static User user = new User();

    private readonly IConfiguration _configuration;

    private readonly IMapper _mapper;
    
    public AccountService(IMapper mapper, IConfiguration configuration)
    {
        _configuration = configuration;
        _mapper = mapper;
    }

    public async Task<ServiceResponse<LoginUserResponseDto>> Authenticate(LoginUserRequestDto userCredentials)
    {
        var serviceResponse = new ServiceResponse<LoginUserResponseDto>();
    
        try
        {
            if (!BCrypt.Net.BCrypt.EnhancedVerify(userCredentials.Password, user.PasswordHash, hashType:HashType.SHA512))
            {
                throw new Exception("Username or (password) are incorrect.");
            }
        
            var authToken = new LoginUserResponseDto
            {
                BearerToken = CreateAuthToken(_mapper.Map<User>(userCredentials))
            };
        
            serviceResponse.Data = authToken;
        }
        catch (Exception ex)
        {
            serviceResponse.Success = false;
            serviceResponse.Message = ex.Message;
        }
        
        return serviceResponse;
    }

    public async Task<ServiceResponse<CreateUserResponseDto>> Create(CreateUserRequestDto newUser)
    {
        var serviceResponse = new ServiceResponse<CreateUserResponseDto>();
        
        try
        {
            // BCrypt.Net.BCrypt.GenerateSalt();
            
            string passwordHash = BCrypt.Net.BCrypt.EnhancedHashPassword(newUser.Password,11, hashType:HashType.SHA512);

            user.UserName = newUser.UserName;
            user.PasswordHash = passwordHash;

            serviceResponse.Data = _mapper.Map<CreateUserResponseDto>(user);
        }
        catch (Exception ex)
        {
            serviceResponse.Success = false;
            serviceResponse.Message = ex.Message;
        }

        return serviceResponse;
    }

    private string CreateAuthToken(User user)
    {
        List<Claim> claims = new List<Claim>()
        {
            new Claim(ClaimTypes.Name, user.UserName)
        };
        
        var dotnetJwtKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
            _configuration.GetSection("AppSettings:DOTNET_JWT_KEY").Value!
        ));
        
        var credentials = new SigningCredentials(dotnetJwtKey, SecurityAlgorithms.HmacSha256);
        
        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddDays(1),
            signingCredentials: credentials
        );
        
        var jwt = new JwtSecurityTokenHandler().WriteToken(token);
        
        return jwt;
    }
}
