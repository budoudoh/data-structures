/*
    Problem 1 - What's our popular evening item?

    Welcome to the TOC Bakery, where we can sell you whatever confection you dream of. 
    We have some very popular items, and our sales report reflects that. There is one 
    issue that we're facing: accounting for items that are popular near the end of the 
    day. We would like to understand two things about our current sales report: what was 
    the very last thing we sold on the report and how many of those items did we sell 
    throughout the day. Each sales report item, when parsed into an object, will look 
    like this:

    { TransID: '299',
      Product: 'Cheese Croissant',
      Price: '1.75',
      Type: 'Food' 
    }
    
    To solve this problem, choose the best data structure that will allow you to do the 
    following:
        - Save all of the items in the report into the data structure without knowing 
        how many items are in the report
        - iterate through the report and count how many items have a "Product" attribute
        that matches the "Product" attribute of the very last item in the data structure 
    
    Use the "my_data_structure" variable defined on line 48 to instantiate the data structure you want 
    to use to solve this problem. Then within the lambda statement on line 53, use the correct 
    function for your chosen data structure to add each row parsed from the report file to your data
    structure. Finally, use the function "countLastItem" to define the logic you want to you with your 
    data structure to count the number of times the last item in the list appears in the report. When you 
    are ready to run your code, navigate the console to the folder that holds this file
    ("cd linear"), then type the commands "npm install" and "npm run problem1" into the command line on 
    repl.it to run the code. Remember,you can refer to the README file for the documentation for each type 
    of data structure. Give it your best shot, but don't panic! It's more important that you choose the 
    right data structure and attempt to implement the logic for that structure than finishing the problem. 
    Good Luck!
*/

import TOCArray from "../structures/TOCArray";
import TOCLinkedList from "../structures/TOCLinkedList";
import TOCStack from "../structures/TOCStack";
import TOCQueue from "../structures/TOCQueue";
import TOCHashMap from "../structures/TOCHashMap";
import * as csv from "fast-csv";
import * as fs from 'fs';
import * as path from 'path';


let my_data_structure; //Use this line to instantiate the data structure of your choice

fs.createReadStream(path.resolve(__dirname, 'assets', '../data/bakery_sales1.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => my_data_structure) //modify this code to add each row to your data structure 
    .on('end', (rowCount) => countLastItem(my_data_structure));


function countLastItem(structure){
    let item_count = 0;
    /* 
       Add your logic for solving this problem, using the "structure" variable in this function as 
       your data structure, and set the "item_count" variable to your answer when you find it
    */
    console.log(item_count);
}