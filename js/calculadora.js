window.onload = function() {
    const selRaza = document.getElementById('raza');
    const slEdad = document.getElementById('edad');
    const txtEdad = document.getElementById('edad-txt');
    const chSeguro = document.getElementById('seguro');
    const chEntrena = document.getElementById('entrenamiento');
    const resTotal = document.getElementById('resultado');

    function actualizar() {
        let precio = parseInt(selRaza.value);
        let años = parseInt(slEdad.value);
        
        txtEdad.innerText = años + ' años';
        
        let subtotal = precio;
        
        if (años < 4) subtotal += 3500;
        if (años > 12) subtotal -= 2500;
        
        if (chSeguro.checked) subtotal += 1800;
        if (chEntrena.checked) subtotal += 4200;
        
        resTotal.innerText = '$' + subtotal.toLocaleString();
    }

    selRaza.addEventListener('change', actualizar);
    slEdad.addEventListener('input', actualizar);
    chSeguro.addEventListener('change', actualizar);
    chEntrena.addEventListener('change', actualizar);
};