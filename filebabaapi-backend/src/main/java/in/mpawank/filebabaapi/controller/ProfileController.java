package in.mpawank.filebabaapi.controller;

import in.mpawank.filebabaapi.dto.ProfileDTO;
import in.mpawank.filebabaapi.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ProfileController {
    private final ProfileService profileService;

    @PostMapping("/register")
    public ResponseEntity<?> registerProfile(@RequestBody ProfileDTO profileDTO) {
        ProfileDTO savedProfile = profileService.createdProfile(profileDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProfile);
    }
}
