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
    lienGithub.innerText = 'LienGithub';
    divGithub.appendChild(lienGithub);
    rs.appendChild(divGithub)
    parent.appendChild(rs)
    var divLinkedin = document.createElement('div')
    divLinkedin.setAttribute('class', 'linkedin');
    var lienLinkedin = document.createElement('a')
    lienLinkedin.setAttribute('class', 'profilLinkedin')
    lienLinkedin.setAttribute('href', cv.profile.links[1]);
    lienLinkedin.innerText = 'LienLinkedin';

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