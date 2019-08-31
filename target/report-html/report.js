$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Desafio2.feature");
formatter.feature({
  "name": "Desafio 2",
  "description": "  Eu como usuário do sistema\n  Desejo deletar meus dados.",
  "keyword": "Funcionalidade"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que eu acesse o sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "Desafio1.que_eu_acesse_o_sistema()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "mudo o combo Select version para \"Bootstrap V4 Theme\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.mudo_o_combo_Select_version_para(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono o botão Add Customer",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.seleciono_o_botão_Add_Customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Name: \"Teste Sicredi\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Last name: \"Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_Last_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo ContactFirstName: \"Sérgio Serejo\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_ContactFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Phone: \"51 9999-9999\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_Phone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo AddressLine_um: \"Av Assis Brasil, 3970\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_AddressLine_um(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo AddressLine_dois: \"Torre D\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_AddressLine_dois(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo City: \"Porto Alegre\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_City(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo State: \"RS\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_State(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo PostalCode: \"91000-000\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_PostalCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo Country: \"Brasil\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_Country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo from Employeer: \"Fixter\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_from_Employeer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho o campo CreditLimit: \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio1.preencho_o_campo_CreditLimit(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono no botão Save",
  "keyword": "Quando "
});
formatter.match({
  "location": "Desafio1.seleciono_no_botão_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "devo ver a mensagem \"Your data has been successfully stored into the database.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "Desafio1.devo_ver_a_mensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deletar Dados",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "seleciono o link Go back to list",
  "keyword": "Quando "
});
formatter.match({
  "location": "Desafio2.seleciono_o_link_Go_back_to_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecino o ícone da lupa (pesquisa) e digite o conteúdo do Name \"Teste Sicredi\"",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio2.selecino_o_ícone_da_lupa_pesquisa_e_digite_o_conteúdo_do_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecino o checkbox abaixo da palavra Actions",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio2.selecino_o_checkbox_abaixo_da_palavra_Actions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono o botão Delete",
  "keyword": "E "
});
formatter.match({
  "location": "Desafio2.seleciono_o_botão_Delete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "devo ver a mensagem no popup \"Are you sure that you want to delete this 1 item?\"",
  "keyword": "Então "
});
formatter.match({
  "location": "Desafio2.devo_ver_a_mensagem_no_popup(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[Are you sure that you want to delete this 1 item?]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat steps.Desafio2.devo_ver_a_mensagem_no_popup(Desafio2.java:37)\n\tat ✽.devo ver a mensagem no popup \"Are you sure that you want to delete this 1 item?\"(file:src/test/resources/features/Desafio2.feature:31)\n",
  "status": "failed"
});
formatter.step({
  "name": "seleciono o botão Delete do popup",
  "keyword": "Quando "
});
formatter.match({
  "location": "Desafio2.seleciono_o_botão_Delete_do_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "devo ver a mensagem dentro de um box verde na parte superior direito da tela. \"Your data has been successfully deleted from the database.\"",
  "keyword": "Então "
});
formatter.match({
  "location": "Desafio2.devo_ver_a_mensagem_dentro_de_um_box_verde_na_parte_superior_direito_da_tela(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});