function createDivCVs(){
    var divCVs = document.createElement('div')
 divCVs.setAttribute('class','CVs');
document.body.appendChild(divCVs)
return divCVs;

}
function createDivCV(parent) {
    var divCV = document.createElement('div');
    divCV.setAttribute('class', 'CV');
  parent.appendChild(divCV);
    return divCV;
}