const snowball = document.querySelector('#snowball');
const blockHidden = document.querySelector('#hidden');
const blockVis = document.querySelector('.visible');
const myForm = document.querySelector('#myForm');
let name = document.querySelector('#name');
let text = document.querySelector('.hidden__text');

snowball.addEventListener('click', function() {
    blockVis.style.display = 'none';
    blockHidden.style.display = 'flex';
    myForm.style.display ='block';
})

console.log(myForm.element);

let elements = myForm.elements;

elements.btn.addEventListener('click', function(event) {
    event.preventDefault();
    name.textContent = elements.userName.value;
    name.style.color = elements.textColor.value;
    if (elements.padding.chacked === 'true') {
        name.style.margin = '0';
    }
    text.style.fontSize = elements.textSize.value + 'px';
})