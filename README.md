# Trainee-Tesla

Nesse trainee foi proposto que fizessemos um site de avaliação de filmes, onde é possivel adicionar filmes, visualizar os filmes e avalia-los. Nesse repositório temos os arquivos da implementação desse site!

## Instruções para desenvolver o site no VScode

### Clonagem do repositório com o GitLens

Para conseguir desenvolver o site pelo **VScode** você precisa clonar esse repositorio na sua máquina, e isso pode ser feito através da extensão [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens). Tendo essa extensão instalada, para clonar esse repositorio você deve clicar na opção **GitLens** do menu lateral do **VCcode**, feito isso, supondo que não tenha nenhuma pasta aberta no seu **VScode**, irá aparecer a opção de *Clonar Repositório*, clicando nessa opção é só colar o link (https://github.com/MP022/Trainee-Tesla.git) e dar *enter* que a clonagem será feita.

### Ativando o TailWind no VScode

Após fazer a clonagem ou o pull desse repositório na sua máquina é necessáio executar o seguinte comando no terminal do **VScode**:

*npx tailwindcss -i ./src/init.css -o ./style/style.css --watch*

Esse comendo deve continuar sendo executado durante todo o período de desenvolvimento, com ele será possível incrementar automaticamente o **style.css** com classes já prontas do framework [TailWind](https://tailwindcss.com/). Ou seja, durante o desenvolvimento você pode entrar no site do [TailWind](https://tailwindcss.com/) e procurar por estilos do *css* que para serem adicionados ao projeto só é necessário colocar a classe que estiver especificada no site no elemento que você deseja estilizar, e pronto ele automaticamente receberá o estilo e o código do *css* será adicionado automaticamente ao arquivo **style.css**.

### Executando o site com o Live Server

Para executar o site é necessário que você tenha a extenção [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) instalada no seu **VScode**. Com ela instalada basta clicar no botão que surgiu no canto inferior direito do **VScode** chamado *Go Live* e uma janela será aberta no seu navegador padrão rodando o site. Essa janela atualiza automaticamente quando algum arquivo do projeto é modificado no **VScode**, permitindo assim que você consiga acompanhar em tempo real as alterações que você está fazendo.

### Executando o site com o npm start

Para executar o site é necessário que você tenha instalado o npm e o node no seu computador! Feito isso basta executar o sequinte comando no terminal e o site irá abrir:

*npm start*

É importante avisar que apenas o html com o nome index será executado com o css de forma correta, por algum motivo usando esse método os outros html não importam o css que está linkado neles.