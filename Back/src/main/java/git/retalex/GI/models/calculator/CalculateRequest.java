package git.retalex.GI.models.calculator;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CalculateRequest {
    private List<Mob> mobs;
    private int WL;

    @Data
    @NoArgsConstructor
    public static class Mob{
        private int id;
        private int amount;
    }
}
