package moadong.club.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import java.util.List;
import lombok.AllArgsConstructor;
import moadong.club.payload.response.ClubDetailedResponse;
import moadong.club.service.ClubMetricService;
import moadong.global.payload.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/club/metric")
@AllArgsConstructor
@Tag(name = "Club_Metric", description = "클럽 통계 API")
public class ClubMetricController {

    private final ClubMetricService clubMetricService;

    @GetMapping("/{clubId}/daily")
    @Operation(summary = "클럽 일일 통계 조회", description = "클럽 일일 통계를 조회합니다.<br>"
        + "30일 이내의 통계를 조회합니다.")
    public ResponseEntity<?> getDailyActiveUserWitClub(@PathVariable String clubId) {
        List<Integer> metric = clubMetricService.getDailyActiveUserWitClub(clubId);
        return Response.ok(metric);
    }

}
