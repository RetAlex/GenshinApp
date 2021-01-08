package git.retalex.GI.controllers;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusCheckController {
    @GetMapping("/health")
    public Health getHealth(){
        return new Health(1);
    }

    @Data
    @AllArgsConstructor
    public static class Health{
        private int status;
    }
}
