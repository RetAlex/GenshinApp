package git.retalex.GI._configs;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

@EnableScheduling
@ComponentScan(basePackages = "git.retalex.GI.*")
public class Main implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        var applicationContext = new AnnotationConfigWebApplicationContext();
        applicationContext.setServletContext(servletContext);
        applicationContext.register(Main.class);

        var config = servletContext.addServlet("DispatcherServlet", new DispatcherServlet(applicationContext));
        config.addMapping("/");
        config.setLoadOnStartup(1);
    }
}
