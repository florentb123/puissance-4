//début partie pions désirée

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

  //fin partie pions désirée