package git.retalex.GI.models.calculator;

import lombok.Data;

import java.util.List;

@Data
public class CalculatedDropResponse {
    private int totalMora;
    private int totalExperience;
    private List<DroppedItem> items;
}
