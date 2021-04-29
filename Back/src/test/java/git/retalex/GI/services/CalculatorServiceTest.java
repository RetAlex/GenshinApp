package git.retalex.GI.services;


import git.retalex.GI.models.calculator.CalculateRequest;
import git.retalex.GI.models.resources.DropsResource;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.List;

import static org.mockito.Mockito.when;

class CalculatorServiceTest {
    @Mock
    private static final ResourceManager resourceManagerMock = Mockito.mock(ResourceManager.class);

    @BeforeAll
    public static void setUp(){
        when(resourceManagerMock.getDropForMob(1, 1)).then(invocationOnMock -> new DropsResource(10, 5, List.of(new DropsResource.Item(1, 0.2f))));
    }

    @Test
    void getDropsForMobs() {
        CalculatorService calculatorService = new CalculatorService(resourceManagerMock);
        var response = calculatorService.getDropsForMobs(List.of(new CalculateRequest.Mob(1, 10)), 1);

        assert (100==response.getExperience()) && (50==response.getMora());
        assert response.getDropAmounts().size()==1 && response.getDropAmounts().get(1)==2;
    }
}