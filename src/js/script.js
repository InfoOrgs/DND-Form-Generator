import InputTypData from '../data.js'
var items = document.getElementById('main-items')
new Sortable(items, {
    animation: 330,
    ghostClass: 'blue-background-class'
});
let inputContainer = document.getElementById('main-items')
let inputTypeItem = document.querySelectorAll('.dragable-item')
inputTypeItem.forEach(e => {
    e.addEventListener('click', addInputType)
});
function addInputType() {
    let InputType = this.dataset.inputType
    inputContainer.insertAdjacentHTML( 'beforeend' ,InputTypData[`${InputType}`])
}


















console.log(InputTypData)