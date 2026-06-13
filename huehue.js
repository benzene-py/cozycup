const inputs = document.querySelectorAll(
'.form-group input'
);
const button = document.querySelector('.reserve-btn');

function checkForm(){

    let filled = true;

    inputs.forEach(input=>{
        if(input.value.trim()===''){
            filled = false;
        }
    });

    if(filled){
        button.disabled = false;
        button.classList.add('active');
    }
    else{
        button.disabled = true;
        button.classList.remove('active');
    }
}

inputs.forEach(input=>{
    input.addEventListener('input', checkForm);
});

document.querySelector(".reserve-btn")
.addEventListener("click", () => {
    alert("Reservation Successful!");
    location.reload();
});