let technlogyCounter = 1;
function addFormTechnologySkill() {
    let div = document.getElementById("technologySkillsDiv")
    let containertechnologySkill = document.createElement("form")
    containertechnologySkill.setAttribute("id", `technologyForm${technlogyCounter}`)
    div.appendChild(containertechnologySkill)

    let LabelSkill = document.createElement("label")
    let inputSkill = document.createElement("input")
    LabelSkill.innerText = "Skill";
    inputSkill.setAttribute("type", "text")
    inputSkill.setAttribute("id", `skillTechnology_${technlogyCounter}`)
    containertechnologySkill.appendChild(LabelSkill)
    containertechnologySkill.appendChild(inputSkill)



    let Labeldetail = document.createElement("label")
    let inputdetail = document.createElement("input")
    Labeldetail.innerText = "Detail";
    inputdetail.setAttribute("type", "text")
    inputdetail.setAttribute("id", `detail_${technlogyCounter}`)
    containertechnologySkill.appendChild(Labeldetail)
    containertechnologySkill.appendChild(inputdetail)


    let buttonAdd = document.createElement("button")
    buttonAdd.setAttribute("type", "button")
    buttonAdd.innerText = "Ajouter Formation";

    containertechnologySkill.appendChild(buttonAdd)
    buttonAdd.addEventListener("click", addFormTechnologySkill)
    technlogyCounter++;
}