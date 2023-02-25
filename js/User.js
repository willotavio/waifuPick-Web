class User{

    constructor(){
        this.userEmail = '';
        this.userName = '';
        this.userPassword = '';
        this.userWaifus = [];
        this.lastWaifu = 1;
    }

    addWaifu(){
        let waifuName = document.getElementById('waifuName').value;
        let waifuRank = document.getElementById('waifuRank').value;
        let waifuReview = document.getElementById('waifuReview').value;
        if(user.validateInputs(waifuName, waifuRank, waifuReview)){
            let waifu = new Waifu();
            waifu.waifuId = this.lastWaifu;
            waifu.waifuName = waifuName;
            waifu.waifuRank = waifuRank;
            waifu.waifuReview = waifuReview;
            this.insertWaifu(waifu);
            this.listWaifu();
            this.lastWaifu++;
            this.clearInputs();
        }
    }

    validateInputs(waifuName, waifuRank, waifuReview){
        let msg = '';
        if(waifuName== ''){
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
            return true;
        }
    }

    listWaifu(){
        let waifuList = document.getElementById('waifuTbody');
        waifuList.innerText = '';
        for(let i = 0; i < this.userWaifus.length; i++){
            let newRow = waifuList.insertRow(-1);
            let idCell = newRow.insertCell(0);
            let nameCell = newRow.insertCell(1);
            let rankCell = newRow.insertCell(2);
            let reviewCell = newRow.insertCell(3);
            let actionCell = newRow.insertCell(4);
            idCell.innerHTML = this.userWaifus[i].waifuId;
            nameCell.innerHTML = this.userWaifus[i].waifuName;
            rankCell.innerHTML = this.userWaifus[i].waifuRank;
            reviewCell.innerHTML = this.userWaifus[i].waifuReview;
            actionCell.innerHTML = "<button class='actionButton' id='editButton' onclick='user.editWaifu("+this.userWaifus[i].waifuId+")'></button>\
            <button class='actionButton' id='deleteButton' onclick='user.deleteWaifu("+this.userWaifus[i].waifuId+")'></button>";
        }
    }
    
    insertWaifu(waifu){
        this.userWaifus.push(waifu);
    }

    clearInputs(){
        document.getElementById('waifuName').value = '';
        document.getElementById('waifuRank').value = '';
        document.getElementById('waifuReview').value = '';
    }

    deleteWaifu(waifuId){
        let waifuList = document.getElementById('waifuTbody')
        for(let i = 0; i < this.userWaifus.length; i++){
            if(this.userWaifus[i].waifuId == waifuId){
                if(confirm("Are you sure to delete " + this.userWaifus[i].waifuName + "??")){
                    this.userWaifus.splice(i, 1);
                    waifuList.deleteRow(i);
                }
            }
        }
    }
}