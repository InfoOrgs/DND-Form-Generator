import InputTypData from '../data.js'
var items = document.getElementById('main-items')
new Sortable(items, {
    animation: 330,
    ghostClass: 'blue-background-class'
});
let inputContainer = document.getElementById('main-items');
let inputTypeItem = document.querySelectorAll('.dragable-item');
AddEventListners();
function AddEventListners() {
    var DeleteIcons = document.querySelectorAll('.gicons');
    var AdvanceOpt = document.querySelectorAll('.AdvOpt');
    inputTypeItem.forEach(e => {
        e.addEventListener('click', addInputType);
    }); DeleteIcons.forEach(e => {
        e.addEventListener('click', DeleteInput);
    }); AdvanceOpt.forEach(e => {
        e.addEventListener('click', addAdvanceInfo);
    });}
function addInputType() {
    let InputType = this.dataset.inputType
    inputContainer.innerHTML += InputTypData[`${InputType}`];
    AddEventListners();}
function DeleteInput() {
    let item = this.parentElement
    item.classList.add("animate__zoomOut");
    setTimeout(() => {item.remove()}, 300)
} function addAdvanceInfo() {
    console.log('clicked')
}
 let logoText =  document.getElementById('logoText')
let styleColl =['animate__bounce', 'animate__flash','animate__pulse','animate__rubberBand','animate__shakeX','animate__jello','animate__heartBeat']
let CurrStyle = styleColl[Math.floor(Math.random()*7)]
 setInterval(() => {logoText.classList.add(CurrStyle)}, 3000)



















console.log(InputTypData)