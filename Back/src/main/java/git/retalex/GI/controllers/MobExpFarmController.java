package git.retalex.GI.controllers;

import git.retalex.GI.utils.exceptions.ResourceNotFoundException;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/exp-calc")
public class MobExpFarmController {
    private static final String mobsInfoPath = "/game/info/mobs.json";

    @GetMapping(path = "/mobs", produces = "application/json")
    public String getMobsInformation() throws IOException {
        try {
            return new String(new ClassPathResource(mobsInfoPath).getInputStream().readAllBytes());
        }catch (IOException e){
            throw new ResourceNotFoundException();
        }
    }
}
