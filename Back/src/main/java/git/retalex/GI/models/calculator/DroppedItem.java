package git.retalex.GI.models.calculator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@NoArgsConstructor
public class DroppedItem {
    private int amount;
    private int itemId;

    public DroppedItem(int itemId, int amount) {
        this.amount = amount;
        this.itemId = itemId;
    }

    public static DroppedItem fromEntry(Map.Entry<Integer, Integer> entry){
        return new DroppedItem(entry.getKey(), entry.getValue());
    }
}
