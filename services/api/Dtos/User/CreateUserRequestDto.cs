namespace lms.Dtos.User;

public class CreateUserRequestDto
{
    public required string UserName { get; set; }
    
    public required string Password { get; set; }
}