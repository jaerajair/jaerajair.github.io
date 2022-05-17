
window.onload = function() {
    var diff = Math.round((new Date('2023-01-01') - new Date()) / (1000 * 3600 * 24));

    
    document.getElementsByClassName('logo__tagline')[0].innerText = 'Aguardando o fim desse desgoverno em ' +
    diff + ' dias.'

};

