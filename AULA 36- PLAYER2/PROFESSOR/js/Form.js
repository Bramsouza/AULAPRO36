class Form {
  //contrutor da classe forms
  constructor() {
    //criando objetos
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  //atualizando as posições
  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  //usa estilos definidos do css
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //oculta e remove elementos
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //função de clique do botão
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Olá, ${this.input.value()}
      </br>espere o outro jogador entrar...`;
      this.greeting.html(message);
    });
  }

  //exibe as funções
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}