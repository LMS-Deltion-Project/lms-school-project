namespace lms.Dtos.User;

public class GetUserResponseDto
{
    public int Id { get; set; }

    public required string UserName { get; set; }

    public required string Email { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public DateTime Created { get; set; }

    public DateTime Modified { get; set; }

}