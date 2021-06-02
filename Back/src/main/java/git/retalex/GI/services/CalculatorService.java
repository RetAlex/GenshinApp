package git.retalex.GI.services;

import git.retalex.GI.models.calculator.CalculateRequest;
import git.retalex.GI.models.calculator.CalculatedMobDrops;
import org.springframework.stereotype.Service;

import java.util.HashMap;
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

    public CalculatedMobDrops getDropsForMob(CalculateRequest.Mob mob, int WL){
        var drops = resourceManager.getDropForMob(WL, mob.getId());
        var items = new HashMap<Integer, Integer>();
        drops.getItems().forEach(item -> items.put(item.getId(), Math.round(item.getChance()*mob.getAmount())));
        return new CalculatedMobDrops(mob.getAmount()*drops.getMora(), mob.getAmount()*drops.getExperience(), items);
    }

    public void mergeDropResponseIntoFirst(CalculatedMobDrops first, CalculatedMobDrops second){
        first.setMora(first.getMora()+second.getMora());
        first.setExperience(first.getExperience()+second.getExperience());
        Map<Integer, Integer> firstDrops = first.getDropAmounts(), secondDrops = second.getDropAmounts();
        for (int key: secondDrops.keySet()){
            int newAmount = firstDrops.getOrDefault(key, 0)+secondDrops.get(key);
            if(newAmount>0) firstDrops.put(key, newAmount);
        }
    }
}
