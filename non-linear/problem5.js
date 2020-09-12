/*
    Problem 5 - Who's better than the classic?

    Who doesn't like a good Oreo cookie? Whether you eat them with milk or without, oreos are one
    of America's greatest cookie. Classics should just be classics. Or should they......
    
    Nabisco has put out a number of different oreo flavors. Some are great! Others, not so much.
    We've compiled a list of these new oreo flavors, and rated each of them. The only problem is the 
    list has been scrambled. We just want to know what flavors of oreos rated higher than the classic
    oreos (rated 3.8125) so that we can try all of those flavors (not in one sitting, of course. Probably)

    To solve this problem, choose the best data structure that will allow you to do the 
    following:
        - Save all of the items in the ranking list in a way that lets you search for the
        flavors rated higher than 3.8125 efficiently
        - iterate through the data structure and return the names of each of these flavors
    
    Use the "my_data_structure" variable defined on line 38 to instantiate the data structure you want 
    to use to solve this problem. Then within the lambda statement on line 45, use the correct 
    function for your chosen data structure to add each row parsed from the report file to your data
    structure. Finally, use the function "betterThanTheClassic" to define the logic you want to you with your 
    data structure to find the flavors rated higher than 3.8125 in the rating list. When you 
    are ready to run your code, navigate the console to the folder that holds this file
    ("cd non-linear"), then type the commands "npm install" and "npm run problem5" into the command line on 
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

fs.createReadStream(path.resolve(__dirname, 'assets', '../data/oreo_rankings.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => {
        let oreoFlavor = new OreoRankings(row.oreo_flavor, row.average_across_raters, row.notes_and_discussion); //Class defined below
        my_data_structure; //modify this code to add each oreoFlavor to your data structure 
    }) 
    .on('end', (rowCount) => betterThanTheClassic(my_data_structure));


function betterThanTheClassic(structure){
    let oreo_flavor = "";
    /* 
       Add your logic for solving this problem, using the "structure" variable in this function as 
       your data structure, and concatenate the flavors better than 3.8125 to the "oreo_flavor" variable,
       separated by commas
    */
    console.log(oreo_flavor);
}

class OreoRankings{
    constructor(flavor, ranking, notes){
        this.flavor = flavor;
        this.ranking = ranking;
        this.notes = notes;
    }
    
    getFlavor(){
        return this.flavor;
    }

    getRanking(){
        return this.ranking;
    }

    getNotes(){
        return this.notes;
    }

    valueOf(){
        return this.ranking;
    }
}