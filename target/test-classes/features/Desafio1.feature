#language:pt

  Funcionalidade: Desafio 1
    Eu como usuário do sistema
    Desejo armazenar meus dados.


    Cenário: Gravar Dados no Banco de Dados
      Dado que eu acesse o sistema
      E mudo o combo Select version para "Bootstrap V4 Theme"
      E seleciono o botão Add Customer
      E preencho o campo Name: "Teste Sicredi"
      E preencho o campo Last name: "Teste"
      E preencho o campo ContactFirstName: "Sérgio Serejo"
      E preencho o campo Phone: "51 9999-9999"
      E preencho o campo AddressLine_um: "Av Assis Brasil, 3970"
      E preencho o campo AddressLine_dois: "Torre D"
      E preencho o campo City: "Porto Alegre"
      E preencho o campo State: "RS"
      E preencho o campo PostalCode: "91000-000"
      E preencho o campo Country: "Brasil"
      E preencho o campo from Employeer: "Fixter"
      E preencho o campo CreditLimit: "200"
      Quando seleciono no botão Save
      Então devo ver a mensagem "Your data has been successfully stored into the database."