<h1 align="center">Desafio Take Blip</h1>

<p align="center">Neste projeto, foi proposto o consumo da API do github recebendo e ordenando e filtrando os dados pela linguagem e tempo de criação dos repositórios. Além disto, o deploy ocorreu via Heroku. Por fim, a aplicação seria consumida via chatBox da Take Blip. </p>

<h4 align="center"> 
	ChatBox em Contrução.
</h4>

<p align="center">Comandos iniciais:</p>

  npm init
  npm install express
  npm install axios
  npm install dotenv
  npm install cors

<p align="center"> Comandos com o Heroku:</p>
  heroku login
  heroku create
  git push heroku main
  heroku open

<p align="center">Estrutura</p>
./index:
  Criando a requisição com o método Get.

./service
- getRepos:
  Faz a requisição dos repositórios do usuário.

- filterRepos:
  Faz a filtragem por linguagem C# e ordena em ordem crescente. 

Neste artigo encontrei a solução para trabalhar com ISO8601:
https://stackoverflow.com/questions/12192491/sort-array-by-iso-8601-date

- getAvatar:
  Faz a requisição do usuário para retornar a url do avatar.


Deploy no Heroku:

https://gentle-plains-54049.herokuapp.com/