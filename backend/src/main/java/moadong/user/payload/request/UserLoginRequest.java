package moadong.user.payload.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import moadong.global.annotation.UserId;

public record UserLoginRequest(
        @NotNull
        @UserId
        String userId,
        @NotNull
        @Size(min = 8, max = 20)
        String password
) {
}
