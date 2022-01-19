// import { generateList, generateItem as generateListItem } from "./modules/list.js";
// import { generateTable, generateTableRow, generateItem as generateTableItem } from "./modules/table.js"

// let list = generateList(document.body);
// generateListItem(list, "images/car.jpg");
// generateListItem(list, "images/Dog.jpg");
// generateListItem(list, "images/house.jpg");

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr, "images/car.jpg");
// generateTableItem(tr, "images/Dog.jpg");
// generateTableItem(tr, "images/house.jpg");


import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";
import * as Div from "./modules/div.js"

let list = List.generateList(document.body);
List.generateItem(list, "images/car.jpg")
List.generateItem(list, "images/Dog.jpg")
List.generateItem(list, "images/house.jpg")

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "images/car.jpg");
Table.generateItem(tr, "images/Dog.jpg");
Table.generateItem(tr, "images/house.jpg");

let div = Div.generateDiv(document.body);
Div.generateDivItem(div, "images/car.jpg")
Div.generateDivItem(div, "images/Dog.jpg")
Div.generateDivItem(div, "images/house.jpg")