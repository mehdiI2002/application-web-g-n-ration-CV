function createDivRight(parent) {
    var divRight = document.createElement('div');
    divRight.setAttribute('class', 'div-right')
    parent.appendChild(divRight);
    return divRight;
}
function createSpanName(cv, parent) {
    var name = document.createElement('span');
    name.setAttribute('class', 'name')
    name.innerText = cv.profile.firstName + ' ' + cv.profile.lastName;
    parent.appendChild(name)
}
function createDivSommaire(cv, parent) {
    var divSommaire = document.createElement('div');
    divSommaire.setAttribute('class', 'sommaire')
    divSommaire.style.lineHeight = '25px';
    divSommaire.innerText = cv.profile.professionalSummary;
    parent.appendChild(divSommaire)
}
function createDivFormation(cv, parent) {
    var divFormation = document.createElement('div')
    divFormation.setAttribute('class', 'diplomes-formation section')
    parent.appendChild(divFormation)
    var divTitleFormation = document.createElement('span')
    divTitleFormation.setAttribute('class', 'title')
    var keys = Object.keys(cv);
    divTitleFormation.innerText = keys[1];
    divFormation.appendChild(divTitleFormation);
    var education = cv.education
    for (let i = 0; i < education.length; i++) {
        var divDiploma = document.createElement('div');
        divDiploma.setAttribute('class', 'Master')
        divFormation.appendChild(divDiploma);
        divTitle = document.createElement('span')
        divTitle.setAttribute('class', 'titleMaster')
        divTitle.innerText = education[i].diploma;
        divDiploma.appendChild(divTitle)
        divDesciptionDiplome = document.createElement('div')
        divDesciptionDiplome.setAttribute('class', 'descriptionMaster')
        divDesciptionDiplome.innerText = education[i].organisation + " - " + education[i].year;
        divDiploma.appendChild(divDesciptionDiplome)
    }
}
function createDivExperience(cv, parent) {
    var divProjets = document.createElement('div');
    divProjets.setAttribute('class', 'projets-academique section');
    parent.appendChild(divProjets)
    var divTitleProjet = document.createElement('span')
    divTitleProjet.setAttribute('class', 'title')
    var keys = Object.keys(cv);
    divTitleProjet.innerText = keys[3];
    divProjets.appendChild(divTitleProjet)
    var experiences = cv.experiences;
    for (let i = 0; i < experiences.length; i++) {
        var divProject = document.createElement('div')
        divProject.setAttribute('class', 'projet')
        var spanTitleProject = document.createElement('span');
        spanTitleProject.setAttribute('class', 'titleProject')
        spanTitleProject.innerText = experiences[i].title
        divProject.appendChild(spanTitleProject)
        divProjets.appendChild(divProject)
        var divLieuProjets = document.createElement('div');
        divLieuProjets.setAttribute('class', 'lieuProjet')
        var Duration = Object.keys(cv.experiences);
        divLieuProjets.innerText = experiences[i].year + ' ' + experiences[i].organisation + " " +
            experiences[i].type + " de  " + experiences[i].duration;
        let technologies = cv.experiences[i].technologies;
        divTechnologies = document.createElement('div')
        divTechnologies.setAttribute('class', 'descProjet');
        divProject.appendChild(divTechnologies)
        for (let j = 0; j < technologies.length; j++) {
            var divTechnology = document.createElement('div');
            if (j < technologies.length) {
                divTechnology.innerText = technologies[j] + ".";
            } else {
                divTechnology.innerText = technologies[j] + ",";
            }
            divTechnologies.appendChild(divTechnology);
        }
        divProject.appendChild(divLieuProjets)
    }
}
function createDivTechnologiesSkills(cv, parent) {
    var divTechnologies = document.createElement('div')
    divTechnologies.setAttribute('class', 'competences section')
    parent.appendChild(divTechnologies);
    var divTechnologiesTitle = document.createElement('span');
    divTechnologiesTitle.setAttribute('class', 'title');
    var keys = Object.keys(cv);
    divTechnologiesTitle.innerText = keys[2]
    divTechnologies.appendChild(divTechnologiesTitle)
    var technologieSkills = cv.technologySkills;
    for (let i = 0; i < technologieSkills.length; i++) {
        var divCompetance = document.createElement('div');
        divCompetance.setAttribute('class', 'competence')
        divTechnologies.appendChild(divCompetance)

        var divTitreCompetence = document.createElement('span');
        divTitreCompetence.setAttribute('class', 'titreCompetence');
        divTitreCompetence.innerText = technologieSkills[i].skill;

        var divCompetenceDesc = document.createElement('div');
        divCompetenceDesc.setAttribute('class', 'competencesDesc');
        divCompetenceDesc.innerText = technologieSkills[i].details;
        divCompetance.appendChild(divTitreCompetence)
        divCompetance.appendChild(divCompetenceDesc)
    }
}