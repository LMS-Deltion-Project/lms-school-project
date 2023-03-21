using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using lms.Dtos.User;
using lms.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace lms.Controllers;

[Route("[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    public static User user = new User();

    private readonly IConfiguration _configuration;

    public AuthController(IConfiguration configuration, IOptions<string> appSettings)
    {
        _configuration = configuration;
    }

    [HttpPost("register")]
    public ActionResult<User> Register(CreateUserRequestDto request)
    {
        string passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);

        user.UserName = request.UserName;

        user.PasswordHash = passwordHash;

        return Ok(user);
    }

    [HttpPost("login")]
    public ActionResult<User> Login(CreateUserRequestDto request)
    {
        if (user.UserName != request.UserName)
        {
            return BadRequest("(Username) or password are incorrect.");
        }

        if (!BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
        {
            return BadRequest("Username or (password) are incorrect.");
        }

        string token = CreateAuthToken(user);
        
        return Ok(token);
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