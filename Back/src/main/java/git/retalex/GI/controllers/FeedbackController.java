package git.retalex.GI.controllers;

import git.retalex.GI.models.FeedbackPayload;
import git.retalex.GI.models.FeedbackResponse;
import git.retalex.GI.services.interfaces.FeedbackService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FeedbackController {
    private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping("/sendFeedback")
    public FeedbackResponse provideFeedback(@RequestBody FeedbackPayload payload){
        boolean success = feedbackService.sendFeedback(payload.getContactEmail(), payload.getFeedbackMessage());
        return new FeedbackResponse(success);
    }
}
