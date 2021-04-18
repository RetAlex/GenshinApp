package git.retalex.GI.controllers;

import git.retalex.GI.models.calculator.CalculateRequest;
import git.retalex.GI.models.calculator.CalculatedDropResponse;
import git.retalex.GI.models.calculator.DropResponse;
import git.retalex.GI.models.ItemResponse;
import git.retalex.GI.models.MobsInformationResponse;
import git.retalex.GI.models.calculator.DroppedItem;
import git.retalex.GI.services.CalculatorService;
import git.retalex.GI.utils.exceptions.ResourceNotFoundException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.stream.Collectors;

@Api(tags="MobExpCalculator")
@RestController
@RequestMapping("/exp-calc")
public class MobExpFarmController {
    private static final String mobsInfoPath = "/game/info/mobs.json";
    private static final String itemsInfoPath = "/game/info/items.json";
    private static final String dropsInfoPrefix = "/game/info/drops/WL";
    private static final String calculatorInfoPrefix = "/game/info/calculator/WL";

    private final CalculatorService calculatorService;

    public MobExpFarmController(CalculatorService calculatorService) {
        this.calculatorService = calculatorService;
    }

    @ApiOperation(value = "Retrieve the main mobs information", responseContainer = "List", response = MobsInformationResponse.class)
    @GetMapping(path = "/mobs", produces = "application/json")
    public String getMobsInformation() throws IOException {
        try {
            return new String(new ClassPathResource(mobsInfoPath).getInputStream().readAllBytes());
        }catch (IOException e){
            throw new ResourceNotFoundException();
        }
    }

    @ApiOperation(value = "Retrieve items list", responseContainer = "List", response = ItemResponse.class)
    @GetMapping(path = "/items", produces = "application/json")
    public String getItemInformation(){
        try {
            return new String(new ClassPathResource(itemsInfoPath).getInputStream().readAllBytes());
        }catch (IOException e){
            throw new ResourceNotFoundException();
        }
    }

    @ApiOperation(value = "Retrieve all monsters calculator info (xp + mora) for appropriate world level", responseContainer = "List", response = DropResponse.class)
    @GetMapping(path = "/calculator", produces = "application/json")
    public String getWorldLevelCalculatorInfo(@RequestParam("wl") int wl){
        try {
            return new String(new ClassPathResource(calculatorInfoPrefix+wl+".json").getInputStream().readAllBytes());
        }catch (IOException e){
            throw new ResourceNotFoundException();
        }
    }

    @ApiOperation(value = "Retrieve all monsters drops for appropriate world level", responseContainer = "List", response = DropResponse.class)
    @GetMapping(path = "/drops", produces = "application/json")
    public String getWorldLevelDrops(@RequestParam("wl") int wl){
        try {
            return new String(new ClassPathResource(dropsInfoPrefix+wl+".json").getInputStream().readAllBytes());
        }catch (IOException e){
            throw new ResourceNotFoundException();
        }
    }

    @ApiOperation(value = "Calculate mora/exp and drops from the list of monsters in request", response = CalculatedDropResponse.class)
    @PostMapping(path = "/calculate")
    public CalculatedDropResponse dropResponse(@RequestBody CalculateRequest request){
        var drops = calculatorService.getDropsForMobs(request.getMobs(), request.getWorldLevel());
        var items = drops.getDropAmounts().entrySet().stream().map(DroppedItem::fromEntry).collect(Collectors.toList());
        return new CalculatedDropResponse(drops.getMora(), drops.getExperience(), items);
    }
}
