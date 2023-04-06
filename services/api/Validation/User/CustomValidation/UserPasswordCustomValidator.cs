using FluentValidation;

namespace lms.Validation.User.CustomValidation;

public static class UserPasswordCustomValidator {
    public static IRuleBuilderOptions<T, string> UserPassword<T>(this IRuleBuilder<T, string> ruleBuilder) {
        return ruleBuilder.MinimumLength(10)
             .Matches("[A-Z]+").WithMessage("{PropertyName} must contain one or more capital letters.")
             .Matches("[a-z]+").WithMessage("{PropertyName} must contain one or more lowercase letters.")
             .Matches(@"(\d)+").WithMessage("{PropertyName} must contain one or more digits.")
             .Matches(@"[""!@$%^&*(){}:;<>,.?/+\-_=|'[\]~\\]").WithMessage("{PropertyName} must contain one or more special characters.");
    }
}