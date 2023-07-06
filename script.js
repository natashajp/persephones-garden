// const gameBoard = document.getElementById('gameBoard');
// const gBoardCntxt = gameBoard.getContext('2d');

// let garden = {
//     cols: 7,
//     rows: 7,
//     tsize: 64,
//     tiles: [
//         4,4,4,4,4,4,4,
//         4,1,1,1,1,1,4,
//         4,1,1,1,1,1,4,
//         4,1,1,1,1,1,4,
//         4,1,1,1,1,1,4,
//         4,1,1,1,1,1,4,
//         4,4,4,4,4,4,4
//     ],
//      getTile: function (col, row) {
//          return this.tiles[row * garden.cols + col];
//      }
// };

const tile0 = document.getElementsByClassName('zero');

for (let i = 0; i < tile0.length; i++) {
    const grass0 = document.createElement('img');
    grass0.src = 'assets/grass0.png';
    grass0.setAttribute('width', '160');
    grass0.setAttribute('height', '160');
    tile0[i].appendChild(grass0);
}

const tile1 = document.getElementsByClassName('one');

for (let i = 0; i < tile1.length; i++) {
    const grass1 = document.createElement('img');
    grass1.src = 'assets/grass1.png';
    grass1.setAttribute('width', '160');
    grass1.setAttribute('height', '160');
    tile1[i].appendChild(grass1);
}

const tile2 = document.getElementsByClassName('two');

for (let i = 0; i < tile2.length; i++) {
    const grass2 = document.createElement('img');
    grass2.src = 'assets/grass2.png';
    grass2.setAttribute('width', '160');
    grass2.setAttribute('height', '160');
    
    tile2[i].appendChild(grass2);
}

const tile3 = document.getElementsByClassName('three');

for (let i = 0; i < tile3.length; i++) {
    const grass3 = document.createElement('img');
    grass3.src = 'assets/grass3.png';
    grass3.setAttribute('width', '160');
    grass3.setAttribute('height', '160');
    tile3[i].appendChild(grass3);
}

const tempInventory = document.getElementsByClassName('temp');

for (let i = 0; i < tempInventory.length; i++) {
    const tempInv = document.createElement('img');
    tempInv.src = 'assets/flower.png';
    tempInv.setAttribute('width', '160');
    tempInv.setAttribute('height', '160');
    tempInventory[i].appendChild(tempInv);
}