/*
    Problem 2 - Who Reversed the Sales Report?

    Welcome to the TOC Bakery, where we can sell you whatever confection you dream of. 
    We have some very popular items, and our sales report reflects that. There is one 
    issue that we're facing: someone in accounting has reversed our latest sales report. 
    We would like to know what was the 100th item we sold today, but it's not as easy as 
    just counting from the top. We need you to help us reverse the order of the items in 
    the report, then tell us what the 100th item was we sold today. Each sales report item,
    when parsed into an object, will look like this:

    { TransID: '299',
      Product: 'Cheese Croissant',
      Price: '1.75',
      Type: 'Food' 
    }
    
    To solve this problem, choose the best data structure that will allow you to do the 
    following:
        - Save all of the items in the report into the data structure in reverse order from 
        the way you receive it, without knowing how many items are in the report
        - iterate through the report and until you get to the 100th item, then return that 
        item from your function
    
    Use the "my_data_structure" variable defined on line 48 to instantiate the data structure you want 
    to use to solve this problem. Then within the lambda statement on line 53, use the correct 
    function for your chosen data structure to add each row parsed from the report file to your data
    structure. Finally, use the function "returnHundrethItem" to define the logic you want to you with your 
    data structure to give us the hundreth item from the correctly ordered sales report. When you 
    are ready to run your code, navigate the console to the folder that holds this file
    ("cd linear"), then type the commands "npm install" and "npm run problem2" into the command line on 
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
    .on('end', (rowCount) => returnHundrethItem(my_data_structure));


function returnHundrethItem(structure){
    let hundreth_item = "";
    /* 
       Add your logic for solving this problem, using the "structure" variable in this function as 
       your data structure, and set the "hundreth_item" variable to your answer when you find it
    */
    console.log(hundreth_item);
}