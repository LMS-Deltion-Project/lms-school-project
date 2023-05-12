using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using BCrypt.Net;
using lms.Data;
using lms.Dtos.User;
using lms.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace lms.Services.AccountService;

public class AccountService : IAccountService
{
    private readonly IConfiguration _configuration;

    private readonly ApplicationDbContext _dbContext;
    
    private readonly IMapper _mapper;
    
    private readonly DbSet<User> _users;

    public AccountService(IMapper mapper, ApplicationDbContext dbContext, IConfiguration configuration)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _users = _dbContext.Users;
        _configuration = configuration;
        
    }

    public async Task<ServiceResponse<LoginUserResponseDto>> Authenticate(LoginUserRequestDto userCredentials)
    {
        var serviceResponse = new ServiceResponse<LoginUserResponseDto>();
    
        try
        {
            var getUserServiceResponse = await GetUser(userCredentials.UserIdentifier);

            if (!getUserServiceResponse.Success)
            {
                throw new Exception("Username/Email does not exists or (password) are incorrect.");
            }

            var user = getUserServiceResponse.Data;

            var password = (await _users.FindAsync((int)user.Id)).Password;
            if (!BCrypt.Net.BCrypt.EnhancedVerify(userCredentials.Password, password, hashType:HashType.SHA256))
            {
                throw new Exception("Username/Email does not exists or (password) are incorrect.");

            }
            
            var authToken = new LoginUserResponseDto
            {
                BearerToken = CreateAuthToken(_mapper.Map<User>(user))
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

    public async Task<ServiceResponse<GetUserResponseDto>> GetUser(string userIdentifier)
    {
        var serviceResponse = new ServiceResponse<GetUserResponseDto>();
        try
        {
            // Search for a user that has a matching userName, Email or id to the userIdentifier
            // This assumes that no userName, Email or Id wil match the same. Otherwise more than one user could match with this query.
            // To fix this userName must contain letter so that it will never match with an Id, because a Id only contains integers.
            // And before creating a user we must validate its email does not match a username and his username does not match a Email.
            var user = await _users.FirstOrDefaultAsync(user => user.UserName == userIdentifier || user.Email == userIdentifier || user.Id.ToString() == userIdentifier);

            if (user is null)
            {
                throw new Exception($"User with identifier {userIdentifier} is not found");
            }
            
            serviceResponse.Data = _mapper.Map<GetUserResponseDto>(user);
        }
        catch (Exception ex)
        {
            serviceResponse.Success = false;
            serviceResponse.Message = ex.Message;
        }

        return serviceResponse;
    }
    public async Task<ServiceResponse<CreateUserResponseDto>> Create(CreateUserRequestDto request)
    {
        var serviceResponse = new ServiceResponse<CreateUserResponseDto>();
        try
        {
            var newUser = _mapper.Map<User>(request);

            var userNameUnique = GetUser(newUser.UserName).Result.Data == null;
            var emailUnique = GetUser(newUser.Email).Result.Data == null;
            if (!userNameUnique)
            {
                throw new Exception("User name already exists");
            }
            
            if (!emailUnique)
            {
                throw new Exception("Email already exists");
            }
            
            string passwordHash = BCrypt.Net.BCrypt.EnhancedHashPassword(newUser.Password,11, hashType:HashType.SHA256);
            
            newUser.Password = passwordHash;
            
            _users.Add(newUser);
            
            await _dbContext.SaveChangesAsync();

            serviceResponse.Data = _mapper.Map<CreateUserResponseDto>(newUser);
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
            new Claim("sub", user.Id.ToString()),
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
