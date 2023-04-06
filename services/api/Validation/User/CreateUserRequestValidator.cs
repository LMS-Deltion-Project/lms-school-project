using AutoMapper;
using FluentValidation;
using lms.Dtos.User;
using lms.Services.AccountService;
using lms.Validation.User.CustomValidation;

namespace lms.Validation.User;

public class CreateUserRequestValidator : AbstractValidator<CreateUserRequestDto>
{
    public CreateUserRequestValidator(IAccountService accountService, IMapper mapper)
    {
        RuleFor(x => mapper.Map<Model.User>(x)).SetValidator(new UserValidator(accountService), "*");
    }
}
