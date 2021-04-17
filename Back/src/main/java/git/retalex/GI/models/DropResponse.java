package git.retalex.GI.models;

import lombok.Data;

import java.util.List;

@Data
public class DropResponse {
    private int id;
    private int experience;
    private int mora;
    private List<ItemDropResponse> items;

    @Data
    private static class ItemDropResponse{
        private int itemId;
        private double dropChance;
    }
}
