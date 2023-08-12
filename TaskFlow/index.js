
const lista = document.querySelector('#lista');
const template = document.querySelector('#template').content
const fragment = document.createDocumentFragment();
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const containerColor = document.querySelector('body');
const bg = document.querySelector('.bg');

const data = []
const color = [
    "linear-gradient(90deg, #6638bc, #bd02d6)", 
    "linear-gradient(90deg, #f9ce34, #ee2a7b, #6228d7)", 
    "linear-gradient(90deg, #e6e87a, #23b1e0)", 
    "linear-gradient(90deg, #e05cce, #bff9a4)", 
    "linear-gradient(90deg, #a8dfed, #3fe244)", 
    "linear-gradient(90deg, #0b728e, #1e2933)", 
    "linear-gradient(90deg, #98f2e1, #ff7830)", 
    "linear-gradient(90deg, #0e3c75, #f7b9f5)", 
    "linear-gradient(90deg, #db608f, #70aeef)"  
];


let index = 0
bg.addEventListener('click', () => {
    containerColor.style.background = color[index]
    index = (index + 1) %  color.length;
})


form.addEventListener('submit',(e) =>{
    e.preventDefault();
    data.push(input.value);
    updateList();
    messageNH()
    input.value = '';
});


const updateList = () => {
    lista.innerHTML = '';
    data.forEach((item, index) => {  //forEach sirve para iterar sobre elementos de un array y ejecuta una funcion, con esto podemos realizar operaciones sin la necesidad de usar "for".
        template.querySelector('.text-todo').textContent = item;
        const clone = template.cloneNode(true);
        const deleteButton = clone.querySelector('.btn-delete');

        deleteButton.addEventListener('click',() => {
            data.splice(index, 1) // el metodo splice es genial para un array como agregar, eliminar o reemplazar.
            updateList();
        })
        const check = clone.querySelector('.checkbox-label');
        const container_li = clone.querySelector('.container-li');
        check.addEventListener('click', () => {
            container_li.classList.toggle('checked')
        });
        fragment.appendChild(clone); 
    });
    lista.appendChild(fragment);
}

const messageNH = () => {
    const messageNH = document.querySelector('.message-nohomework');
    if(data.length <= 0) {
        console.log('aparece')
        messageNH.style.display = "block"
    } else{
        console.log(data.length)
        messageNH.style.display = "none"
    }
}

