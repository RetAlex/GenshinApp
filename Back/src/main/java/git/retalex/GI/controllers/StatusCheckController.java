package git.retalex.GI.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusCheckController {

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/health")
    public boolean healthy(){
        return true;
    }
}
