package git.retalex.GI.services.interfaces;

public interface FeedbackService {
    boolean sendFeedback(String message);
    boolean sendFeedback(String email, String message);
}
