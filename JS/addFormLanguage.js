let languageCounter = 1

function addFormLanguage(){
  let div = document.getElementById("divLanguages")

  let containerLanguage =  document.createElement("form")
  containerLanguage.setAttribute("id",`insertLanguage_${languageCounter}`)
  div.appendChild(containerLanguage)
  let LabelLanguage  = document.createElement("label")
  let inputNomlanguage = document.createElement("input")
 
LabelLanguage.innerText= "Nom de langue";
  inputNomlanguage.setAttribute("type","text")
 inputNomlanguage.setAttribute("id",`NomLanguage_${languageCounter}`)

containerLanguage.appendChild(LabelLanguage)
containerLanguage.appendChild(inputNomlanguage)

let LabelLevel  = document.createElement("label")
LabelLevel.innerText = "Niveau  de Langue"
let inputLevelLanguage = document.createElement("input")
inputLevelLanguage.setAttribute("type","text")
inputLevelLanguage.setAttribute("id",`level_${languageCounter}`)

containerLanguage.appendChild(LabelLevel)
containerLanguage.appendChild(inputLevelLanguage)

let labelCertif =  document.createElement("label")
labelCertif.innerText = "Certification"
containerLanguage.appendChild(labelCertif)
let inputCertif = document.createElement("input")
inputCertif.setAttribute("type","text")
inputCertif.setAttribute("id",`certification_${languageCounter}`)

containerLanguage.appendChild(inputCertif)

let labelExp =  document.createElement("label")
labelExp.innerText = "Experience"
containerLanguage.appendChild(labelExp)
let inputExp = document.createElement("input")
inputExp.setAttribute("type","text")
inputExp.setAttribute("id",`experience_${languageCounter}`)

containerLanguage.appendChild(inputExp)

let buttonAdd = document.createElement("button")
buttonAdd.setAttribute("type","button")
buttonAdd.innerText = "Ajouter une langue";

containerLanguage.appendChild(buttonAdd)
buttonAdd.addEventListener("click",addFormLanguage)

languageCounter++;
}

