let week = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];



// Eliminar el día domingo del inicio de la lista.

week.shift();



// Agregar el día lunes al inicio de la lista.

week.unshift('Monday');



// Agregar el día domingo al final de la lista.

week.push('Sunday');



// Insertar el día viernes en la posición correspondiente.

week.splice(4, 0, 'Friday');



// Mostrar en pantalla elemento por elemento usando un for.

for (let i = 0; i < week.length; i++) {

  alert(week[i]);

}
