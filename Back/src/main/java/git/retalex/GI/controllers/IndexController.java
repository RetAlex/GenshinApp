package git.retalex.GI.controllers;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {
    private static final String indexPath = "assets/index.html";
    @GetMapping(path = {"", "/"}, produces = "text/html")
    public String getHelloWorld() throws Exception{
        return new String(new ClassPathResource(indexPath).getInputStream().readAllBytes());
    }
}
