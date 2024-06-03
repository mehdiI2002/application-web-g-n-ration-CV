function showCV(index) {
    createDivCVs();
    let cvContainer = document.querySelector('.CVs');//hadi mafhmthach mzn
    console.log(cvContainer)
    cvContainer.innerHTML = ' ';
    const cv = cvs[index];
    const divCV = createDivCV(cvContainer);
    const divLeft = createDivLeft(divCV);
    createDivImage(cv, divLeft);
    createDivInfoPersonnel(cv, divLeft);
    createDivReseauxSociaux(cv, divLeft);
    createDivLangues(cv, divLeft);
    createDivSoftSkills(cv, divLeft);
    createDivInterests(cv, divLeft);
    const divRight = createDivRight(divCV);
    createSpanName(cv, divRight);
    createDivSommaire(cv, divRight);
    createDivFormation(cv, divRight);
    createDivExperience(cv, divRight);
    createDivTechnologiesSkills(cv, divRight)
}
function onDOMContentLoaded() {
    let currentIndex= 0;
    showCV(currentIndex);
}

