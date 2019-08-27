package steps;

import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import pages.CustomerPage;
import pages.HomePage;

import static org.junit.Assert.assertEquals;

public class Desafio2 {

    HomePage homePage = new HomePage();
    CustomerPage customerPage = new CustomerPage();

    @Quando("seleciono o link Go back to list")
    public void seleciono_o_link_Go_back_to_list() {
        customerPage.selecionarVoltar();
    }

    @Quando("selecino o ícone da lupa \\(pesquisa) e digite o conteúdo do Name {string}")
    public void selecino_o_ícone_da_lupa_pesquisa_e_digite_o_conteúdo_do_Name(String pesquisa) {
        homePage.pesquisar(pesquisa);
    }

    @Quando("selecino o checkbox abaixo da palavra Actions")
    public void selecino_o_checkbox_abaixo_da_palavra_Actions() throws InterruptedException {
        homePage.selecionarCheckBox();
    }

    @Quando("seleciono o botão Delete")
    public void seleciono_o_botão_Delete() {
        homePage.selecionarBotaoDeletar();
    }

    @Então("devo ver a mensagem no popup {string}")
    public void devo_ver_a_mensagem_no_popup(String mensagem) {
        assertEquals(homePage.getMensagem(), mensagem);
    }

    @Quando("seleciono o botão Delete do popup")
    public void seleciono_o_botão_Delete_do_popup() {
        homePage.confirmarDeletar();
    }

    @Então("devo ver a mensagem dentro de um box verde na parte superior direito da tela. {string}")
    public void devo_ver_a_mensagem_dentro_de_um_box_verde_na_parte_superior_direito_da_tela(String mensagem) {
        assertEquals(homePage.getMensagemDelete(), mensagem);
    }
}
