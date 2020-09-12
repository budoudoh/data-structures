/*
    Problem 3 - Who lost the price list?

    Welcome to the TOC Bakery, where we can sell you whatever confection you dream of. 
    We have some very popular items, and our sales report reflects that. There is one 
    issue that we're facing: someone in sales lost our price list! Without this list, 
    how will we know what to charge for each of our items tomorrow? We need your help 
    creating a new price list from our sales report from today. Each sales report item,
    when parsed into an object, will look like this:

    { TransID: '299',
      Product: 'Cheese Croissant',
      Price: '1.75',
      Type: 'Food' 
    }
    
    To solve this problem, choose the best data structure that will allow you to do the 
    following:
        - Save an easily accessible list of all of the unique items that we sell, as well as 
        the price for each of those items, without knowing how many items are in the report
        - iterate through the price list and return the price of a couple of items that we know
        we're going to have to sell first thing in the morning
    
    Use the "my_data_structure" variable defined on line 46 to instantiate the data structure you want 
    to use to solve this problem. Then within the lambda statement on line 51, use the correct 
    function for your chosen data structure to add each row parsed from the report file to your data
    structure. Finally, use the function "returnItemPrices" to define the logic you want to you with your 
    data structure to create the new price list for the bakery. When you are ready to run your code, 
    navigate the console to the folder that holds this file ("cd linear"), then type the commands 
    "npm install" and "npm run problem3" into the command line on repl.it to run the code. Remember,you 
    can refer to the README file for the documentation for each type of data structure. Give it your best shot, 
    but don't panic! It's more important that you choose the right data structure and attempt to implement 
    the logic for that structure than finishing the problem. Good Luck!
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
    .on('end', (rowCount) => returnItemPrices(my_data_structure, "Lemon Cake", "Blackberry Tart", "Apple Croissant"));


function returnItemPrices(structure, item1, item2, item3){
    let price1 = 0;
    let price2 = 0;
    let price3 = 0;
    /* 
       Add your logic for solving this problem, using the "structure" variable in this function as 
       your data structure, and set the "price1" variable to your answer for the price of "item1", 
       "price2" to the price of "item2", and "price3" to the price of "item3" when you find it
    */
    console.log(price1);
    console.log(price2);
    console.log(price3);
}