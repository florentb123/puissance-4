//Variables
const colonne = document.querySelectorAll('.col-puissance4');
const nouvellePartie = document.querySelector('.btn-NouvellePartie');
const colonnePlayer1 = document.querySelector('.col-player-1');
const colonnePlayer2 = document.querySelector('.col-player-2');
const nombreJetons = document.querySelector(".bouton-text");
let color;
let colorActive;
let compteur;
let playerActive;
let x;
let y;
let i = 0;

//Initialisation au chargement de la page
window.addEventListener('DOMContentLoaded', function init() {
    playerActive = 1;
    compteur = 42;
    tourJoueur();

    //Ecoute du clic sur les colonnes
    const colonne1 = document.querySelector(".colonne1");
    const colonne2 = document.querySelector(".colonne2");
    const colonne3 = document.querySelector(".colonne3");
    const colonne4 = document.querySelector(".colonne4");
    const colonne5 = document.querySelector(".colonne5");
    const colonne6 = document.querySelector(".colonne6");
    const colonne7 = document.querySelector(".colonne7");

    colonne1.addEventListener("click", function () {
        if (colonne1 === colonne1) {
            x = 0;
            place_jeton();
        }
    });

    colonne2.addEventListener("click", function () {
        if (colonne2 === colonne2) {
            x = 1;
            place_jeton();
        }
    });

    colonne3.addEventListener("click", function () {
        if (colonne3 === colonne3) {
            x = 2;
            place_jeton();
        }
    });

    colonne4.addEventListener("click", function () {
        if (colonne4 === colonne4) {
            x = 3;
            place_jeton();
        }
    });

    colonne5.addEventListener("click", function () {
        if (colonne5 === colonne5) {
            x = 4;
            place_jeton();
        }
    });

    colonne6.addEventListener("click", function () {
        if (colonne6 === colonne6) {
            x = 5;
            place_jeton();
        }
    });

    colonne7.addEventListener("click", function () {
        if (colonne7 === colonne7) {
            x = 6;
            place_jeton();
        }
    })
 });

//Fonction de changement de joueurs
function tourJoueur() {
    //Passage de joueur 1 à 2
    if (playerActive === 1) {
        console.log('joueur 1');
        console.log('tour :', 42-compteur);
        colonnePlayer1.style.opacity = "1";
        colonnePlayer2.style.opacity = "0.5";
        color = 'j';
        colorActive = '#a13d3d';

    //Passage de joueur 2 à 1
    } else if (playerActive === 2) {
        console.log('joueur 2');
        console.log('tour :', 42-compteur);
        colonnePlayer2.style.opacity = "1";
        colonnePlayer1.style.opacity = "0.5";
        color = 'r';
        colorActive = '#241f1f';
    }
    nombreJetons.innerHTML = ("Il reste " + compteur + " jetons");
};



//début fonction jeu intelligence artificielle

//fin fonction jeu intelligence artificielle

 //Fonction de positionnement du jeton dans sa colonne
function place_jeton() {

  if (document.querySelector(`#x${x}y${i}`).color == null) {
      document.querySelector(`#x${x}y${i}`).color = color;
      document.querySelector(`#x${x}y${i}`).style.backgroundColor = colorActive;
      y = i;
      compteur--;
      verifGg();
  } else {
      i++;
      iteration2();
  }

};

//Iteration 2
function iteration2() {
  if (document.querySelector(`#x${x}y${i}`).color == null) {
      document.querySelector(`#x${x}y${i}`).color = color;
      document.querySelector(`#x${x}y${i}`).style.backgroundColor = colorActive;
      y = i;
      compteur--;
      verifGg();
  } else {
      i++;
      iteration3();
  }

};

//Iteration 3
function iteration3() {
  if (document.querySelector(`#x${x}y${i}`).color == null) {
      document.querySelector(`#x${x}y${i}`).color = color;
      document.querySelector(`#x${x}y${i}`).style.backgroundColor = colorActive;
      y = i;
      compteur--;
      verifGg();

  } else {
      i++;
      iteration4();
  }

};

