class User{
    constructor(){
        this.userEmail = '';
        this.userName = '';
        this.userPassword = '';
        this.userWaifus = [];
    }
    addWaifu(){
        if(user.validateInputs()){
            let waifu = new Waifu();
            waifu.waifuName = document.getElementById('waifuName').value;
            waifu.waifuRank = document.getElementById('waifuRank').value;
            waifu.waifuReview = document.getElementById('waifuReview').value;
            user.insertWaifu(waifu);
            for(let i = 0; i < this.userWaifus.length; i++){
                console.log(i + "-" + this.userWaifus[i].waifuName + "\n");
            }
        }
    
    }
    validateInputs(){
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
    
    insertWaifu(waifu){
        this.userWaifus.push(waifu);
    }
}