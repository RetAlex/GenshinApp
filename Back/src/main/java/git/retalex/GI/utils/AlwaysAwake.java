package git.retalex.GI.utils;

import git.retalex.GI.controllers.StatusCheckController;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Profile(value = "production")
public class AlwaysAwake {
    @Scheduled(fixedDelay = 300000)
    public void pollSelf(){
        new RestTemplate().getForEntity("http://genshin-application.herokuapp.com/health", StatusCheckController.Health.class);
    }
}
