let experienceCounter = 1;
function addFormExperience() {
    let div = document.getElementById("experiencesDiv")
    let containerExperience = document.createElement("form")
    containerExperience.setAttribute("id", `experienceForm_${experienceCounter}`)
    div.appendChild(containerExperience)

    let labelType = document.createElement("label")
    let inputType = document.createElement("input")
    labelType.innerText = "Type";
    inputType.setAttribute("type", "text")
    inputType.setAttribute("id", `type_${experienceCounter}`)
    containerExperience.appendChild(labelType)
    containerExperience.appendChild(inputType)



    let LabelOrganisation = document.createElement("label")
    let inputOrganisation = document.createElement("input")
    LabelOrganisation.innerText = "Organisation";
    inputOrganisation.setAttribute("type", "text")
    inputOrganisation.setAttribute("id", `org_${educationCounter}`)
    containerExperience.appendChild(LabelOrganisation)
    containerExperience.appendChild(inputOrganisation)

    let labelTitle = document.createElement("label")
    let inputTitle = document.createElement("input")
    labelTitle.innerText = "Titre";
    inputTitle.setAttribute("type", "text")
    inputTitle.setAttribute("id", `title_${experienceCounter}`)
    containerExperience.appendChild(labelTitle)
    containerExperience.appendChild(inputTitle)


    let labelTechnologies = document.createElement("label")
    let inputTechnologies = document.createElement("input")
    labelTechnologies.innerText = "Technologies";
    inputTechnologies.setAttribute("type", "text")
    inputTechnologies.setAttribute("id", `technologies_${experienceCounter}`)
    containerExperience.appendChild(labelTechnologies)
    containerExperience.appendChild(inputTechnologies)


    let labelA = document.createElement("label")
    let inputA = document.createElement("input")
    labelA.innerText= "Annee";
      inputA.setAttribute("type","text")
      inputA.setAttribute("id",`year_${experienceCounter}`)
      containerExperience.appendChild(labelA)
      containerExperience.appendChild(inputA)


      let LabelDuration = document.createElement("label")
      let inputDuration = document.createElement("input")
      LabelDuration.innerText= "Duree";
        inputDuration.setAttribute("type","text")
        inputDuration.setAttribute("id",`duration_${experienceCounter}`)
        containerExperience.appendChild(LabelDuration)
        containerExperience.appendChild(inputDuration)
  



    let buttonAdd = document.createElement("button")
    buttonAdd.setAttribute("type", "button")
    buttonAdd.innerText = "Ajouter Formation";




    containerExperience.appendChild(buttonAdd)
    buttonAdd.addEventListener("click", addFormExperience)
    experienceCounter++;
}