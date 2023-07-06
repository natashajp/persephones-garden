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