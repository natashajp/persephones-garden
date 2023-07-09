//Declare variables

//Declare toolMode variable (helps assign different actions to inventory tools in conjunction with the event listeners)
let toolMode;

//Declare flowerFreq variable (helps figure out if player has won or lost in conjunction with various functions)
let flowerFreq = 0;

//Declare mushroomFreq variable (helps figure out if player has won or lost in conjunction with various functions)
let mushroomFreq = 0;

//Declare mushroomAggro variable (helps the RNG for the spawn event work)
let mushroomAggro = .7;


//Cache individual garden tiles (Lord help me) [allows individual tiles to be acted upon in conjunction with the event listeners]

const indvTile0 = document.getElementById('zero0')
const indvTile1 = document.getElementById('zero1')
const indvTile2 = document.getElementById('zero2')
const indvTile3 = document.getElementById('zero3')
const indvTile4 = document.getElementById('zero4')
const indvTile5 = document.getElementById('zero5')

const indvTile6 = document.getElementById('zero6')
const indvTile7 = document.getElementById('zero7')
const indvTile8 = document.getElementById('zero8')
const indvTile9 = document.getElementById('zero9')
const indvTile10 = document.getElementById('zeroA')
const indvTile11 = document.getElementById('zeroB')

const indvTile12 = document.getElementById('zeroD')
const indvTile13 = document.getElementById('zeroE')
const indvTile14 = document.getElementById('zeroF')
const indvTile15 = document.getElementById('oneZero')
const indvTile16 = document.getElementById('oneOne')
const indvTile17 = document.getElementById('oneTwo')

const indvTile18 = document.getElementById('oneThree')
const indvTile19 = document.getElementById('oneFour')
const indvTile20 = document.getElementById('oneFive')
const indvTile21 = document.getElementById('oneSix')
const indvTile22 = document.getElementById('oneSeven')
const indvTile23 = document.getElementById('oneEight')

const indvTile24 = document.getElementById('oneNine')
const indvTile25 = document.getElementById('oneA')
const indvTile26 = document.getElementById('oneB')
const indvTile27 = document.getElementById('oneC')
const indvTile28 = document.getElementById('oneD')
const indvTile29 = document.getElementById('oneE')

const indvTile30 = document.getElementById('oneF')
const indvTile31 = document.getElementById('twoZero')
const indvTile32 = document.getElementById('twoOne')
const indvTile33 = document.getElementById('twoTwo')
const indvTile34 = document.getElementById('twoThree')
const indvTile35 = document.getElementById('twoFour')


//Create gameBoard array (allows mushrooms to spawn on individual tiles, in conjunction with mushroomOpportunity function)

gameBoard = [indvTile0, indvTile1, indvTile2, indvTile3, indvTile4, indvTile5,
    indvTile6, indvTile7, indvTile8, indvTile9, indvTile10, indvTile11,
    indvTile12, indvTile13, indvTile14, indvTile15, indvTile16, indvTile17,
    indvTile18, indvTile19, indvTile20, indvTile21, indvTile22, indvTile23,
    indvTile24, indvTile25, indvTile26, indvTile27, indvTile28, indvTile29,
    indvTile30, indvTile31, indvTile32, indvTile33, indvTile34, indvTile35]


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


//Create farming actions

//Apply toolMode variable to inventory

hoe.addEventListener('click' , function() {
    toolMode = 0;
    console.log("Tool selected: gardening hoe");
    console.log(toolMode);
});

seeds.addEventListener('click' , function() {
    toolMode = 1;
    console.log("Tool selected: flower seeds");
    console.log(toolMode);
});

can.addEventListener('click' , function() {
    toolMode = 2;
    console.log("Tool selected: watering can");
    console.log(toolMode);
});

pesticide.addEventListener('click' , function() {
    toolMode = 3;
    console.log("Tool selected: pesticide");
    console.log(toolMode);
});

sickle.addEventListener('click' , function() {
    toolMode = 4;
    console.log("Tool selected: sickle");
    console.log(toolMode);
});


//Add event listeners to grass tiles (Lord help me, again)

indvTile0.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile0.src = 'assets/soil.png';
            break;
        case 1:
            indvTile0.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile0.src = 'assets/pink_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile0.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile0.src = 'assets/soil.png';
    }
})

indvTile1.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile1.src = 'assets/soil.png';
            break;
        case 1:
            indvTile1.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile1.src = 'assets/yellow_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile1.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile1.src = 'assets/soil.png'; 
    }
})

indvTile2.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile2.src = 'assets/soil.png';
            break;
        case 1:
            indvTile2.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile2.src = 'assets/blue_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile2.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile2.src = 'assets/soil.png';
    }
})

indvTile3.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile3.src = 'assets/soil.png';
            break;
        case 1:
            indvTile3.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile3.src = 'assets/pink_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile3.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile3.src = 'assets/soil.png';
    }
})

