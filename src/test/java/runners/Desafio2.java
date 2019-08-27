package runners;

import core.DriverFactory;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/Desafio2.feature",
        glue = "steps",
        plugin = {"pretty","html:target/report-html","json:target/report.json"},
        monochrome = false,
        snippets = CucumberOptions.SnippetType.CAMELCASE,
        dryRun = false,
        strict = false
)

public class Desafio2 {

}
