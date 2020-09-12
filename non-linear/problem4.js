/*
    Problem 4 - Off the Wheaten Path

    A delivery man's job is never done, but at least today is a little sweeter than most days. 
    I get to deliver supplies to some of the best bakeries around town. From "Cake, Batter, and Rolls"
    to "Tart Reform", I would probably be at these places even if they weren't on my route! Speaking
    of my route, my dispatcher gave me a list of each bakery and it's most ajacent other bakeries in my
    route, but the aren't in order! I need to figure out which two bakeries are the best bakeries to begin 
    and end my route. These two bakeries will be the only ones in the dispatcher list that only have one 
    bakery ajacent to them. I could use your help finding these bakeries. Each item in the dispatcher list 
    will have the following structure:
    
    { 
      bakery: "It's a Piece a Cake",
      ajacent: "Cookie Monster"
    }

    To solve this problem, choose the best data structure that will allow you to do the 
    following:
        - Save each of the bakery in the list, as well as the bakeries that are ajacent to it
        - Retrieve the two bakeries that only have one bakery ajacent them
    
    Use the "my_data_structure" variable defined on line 43 to instantiate the data structure you want 
    to use to solve this problem. Then within the lambda statement on line 49, use the correct 
    function for your chosen data structure to add each row parsed from the report file to your data
    structure. Finally, use the function "oneAjacentBakery" to define the logic you want to you with your 
    data structure to find the two bakeries that only have one ajacent bakery to them. When you 
    are ready to run your code, navigate the console to the folder that holds this file
    ("cd non-linear"), then type the commands "npm install" and "npm run problem4" into the command line on 
    repl.it to run the code. Remember,you can refer to the README file for the documentation for each type 
    of data structure. Give it your best shot, but don't panic! It's more important that you choose the 
    right data structure and attempt to implement the logic for that structure than finishing the problem. 
    Good Luck!
*/

import TOCBTS from "../structures/TOCBST";
import TOCGraph from "../structures/TOCGraph";
import * as csv from "fast-csv";
import * as fs from 'fs';
import * as path from 'path';


let my_data_structure; //Use this line to instantiate the data structure of your choice

fs.createReadStream(path.resolve(__dirname, 'assets', '../data/bakery_route.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => {
        my_data_structure; //modify this code to add each oreoFlavor to your data structure
    }) 
    .on('end', (rowCount) => oneAjacentBakery(my_data_structure));


function oneAjacentBakery(structure){
    let bakery1;
    let bakery2;
    /* 
       Add your logic for solving this problem, using the "structure" variable in this function as 
       your data structure, and set the "bakery1" and "bakery2" variables to your answer when you find it
    */
    console.log(bakery1);
    console.log(bakery2);
}
