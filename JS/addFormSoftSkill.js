
let softSkillsCounter=  1;
function addFormSoftSkill(){
let div = document.getElementById("divSoftSkills")
    let containerLanguage =  document.createElement("form")
    containerLanguage.setAttribute("id",`softSkill_${softSkillsCounter}`)
    div.appendChild(containerLanguage)

let LabelSkill  = document.createElement("label")
let inputSkill = document.createElement("input")
 
LabelSkill.innerText= "SoftSkill";
  inputSkill.setAttribute("type","text")
  inputSkill.setAttribute("id",`skill_${softSkillsCounter}`)
containerLanguage.appendChild(LabelSkill)
containerLanguage.appendChild(inputSkill)


let buttonAdd = document.createElement("button")
buttonAdd.setAttribute("type","button")
buttonAdd.innerText = "Ajouter SoftSkill";

containerLanguage.appendChild(buttonAdd)
buttonAdd.addEventListener("click",addFormSoftSkill)
softSkillsCounter++;
}