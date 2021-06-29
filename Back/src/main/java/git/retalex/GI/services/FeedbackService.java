package git.retalex.GI.services;

import git.retalex.GI.utils.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {
    @Value("${FEEDBACK_RECIPIENT:}")
    private String feedbackRecipientEmail;
    private final MailSender mailSender;

    public FeedbackService(MailSender mailSender) {
        this.mailSender = mailSender;
    }

    public boolean sendFeedback(String message){
        return sendFeedback(null, message);
    }

    public boolean sendFeedback(String email, String message){
        email = StringUtils.getOrDefault(email, "Not indicated");
        try {
            if(feedbackRecipientEmail==null || feedbackRecipientEmail.isBlank()) throw new RuntimeException("Missing feedback recepient email");
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setSubject("[GI assistant] Feedback suggestion");
            mailMessage.setTo(feedbackRecipientEmail);
            mailMessage.setText(String.format("Feedback contact email:\n %s\n Feedback message:\n %s", email, message));
            mailSender.send(mailMessage);
            return true;
        }catch (Exception e){
            System.err.printf("Can't send feedback with message %s; feedback email: %s; Exception message: %s\n",
                    message, email, e.getMessage());
            e.printStackTrace();
            return false;
        }
    }
}
