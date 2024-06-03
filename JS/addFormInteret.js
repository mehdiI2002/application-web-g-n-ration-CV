let interetCounter =  1;
function addFormInteret(){
let div = document.getElementById("intérêts")
    let containerLanguage =  document.createElement("form")
    containerLanguage.setAttribute("id",`intérêts_${interetCounter}`)
    div.appendChild(containerLanguage)

let LabelInteret  = document.createElement("label")
let inputInteret = document.createElement("input")
 
LabelInteret.innerText= "Interet";
  inputInteret.setAttribute("type","text")
  inputInteret.setAttribute("id",`intérêt_${interetCounter}`)

containerLanguage.appendChild(LabelInteret)
containerLanguage.appendChild(inputInteret)


let buttonAdd = document.createElement("button")
buttonAdd.setAttribute("type","button")
buttonAdd.innerText = "Ajouter Interet";

containerLanguage.appendChild(buttonAdd)
buttonAdd.addEventListener("click",addFormInteret)
interetCounter++;
}