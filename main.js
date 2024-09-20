let llegadastardes = prompt('¿llegaste tarde? temprano, puntual, tarde, media falta, falta')
switch(llegadastardes){
    case'temprano':
    alert('antes de las 7:15');
    break;
    case'puntual':
    alert('justo a las 7:15')
    break;
    case'tarde':
    alert('llegada despues de las 7:20')
    break;
    case'media falta':
    alert('llegada despues de las 7:30')
    break;
    case('falta'):
    alert('llegada despues de las 8:00')
    break;
    default:
    alert('introdujiste una opción no válida')

let tiemporequerido = 'llegadatemprana'
let preferenciadellegada = 'horariopuntual'
if((tiemporequerido=='llegadatemprana')&&(preferenciadellegada=='horariopuntual')||(tiemporequerido=='llegadatarde') ){
    console.log('tienes el ingreso a clases');
}else{
    console.warn('evitar que se te marque la falta')
}
} 

/*const grados = [Primero, Segundo, Tercero, Cuarto, Quinto, Sexto]
for (let i = 0; i < estudiantes.length; i++) {
            nombre = "Estudiante" + (i + 1);
            horaLlegada = rand.nextInt(7.15);
grados = grados[rand.nextInt(grados.length)];

        }*/

