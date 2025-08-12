package in.mpawank.filebabaapi.service;

import com.mongodb.DuplicateKeyException;
import in.mpawank.filebabaapi.document.ProfileDocument;
import in.mpawank.filebabaapi.dto.ProfileDTO;
import in.mpawank.filebabaapi.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final ProfileRepository profileRepository;

    public ProfileDTO createdProfile(ProfileDTO profileDTO){
        ProfileDocument profile = ProfileDocument.builder()
                .clerkId(profileDTO.getClerkId())
                .email(profileDTO.getEmail())
                .firstname(profileDTO.getFirstname())
                .lastname(profileDTO.getLastname())
                .photoUrl(profileDTO.getPhotoUrl())
                .createdAt(Instant.now())
                .credits(5)
                .build();

//        try{
//            profile = profileRepository.save(profile);
//        }catch(DuplicateKeyException e){
//    throw new RuntimeException("email already exists");
//        }

        profile =  profileRepository.save(profile);

        return  ProfileDTO.builder()
                .id(profile.getId())
                .clerkId(profile.getClerkId())
                .email(profile.getEmail())
                .firstname(profile.getFirstname())
                .lastname(profile.getLastname())
                .photoUrl(profile.getPhotoUrl())
                .createdAt(profile.getCreatedAt())
                .credits(profile.getCredits())
                .build();

    }
}
