package git.retalex.GI.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class FeedbackPayload {
    @JsonProperty(required = false)
    private String contactEmail;
    private String feedbackMessage;
}
