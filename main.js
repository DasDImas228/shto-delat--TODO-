"use strict";

// TODO list
let list = ["make a bad", "make a bad", "sasat", "kakat"];

class Main{
  // Remove task from TODO list
  removeTask = (task) =>{
    list = list.filter((n) => {return n != task});
  }
}

// Output a TODO list
console.log("All tasks: \n" , list);

// Initialize a package
const prompt = require("prompt-sync")();
const task = prompt("Task:")
// Something intresting
new Main().removeTask(task);
// Magic
console.log(list);
