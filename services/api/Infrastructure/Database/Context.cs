using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Database;

public class Context : DbContext
{
    protected readonly IConfiguration configuration;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        Console.WriteLine(Environment.GetEnvironmentVariable("ConnectionStrings__DefaultConnection"));
        optionsBuilder.UseNpgsql(Environment.GetEnvironmentVariable("ConnectionStrings__DefaultConnection"));
    }
}
