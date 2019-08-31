$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Desafio1.feature");
formatter.feature({
  "name": "Desafio 1",
  "description": "    Eu como usuário do sistema\n    Desejo armazenar meus dados.",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Gravar Dados no Banco de Dados",
  "description": "",
  "keyword": "Cenário"
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
formatter.after({
  "status": "passed"
});
});