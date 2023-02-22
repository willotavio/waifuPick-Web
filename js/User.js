class User{
    constructor(){
        this.userEmail = '';
        this.userName = '';
        this.userPassword = '';
        this.userWaifus = [];
    }
    addWaifu(waifuName, waifuRank, waifuReview){
        let waifu = new Waifu();
        waifu.waifuName = waifuName;
        waifu.waifuRank = waifuRank;
        waifu.waifuReview = waifuReview;
        user.insertWaifu(waifu);
        for(let i = 0; i < this.userWaifus.length; i++){
            console.log(i + "-" + this.userWaifus[i].waifuName + "\n");
        }
    
    }
    validateInputs(){
        let waifuName = document.getElementById('waifuName').value;
        let waifuRank = document.getElementById('waifuRank').value;
        let waifuReview = document.getElementById('waifuReview').value;
        let msg = '';
        if(waifuName == ''){
            msg += 'Enter your Waifu name!\n';    
        }
        if(waifuRank == ''){
            msg += 'Enter your Waifu rank!\n';
        }
        if(waifuReview == ''){
            msg += 'Enter your Waifu review!\n';
        }
        if(msg != ''){
            alert(msg);
        }
        else{
            this.addWaifu(waifuName, waifuRank, waifuReview);
        }
    }
    
    insertWaifu(waifu){
        this.userWaifus.push(waifu);
    }
}