/*
TO DO APP

1. EASY: First write out the function that will add on to the existing list from the users input.
2. EASY: Create a button at the bottom of the list to clear out the whole list.
3. HARD: With each item that is added, also add a delete button. NOTE: need a running count to keep track of which id element to delete.
4. NIGHTMARE: Using the running count, can you figure out a way to edit the task? NOTE: need to add an edit button
*/

function addTask() {
  var taskInput = document.getElementById ("displayName").value;
  var newListItem = document.createElement("li");
  newListItem.innerText = taskInput;
  console.log("New Input")

  var taskCol = document.getElementById("dateCol");
  taskCol.append(newListItem);
  console.log("New list item");
}

function clearList(){
  var clearTasks = document.getElementById("dateCol");
  clearTasks.innerText = "";
  console.log("Clear list")
}
