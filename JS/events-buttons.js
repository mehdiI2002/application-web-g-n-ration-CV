let currentIndex = 0;
document.getElementById('nextButton').addEventListener('click', () => {
    if (currentIndex < cvs.length - 1) {
        currentIndex++;
        showCV(currentIndex);
    }
});

document.getElementById('previousButton').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showCV(currentIndex);
    }
});
document.getElementById('first').addEventListener('click', () => {
        showCV(0);
});
document.getElementById('last').addEventListener('click', () => {

    showCV(cvs.length-1);
});
document.getElementById('rechercheCV').addEventListener('click',()=>{
    window.location.href = '../HTML/recherche.html';

})
document.getElementById('creationCV').addEventListener('click',()=>{
    window.location.href = '../HTML/form.html';
})