class User{
    constructor(){
        this.userEmail = '';
        this.userName = '';
        this.userPassword = '';
        this.userWaifus = [];
        this.lastWaifu = 1;
    }
    addWaifu(waifuName, waifuRank, waifuReview){
        let waifu = new Waifu();
        waifu.waifuId = this.lastWaifu;
        waifu.waifuName = waifuName;
        waifu.waifuRank = waifuRank;
        waifu.waifuReview = waifuReview;
        user.insertWaifu(waifu);
        user.listWaifu(waifu);
        this.lastWaifu++;
    
    }
    listWaifu(waifu){
        let waifuList = document.getElementById('waifuTbody');
        let newRow = waifuList.insertRow(-1);
        let idCell = newRow.insertCell(0);
        idCell.innerHTML = waifu.waifuId;
        let nameCell = newRow.insertCell(1);
        nameCell.innerHTML = waifu.waifuName;
        let rankCell = newRow.insertCell(2);
        rankCell.innerHTML = waifu.waifuRank;
        let reviewCell = newRow.insertCell(3);
        reviewCell.innerHTML = waifu.waifuReview;
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