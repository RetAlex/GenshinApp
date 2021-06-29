package git.retalex.GI.controllers;

import git.retalex.GI.models.FeedbackPayload;
import git.retalex.GI.models.FeedbackResponse;
import git.retalex.GI.services.interfaces.FeedbackService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Api("Feedback")
@RestController
public class FeedbackController {
    private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @ApiOperation(value = "Provide a feedback; On production can be executed once a minute, if limit exceeds - returns false in result", response = FeedbackResponse.class)
    @PostMapping("/sendFeedback")
    public FeedbackResponse provideFeedback(@RequestBody FeedbackPayload payload){
        boolean success = feedbackService.sendFeedback(payload.getContactEmail(), payload.getFeedbackMessage());
        return new FeedbackResponse(success);
    }
}
