// partie cheh


// // Fonction de création du board
// function createBoard(ligne,colonne){
//     // On vide l'affichage
//     contenuElt.innerHTML="";
//     // On crée l'élément table du DOM
//     let tableElt=document.createElement('table');
//     // Chaque case est un élément du tableau à deux dimensions
//     // On parcours les lignes
//     for (let i=0; i<ligne;i++){
//         // Deuxième dimension du tableau
//         board[i]=new Array();
//         // Element tr du DOM
//         let ligneElt=document.createElement('tr');
//         ligneElt.id="L"+i;
//         // On parcours les colonnes de la ligne
//         for (let j=0; j<colonne; j++){
//             // Chaque case est initialisée à 0
//             board[i][j]=0;
//             // Element td du DOM
//             let colonneElt=document.createElement('td');
//             colonneElt.id="L"+i+"C"+j;
//             // Ajout des colonnes à la ligne
//             ligneElt.appendChild(colonneElt);
//         };
//         // Ajout des lignes au tableau
//         tableElt.appendChild(ligneElt);
//     };
//     // ajout du tableau au contenu
//     contenuElt.appendChild(tableElt);
// }

// // Fonction d'initialisation d'une nouvelle partie
// function newGame(){
//     createBoard(ligne,colonne);
//     createEvent(ligne,colonne);
// }


// // Fonction d'ajout des évènement click sur le tableau

// function verifVictoire(i,j){
//     // Vérification horizontale
//     let countLigne=0;
//     let h=0;
//     while (h<colonne){
//         if (board[i][h]==player){
//             countLigne++;
//             h++;
//         }
//         else if (board[i][h]!==player&&countLigne==4){
//             h++;
//         }
//         else {
//             countLigne=0;
//             h++;
//         };
//     }; 
//     // Vérification anti-diagonale
//     let countAntiDiag=0;
//     let a=-Math.min(i,colonne-1-j);
//     while(i+a<ligne&&j-a<colonne&&i+a>=0&&j-a>=0){
//         if (board[i+a][j-a]==player){
//             countAntiDiag++;
//             a++;
//         }
//         else if (board[i+a][j-a]!==player&&countAntiDiag==4){
//             a++;
//         }
//         else {
//             countAntiDiag=0;
//             a++;
//         };
//     } ;
    
//     // Affichage Résultat
//     if (countLigne>=4||countColonne>=4||countDiag>=4||countAntiDiag>=4){
        
//         // On supprime les évènements clics
//         for (let i=0; i<ligne;i++){
//         };
       
//     }
//     else {
//         console.log("tour suivant");
//         // Affichage Tour suivant 
//     };
// }

// // Initialisation
// let colonne=5;
// let ligne=5;
// let board=new Array();
// let contenuElt=document.getElementById('contenu');

// let player=1;

// let boutonElt = document.getElementById('newGame');
// // Ajout d'un gestionnaire pour l'événement click
// boutonElt.addEventListener("click", function(){
//     // Joueur 1 est le joueur rouge
//     player=1;
//     newGame();
// });






// début partie florent

class Puissance4 {
    /*
      Intialise un plateau de jeu de dimensions `rows` × `cols` (par défaut 6×7),
      et fait l'affichage dans l'élément `element_id` du DOM.
     */
    constructor(element_id, rows=6, cols=7) {
      // Nombre de lignes et de colonnes
      this.rows = rows;
      this.cols = cols;
        // cet tableau à deux dimensions contient l'état du jeu:
      //   0: case vide
      //   1: pion du joueur 1
      //   2: pion du joueur 2
      this.board = Array(this.rows);
      for (let i = 0; i < this.rows; i++) {
        this.board[i] = Array(this.cols).fill(0);
      }
      // un entier: 1 ou 2 (le numéro du prochain joueur)
      this.turn = 1;
      // Nombre de coups joués
      this.moves = 0;
      /* un entier indiquant le gagnant:
          null: la partie continue
             0: la partie est nulle
             1: joueur 1 a gagné
             2: joueur 2 a gagné
      */
      this.winner = null;
  
      // L'élément du DOM où se fait l'affichage
      this.element = document.querySelector(element_id);
      // On ajoute le gestionnaire d'événements pour gérer le click
      //
      // Pour des raisons techniques, il est nécessaire de passer comme gestionnaire
      // une fonction anonyme faisant appel à `this.handle_click`. Passer directement
      // `this.handle_click` comme gestionnaire, sans wrapping, rendrait le mot clef
      // `this` inutilisable dans le gestionnaire. Voir le "binding de this".
      this.element.addEventListener('click', (event) => this.handle_click(event));
      // On fait l'affichage
      this.render();
    }
    
