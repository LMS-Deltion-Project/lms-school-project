namespace lms.Dtos.User;

public class LoginUserRequestDto
{
    public required string UserName { get; set; }
    
    public required string Password { get; set; }
}