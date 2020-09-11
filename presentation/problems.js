const { count } = require("console");

//Arrays Sample Problem
function hasDessert(desserts, dessert){
    for(let i = 0; i < desserts.length; i++){
        if(desserts[i] === dessert)
            return true
    }

    return false;
}

//Linked-List Sample Problem
function getItemFromDessertList(desserts, itemNumber){
    let count = 0;
    let dessert = desserts.next();
    while(count < itemNumber){
        dessert = desserts.next();
        count++;
    }

    return dessert;
}

//Queue sample problem
function addDessertToOrder(desserts, dessert){
    if(dessert == null)
        return desserts;
    if(!dessert.wasOrdered)
        return desserts;
    if(dessert.price > 8.99)
        return desserts
    
    desserts.enqueue(dessert);
    return desserts;
}

//Stacks Sample Problem
function gimmeADessertNow(desserts){
    let ok_heres_your_dessert = desserts.pop();
    return ok_heres_your_dessert;
}

//Hashmap Sample problem
function findMyfavoriteDessert(desserts, favorite){
    let favorite_dessert = desserts[favorite];
    return favorite;
}

//BST Sample problem
function howManyDessertsAreBetter(dessertBTS, currentDessert){
    let score = 0;
    if(dessertBTS == null)
        return score;

    if(dessertBTS.getDessert().getScore() > currentDessert.getScore())
        score = 1;
    
    if(score == 1)
        return score + 
                howManyDessertsAreBetter(dessertBTS.getLeft(), currentDessert) + 
                howManyDessertsAreBetter(dessertBTS.getRight(), currentDessert);
    else
        return howManyDessertsAreBetter(dessertBTS.getRight(), currentDessert)
}

//Graph Sample problem
function howManyFriendsLikeDessert(friendGraph, me, dessert){
    let friends = friendGraph.getEdges(me);
    let count = 0; 
    for(let i = 0; i < friends.length; i++){
        let friend = friends[i];
        if(friend.favorite_dessert == dessert){
            count++
        }
    }

    return count;

}