package moadong.user.payload.response;

public record UserLoginResponse(
        String accessToken,
        String refreshToken
) {
}