indvTile4.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile4.src = 'assets/soil.png';
            break;
        case 1:
            indvTile4.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile4.src = 'assets/purple_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile4.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile4.src = 'assets/soil.png';
    }
})

indvTile5.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile5.src = 'assets/soil.png';
            break;
        case 1:
            indvTile5.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile5.src = 'assets/pink_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile5.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile5.src = 'assets/soil.png';
    }
})

indvTile6.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile6.src = 'assets/soil.png';
            break;
        case 1:
            indvTile6.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile6.src = 'assets/purple_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile6.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile6.src = 'assets/soil.png';
    }
})

indvTile7.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile7.src = 'assets/soil.png';
            break;
        case 1:
            indvTile7.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile7.src = 'assets/yellow_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile7.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile7.src = 'assets/soil.png';
    }
})

indvTile8.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile8.src = 'assets/soil.png';
            break;
        case 1:
            indvTile8.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile8.src = 'assets/yellow_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile8.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile8.src = 'assets/soil.png';
    }
})

indvTile9.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile9.src = 'assets/soil.png';
            break;
        case 1:
            indvTile9.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile9.src = 'assets/purple_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile9.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile9.src = 'assets/soil.png';
    }
})

indvTile10.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile10.src = 'assets/soil.png';
            break;
        case 1:
            indvTile10.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile10.src = 'assets/purple_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile10.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile10.src = 'assets/soil.png';
    }
})

indvTile11.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile11.src = 'assets/soil.png';
            break;
        case 1:
            indvTile11.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile11.src = 'assets/blue_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile11.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile11.src = 'assets/soil.png';
    }
})

indvTile12.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile12.src = 'assets/soil.png';
            break;
        case 1:
            indvTile12.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile12.src = 'assets/blue_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile12.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile12.src = 'assets/soil.png';
    }
})

indvTile13.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile13.src = 'assets/soil.png';
            break;
        case 1:
            indvTile13.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile13.src = 'assets/blue_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile13.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile13.src = 'assets/soil.png';
    }
})

indvTile14.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile14.src = 'assets/soil.png';
            break;
        case 1:
            indvTile14.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile14.src = 'assets/blue_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile14.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile14.src = 'assets/soil.png';
    }
})

indvTile15.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile15.src = 'assets/soil.png';
            break;
        case 1:
            indvTile15.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile15.src = 'assets/pink_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile15.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile15.src = 'assets/soil.png';
    }
})

indvTile16.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile16.src = 'assets/soil.png';
            break;
        case 1:
            indvTile16.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile16.src = 'assets/yellow_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile16.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile16.src = 'assets/soil.png';
    }
})

indvTile17.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile17.src = 'assets/soil.png';
            break;
        case 1:
            indvTile17.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile17.src = 'assets/pink_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile17.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile17.src = 'assets/soil.png';
    }
})

indvTile18.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile18.src = 'assets/soil.png';
            break;
        case 1:
            indvTile18.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile18.src = 'assets/pink_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile18.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile18.src = 'assets/soil.png';
    }
})

indvTile19.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile19.src = 'assets/soil.png';
            break;
        case 1:
            indvTile19.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile19.src = 'assets/pink_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile19.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile19.src = 'assets/soil.png';
    }
})

indvTile20.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile20.src = 'assets/soil.png';
            break;
        case 1:
            indvTile20.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile20.src = 'assets/blue_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile20.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile20.src = 'assets/soil.png';
    }
})

indvTile21.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile21.src = 'assets/soil.png';
            break;
        case 1:
            indvTile21.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile21.src = 'assets/blue_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile21.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile21.src = 'assets/soil.png';
    }
})

indvTile22.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile22.src = 'assets/soil.png';
            break;
        case 1:
            indvTile22.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile22.src = 'assets/purple_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile22.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile22.src = 'assets/soil.png';
    }
})

indvTile23.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile23.src = 'assets/soil.png';
            break;
        case 1:
            indvTile23.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile23.src = 'assets/blue_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile23.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile23.src = 'assets/soil.png';
    }
})

indvTile24.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile24.src = 'assets/soil.png';
            break;
        case 1:
            indvTile24.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile24.src = 'assets/purple_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile24.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile24.src = 'assets/soil.png';
    }
})

indvTile25.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile25.src = 'assets/soil.png';
            break;
        case 1:
            indvTile25.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile25.src = 'assets/pink_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile25.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile25.src = 'assets/soil.png';
    }
})

indvTile26.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile26.src = 'assets/soil.png';
            break;
        case 1:
            indvTile26.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile26.src = 'assets/yellow_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile26.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile26.src = 'assets/soil.png';
    }
})

indvTile27.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile27.src = 'assets/soil.png';
            break;
        case 1:
            indvTile27.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile27.src = 'assets/blue_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile27.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile27.src = 'assets/soil.png';
    }
})

