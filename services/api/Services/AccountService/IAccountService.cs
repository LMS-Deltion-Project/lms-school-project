using lms.Dtos.User;
using lms.Model;

namespace lms.Services.AccountService;

public interface IAccountService
{
    public Task<ServiceResponse<LoginUserResponseDto>> Authenticate(LoginUserRequestDto userCredentials);

    public Task<ServiceResponse<CreateUserResponseDto>> Create(CreateUserRequestDto newUser);

    public Task<ServiceResponse<GetUserResponseDto>> GetUser(string userIdentifier);
}