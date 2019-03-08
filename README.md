<h1>Validação Jquery e efeito css no background</h1>
<p>O projeto consiste em mostrar um validador para formulários simples feito com jquery. E um efeito de rolagem bem legal com as múltiplas imagens de fundo do site.</p>
<br>
<strong>Jquery - Formulário</strong>
<p>É executado uma função que verifica se os campos (inputs da página) estão preenchidos. Através da função each() é verificado se cada um dos campos do formulário está vazio. Se estiver é aplicado uma borda vermelha e é indicado uma mensagem através da variável msg1 que acessa a classe da div (.mgs1). Esta mensagem é impressa através do elemento innerHTML.</p>

<p>Há também um contador que incrementa caso um dos campos esteja vazio; e testa uma condição caso o contador seja = 0 (o que representa que os campos foram preenchidos) para que possa submeter o formulário.</p>

<p>Todas estas funções acima são executadas quando clicado no botão para logar (#botao - função click()).</p>

<p>E estas (blur() e click()), são executadas assim que o DOM estiver pronto para ser manipulado, como indica a função ready().</p>

<br>
<strong>CSS3 - Background e Position</strong>
<p>Apliquei estas configurações no background para brincar e fazer algo interessante. Mesmo tendo em vista que não acho que seja comum esse tipo e efeito background em um formulário de login.</p>

<p>Da linha 9 a 72 estão as configurações de estilo do formulário em si. Linha 74 em diante do background, e são estas que vou explicar a seguir.</p>

<p>Usei o pseudo-seletor nth-child() para definir as imagens que cada .section possui. Também usei a propriedade filter com valor brightness(75%) para deixar as imagens um pouco mais escuras, mantendo assim o foco da atenção do usuário no formulário.</p>

<p>O efeito em si é gerado pelas propriedades position e top, o position com o valor sticky funciona quase como um relative e fixed ao mesmo tempo, mantendo o elemento fixo mas também dando um efeito de relavitade com relação ao scroll do navegador (posição dele). O top com valor 0 é o que faz uma imagem quebrar sobre a outra gerando esse efeito de 'colocar uma folha sobre outra'.</p>
<br>
<strong>Considerações:</strong>
<p>A(s) imagem(ns) foi (foram) retirada(s) do banco de imagens gratuito: https://www.nappy.co</p>
<hr>
<br>
<strong>Outras informações: </strong><p>O trecho a seguir pode aparecer repetido caso você visualize e leia as informações sobre mais de um repositório.</p>
<br>
<strong>Atualizações de código: </strong><p>Pretendo adicionar (aos poucos), à estes códigos, as configurações que permitem a acessibilidade e a compatibilidade entre navegadores e versões de navegadores (crossbrowser). Isso será feito com mais calma tendo em vista que meu objetivo inicial é disponibilizar o básico dos sites (site pronto).</p>
<br>
<strong>Ambiente de visualização:</strong> <p>Caso tenha interesse em ver o site pronto e hospedado, acesse: environment > View deployment</p>
