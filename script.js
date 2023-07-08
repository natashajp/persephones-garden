//Create garden

const tile0 = document.getElementsByClassName('zero');

for (let i = 0; i < tile0.length; i++) {
    const grass0 = document.createElement('img');
    grass0.src = 'assets/grass0.png';
    grass0.setAttribute('width', '64');
    grass0.setAttribute('height', '64');
    tile0[i].appendChild(grass0);
}

const tile1 = document.getElementsByClassName('one');

for (let i = 0; i < tile1.length; i++) {
    const grass1 = document.createElement('img');
    grass1.src = 'assets/grass1.png';
    grass1.setAttribute('width', '64');
    grass1.setAttribute('height', '64');
    tile1[i].appendChild(grass1);
}

const tile2 = document.getElementsByClassName('two');

for (let i = 0; i < tile2.length; i++) {
    const grass2 = document.createElement('img');
    grass2.src = 'assets/grass2.png';
    grass2.setAttribute('width', '64');
    grass2.setAttribute('height', '64');
    
    tile2[i].appendChild(grass2);
}

const tile3 = document.getElementsByClassName('three');

for (let i = 0; i < tile3.length; i++) {
    const grass3 = document.createElement('img');
    grass3.src = 'assets/grass3.png';
    grass3.setAttribute('width', '64');
    grass3.setAttribute('height', '64');
    tile3[i].appendChild(grass3);
}

//Create inventory

const hoe = document.querySelector('.hoe')

const hoeIcon = document.createElement('img');
hoeIcon.src = 'assets/hoe.png';
hoeIcon.setAttribute('width', '48');
hoeIcon.setAttribute('height', '48');
hoe.appendChild(hoeIcon);

const can = document.querySelector('.can')

const canIcon = document.createElement('img');
canIcon.src = 'assets/watering_can.png';
canIcon.setAttribute('width', '48');
canIcon.setAttribute('height', '48');
can.appendChild(canIcon);

const seeds = document.querySelector('.seeds')

const seedsIcon = document.createElement('img');
seedsIcon.src = 'assets/seeds.png';
seedsIcon.setAttribute('width', '48');
seedsIcon.setAttribute('height', '48');
seeds.appendChild(seedsIcon);

const pesticide = document.querySelector('.pesticide')

const pesticideIcon = document.createElement('img');
pesticideIcon.src = 'assets/pesticide.png';
pesticideIcon.setAttribute('width', '48');
pesticideIcon.setAttribute('height', '48');
pesticide.appendChild(pesticideIcon);

const sickle = document.querySelector('.sickle')

const sickleIcon = document.createElement('img');
sickleIcon.src = 'assets/sickle.png';
sickleIcon.setAttribute('width', '48');
sickleIcon.setAttribute('height', '48');
sickle.appendChild(sickleIcon);

//Create intermediary soil tiles

const soilIcon = document.createElement('img');
soilIcon.src = 'assets/soil.png';
soilIcon.setAttribute('width', '64');
soilIcon.setAttribute('height', '64');

const sownSeeds = document.createElement('img');
sownSeeds.src = 'assets/soil.png';
sownSeeds.setAttribute('width', '64');
sownSeeds.setAttribute('height', '64');

const wetSoilIcon = document.createElement('img');
wetSoilIcon.src = 'assets/soil.png';
wetSoilIcon.setAttribute('width', '64');
wetSoilIcon.setAttribute('height', '64');

//Create flower tiles

const blueFlower = document.createElement('img');
blueFlower.src = 'assets/blue_flower.png';
blueFlower.setAttribute('width', '64');
blueFlower.setAttribute('height', '64');
blueFlower.className = "zero";

const pinkFlower = document.createElement('img');
pinkFlower.src = 'assets/pink_flower.png';
pinkFlower.setAttribute('width', '64');
pinkFlower.setAttribute('height', '64');
pinkFlower.className = "one";

const purpleFlower = document.createElement('img');
purpleFlower.src = 'assets/purple_flower.png';
purpleFlower.setAttribute('width', '64');
purpleFlower.setAttribute('height', '64');
purpleFlower.className = "two";

const yellowFlower = document.createElement('img');
yellowFlower.src = 'assets/yellow_flower.png';
yellowFlower.setAttribute('width', '64');
yellowFlower.setAttribute('height', '64');
yellowFlower.className = "three";

//Create farming actions

//Create universal grass DOM element

const grassTile = document.querySelectorAll(".grass");

//Hoeing the land

// hoe.addEventListener('click' , function() {
//     hoe.replaceChild(yellowFlower, hoe.childNodes[0])
// });

