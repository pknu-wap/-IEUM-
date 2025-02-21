package moadong.user.payload.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record UserLoginRequest(
        @NotNull
        @Email
        @Size(min = 5, max = 50)
        String email,
        @NotNull
        @Size(min = 8, max = 20)
        String password
) {
}
