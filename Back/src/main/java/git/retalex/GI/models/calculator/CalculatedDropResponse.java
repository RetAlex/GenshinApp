package git.retalex.GI.models.calculator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CalculatedDropResponse {
    private int totalMora;
    private int totalExperience;
    private List<DroppedItem> items;
}
