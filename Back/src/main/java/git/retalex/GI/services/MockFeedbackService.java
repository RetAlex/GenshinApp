package git.retalex.GI.services;

import git.retalex.GI.services.interfaces.FeedbackService;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
@Profile("!production")
public class MockFeedbackService implements FeedbackService {
    @Override
    public boolean sendFeedback(String message) {
        System.out.printf("Got the feedback in mock feedback service: %s\n", message);
        return true;
    }

    @Override
    public boolean sendFeedback(String email, String message) {
        System.out.printf("Got the feedback in mock feedback service: %s; From email: %s\n", message, email);
        return true;
    }
}
