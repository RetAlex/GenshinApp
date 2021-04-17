package git.retalex.GI.services;

import git.retalex.GI.models.calculator.CalculateRequest;
import git.retalex.GI.models.calculator.CalculatedMobDrops;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CalculatorService {
    private final ResourceManager resourceManager;

    public CalculatorService(ResourceManager resourceManager) {
        this.resourceManager = resourceManager;
    }

    public CalculatedMobDrops getDropsForMobs(List<CalculateRequest.Mob> mobs, int WL){
        var result = new CalculatedMobDrops();
        for(var mob: mobs){
            var mobDrop = getDropsForMob(mob, WL);
            mergeDropResponseIntoFirst(result, mobDrop);
        }
        return result;
    }

    //TODO implement
    public CalculatedMobDrops getDropsForMob(CalculateRequest.Mob mob, int WL){
        throw new RuntimeException("Feature wasn't implemented yet");
    }

    public void mergeDropResponseIntoFirst(CalculatedMobDrops first, CalculatedMobDrops second){
        first.setMora(first.getMora()+second.getMora());
        first.setExperience(first.getExperience()+second.getExperience());
        Map<Integer, Integer> firstDrops = first.getDropAmounts(), secondDrops = second.getDropAmounts();
        for (var key: secondDrops.keySet()){
            firstDrops.put(key, firstDrops.getOrDefault(key, 0)+secondDrops.get(key));
        }
    }
}
