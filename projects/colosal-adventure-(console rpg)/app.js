var readline = require("readline-sync");
//ask user for name and give greeting
var userName = readline.question("What is your name?");

//character creation

//walking  
//running from a fight  
//fighting  
//enemy creation  
//attacking enemy  
//enemy attacking  
//enemy dying (including dropping an item)  
//character dying  






function walk() {
   //ask user to push 'w' to walk
    if (user pushed 'w') {
        if (1 in 4) {
         fight();
       } else {
           //tell user they didn't run into a monster
           //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
       }     
    } else {
    }        //tell user what's in their inventory, and their health, and then tell them to push w to walk
}

function run(){
   if (1 in 2) {
       //tell user that they successfully got away and can continue walking
        //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
   } else {
       //tell user they were not able to run
        //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
   }
}

function fight() {
    //ask user to either fight or run
    enemy creation();
    if (user is trying to run)
        run();
} else {
    attackEnemy();
}
    while (enemy.health > 0) {
        attackEnemy();
        enemyAttack();
    }
}

function attackEnemy() {
    
}

function enemyAttack() {
    
}

function die() {
    
}

function enemyDie() {
    
}

function enemyCrearion() {
    
}

while(player.health > 0) {
    walk()
}