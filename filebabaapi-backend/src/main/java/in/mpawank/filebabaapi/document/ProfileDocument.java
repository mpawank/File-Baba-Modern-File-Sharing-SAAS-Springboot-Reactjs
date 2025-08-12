package in.mpawank.filebabaapi.document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document(collection = "profile")
public class ProfileDocument {
    @Id
    private String id;
    private String clerkId;
    @Indexed(unique = true)
    private String firstname;
    private String lastname;
    private String email;
    private Integer credits;
    private String photoUrl ;

    @CreatedDate
    private Instant createdAt;
}
