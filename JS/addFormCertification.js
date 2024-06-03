let certifCounter =  1;
function addFormCertification(){
let div = document.getElementById("certifDiv")
    let containerCertif =  document.createElement("form")
    containerCertif.setAttribute("id",`certifForm_${certifCounter}`)
    div.appendChild(containerCertif)

let labelTitle = document.createElement("label")
let inputTitle = document.createElement("input")
labelTitle.innerText= "Titre";
  inputTitle.setAttribute("type","text")
  inputTitle.setAttribute("id",`titleCertif_${certifCounter}`)
  containerCertif.appendChild(labelTitle)
  containerCertif.appendChild(inputTitle)

  let labelOrg = document.createElement("label")
let inputOrg = document.createElement("input")
labelOrg.innerText= "Organisation";
  inputOrg.setAttribute("type","text")
  inputOrg.setAttribute("id",`organisationCertif_${certifCounter}`)
  containerCertif.appendChild(labelOrg)
  containerCertif.appendChild(inputOrg)

  let labelLink= document.createElement("label")
  let inputLink = document.createElement("input")
  labelLink.innerText= "Lien";
    inputLink.setAttribute("type","text")
    inputLink.setAttribute("id",`lienCertif_${certifCounter}`)
    containerCertif.appendChild(labelLink)
    containerCertif.appendChild(inputLink)
  


  
let buttonAdd = document.createElement("button")
buttonAdd.setAttribute("type","button")
buttonAdd.innerText = "Ajouter Formation";

containerCertif.appendChild(buttonAdd)
buttonAdd.addEventListener("click",addFormCertification)
certifCounter++;
}