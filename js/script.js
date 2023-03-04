let user = new User();

const addInput = document.getElementById('btnAddWaifu');
const updateInput = document.getElementById('btnUpdateWaifu');

const addInputs = document.getElementById('formAddWaifu').querySelectorAll('input[type=text]');
const addInputsList = Array.from(addInputs);
for(i = 0; i < addInputsList.length; i++){
    addInputsList[i].addEventListener('input', () => enableButton(addInputsList));
}

const updateInputs = document.getElementById('formUpdateWaifu').querySelectorAll('input[type=text]');
const updateInputsList = Array.from(updateInputs);
for(i = 0; i < updateInputsList.length; i++){
    updateInputsList[i].addEventListener('input', () => enableButton(updateInputsList));
}

function enableButton(buttonList){
    if(buttonList == addInputsList){
        if(addInputsList.every(inputs => inputs.value.length != 0)){
            addInput.removeAttribute('disabled');
        }
        else{
            addInput.setAttribute('disabled', '');
        }
    }
    if(buttonList == updateInputsList){
        if(updateInputsList.every(inputs => inputs.value.length != 0)){
            updateInput.removeAttribute('disabled');
        }
        else{
            updateInput.setAttribute('disabled', '');
        }
    }
    
}

addInput.addEventListener('click', function buttonPressed(){
    user.addWaifu();
    addInput.setAttribute('disabled', '');
});
updateInput.addEventListener('click', function buttonPressed(){
    user.updateWaifu();
    updateInput.setAttribute('disabled', '');
});