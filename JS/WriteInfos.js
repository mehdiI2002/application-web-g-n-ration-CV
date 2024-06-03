function writeCV() {
   
    let languages = [];

    for (let i = 0; i < languageCounter; i++) {
        let nameLanguage = document.getElementById(`NomLanguage_${i}`).value;
        let level = document.getElementById(`level_${i}`).value;
        let certification = document.getElementById(`certification_${i}`).value;
        let experience = document.getElementById(`experience_${i}`).value;



        languages.push({
            language: nameLanguage,
            level: level,
            certification: certification,
            experience: experience
        })
    }
    let softSkills = []
    for (let j = 0; j < softSkillsCounter; j++) {
        let skill = document.getElementById(`skill_${j}`).value;
        softSkills.push(skill);

    }
    let interets = []
    for (let k = 0; k < interetCounter; k++) {
        let interet = document.getElementById(`intérêt_${k}`).value;
        interets.push(interet)
    }
    let educations = []
    for (let l = 0; l < educationCounter; l++) {
        let diplomeInput = document.getElementById(`diplome_${l}`).value;
        let organisationInput = document.getElementById(`organisation_${l}`).value;
        let dateInput = document.getElementById(`annee_${l}`).value;

        educations.push({
            diploma: diplomeInput,
            organisation: organisationInput,
            year: dateInput
        })

    }
    let technlogySkills = []
    let detailsTechnologies = []

    for (let m = 0; m < technlogyCounter; m++) {
        let inputSkill = document.getElementById(`skillTechnology_${m}`).value
        let inputDetail = document.getElementById(`detail_${m}`).value

        detailsTechnologies = inputDetail.split(',').map(detail => detail.trim());

        technlogySkills.push({
            skill: inputSkill,
            details: detailsTechnologies
        })
    }
    let experiences = []
    let technologies = []
    for (let n = 0; n < experienceCounter; n++) {
        let inputType = document.getElementById(`type_${n}`).value
        let inputOrganisation = document.getElementById(`org_${n}`).value
        let inputTitle = document.getElementById(`title_${n}`).value
        let inputTechnologies = document.getElementById(`technologies_${n}`).value
        let inputYear = document.getElementById(`year_${n}`).value
        let inputDuration = document.getElementById(`duration_${n}`).value
        technologies = inputTechnologies.split(',').map(technology => technology.trim());
        experiences.push({
            type: inputType,
            organisation: inputOrganisation,
            title: inputTitle,
            technologies: technologies,
            year: inputYear,
            duration: inputDuration
        })

    }
    let certifications = []
   for (let o = 0;o<certifCounter;o++){
    let inputTitle = document.getElementById(`titleCertif_${o}`).value
    let inputOrg = document.getElementById(`organisationCertif_${o}`).value
    let inputLink = document.getElementById(`lienCertif_${o}`).value
     certifications.push({
        
        title : inputTitle,
        organisation : inputOrg,
        link : inputLink
     })
    
   }
   
  
   let yearBorn = document.getElementById("yearBorn").value
   
   let birthDate = new Date(yearBorn);
   const newCV = {
       profile: {
           photo: document.getElementById("image").value,//image,
           firstName:  document.getElementById("firstName").value,
           lastName: document.getElementById("lastName").value,
           birthday: {
               day: birthDate.getDate(),
               month: birthDate.getMonth() + 1,
               year:  birthDate.getFullYear()
           },
           phone: document.getElementById("tel").value,
           email: document.getElementById("email").value,
           address:  document.getElementById("adresse").value,
           professionalSummary: document.getElementById("summary").value,
           links: [ document.getElementById("github").value, document.getElementById("linkedin").value]
       },
       education: educations,
       technologySkills: technlogySkills,
       experiences: experiences,
       softSkills: softSkills,
       languages: languages,
       interests: interets,
       certifications: certifications
          
   }
   console.log("New CV added: ", newCV);
   cvs.push(newCV); 
   showCV(cvs.length - 1); 
   }
   

