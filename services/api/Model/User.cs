using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lms.Model;

[Index(nameof(Email), IsUnique = true)]
[Index(nameof(UserName), IsUnique = true)]
public class User
{
    // Id
    public int Id { get; set; }
    
    // UserName
    [MaxLength(20)]
    [Column("user_name")]
    public string UserName { get; set; }
    
    // Password
    [MaxLength(100)]
    [Column("password")]
    public string Password { get; set; }
    
    // Email
    [MaxLength(100)]
    public string Email { get; set; }

    // FirstName
    [MaxLength(32)]
    [Column("first_name")]
    public string? FirstName { get; set; }

    // LastName
    [MaxLength(32)]
    [Column("last_name")]
    public string? LastName { get; set; }
    
    // DateTime
    public DateTime Created { get; set; } = DateTime.UtcNow;
    
    // Modified
    public DateTime Modified { get; set; } = DateTime.UtcNow;
}