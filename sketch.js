//VARIAVEIS DA BOLINHA
let xBola = 300;
let yBola = 200;
let diametro_bola = 20;
let raio = diametro_bola/2;

//VELOCIDADE BOLINHA
let velocidade_xbola = 6;
let velocidade_ybola = 6;

//VARIAVEIS RAQUETE
let xRaquete = 5;
let yRaquete = 150;
let comprimento_raquete = 10;
let altura_raquete = 90;

//VARIAVEIS RAQUETE OPONENTE
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let velocidadeYoponente;

//VARIAVEIS DO PLACAR
let meusPontos = 0;
let pontosOponente = 0;

//VARIAVEIS DE SONS
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  bolinha();
  movimento_bolinha();
  verificacao_borda();
  mostrar_raquete(xRaquete,yRaquete);
  mostrar_raquete(xRaqueteOponente,yRaqueteOponente);
  movimento_raquete();
  //verifica_colisao_raquete();
  colisaoRaquete(xRaquete,yRaquete);
  colisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  incluirPlacar();
  marcaPonto();
}


function bolinha(){
  circle(xBola, yBola, diametro_bola);
}


function movimento_bolinha(){
  xBola += velocidade_xbola;
  yBola += velocidade_ybola;
}


function verificacao_borda(){
  
    if (xBola + raio> width || xBola - raio < 0){
    velocidade_xbola *= -1;
  }
  
  if (yBola + raio> height || yBola - raio < 0){
      velocidade_ybola *= -1;
      }
}

function mostrar_raquete(x,y){
  rect(x,y, comprimento_raquete, altura_raquete);
}

function movimento_raquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function colisaoRaquete(x,y){
   colidiu = collideRectCircle(x,y,comprimento_raquete,altura_raquete,xBola,yBola,raio);
  if(colidiu){
    velocidade_xbola *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  if (keyIsDown("87")){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown("83")){
    yRaqueteOponente += 10;
  }
}

function incluirPlacar(){
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(125, 10, 40, 20);
  fill(255);
  text(meusPontos, 145, 26);
  fill(color(255, 140, 0));
  rect(430, 10, 40, 20);
  fill(255);
  text(pontosOponente, 450, 26);
  
}

function marcaPonto(){
  if (xBola > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBola < 10){
    pontosOponente += 1;
    ponto.play();
  }
}