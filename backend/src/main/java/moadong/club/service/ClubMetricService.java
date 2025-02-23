package moadong.club.service;

import java.time.LocalDate;
import java.util.Optional;
import lombok.AllArgsConstructor;
import moadong.club.entity.ClubMetric;
import moadong.club.repository.ClubMetricRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ClubMetricService {

    private final ClubMetricRepository clubMetricRepository;

    public void patch(String clubId, String remoteAddr) {
        Optional<ClubMetric> optional = clubMetricRepository.findByClubIdAndIpAndDate(
            clubId, remoteAddr, LocalDate.now());

        if (optional.isPresent()) {
            optional.get().update();
        } else {
            clubMetricRepository.save(ClubMetric.builder()
                .clubId(clubId)
                .ip(remoteAddr)
                .build());
        }

    }

}