//Iteration 4
function iteration4() {
  if (document.querySelector(`#x${x}y${i}`).color == null) {
      document.querySelector(`#x${x}y${i}`).color = color;
      document.querySelector(`#x${x}y${i}`).style.backgroundColor = colorActive;
      y = i;
      compteur--;
      verifGg();
  } else {
      i++;
      iteration5();
  }
};

//Iteration 5
function iteration5() {
  if (document.querySelector(`#x${x}y${i}`).color == null) {
      document.querySelector(`#x${x}y${i}`).color = color;
      document.querySelector(`#x${x}y${i}`).style.backgroundColor = colorActive;
      y = i;
      compteur--;
      verifGg();
  } else {
      i++;
      iteration6();
  }
};

//Iteration 6
function iteration6() {
  if (document.querySelector(`#x${x}y${i}`).color == null) {
      document.querySelector(`#x${x}y${i}`).color = color;
      document.querySelector(`#x${x}y${i}`).style.backgroundColor = colorActive;
      y = i;
      i = 0;
      compteur--;
      verifGg();
  } else if (i = 6) {
      window.alert("Colonne remplie");
      colonneRemplie();
  }
};

//Fonction de verification de victoire
function verifGg() {
  verifColonne();
  verifLigne();
  verifDiagonaleSlach();
  verifDiagonaleBackSlash();
  basculeJoueur();
};

//Verification de victoire en colonne
function verifColonne() {
  let j = 0

  do {
      if (document.querySelector(`#x${x}y${j}`).color == color &&
          document.querySelector(`#x${x}y${j+1}`).color == color &&
          document.querySelector(`#x${x}y${j+2}`).color == color &&
          document.querySelector(`#x${x}y${j+3}`).color == color) {

            if (playerActive == 1) {
                text1 = document.querySelector('.row')
                text1.innerHTML = "victoire".toUpperCase()
                text1.style.color = "yellow"
                text1.style.fontSize = "170"
            } else {
                text2 = document.querySelector('.row')
                text2.innerHTML="défaite".toUpperCase()
                text2.style.color="red"
                text2.style.fontSize="170"
            }

      }
      j++;
  } while (j < 3);
};

//Verification de victoire en ligne
function verifLigne() {
  let k = 0

  do {
      if (document.querySelector(`#x${k}y${y}`).color == color &&
          document.querySelector(`#x${k+1}y${y}`).color == color &&
          document.querySelector(`#x${k+2}y${y}`).color == color &&
          document.querySelector(`#x${k+3}y${y}`).color == color) {

            if (playerActive == 1) {
                text1 = document.querySelector('.row')
                text1.innerHTML = "victoire".toUpperCase()
                text1.style.color = "yellow"
                text1.style.fontSize = "170"
            } else {
                text2 = document.querySelector('.row')
                text2.innerHTML="défaite".toUpperCase()
                text2.style.color="red"
                text2.style.fontSize="170"
            }
      }
      k++;
  } while (k < 4);
};

//Verification de victoire en diagonale dans le sens "slash"
function verifDiagonaleSlach() {

  let j = x;
  let k = y;

  //Initialisation des valeurs x et y pour la verification de la diagonale 
  if (j != 0 && k != 0) {
      while (j != 0 && k != 0) {
          j--;
          k--;
      };
  }

  //Boucle de verification de la diagonale Slash
  if (j < 4 && k < 3) {
      do {
          if (document.querySelector(`#x${j}y${k}`).color == color &&
              document.querySelector(`#x${j+1}y${k+1}`).color == color &&
              document.querySelector(`#x${j+2}y${k+2}`).color == color &&
              document.querySelector(`#x${j+3}y${k+3}`).color == color) {

                if (playerActive == 1) {
                    text1 = document.querySelector('.row')
                    text1.innerHTML = "victoire".toUpperCase()
                    text1.style.color = "yellow"
                    text1.style.fontSize = "170"
                } else {
                    text2 = document.querySelector('.row')
                    text2.innerHTML="défaite".toUpperCase()
                    text2.style.color="red"
                    text2.style.fontSize="170"
                }
          }
          j++;
          k++;
      } while (j < 3 && k < 3);
  }
};

