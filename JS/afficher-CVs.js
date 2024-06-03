function liste_CVs(){
createDivCVs();
let cvContainer = document.querySelector('.CVs');
 cvContainer.innerHTML = ' ';//hadi mafhmthach mzn
console.log(cvContainer)
const divCV = createDivCV(cvContainer);
for(let i = 0;i<cvs.length;i++){
const divLeft = createDivLeft(divCV);
createDivImage(cvs[i], divLeft);
createDivInfoPersonnel(cvs[i], divLeft);
}
}