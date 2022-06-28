let btnGet = document.querySelector('#btnGet');
let InputCharName = document.querySelector('#InputCharName');
let output = document.querySelector('#output');

function getApi() {    
    let charName = InputCharName.value;
    let fullUri = `https://www.swapi.tech/api/people/?name=${charName}`
    fetch(fullUri)
     .then(res => res.json())
     .then(data => {
        /* console.log(data) */
        output.innerHTML = '';
        if(data.result.length > 0)
        {
            /* output.innerHTML += `message: ${data.message}\r\n` */
            output.innerHTML += `found ${data.result.length} characters matching searchcriteria: ${charName}\r\n`
            for(let i=0;i<data.result.length;i++)
            {
                output.innerHTML += `  Character result #${i}\r\n`;
                output.innerHTML += `      ${data.result[i].properties.name}, ${data.result[i].description}\r\n`
                output.innerHTML += `      Height: ${data.result[i].properties.height}\r\n`
                output.innerHTML += `      Mass: ${data.result[i].properties.mass}\r\n`
                output.innerHTML += `      Gender: ${data.result[i].properties.gender}\r\n`
                output.innerHTML += `      Hair color: ${data.result[i].properties.hair_color}\r\n`
                /* output.innerHTML += `properties: ${JSON.stringify(data.result[i].properties, null, 2)}\r\n` */
            }
        }
        else
        {
            output.innerHTML += `Could not find Star Wars Character with name: ${charName}`
        }
     })
     .catch(err => console.log(err))
}
    
btnGet.addEventListener('click', e => {
    'use strict'
    let forms = document.querySelectorAll('.needs-validation');
    let form = forms[0];
    e.preventDefault();
    e.stopPropagation();
    
    if(form.checkValidity())
        getApi();

    form.classList.add('was-validated');
});