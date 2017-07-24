# mskelton19.github.io

My original plan was to create a Lord of the Rings based chance game where the player jumps from div to div,
trying to avoid being caught by a randomized selector. Each round has a different number of options and different point 
assignments. If you are able to get to the last stage of each round, the next round automatically starts.

You're given one life at the beginning of the game. You can go down to zero (a la Mario) but anything less than that and the 
game is over. Each time you complete a round, you are given an additional life.

Points are distributed as follows: 1 for the first round, 3 for the second round, and 5 for the third round. If you're able to 
make it all the way through, you're awarded an additional ten points.


Most of what I did was done with jquery. Once I finished the first round and spoke with my instructor, I decided to push the game
further than I originally intended. This became an issue due to the amount of code. There was certainly a better way to write 
a good amount of the code but I didn't have time to go back and update the JQuery. My CSS is simple but goes well with the game.
HTML was used the least.

I know I could have gone back and created more efficient code, but given the timing, I wasn't able to do so. Additionally, I 
couldn't get .stop() to work on the divs and was only able to get it to work on the 'start' button. Because of this, the game 
can be cheated if someone is paying attention. I also worked to create a modal for the directions but kept hitting bugs.

https://mskelton19.github.io/

