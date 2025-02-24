package moadong.club.service;

import java.time.LocalDate;
import java.time.Period;
import java.time.temporal.ChronoField;
import java.time.temporal.ChronoUnit;
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

    public int[] getWeeklyActiveUserWitClub(String clubId) {
        LocalDate now = LocalDate.now();
        LocalDate from = now.minusDays(84);
        List<ClubMetric> metrics = clubMetricRepository.findByClubIdAndDateAfter(clubId, from);

        //12주간의 통계를 주별로 나누어 저장할 배열
        int[] weeklyMetric = new int[12];
        LocalDate nowMonday = now.with(ChronoField.DAY_OF_WEEK, 1);
        for (ClubMetric metric : metrics) {
            LocalDate metricMonday = metric.getDate()
                .with(ChronoField.DAY_OF_WEEK, 1); // metric의 해당 주 월요일
            int weeksAgo = (int) ChronoUnit.WEEKS.between(metricMonday, nowMonday);

            if (weeksAgo >= 0 && weeksAgo < 12) {
                weeklyMetric[weeksAgo]++;
            }
        }

        return weeklyMetric;
    }
}
