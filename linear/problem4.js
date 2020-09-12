/*
    Problem 4 - First 100 sales

    Welcome to the TOC Bakery, where we can sell you whatever confection you dream of. 
    We have some very popular items, and our sales report reflects that. There is one 
    issue that we're facing: we think someone is trying to steal our recipes! We've noticed 
    that on days when every 10th item out of the first 100 items purchased is the same item, 
    the customer is a baker from a compeating bakery! We'll, we've got a suprise for him, 
    because we're going to find out what items he's getting and change the recipe, but we 
    have to find the items first. We need your help finding these items from our sales 
    report from today. Each sales report item, when parsed into an object, will look like this:

    { TransID: '299',
      Product: 'Cheese Croissant',
      Price: '1.75',
      Type: 'Food' 
    }
    
    To solve this problem, choose the best data structure that will allow you to do the 
    following:
        - Save the first 100 items from our sales report into a list
        - quickly access the 10th, 20th, 30th, 40th, 50th, 60th, 70th, 80th, and 90th items
        in the list, then tell us what each of those items are 
    
    Use the "my_data_structure" variable defined on line 48 to instantiate the data structure you want 
    to use to solve this problem. Then within the lambda statement on line 55, use the correct 
    function for your chosen data structure to add each row parsed from the report file to your data
    structure. Finally, use the function "firstHundredItems" to define the logic you want to you with your 
    data structure to get each of the items we're looking for from the report. When you 
    are ready to run your code, navigate the console to the folder that holds this file
    ("cd linear"), then type the commands "npm install" and "npm run problem4" into the command line on 
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
let count = 0;
fs.createReadStream(path.resolve(__dirname, 'assets', '../data/bakery_sales1.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => {
        if(count < 100){
            my_data_structure //modify this code to add each row to your data structure
            count++
        }
    }) 
    .on('end', (rowCount) => firstHundredItems(my_data_structure));


function firstHundredItems(structure){
    let item10 = "";
    let item20 = "";
    let item30 = "";
    let item40 = "";
    let item50 = "";
    let item60 = "";
    let item70 = "";
    let item80 = "";
    let item90 = "";
    /* 
       Add your logic for solving this problem, using the "structure" variable in this function as 
       your data structure, and set the "item10" variable to your answer for the product name of the 
       10th item in the list, "item20" to the name of 20th item and so on.......
    */
    console.log(item10);
    console.log(item20);
    console.log(item30);
    console.log(item40);
    console.log(item50);
    console.log(item60);
    console.log(item70);
    console.log(item80);
    console.log(item90);
}