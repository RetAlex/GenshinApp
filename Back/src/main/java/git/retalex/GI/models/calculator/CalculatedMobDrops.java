package git.retalex.GI.models.calculator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Data
@AllArgsConstructor
public class CalculatedMobDrops {
    private int mora;
    private int experience;
    private Map<Integer, Integer> dropAmounts;

    public CalculatedMobDrops() {
        dropAmounts = new HashMap<>();
    }
}
