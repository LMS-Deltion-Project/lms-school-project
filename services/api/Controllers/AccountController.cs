using lms.Dtos.User;
using lms.Services.AccountService;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace lms.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
    private readonly IAccountService _accountService;
    
    private readonly ILogger<AccountController> _logger;

    public AccountController(IAccountService accountService,ILogger<AccountController> logger)
    {
        _accountService = accountService;
        _logger = logger;
    }
    
    [EnableCors]
    [HttpPost("authenticate")]
    public async Task<IActionResult> Authenticate(LoginUserRequestDto userCredentials)
    {
        var serivceResponse = await _accountService.Authenticate(userCredentials);

        if (serivceResponse.Success == false)
        {
            return Unauthorized(serivceResponse);
        }
        return Ok(serivceResponse);
    }

    [HttpGet("user")]
    public async Task<IActionResult> GetUser(string userIdentifier)
    {
        var serviceResponse = await _accountService.GetUser(userIdentifier);
        if (serviceResponse.Success == false)
        {
            return BadRequest(serviceResponse);
        }
        return Ok(serviceResponse);
    }
    [HttpPost("register")]
    public async Task<IActionResult> Create(CreateUserRequestDto newUser)
    {
        var serviceResponse = await _accountService.Create(newUser);
        if (serviceResponse.Success == false)
        {
            return BadRequest(serviceResponse);
        }
        return Ok(serviceResponse);
    }
}