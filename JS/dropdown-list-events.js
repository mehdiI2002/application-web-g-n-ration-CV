function chooseStyleCV(){
   let style = document.getElementById('styles').value;
   let link = document.getElementById('link');
   document.getElementById('link').removeAttribute('href');
   document.getElementById('link').setAttribute('href',`CSS/${style}.css`);
}

