package git.retalex.GI.models.calculator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DroppedItem {
    private int amount;
    private int itemId;

    public static DroppedItem fromEntry(Map.Entry<Integer, Integer> entry){
        return new DroppedItem(entry.getKey(), entry.getValue());
    }
}
