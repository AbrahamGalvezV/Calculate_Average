
function calculateAverage() {
  // Obtener el valor del input
  let input = document.getElementById("qualifications").value;

  if (!input) {
    document.getElementById("result").textContent = "No se ingresaron notas";
    return;
  }
  // Convierte en un array de números, filtrando los no válidos
  const qualifications = input.split(",").map(Number).filter(qualifications => !isNaN(qualifications));

  if (qualifications.length === 0) {
    document.getElementById("result").textContent = "No se registraron notas válidas";
    return;
  }
  
  // Calcula la suma del promedio
  const suma = qualifications.reduce((acumulador, qualifications)=> acumulador + qualifications, 0);
  const promedio = suma / qualifications.length;

  // Muestra el resultado en el pàrrafo con id "result"
  document.getElementById("result").textContent = `El promedio es: ${promedio.toFixed(2)}`; 

} 
// Añade un evento que ejecuta la función cada vez que el usuario escribe en el input
document.getElementById('qualifications').addEventListener('input', calculateAverage);