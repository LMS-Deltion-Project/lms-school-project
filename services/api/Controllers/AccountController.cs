using lms.Dtos.User;
using lms.Services.AccountService;
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
    
    [HttpPost("authenticate")]
    public async Task<IActionResult> Authenticate(LoginUserRequestDto userCredentials)
    {
        return Ok(await _accountService.Authenticate(userCredentials));
    }

    [HttpPost("register")]
    public async Task<IActionResult> Create(CreateUserRequestDto newUser)
    {
        return Ok(await _accountService.Create(newUser));
    }
}