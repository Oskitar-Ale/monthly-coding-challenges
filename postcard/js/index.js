const form = document.querySelector('.container-form')
const input =  document.querySelectorAll('input')

form.addEventListener('submit', () => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const description = document.getElementById("description").value;

    const formData = {
        name,
        city,
        description,
    }

    console.log(formData);

    const registro = document.querySelector('.registro')    
    registro.innerHTML = `
    <p>Nombre: ${formData.name}<p>
    <p>City: ${formData.city}<p>
    <p>Description: ${formData.description}<p>
    `

})


const flip = document.getElementById("flip")
const postcard = document.querySelector('.main') 
flip.addEventListener('click', () => {
    event.preventDefault();
    postcard.classList.toggle('rotate-animation')
})