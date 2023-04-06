namespace lms.Dtos.User;

public class CreateUserRequestDto
{
    public required string UserName { get; set; }
    
    public required string Password { get; set; }
    
    public required string Email { get; set; }
    
    public string? FirstName { get; set; }
    
    public string? LastName { get; set; }
}