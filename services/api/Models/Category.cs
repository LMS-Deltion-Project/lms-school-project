using Microsoft.EntityFrameworkCore;
using Infrastructure.Database;

namespace Models;

public class Category
{
    public int CategoryId { get; set; }
    public string Title { get; set; }
}

public class CategoryContext : Infrastructure.Database.Context
{
    public CategoryContext()
    {

    }

    public DbSet<Category> Categories { get; set; }
}
