package moadong.user.payload.request;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import moadong.global.annotation.Korean;
import moadong.global.annotation.PhoneNumber;
import moadong.global.annotation.UserId;
import moadong.user.entity.User;
import moadong.user.entity.UserInformation;

public record UserRegisterRequest(
        @NotNull
        @UserId
        String userId,
        @NotNull
        @Size(min = 8, max = 20)
        String password,
        @NotNull
        @Korean
        String name,
        @PhoneNumber
        String phoneNumber
) {
    public User toUserEntity(String password) {
        return User.builder()
                .userId(userId)
                .password(password)
                .build();
    }

    public UserInformation toUserInformationEntity(String userId) {
        return UserInformation.builder()
                .userId(userId)
                .name(name)
                .phoneNumber(phoneNumber)
                .build();
    }
}
