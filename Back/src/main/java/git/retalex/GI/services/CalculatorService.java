package git.retalex.GI.services;

import git.retalex.GI.models.CalculateRequest;
import git.retalex.GI.models.DropResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalculatorService {
    public DropResponse getDropsForMobs(List<CalculateRequest.Mob> mobs){
        var result = new DropResponse();
        for(var mob: mobs){
            var mobDrop = getDropsForMob(mob);
            mergeDropResponseIntoFirst(result, mobDrop);
        }
        return result;
    }

    public DropResponse getDropsForMob(CalculateRequest.Mob mob){
        throw new RuntimeException("Feature wasn't implemented yet");
    }

    public void mergeDropResponseIntoFirst(DropResponse first, DropResponse second){
        throw new RuntimeException("Feature wasn't implemented yet");
    }
}
