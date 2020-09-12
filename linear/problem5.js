/*
    Problem 5 - Morning Sales projections

    Welcome to the TOC Bakery, where we can sell you whatever confection you dream of. 
    We have some very popular items, and our sales report reflects that. There is one 
    issue that we're facing: we need to better understand our daily sales trends. We think 
    that the morning time is much better than the after for our sales, and we want to prove it.
    To do that, we want to know what our proportional sales are for the first 75 sold items. 
    To calculate proportional sales, add up the amount of the first 75 sales of the day, then
    multiply this number by 75 divided by the total number of sales for the day. 
    We've given you our sales report for the day yesterday. The total items sold for the day 
    is represented by the number of items in the sales report. In the report, each row when 
    parsed into an object, will look like this:

    { TransID: '299',
      Product: 'Cheese Croissant',
      Price: '1.75',
      Type: 'Food' 
    }
    
    To solve this problem, choose the best data structure that will allow you to do the 
    following:
        - Save all of the items in the sales report to a list, without knowing how many 
        items are in the report
        - iterate through the list and add up the first 75 prices in the list, then multiply that 
        number by 75, then divide that number by the size of the list
    
    Use the "my_data_structure" variable defined on line 51 to instantiate the data structure you want 
    to use to solve this problem. Then within the lambda statement on line 56, use the correct 
    function for your chosen data structure to add each row parsed from the report file to your data
    structure. Finally, use the function "proportionalSales" to define the logic you want to you with your 
    data structure to calculate the proportional sales value for morning sales. When you 
    are ready to run your code, navigate the console to the folder that holds this file
    ("cd linear"), then type the commands "npm install" and "npm run problem5" into the command line on 
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
    .on('end', (rowCount) => proportionalSales(my_data_structure, "Lemon Cake", "Blackberry Tart", "Apple Croissant"));


function proportionalSales(structure){
    let total_items = 0; //set this value to the size of the data structure 
    let total_sales = 0; //set this value to the sum of the first 75 prices in the data structure
    /* 
       Add your logic for solving this problem, using the "structure" variable in this function as 
       your data structure, and set the "total_item" variable to the size of the list and "total_sales"
       to the sum of the first 75 prices
    */

    let proportional_total = total_sales*75/total_items;

    console.log(proportional_total);

}