package git.retalex.GI.models.calculator;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class CalculatedMobDrops {
    private int mora;
    private int experience;
    private Map<Integer, Integer> dropAmounts;

    public CalculatedMobDrops() {
        dropAmounts = new HashMap<>();
    }
}