    /* Affiche le plateau de jeu dans le DOM */
    render() {
      let table = document.createElement('table');
      //ATTENTION, la page html est écrite de haut en bas. Les indices 
      //pour le jeu vont de bas en haut (compteur i de la boucle)
      for (let i = this.rows - 1; i >= 0; i--) {
        let tr = table.appendChild(document.createElement('tr'));
        for (let j = 0; j < this.cols; j++) {
          let td = tr.appendChild(document.createElement('td'));
          let colour = this.board[i][j];
          if (colour)
            td.className = 'player' + colour;
          td.dataset.column = j;
        }
      }
      this.element.innerHTML = '';
      this.element.appendChild(table);
    }
    
      set(row, column, player) {
      // On colore la case
        this.board[row][column] = player;
      // On compte le coup
      this.moves++;
      }
  
// fin partie florent




//début partie désirée
// ajouter un pion dans une colonne

      play(column) {
      // Trouver la première case libre dans la colonne
      let row;
    // information sur le numero de colonne
    //regarde depuis le bas si les row sont libres
      for (let i = 0; i < this.rows; i++) {
        if (this.board[i][column] == 0) {
          row = i;
          break;
        }
      }

    //   si pas de row libres faux
      if (row === undefined) {
        return null;
      } 

    // sinon retourner le nombre de la row
      else {
        this.set(row, column, this.turn);
        return row;
      }
      }
    
    handle_click(event) {
      // Vérifier si il n'y a pas encore de gagnant
    
      if (this.winner !== null) {
            if (window.confirm("Perdu! Souhaitez-vous rejouer?")) {
                this.reset();
          this.render();
              }
              return;
      }
  
let column = event.target.dataset.column;
if (column !== undefined) {
//attention, les variables dans les datasets sont TOUJOURS 
//des chaînes de caractères. Si on veut être sûr de ne pas faire de bêtise,
//il vaut mieux la convertir en entier avec parseInt
column = parseInt(column);
    let row = this.play(parseInt(column));
        
if (row === null) {
    window.alert("la colonne est pleine!");
} else {
    // Vérifier s'il y a un gagnant, ou si la partie est finie
    if (this.win(row, column, this.turn)) {
    this.winner = this.turn;
    } else if (this.moves >= this.rows * this.columns) {
    this.winner = 0;
    }
    // Passer le tour : 3 - 2 = 1, 3 - 1 = 2
    this.turn = 3 - this.turn;
  
    // Mettre à jour l'affichage
    this.render()
          
    //Au cours de l'affichage, pensez eventuellement, à afficher un 
    //message si la partie est finie...
    switch (this.winner) {
    case 0: 
        window.alert("Match null!!"); 
        break;
    case 1:
        window.alert("Le joueur 1 a gagné  ");
        break;
    case 2:
        window.alert("Le joueur deux à gagné"); 
        break;
    }
}
}
}

    /* 
     Cette fonction vérifie si le coup dans la case `row`, `column` par
     le joueur `player` est un coup gagnant.
     
     Renvoie :
       true  : si la partie est gagnée par le joueur `player`
       false : si la partie continue
   */
      win(row, column, player) {
          // Horizontal
      let count = 0;
      for (let j = 0; j < this.cols; j++) {
        count = (this.board[row][j] == player) ? count+1 : 0;
        if (count >= 4) return true;
      }
          // Vertical
      count = 0;
      for (let i = 0; i < this.rows; i++) {
        count = (this.board[i][column] == player) ? count+1 : 0;
          if (count >= 4) return true;
      }
          // Diagonal
      count = 0;
      let shift = row - column;
      for (let i = Math.max(shift, 0); i < Math.min(this.rows, this.cols + shift); i++) {
        count = (this.board[i][i - shift] == player) ? count+1 : 0;
          if (count >= 4) return true;
      }
          // Anti-diagonal
      count = 0;
      shift = row + column;
      for (let i = Math.max(shift - this.cols + 1, 0); i < Math.min(this.rows, shift + 1); i++) {
        console.log(i,shift-i,shift)
        count = (this.board[i][shift - i] == player) ? count+1 : 0;
        if (count >= 4) return true;
      }
      
      return false;
      }
  
    // Cette fonction vide le plateau et remet à zéro l'état
    reset() {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.board[i][j] = 0;
        }
      }
          this.move = 0;
      this.winner = null;
      }
  }
  
  // On initialise le plateau et on visualise dans le DOM
  // (dans la balise d'identifiant `game`).
  let p4 = new Puissance4('#game');

//   fin partie desiree
