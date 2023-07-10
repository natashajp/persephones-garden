# persephones-garden
A simple gardening game built for a mod project at Per Scholas.

Instructions: You are trying to cultivate your little garden while fighting off a nasty mushroom infestation. First, select the hoe and use it on the grass to expose the soil; then, select the seeds and use them on the new soil patch before watering the patch.

If a mushroom spawns, click the pesticide bucket and pour it on the mushroom, then, cut it out with the sickle. After that, you'll have another soil patch to till. Make sure you take care of those mushrooms fast. If the garden has too many of them, you won't be able to fix it.

Link: https://natashajp.github.io/persephones-garden/

Technologies used: JavaScript, HTML, and CSS

Approach taken: 

Game board visuals - Originally, I tried to make it with a matrix in JavaScript but I could only find one guide for that in which the coder didn't use Canvas (which I tried for a second before realising we weren't supposed to). I also tried to use a table.Then, for a while the game board was made of empty divs that had images inserted using DOM elements. Eventually, I settled on putting the images right into the HTML sheet as it's much easier to manipulate the images that way.

Game board functionality - Every tile is cached in a DOM element so that player interaction can be recognized and output. The inventory works similarly, but the images were added straight through the DOM.

Game functionality - The game uses four variables to function:
    - toolMode: allows different tools to have different affects on the land
    - mushroomFreq and flowerFreq: scores for the computer and player, respectively
    - mushroomAggro: allows the mushrooms to spawn based on a random number generator

Each event listener on the inventory tools puts the game into a specific tool mode. Each garden tile event listener has a switch on it that will load a different image depending on which tool mode the game is is. If the player plants a flower, the flowerFreq will increment by 1 and the mushroomFreq will decrement by 1. mushroomFreq will also decrement by 1 when the player kills a mushroom with the pesticide. Finally, the mushroomFreq will increment by 1 when a mushroom spawns.

The garden tiles are also in an array. When the mushroom tile wins a spawn opportunity, a random garden tile is changed to a mushroom using the array. As the player kills mushrooms, the mushroomAggro variable decrements very slightly, increasing the players odds of winning ever so much.

The first "player" to reach 21.6 points wins. The points are kept in the flowerFreq and mushroomFreq variables. The game runs checks for who is winning every half second and runs the decreaseMushroomAggro function at the same frequency.

The game functionality was inspired by our Save the Universe mini project as well as the AI in the first Five Nights at Freddy's game (once I got my wits about me).

Unsolved issues:

There are no working validation checks in the game. I tried implementing them with a tileMode variable but it got out of hand. It think it should work with RegEx, however.

The decreaseMushroomAggro function might be too minimal to be useful. Decrementing mushroomAggro by .1 is too helpful, but -.001 doesn't feel helpful enough. Perhaps -.01.

The credits page exists but is orphaned.

Stretch goals:

Difficulty modes: the game is beatable down to the mushroom spawn opportunity occuring every 3 seconds so I'd like to set difficulty mode (5 secs. = easy; 4 secs. = normal; 3 secs. = hard). I'd like to have one or two higher difficulty modes, which would mean changing the flowerFreq and mushroomFreq variables a bit.

A start screen, tutorial, and restart button

Styling

Visible scores: maybe. The scores are more for backend functionality than player benefit.

No mushroom spawns on flower tiles: also maybe. I like the added difficulty of having tiles get destroyed (like in Stardew Valley).