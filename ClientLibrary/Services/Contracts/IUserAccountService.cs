

using BaseLibrary.DTOs;
using BaseLibrary.Responses;
using Server;


namespace ClientLibrary.Services.Contracts
{
    public interface IUserAccountService
    {
        Task<GeneralResponse> CreateAsync(RegisteredWaitHandle user);
        Task<LoginResponse> SignInAsync(LoginResponse user);
        Task<LoginResponse> RefreshTokenAsync(RefreshToken token);
        Task<WeatherForecast[]> GetWeatherForecast();
    }
}
