
function createDivCV() {
    var divCV = document.createElement('div');
    divCV.setAttribute('class', 'CV');
    document.body.appendChild(divCV);
    return divCV;
}


function createDivLeft(parent) {
    var divLeft = document.createElement('div');
    divLeft.setAttribute('class', 'div-left')
    parent.appendChild(divLeft);
    return divLeft;
}
function createDivImage(cv, parent) {
    var divImage = document.createElement('div');
    divImage.setAttribute('class', 'image')
    var img = document.createElement('img')
    img.setAttribute('src', cv.profile.photo);
    divImage.appendChild(img);
    parent.appendChild(divImage)
}
function createDivInfoPersonnel(cv, parent) {
    var divInfosPersonnelle = document.createElement('div')
    divInfosPersonnelle.setAttribute('class', 'donnees-personnelles');
    parent.appendChild(divInfosPersonnelle)
    var divEmail = document.createElement('div');
    divEmail.setAttribute('class', 'email')
    divEmail.innerText = cv.profile.email;
    divInfosPersonnelle.appendChild(divEmail);
    var divAdresse = document.createElement('div');
    divAdresse.setAttribute('class', 'adresse')
    divAdresse.innerText = cv.profile.address
    divInfosPersonnelle.appendChild(divAdresse)
    var divAge = document.createElement('div')
    divAge.setAttribute('class', 'age')
    divAge.innerText = cv.profile.birthday.day + '/' + cv.profile.birthday.month + '/' + cv.profile.birthday.year
    divInfosPersonnelle.appendChild(divAge)
    var divTel = document.createElement('div')
    divTel.setAttribute('class', 'tel')
    divTel.innerText = cv.profile.phone;
    divInfosPersonnelle.appendChild(divTel)
}
function createDivReseauxSociaux(cv, parent) {
    var rs = document.createElement('div');
    rs.setAttribute('class', 'reseau sociaux')
    var tittleRs = document.createElement('span');
    tittleRs.setAttribute('class', 'title')
    var keys = Object.keys(cv.profile);
    tittleRs.innerText = keys[8];
    rs.appendChild(tittleRs);
    parent.appendChild(rs);
    var divGithub = document.createElement('div')
    divGithub.setAttribute('class', 'github');
    var lienGithub = document.createElement('a')
    lienGithub.setAttribute('href', cv.profile.links[0]);
    lienGithub.setAttribute('class', 'profilGithub')
    lienGithub.innerText = '@mehdiI2002';
    divGithub.appendChild(lienGithub);
    rs.appendChild(divGithub)
    parent.appendChild(rs)
    var divLinkedin = document.createElement('div')
    divLinkedin.setAttribute('class', 'linkedin');
    var lienLinkedin = document.createElement('a')
    lienLinkedin.setAttribute('class', 'profilLinkedin')
    lienLinkedin.setAttribute('href', cv.profile.links[1]);
    lienLinkedin.innerText = '@EL MEHDI AMARTI RIFFI';

    divLinkedin.appendChild(lienLinkedin);
    rs.appendChild(divLinkedin)
    parent.appendChild(rs)
}
function createDivLangues(cv, parent) {
    var divLangue = document.createElement('div');
    divLangue.setAttribute('class', 'langues')
    var titleLangue = document.createElement('span')
    titleLangue.setAttribute('class', 'title')
    var keys = Object.keys(cv);
    titleLangue.innerText = keys[5];
    divLangue.appendChild(titleLangue)
    parent.appendChild(divLangue)
    var varLanguages = cv.languages;
    for (let language of varLanguages) {
        divNiveauLangue = document.createElement('div');
        divNiveauLangue.setAttribute('class', 'niveauLangue');
        divNiveauLangue.innerHTML += language.language + ":" + language.level;
        divLangue.appendChild(divNiveauLangue)
        parent.appendChild(divLangue)

    }
}
function createDivSoftSkills(cv, parent) {
    var divSoftSkills = document.createElement("div");
    divSoftSkills.setAttribute('class', 'atouts');
    var divTitleAtouts = document.createElement('span');
    divTitleAtouts.setAttribute('class', 'title');
    var keys = Object.keys(cv);
    divTitleAtouts.innerText = keys[4];
    divSoftSkills.appendChild(divTitleAtouts)
    parent.appendChild(divSoftSkills)
    var atouts = cv.softSkills;
    for (let index = 0; index < atouts.length; index++) {
        var divAtoutContent = document.createElement('div')
        divAtoutContent.setAttribute('class', 'atout')
        divAtoutContent.innerHTML += atouts[index] + "<br>";
        divSoftSkills.appendChild(divAtoutContent)
        parent.appendChild(divSoftSkills)
    }
}
function createDivInterests(cv, parent) {
    var divInterest = document.createElement('div')
    divInterest.setAttribute('class', 'centre-interet');
    var divTitleInterests = document.createElement('span')
    divTitleInterests.setAttribute('class', 'title');
    var keys = Object.keys(cv);
    divTitleInterests.innerText = keys[6];
    divInterest.appendChild(divTitleInterests);
    parent.appendChild(divInterest)
    var interests = cv.interests;
    for (let index = 0; index < interests.length; index++) {
        var divInterestsContent = document.createElement('div');
        divInterestsContent.setAttribute('class', 'interet')
        divInterestsContent.innerText += interests[index];
        divInterest.appendChild(divInterestsContent);
        parent.appendChild(divInterest)
    }
}
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
function main() {
    var divCv = createDivCV();
    var divLeft = createDivLeft(divCv);
    createDivImage(cv, divLeft);
    createDivInfoPersonnel(cv, divLeft)
    createDivReseauxSociaux(cv, divLeft)
    createDivLangues(cv, divLeft)
    createDivSoftSkills(cv, divLeft)
    createDivInterests(cv, divLeft)
    var divRight = createDivRight(divCv)
    createSpanName(cv, divRight)
    createDivSommaire(cv, divRight)
    createDivFormation(cv, divRight)
    createDivExperience(cv, divRight)
    createDivTechnologiesSkills(cv, divRight)
}
main();
