
function afficheCvRechercher(){
   let erreur = true;
   document.getElementById("erreur").innerText = " ";
   document.getElementsByClassName("CVs").textContent = " ";
   let inputValue  = document.getElementById('recherche').value.toUpperCase()
   

for (let i = 0; i < cvs.length; i++) {
   let fullName = (cvs[i].profile.firstName + " " + cvs[i].profile.lastName).toUpperCase();
   if(fullName == ((inputValue))){
      showCV(i);
      erreur = false;
      break;
   }
  
}
if(erreur){
   document.getElementById("erreur").innerText = "CV non touver"
   document.getElementsByClassName("CVs")[0].innerHTML = " ";


}
}
    
