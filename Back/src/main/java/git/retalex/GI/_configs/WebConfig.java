package git.retalex.GI._configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebMvc
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        var jsRegistration = registry.addResourceHandler("/js/**");
        jsRegistration.addResourceLocations("classpath:/assets/js/");
        var cssRegistration = registry.addResourceHandler("/css/**");
        cssRegistration.addResourceLocations("classpath:/assets/css/");
        var imgRegistration = registry.addResourceHandler("/img/**");
        imgRegistration.addResourceLocations("classpath:/assets/img/");
    }
}
