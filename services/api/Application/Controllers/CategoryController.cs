using Microsoft.AspNetCore.Mvc;
using Models;

namespace lms.Controllers;

[ApiController]
[Route("[controller]")]
public class CategoryController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<CategoryController> _logger;

    public CategoryController(ILogger<CategoryController> logger)
    {
        _logger = logger;
    }

    [HttpPost(Name = "Create")]
    public IEnumerable<Category> Create()
    {
        CategoryContext db = new CategoryContext();

        String title = "Test title";

        Category category = new Category { Title = title };

        db.Categories.Add(category);

        return from c in db.Categories orderby c.Title select c;
    }
}
