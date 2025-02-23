package moadong.club.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
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
        LocalDate nowDate = LocalDate.now();
        Optional<ClubMetric> optional = clubMetricRepository.findByClubIdAndIpAndDate(
            clubId, remoteAddr, nowDate);

        ClubMetric metric;
        if (optional.isPresent()) {
            metric = optional.get();
            metric.update();
        } else {
            metric = ClubMetric.builder()
                .clubId(clubId)
                .ip(remoteAddr)
                .build();
        }
        clubMetricRepository.save(metric);

    }

    public int[] getDailyActiveUserWitClub(String clubId) {
        LocalDate now = LocalDate.now();
        //해당 클럽에 대해 30일 전까지의 통계를 모두 불러온다
        LocalDate from = now.minusDays(30);
        List<ClubMetric> metrics = clubMetricRepository.findByClubIdAndDateAfter(clubId, from);

        //30일간의 통계를 일별로 나누어 저장할 배열
        int[] dailyMetric = new int[30];
        for (ClubMetric metric : metrics) {
            Period period = Period.between(metric.getDate(), now);

            dailyMetric[period.getDays()]++;
        }

        return dailyMetric;
    }
}
