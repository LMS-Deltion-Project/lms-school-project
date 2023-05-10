namespace lms.Dtos.User;

public class LoginUserResponseDto
{
    public required string UserName { get; set; }
    
    public required string BearerToken { get; set; }
}