package git.retalex.GI.controllers;

import git.retalex.GI.utils.exceptions.ResourceNotFoundException;
import git.retalex.GI.utils.models.MobsInformationResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@Api(tags="MobExpCalculator")
@RestController
@RequestMapping("/exp-calc")
public class MobExpFarmController {
    private static final String mobsInfoPath = "/game/info/mobs.json";

    @ApiOperation(value = "Retrieve the main mobs information", responseContainer = "List", response = MobsInformationResponse.class)
    @GetMapping(path = "/mobs", produces = "application/json")
    public String getMobsInformation() throws IOException {
        try {
            return new String(new ClassPathResource(mobsInfoPath).getInputStream().readAllBytes());
        }catch (IOException e){
            throw new ResourceNotFoundException();
        }
    }
}
