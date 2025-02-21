package moadong.user.service;

import com.mongodb.MongoWriteException;
import lombok.AllArgsConstructor;
import moadong.global.exception.ErrorCode;
import moadong.global.exception.RestApiException;
import moadong.global.util.JwtProvider;
import moadong.user.entity.User;
import moadong.user.payload.request.UserLoginRequest;
import moadong.user.payload.request.UserRegisterRequest;
import moadong.user.payload.response.UserLoginResponse;
import moadong.user.repository.UserInformationRepository;
import moadong.user.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserCommandService {
    private final UserRepository userRepository;
    private final UserInformationRepository userInformationRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;
    private final PasswordEncoder passwordEncoder;

    public void registerUser(UserRegisterRequest userRegisterRequest) {
        try {
            String encodedPw = passwordEncoder.encode(userRegisterRequest.password());
            User user = userRepository.save(userRegisterRequest.toUserEntity(encodedPw));
            userInformationRepository.save(userRegisterRequest.toUserInformationEntity(user.getId()));
        } catch (MongoWriteException e) {
            throw new RestApiException(ErrorCode.USER_ALREADY_EXIST);
        }
    }

    public UserLoginResponse loginUser(UserLoginRequest userLoginRequest){
        try {
            Authentication authenticate = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(userLoginRequest.email(), userLoginRequest.password()));

            UserDetails userDetails = (UserDetails) authenticate.getPrincipal();
            String accessToken = jwtProvider.generateAccessToken(userDetails.getUsername());
            String refreshToken = jwtProvider.generateRefreshToken(userDetails.getUsername());
            return new UserLoginResponse(accessToken,refreshToken);
        } catch (MongoWriteException e){
            throw new RestApiException(ErrorCode.USER_ALREADY_EXIST);
        }
    }
}
