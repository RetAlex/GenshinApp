package git.retalex.GI.utils.models;

import lombok.Data;

import java.util.List;

@Data
public class MobsInformationResponse{
    private String name;
    private int handbookAmount;
    private String image;
    private List<MobExperience> experience;

    @Data
    private static class MobExperience{
        private int wl0;
        private int wl1;
    }
}