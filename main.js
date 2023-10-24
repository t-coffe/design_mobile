
let select = document.querySelector("#select");

select.addEventListener("change", onChange);

function onChange(){
    console.log(select.value);
}