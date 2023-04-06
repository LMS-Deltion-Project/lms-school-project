namespace lms.Dtos.User;

public class LoginUserRequestDto
{
    public required string UserIdentifier { get; set; }
    
    public required string Password { get; set; }
}