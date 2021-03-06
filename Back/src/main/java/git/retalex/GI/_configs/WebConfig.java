package git.retalex.GI._configs;

import io.swagger.annotations.Api;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableWebMvc
@Configuration
@EnableSwagger2
public class WebConfig implements WebMvcConfigurer {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.withClassAnnotation(Api.class))
                .paths(PathSelectors.any())
                .build();
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        var jsRegistration = registry.addResourceHandler("/js/**");
        jsRegistration.addResourceLocations("classpath:/assets/js/");
        var cssRegistration = registry.addResourceHandler("/css/**");
        cssRegistration.addResourceLocations("classpath:/assets/css/");
        var imgRegistration = registry.addResourceHandler("/img/**");
        imgRegistration.addResourceLocations("classpath:/assets/img/");
        var fontsRegistration = registry.addResourceHandler("/fonts/**");
        fontsRegistration.addResourceLocations("classpath:/assets/fonts/");

        var gameRegistration = registry.addResourceHandler("/game/**");
        gameRegistration.addResourceLocations("classpath:/game/");


        var mapRegistration = registry.addResourceHandler("/tms/1.0.0/teyvat@png/**");
        mapRegistration.addResourceLocations("classpath:/map/");

        registry.addResourceHandler("/favicon.ico")
                .addResourceLocations("classpath:/assets/");

        //Swagger-ui configuration
        registry.addResourceHandler("/swagger-ui.html")
                .addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedMethods("*").allowedOrigins("*").allowedHeaders("*");
    }
}