//Verification en diagonale dans le sens "back slash"
function verifDiagonaleBackSlash() {

  let j = x;
  let k = y;

  //Initialisation des valeurs x et y pour la verification de la diagonale 
  if (j != 0 && k != 5) {
      while (j != 0 && k != 5) {
          j--;
          k++;
      };
  }

  //Boucle de verification de la diagonale backSlash
  if (j < 4 && k > 2) {
      do {
          if (document.querySelector(`#x${j}y${k}`).color == color &&
              document.querySelector(`#x${j+1}y${k-1}`).color == color &&
              document.querySelector(`#x${j+2}y${k-2}`).color == color &&
              document.querySelector(`#x${j+3}y${k-3}`).color == color) {

                if (playerActive == 1) {
                    text1 = document.querySelector('.row')
                    text1.innerHTML = "victoire".toUpperCase()
                    text1.style.color = "yellow"
                    text1.style.fontSize = "170"
                } else {
                    text2 = document.querySelector('.row')
                    text2.innerHTML="défaite".toUpperCase()
                    text2.style.color="red"
                    text2.style.fontSize="170"
                }
          }
          j++;
          k--;
      } while (j < 4 && k > 2);
  }
};

//Fonction changement de joueur
function basculeJoueur() {
  //Verifie si il reste des tours
  endgame();
  //Change la valeur du joueur actif
  if (playerActive === 2) {
      playerActive = 1;
  } else if (playerActive === 1) {
      playerActive = 2;
  }
  //Reinitialise le compteur de tours du place jeton
  i = 0;
  //Rappel le tour joueur
  tourJoueur();
}

function colonneRemplie() {
  //Verifie si il reste des tours
  endgame();
  //Ne change pas la valeur du joueur actif
  if (playerActive === 1) {
      playerActive = 1;
  } else if (playerActive === 2) {
      playerActive = 2;
  }
  //Reinitialise le compteur de tours du place jeton
  i = 0;
  //Rappel le tour joueur
  tourJoueur();
}

//Fonction fin de jeu
function endgame() {
  if (compteur == 0) {
      document.location.href = "level3.html"
  }
}

//Fonction reset
nouvellePartie.addEventListener('click', (event) => {
  console.log(nouvellePartie);
  window.location.reload();
})

// début commentaire
// var gameField = new Array();
// var board = document.getElementById("game-table");
// var currentCol;
// var currentRow;
// var currentPlayer;
// var id = 1;

// newgame();

// currentPlayer.style.display = "block";

// function newgame(){
//   prepareField();
//   placeDisc(Math.floor(Math.random()*2)+1);
// }

// function checkForVictory(row,col){
//   if(getAdj(row,col,0,1)+getAdj(row,col,0,-1) > 2){
//     return true;
//   } else {
//     if(getAdj(row,col,1,0) > 2){
//       return true;
//     } else {
//       if(getAdj(row,col,-1,1)+getAdj(row,col,1,-1) > 2){
//         return true;
//       } else {
//         if(getAdj(row,col,1,1)+getAdj(row,col,-1,-1) > 2){
//           return true;
//         } else {
//           return false;
//         }
//       }
//     }
//   }
// }

// function getAdj(row,col,row_inc,col_inc){
//   if(cellVal(row,col) == cellVal(row+row_inc,col+col_inc)){
//     return 1+getAdj(row+row_inc,col+col_inc,row_inc,col_inc);
//   } else {
//     return 0;
//   }
// }

// function cellVal(row,col){
//   if(gameField[row] == undefined || gameField[row][col] == undefined){
//     return -1;
//   } else {
//     return gameField[row][col];
//   }
// }

// function firstFreeRow(col,player){
//   for(var i = 0; i<6; i++){
//     if(gameField[i][col]!=0){
//       break;
//     }
//   }
//   gameField[i-1][col] = player;
//   return i-1;
// }

// function possibleColumns(){
//   var moves_array = new Array();
//   for(var i=0; i<7; i++){
//     if(gameField[0][i] == 0){
//       moves_array.push(i);
//     }
//   }
//   return moves_array;
// }

