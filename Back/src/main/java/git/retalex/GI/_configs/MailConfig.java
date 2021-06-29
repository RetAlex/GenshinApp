package git.retalex.GI._configs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
@Profile("production")
public class MailConfig {
    @Bean
    public MailSender mailSender(@Value("${MAIL_HOST}") String mailHost, @Value("${MAIL_PORT:587}") int mailPort,
                                 @Value("${MAIL_USERNAME}") String mailUsername, @Value("${MAIL_PASSWORD}") String mailPassword){
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost(mailHost);
        mailSender.setPort(mailPort);
        mailSender.setProtocol("smtp");
        mailSender.setUsername(mailUsername);
        mailSender.setPassword(mailPassword);

        Properties properties = new Properties();
        properties.setProperty("mail.smtp.starttls.enable", "true");
        properties.setProperty("mail.smtp.starttls.required", "true");
        mailSender.setJavaMailProperties(properties);

        return mailSender;
    }
}
