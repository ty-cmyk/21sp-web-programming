
// Games: Objects in Array
      // Tyler Mann

const games = prompt("I have 4 games in my collection. Pick a number between 1 and 4 and I'll tell you about that game");

      const myGames = [
            { title: 'Five Crowns', type: 'card game', numberOfPlayers: '1-7', shortDescription:'Five Crowns is a five suited rummy style card game.' },
            { title: 'Dixit', type: 'board game', numberOfPlayers: '4-6', shortDescription:'Dixit is the lovingly illustrated game of creative guesswork, where your imagination unlocks the tale. Every picture tells a story – but what story will your picture tell?' },
            { title: 'Pan Am The Game', type: 'board game', numberOfPlayers: '2-4', shortDescription:'Pan American World Airways ruled the skies and made travel more accessible without sacrificing glamour. Players take control of their own fledgling airlines and compete with Pan Am and others to build a business empire.' },
            { title: 'Triominos', type: 'table-top game', numberOfPlayers: '2-4', shortDescription:'Classic domino gameplay with added strategy.' },
      ];

console.log('You selected ' + myGames[games - 1].title + ' ' + 'which is a ' + myGames[games - 1].type + ', it requires ' + myGames[games - 1].numberOfPlayers + ' players, and is described as: ' + myGames[games -1].shortDescription);