package git.retalex.GI.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import git.retalex.GI.models.resources.DropsResource;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ResourceManager {
    private static final String dropTablePrefix = "/game/info/drops_v2/WL";

    public DropsResource getDropForMob(int WL, int mobId){
        return getDropTableForWL(WL).get(mobId);
    }

    @Cacheable(cacheNames = "dropTable")
    public Map<Integer, DropsResource> getDropTableForWL(int WL){
        var objectMapper = new ObjectMapper();
        try {
            var content = new String(new ClassPathResource(dropTablePrefix+WL).getInputStream().readAllBytes());
            return objectMapper.readValue(content, new TypeReference<HashMap<Integer, DropsResource>>() {});
        }catch (Exception e){
            throw new RuntimeException("Can't read drop table for WL "+WL+", exception is: "+e.getMessage(), e);
        }
    }
}
