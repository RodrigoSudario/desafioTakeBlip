<h1 align="center">Desafio Take Blip</h1>

<p align="center">Neste projeto, foi proposto o consumo da API do github recebendo, ordenando e filtrando os dados pela linguagem e tempo de criação dos repositórios. Além disto, o deploy ocorreu via Heroku. Por fim, a aplicação seria consumida via chatBox da Take Blip. </p>

<h4 align="center"> 
	ChatBox em Contrução.
</h4>

<h3>Comandos iniciais:</h3>

npm init<br>
npm install express<br>
npm install axios<br>
npm install dotenv<br>
npm install cors<br>

<h3>Comandos com o Heroku:</h3>

heroku login<br>
heroku create<br>
git push heroku main<br>
heroku open<br>

<h3>Estrutura</h3>

Por ser uma aplicação simples não foi ultilizado nenhuma arquitetura.

"./index:"<br>
  Criando a requisição com o método Get.

"./service"<br>
- getRepos:<br>
  Faz a requisição dos repositórios do usuário.

- filterRepos:<br>
  Faz a filtragem por linguagem C# e ordena em ordem crescente. 

Neste forum encontrei a solução para trabalhar com ISO8601:
<br>
https://stackoverflow.com/questions/12192491/sort-array-by-iso-8601-date

- getAvatar:<br>
  Faz a requisição do usuário para retornar a url do avatar.


<h3>Deploy no Heroku:</h3>
https://gentle-plains-54049.herokuapp.com/
