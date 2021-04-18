package git.retalex.GI.controllers;

import git.retalex.GI.models.ItemResponse;
import git.retalex.GI.utils.exceptions.ResourceNotFoundException;
import io.swagger.annotations.ApiOperation;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class ItemsController {
    private static final String itemsInfoPath = "/game/info/items_v2.json";

    @ApiOperation(value = "Retrieve items list", responseContainer = "List", response = ItemResponse.class)
    @GetMapping(path = "/items", produces = "application/json")
    public String getItemInformation(){
        try {
            return new String(new ClassPathResource(itemsInfoPath).getInputStream().readAllBytes());
        }catch (IOException e){
            throw new ResourceNotFoundException();
        }
    }
}
