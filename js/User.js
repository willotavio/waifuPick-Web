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
        let addInputs = document.getElementById('formAddWaifu').querySelectorAll('input[type=text]');
        let updateInputs = document.getElementById('formUpdateWaifu').querySelectorAll('input[type=text]');
        for(let i = 0; i < addInputs.length; i++){
            addInputs[i].value = null;
        }
        for(let i = 0; i < updateInputs.length; i++){
            updateInputs[i].value = '';
        }
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

    editWaifu(waifuId){
        for(let i = 0; i < this.userWaifus.length; i++){
            if(this.userWaifus[i].waifuId == waifuId){
                let waifuIdInput = document.getElementById('waifuId');
                let newWaifuNameInput = document.getElementById('newWaifuName');
                let newWaifuRankInput = document.getElementById('newWaifuRank');
                let newWaifuReviewInput = document.getElementById('newWaifuReview');
                
                updateInput.removeAttribute('disabled');
                waifuIdInput.value = waifuId;
                newWaifuNameInput.value = this.userWaifus[i].waifuName;
                newWaifuRankInput.value = this.userWaifus[i].waifuRank;
                newWaifuReviewInput.value = this.userWaifus[i].waifuReview;

                newWaifuNameInput.removeAttribute('disabled');
                newWaifuRankInput.removeAttribute('disabled');
                newWaifuReviewInput.removeAttribute('disabled');
            }
        }
    }

    updateWaifu(){
        let newWaifuName;
        let newWaifuRank;
        let newWaifuReview;
        let waifuId = document.getElementById('waifuId').value;
        let newWaifuInfos = [
            newWaifuName = document.getElementById('newWaifuName'),
            newWaifuRank = document.getElementById('newWaifuRank'),
            newWaifuReview = document.getElementById('newWaifuReview')
        ]
        for(let i = 0; i < newWaifuInfos.length; i++){
            newWaifuInfos[i].setAttribute('disabled', '');
        }
        for(let i = 0; i < this.userWaifus.length; i++){
            if(this.userWaifus[i].waifuId == waifuId){
                this.userWaifus[i].waifuName = newWaifuInfos[0].value;
                this.userWaifus[i].waifuRank = newWaifuInfos[1].value;
                this.userWaifus[i].waifuReview = newWaifuInfos[2].value;
            }
        }
        this.listWaifu();
        this.clearInputs();
        
    }
}