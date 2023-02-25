let user = new User();

document.getElementById('btnAddWaifu').addEventListener('click', function buttonPressed(){
    user.addWaifu();
});
document.getElementById('btnUpdateWaifu').addEventListener('click', function buttonPressed(){
    user.updateWaifu();
});