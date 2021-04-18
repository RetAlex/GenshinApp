package git.retalex.GI.models.calculator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CalculateRequest {
    private List<Mob> mobs;
    private int worldLevel;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Mob{
        private int id;
        private int amount;
    }
}
