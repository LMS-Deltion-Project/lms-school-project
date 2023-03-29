using AutoMapper;
using lms.Model;
using lms.Dtos;
using lms.Dtos.User;

namespace lms;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<LoginUserRequestDto, User>();
        CreateMap<User, CreateUserResponseDto>();
        CreateMap<User, GetUserResponseDto>();
        CreateMap<GetUserResponseDto, User>();
        CreateMap<CreateUserRequestDto, User>();
    }
}