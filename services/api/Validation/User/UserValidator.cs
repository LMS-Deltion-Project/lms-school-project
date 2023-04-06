using FluentValidation;
using lms.Services.AccountService;
using lms.Validation.User.CustomValidation;

namespace lms.Validation.User;

public class UserValidator : AbstractValidator<Model.User>
{
    private readonly IAccountService _accountService;

    public UserValidator(IAccountService accountService)
    {
        _accountService = accountService;

        RuleSet("Password", () =>
            {
                RuleFor(x => x.Password).UserPassword();
            });

        RuleSet("Names", () =>
            {
                RuleFor(x => x.FirstName)
                    .Length(5, 32);
                RuleFor(x => x.LastName)
                    .Length(5, 32);
            });

        RuleSet("UserName", () =>
        {
            RuleFor(x => x.UserName)
                .Cascade(CascadeMode.Stop)
                .Length(5, 20).WithMessage("User name must be between 5 and 20 characters. You entered 1 characters.")
                .Matches("[a-zA-Z]+").WithMessage("Username must contain one or more letters.")
                .Must(BeUnique).WithMessage("{PropertyName} already exists");
        });

        RuleSet("Email", () =>
        {
            RuleFor(x => x.Email)
                .Cascade(CascadeMode.Stop)
                .Length(5, 20).WithMessage("User name must be between 5 and 20 characters. You entered 1 characters.")
                .Matches("[a-zA-Z]+").WithMessage("Username must contain one or more letters.")
                .Must(BeUnique).WithMessage("{PropertyName} already exists");
        });
    }
    
    private bool BeUnique(string userIdentifier)
    {
        var user = _accountService.GetUser(userIdentifier).Result.Data;
        if (user != null)
        {
            return false;
        }
    
        return true;
    }
}