// function think(){
//   var possibleMoves = possibleColumns();
//   var aiMoves = new Array();
//   var blocked;
//   var bestBlocked = 0;
  
//   for(var i=0; i<possibleMoves.length; i++){
//     for(var j=0; j<6; j++){
//       if(gameField[j][possibleMoves[i]] != 0){
//         break;
//       }
//     }
    
//     gameField[j-1][possibleMoves[i]] = 1;
//     blocked = getAdj(j-1,possibleMoves[i],0,1)+getAdj(j-1,possibleMoves[i],0,-1);
//     blocked = Math.max(blocked,getAdj(j-1,possibleMoves[i],1,0));
//     blocked = Math.max(blocked,getAdj(j-1,possibleMoves[i],-1,1));
//     blocked = Math.max(blocked,getAdj(j-1,possibleMoves[i],1,1)+getAdj(j-1, possibleMoves[i],-1,-1));
    
//     if(blocked >= bestBlocked){
//       if(blocked>bestBlocked){
//         bestBlocked = blocked;
//         aiMoves = new Array();
//       }
//       aiMoves.push(possibleMoves[i]);
//     }
//     gameField[j-1][possibleMoves[i]] = 0;
//   }
  
//   return aiMoves;
// }

// function Disc(player){
//   this.player = player;
//   this.color = player == 1 ? 'red' : 'yellow';
//   this.id = id.toString();
//   id++;
  
//   this.addToScene = function(){
//     board.innerHTML += '<div id="d'+this.id+'" class="disc '+this.color+'"></div>';
//     if(currentPlayer==2){
//       //computer move
//       var possibleMoves = think();
//       var cpuMove = Math.floor( Math.random() * possibleMoves.length);
//       currentCol = possibleMoves[cpuMove];
//       document.getElementById('d'+this.id).style.left = (14+60*currentCol)+"px";
//       dropDisc(this.id,currentPlayer);
//     }
//   }
  
//   var $this = this;
//   document.onmousemove = function(evt){
//     if(currentPlayer == 1){
//     currentCol = Math.floor((evt.clientX - board.offsetLeft)/60);
//     if(currentCol<0){currentCol=0;}
//     if(currentCol>6){currentCol=6;}
//     document.getElementById('d'+$this.id).style.left = (14+60*currentCol)+"px";
//     document.getElementById('d'+$this.id).style.top = "-55px";
//     }
//   }
//   document.onload = function(evt){
//     if(currentPlayer == 1){
//     currentCol = Math.floor((evt.clientX - board.offsetLeft)/60);
//     if(currentCol<0){currentCol=0;}
//     if(currentCol>6){currentCol=6;}
//     document.getElementById('d'+$this.id).style.left = (14+60*currentCol)+"px";
//     document.getElementById('d'+$this.id).style.top = "-55px";
//     }
//   }
  

//   document.onclick = function(evt){
//     if(currentPlayer == 1){
//       if(possibleColumns().indexOf(currentCol) != -1){
//         dropDisc($this.id,$this.player);
//       }
//     }
//   }
// }

// function dropDisc(cid,player){
//   currentRow = firstFreeRow(currentCol,player);
//   moveit(cid,(14+currentRow*60));
//   currentPlayer = player;
//   checkForMoveVictory();
// }

// function checkForMoveVictory(){
//   if(!checkForVictory(currentRow,currentCol)){
//     placeDisc(3-currentPlayer);
//   } else {
//     var ww = currentPlayer == 2 ? 'Computer' : 'Player';
//     placeDisc(3-currentPlayer);
//     alert(ww+" win!");
//     board.innerHTML = "";
//     newgame();
//   }
// }

// function placeDisc(player){
//   currentPlayer = player;
//   var disc = new Disc(player);
//   disc.addToScene();
// }

// function prepareField(){
//   gameField = new Array();
//   for(var i=0; i<6; i++){
//     gameField[i] = new Array();
//     for(var j=0; j<7; j++){
//       gameField[i].push(0);
//     }
//   }
// }

// function moveit(who,where){
//     document.getElementById('d'+who).style.top = where+'px';
// }



// fin commentaire

