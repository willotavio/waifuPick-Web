document.getElementById('btnAddWaifu').addEventListener('click', function addWaifu(){
    if(validateInputs()){
        let waifu = new Waifu();
        waifu.waifuName = document.getElementById('waifuName').value;
        waifu.waifuRank = document.getElementById('waifuRank').value;
        waifu.waifuReview = document.getElementById('waifuReview').value;
        
        console.log(waifu);
    }

})

function validateInputs(){
    let checkName = document.getElementById('waifuName').value;
    let checkRank = document.getElementById('waifuRank').value;
    let checkReview = document.getElementById('waifuReview').value;
    let msg = '';
    if(checkName == ''){
        msg += 'Enter your Waifu name!\n';    
    }
    if(checkRank == ''){
        msg += 'Enter your Waifu rank!\n';
    }
    if(checkReview == ''){
        msg += 'Enter your Waifu review!\n';
    }
    if(msg != ''){
        alert(msg);
        return false;
    }
    return true;
}