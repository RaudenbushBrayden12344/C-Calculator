let textInput = document.getElementsByClassName("listText");
let createNewBox = document.getElementsByClassName("inputButton");

function createNewInputBox() {
    const para = document.createElement("input");
    para.innerText = "This is a input box";
    document.body.appendChild(para);
}