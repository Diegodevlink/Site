# Órbita — revista de astronomia e tecnologia

Site de divulgação científica no formato de revista, com curiosidades sobre astronomia e tecnologia. O objetivo é despertar o interesse dos visitantes por essas áreas e incentivar a busca por conhecimento e por cursos acadêmicos ou técnicos em tecnologia e ciências exatas.

## Como abrir

1. Salve os arquivos `index.html` e `style.css` na mesma pasta.
2. Dê dois cliques no `index.html` para abrir no navegador.

Não é preciso instalar nada nem usar servidor. As fontes (Fraunces e Public Sans) vêm do Google Fonts e precisam de internet. Sem conexão, o site usa fontes padrão do sistema e continua funcionando.

## Estrutura

```
revista-orbita/
├── index.html   # conteúdo e estrutura das páginas (abas)
├── style.css    # visual: cores, tipografia, layout e ilustrações
└── README.md    # este arquivo
```

## O que o site tem

O site tem uma única página `index.html` dividida em quatro abas:

| Aba | Conteúdo |
|---|---|
| **Início** | O que é astronomia, o que ela estuda, a origem do conceito (linha do tempo e comparação entre os modelos geocêntrico e heliocêntrico), curiosidades aleatórias e caminhos de estudo |
| **Planetas** | Comparação de tamanho entre os oito planetas e uma curiosidade de cada um |
| **Estrelas** | Ciclo de vida de uma estrela, relação entre cor e temperatura e curiosidades |
| **Buracos negros** | Ilustração de um buraco negro, horizonte de eventos, as primeiras imagens reais e outros conceitos |

O endereço guarda a aba aberta. Por exemplo, `index.html#estrelas` abre direto na aba de estrelas.

## Tecnologias

- **HTML5** com marcação semântica (`header`, `main`, `section`, `article`, `figure`).
- **CSS3** com variáveis (`:root`), Grid, Flexbox e animações. As ilustrações são feitas com CSS e SVG, sem imagens externas.
- **JavaScript puro** (sem bibliotecas) para três coisas: trocar de aba, guardar a aba no endereço e mostrar a curiosidade do "Você sabia?".

## Como personalizar

**Mudar as cores.** No começo do `style.css`, altere as variáveis em `:root`:

```css
:root {
  --preto: #000;     /* fundo */
  --painel: #0d0e16; /* cartões */
  --texto: #eceefb;  /* texto principal */
  --sol: #f5b82e;    /* destaque amarelo */
  --ion: #4cc9e0;    /* destaque azul */
}
```

**Adicionar uma curiosidade.** No final do `index.html`, acrescente um texto à lista `fatos` dentro da tag `<script>`.

**Criar uma nova aba.** São três passos:

1. Adicione um botão na barra de abas, com um nome novo em `data-tab`:
   ```html
   <button role="tab" data-tab="galaxias" aria-selected="false">Galáxias</button>
   ```
2. Crie a seção com o mesmo nome no `id`:
   ```html
   <section id="galaxias" class="panel" role="tabpanel" hidden>
     <div class="wrap block">
       <h1>Galáxias</h1>
       <p class="lede">Texto de introdução.</p>
     </div>
   </section>
   ```
3. Pronto. O JavaScript já reconhece a nova aba automaticamente.

**Mudar o tamanho dos planetas.** Na aba Planetas, cada planeta tem um valor `--s` no atributo `style`. Altere esse número para ajustar o tamanho.

## Acessibilidade

- Os textos têm bom contraste sobre o fundo preto.
- O foco do teclado fica visível, e as abas podem ser usadas com a tecla Tab.
- As ilustrações importantes têm descrição (`aria-label`) para leitores de tela.
- Quem ativou "reduzir movimento" no sistema não vê os planetas girando.
- O layout se adapta a celulares e tablets.

## Pendências e ideias para as próximas versões

- Os links de "Ler matéria completa" da primeira versão foram removidos. Para ter matérias completas, crie uma página por matéria (por exemplo, `materia-webb.html`).
- O formulário de newsletter da primeira versão também foi removido. Para recebê-lo de volta, é preciso um serviço de e-mail ou um back-end.
- Incluir fotos reais, sempre com crédito e licença (NASA, ESA e INPE publicam muitas imagens livres).
- Criar abas para galáxias, exploração espacial e tecnologia.
- Publicar o site de graça no GitHub Pages ou na Netlify.

## Sobre o conteúdo

Os textos são de divulgação, escritos de forma simples. Antes de publicar, confira os números e as datas em fontes oficiais e cite-as no site (por exemplo, NASA, ESA e INPE).
