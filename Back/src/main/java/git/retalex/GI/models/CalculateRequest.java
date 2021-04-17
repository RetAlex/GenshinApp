package git.retalex.GI.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CalculateRequest {
    private List<Mob> mobs;

    @Data
    @NoArgsConstructor
    public static class Mob{
        private int id;
        private int amount;
    }
}
