using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Database;

public class Context : IdentityDbContext
{
    public Context(DbContextOptions<Context> options) : base(options)
    {

    }
}
