import {Expression} from "./expression";

document.addEventListener('DOMContentLoaded',setup);

function setup(){
    const button = document.getElementById('newExprButton');
    button.onclick = addExpression;
}
function addExpression(){
    const expression = new Expression('3*x');
    const container = document.getElementById('mathContainer');
    const expressionElement = document.createElement('div');
    expressionElement.innerHTML = expression.toString();
    container.appendChild(expressionElement);
}