indvTile28.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile28.src = 'assets/soil.png';
            break;
        case 1:
            indvTile28.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile28.src = 'assets/yellow_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile28.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile28.src = 'assets/soil.png';
    }
})

indvTile29.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile29.src = 'assets/soil.png';
            break;
        case 1:
            indvTile29.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile29.src = 'assets/blue_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile29.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile29.src = 'assets/soil.png';
    }
})

indvTile30.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile30.src = 'assets/soil.png';
            break;
        case 1:
            indvTile30.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile30.src = 'assets/blue_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile30.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile30.src = 'assets/soil.png';
    }
})

indvTile31.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile31.src = 'assets/soil.png';
            break;
        case 1:
            indvTile31.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile31.src = 'assets/purple_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile31.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile31.src = 'assets/soil.png';
    }
})

indvTile32.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile32.src = 'assets/soil.png';
            break;
        case 1:
            indvTile32.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile32.src = 'assets/yellow_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile32.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile32.src = 'assets/soil.png';
    }
})

indvTile33.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile33.src = 'assets/soil.png';
            break;
        case 1:
            indvTile33.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile33.src = 'assets/pink_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile33.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile33.src = 'assets/soil.png';
    }
})

indvTile34.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile34.src = 'assets/soil.png';
            break;
        case 1:
            indvTile34.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile34.src = 'assets/yellow_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile34.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile34.src = 'assets/soil.png';
    }
})

indvTile35.addEventListener('click', function() {
    switch (toolMode) {
        case 0:
            indvTile35.src = 'assets/soil.png';
            break;
        case 1:
            indvTile35.src = 'assets/sown_seeds.png';
            break;
        case 2:
            indvTile35.src = 'assets/pink_flower.png';
            flowerFreq++;
            mushroomFreq--;
            break;
        case 3: 
            indvTile35.src = 'assets/dead_mushroom.png';
            mushroomFreq--;
            break;
        case 4:
            indvTile35.src = 'assets/soil.png';
    }
})


//Create mushroom spawn opportunity

const mushroomOpportunity = function() {
    if (Math.random() < mushroomAggro) {
        gameBoard[(Math.floor(Math.random() * gameBoard.length))].src = 'assets/mushroom.png';
        mushroomFreq++;
        flowerFreq--;
    } else {
        console.log("Spawn opportunity missed.")
    }
}


//Create decreaseMushroomAggro (in lieu of the mushrooms being unable to spawn on flower tiles, the mushroomAggro stat decreases as the player earns points)

const decreaseMushroomAggro =  function() {
    if (flowerFreq % 3 === 0) {
        mushroomAggro -= 0.001;
    }
}


//Create win-lose conditions

//Create lose condition

const loseCondition =  function() {
    if (mushroomFreq >= 21.6) {
        clearInterval(decrMushAggrInvl);
        clearInterval(winCndtnInvl);
        mushroomAggro = 1;
        mushOppInvl = setInterval(mushroomOpportunity, 200);
        window.alert("Sorry, you lose.");
        clearInterval(loseCndtnInvl);
    }
}


//Create win condition

const winCondition = function() {
    if (flowerFreq >= 21.6) {
        clearInterval(mushOppInvl);
        clearInterval(decrMushAggrInvl);
        clearInterval(loseCndtnInvl);
        window.alert("Yay, you win!");
        clearInterval(winCndtnInvl);
    }
}


//Create intervals for mushroomOpportunity, decreaseMushroomAggro, loseCondition, and winCondition

let mushOppInvl = setInterval(mushroomOpportunity, 4000);

const decrMushAggrInvl = setInterval(decreaseMushroomAggro, 500)

const loseCndtnInvl = setInterval(loseCondition, 500);

const winCndtnInvl = setInterval(winCondition, 500);



//Validation checkers I couldn't get working just yet

// indvTile0.addEventListener('click' , function() {
//     if (tileMode0 !== toolMode) {
//         window.alert("Can't do that. Try again.")
//     } else {
//         switch (toolMode) {
//             case 0:
//                 indvTile0.src = 'assets/soil.png';
//                 tileMode0 = 1;
//                 break;
//             case 1:
//                 indvTile0.src = 'assets/sown_seeds.png';
//                 tileMode0 = 2;
//                 break;
//             case 2:
//                 indvTile0.src = 'assets/pink_flower.png';
//                 tileMode0 = 'flower';
//                 console.log(tileMode0)
//         }
//     } 
// })

// indvTile0.addEventListener('click', function() {
//     if (tileMode0 == '' & toolMode == 3) {
//         indvTile0.src = 'assets/dead_mushroom.png';
//         tileMode0 = 5;
//     } else if (tileMode0 == 5 && toolMode == 4) {
//         indvTile0.src = 'assets/soil.png';
//         toolMode = 1;
//     }
// })
