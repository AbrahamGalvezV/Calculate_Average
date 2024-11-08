
function calculateAverage() {

  let inputElement = document.getElementById('qualifications');
  inputElement.value = inputElement.value.replace(/[^0-9.,]/g,'');
  let input = inputElement.value;

    // Convierte en un array de números, filtrando los no válidos
    const qualifications = input.split(",").map(Number).filter(note => !isNaNñ(note));

    // Calcula la suma del promedio
    const sum = qualifications.reduce((accumulator, note)=> accumulator + note, 0);
    const average = sum / qualifications.length;
  
    // Muestra el resultado en el pàrrafo con id "result"
    document.getElementById("result").textContent = average.toFixed(2); 
  
  }


// Añade un evento que ejecuta la función cada vez que el usuario escribe en el input
document.getElementById('qualifications').addEventListener('input', calculateAverage);