package steps;

import core.DriverFactory;
import cucumber.api.java.After;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import pages.CustomerPage;
import pages.HomePage;

import static core.DriverFactory.getDriver;
import static junit.framework.TestCase.assertTrue;

public class Desafio1 {

    HomePage homePage = new HomePage();
    CustomerPage customerPage = new CustomerPage();

    @Dado("que eu acesse o sistema")
    public void que_eu_acesse_o_sistema() {
        getDriver().get("https://www.grocerycrud.com/demo/bootstrap_theme");
    }

    @Dado("mudo o combo Select version para {string}")
    public void mudo_o_combo_Select_version_para(String version) {
        homePage.mudarSelectVersion(version);
    }

    @Dado("seleciono o botão Add Customer")
    public void seleciono_o_botão_Add_Customer() {
        homePage.selecionarBotaoAddCustomer();
    }

    @Dado("preencho o campo Name: {string}")
    public void preencho_o_campo_Name(String name) {
        customerPage.setName(name);
    }

    @Dado("preencho o campo Last name: {string}")
    public void preencho_o_campo_Last_name(String lastName) {
        customerPage.setLastName(lastName);
    }

    @Dado("preencho o campo ContactFirstName: {string}")
    public void preencho_o_campo_ContactFirstName(String firstName) {
        customerPage.setContactFirstName(firstName);
    }

    @Dado("preencho o campo Phone: {string}")
    public void preencho_o_campo_Phone(String phone) {
        customerPage.setPhone(phone);

    }

    @Dado("preencho o campo AddressLine_um: {string}")
    public void preencho_o_campo_AddressLine_um(String address) {
        customerPage.setAddressLine1(address);

    }

    @Dado("preencho o campo AddressLine_dois: {string}")
    public void preencho_o_campo_AddressLine_dois(String adress) {
        customerPage.setAddressLine2(adress);

    }

    @Dado("preencho o campo City: {string}")
    public void preencho_o_campo_City(String city) {
        customerPage.setCity(city);

    }

    @Dado("preencho o campo State: {string}")
    public void preencho_o_campo_State(String state) {
        customerPage.setState(state);

    }

    @Dado("preencho o campo PostalCode: {string}")
    public void preencho_o_campo_PostalCode(String postalCode) {
        customerPage.setPostalCode(postalCode);

    }

    @Dado("preencho o campo Country: {string}")
    public void preencho_o_campo_Country(String country) {
        customerPage.setCountry(country);

    }

    @Dado("preencho o campo from Employeer: {string}")
    public void preencho_o_campo_from_Employeer(String employeer) {
        customerPage.selectFromEmployeer(employeer);

    }

    @Dado("preencho o campo CreditLimit: {string}")
    public void preencho_o_campo_CreditLimit(String credit) {
        customerPage.setCreditiLimit(credit);

    }

    @Quando("seleciono no botão Save")
    public void seleciono_no_botão_Save() {
        customerPage.selecionarBotaoSalvar();
    }

    @Então("devo ver a mensagem {string}")
    public void devo_ver_a_mensagem(String mensagem) {

        assertTrue(customerPage.getMensagem().contains(mensagem));
    }

    @After
    public void tearDown(){
        DriverFactory.killDriver();
    }

}
