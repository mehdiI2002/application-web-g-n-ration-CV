let educationCounter =  1;
function addFormEducation(){
let div = document.getElementById("educationDiv")
    let containerFormation =  document.createElement("form")
    containerFormation.setAttribute("id",`educationForm_${educationCounter}`)
    div.appendChild(containerFormation)

let LabelDiplome  = document.createElement("label")
let inputDiplome = document.createElement("input")
LabelDiplome.innerText= "Diplome";
  inputDiplome.setAttribute("type","text")
  inputDiplome.setAttribute("id",`diplome_${educationCounter}`)
  containerFormation.appendChild(LabelDiplome)
  containerFormation.appendChild(inputDiplome)



  let LabelOrganisation  = document.createElement("label")
let inputOrganisation = document.createElement("input")
LabelOrganisation.innerText= "Organisation";
  inputOrganisation.setAttribute("type","text")
  inputOrganisation.setAttribute("id",`organisation_${educationCounter}`)
  containerFormation.appendChild(LabelOrganisation)
  containerFormation.appendChild(inputOrganisation)

  let LabelYear = document.createElement("label")
let inputYear = document.createElement("input")
LabelYear.innerText= "Annee";
  inputYear.setAttribute("type","text")
  inputYear.setAttribute("id",`annee_${educationCounter}`)
  containerFormation.appendChild(LabelYear)
  containerFormation.appendChild(inputYear)

let buttonAdd = document.createElement("button")
buttonAdd.setAttribute("type","button")
buttonAdd.innerText = "Ajouter Formation";

containerFormation.appendChild(buttonAdd)
buttonAdd.addEventListener("click",addFormEducation)
educationCounter++;
}