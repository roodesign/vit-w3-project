function formInput() {
    var getDate = new Date().toLocaleDateString();
    var getName = document.getElementById ("name-input").value;
    var getEmail = document.getElementById ("email-input").value;
    console.log("Form Values", getName, getEmail)

    var newDateElement = document.createElement("li");
    var newNameElement = document.createElement("li");
    var newEmailElement = document.createElement("li");
    console.log("Create element")

    newDateElement.innerText = getDate;
    newNameElement.innerText = getName;
    newEmailElement.innerText = getEmail;

    var dateAdd = document.getElementById("dateList");
    dateList.append(newDateElement);
    var nameAdd = document.getElementById("nameList");
    nameList.append(newNameElement);
    var emailAdd = document.getElementById("emailList");
    emailList.append(newEmailElement);



}