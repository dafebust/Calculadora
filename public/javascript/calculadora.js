//Crea la función predeterminada
let funcionPredeterminada = () => {

    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (evento) => {
      //Previene el comportamiento normal del evento, esto es que se actualice en cada click.
      evento.preventDefault();
  
      //Obtiene los valores insertados en cada input.
      let valorPractica = parseFloat(document.getElementById('valorPractica').value); 
      let porcentajeP = parseFloat(document.getElementById('porcentajeP').value); 
      let valorPrimerP = parseFloat(document.getElementById('valorPrimerP').value);
      let valorSegundoP = parseFloat(document.getElementById('valorSegundoP').value);
      let Mejoramiento = parseFloat(document.getElementById('Mejoramiento').value);
      
      var NotaNecesaria = document.getElementById("NotaNecesaria");
      let resultadoPractica = (valorPractica * porcentajeP)/100;
      let porcentajeT = (100 - porcentajeP) / 100;
      
      if (Mejoramiento > valorPrimerP) {
        if (valorPrimerP > valorSegundoP) {
          teorico = ((valorPrimerP + Mejoramiento) / 2) * porcentajeT;
        } else {
          teorico = ((valorSegundoP + Mejoramiento) / 2) * porcentajeT;
        }
      }
      else{
        if(Mejoramiento > valorSegundoP){
          teorico = ((valorPrimerP + Mejoramiento) / 2) * porcentajeT;
        }
        else{
          teorico = ((valorPrimerP + valorSegundoP) / 2) * porcentajeT;
        }
        
      }
      
      total = teorico + resultadoPractica;
      document.getElementById('valorTotal').value = total;
      
      if (total < 60) {
        if (valorPrimerP > valorSegundoP){
          let diferencia = 60-total
          let notaMinimaUltimoParcial = total + diferencia + valorSegundoP
          NotaNecesaria.textContent = "Te quedaste, necesitas: "+notaMinimaUltimoParcial;
        }
        else{
          let diferencia = 60-total
          let notaMinimaUltimoParcial = total + diferencia + valorPrimerP
          NotaNecesaria.textContent = "Te quedaste, necesitas: "+notaMinimaUltimoParcial;
  
        }
      } else {
        NotaNecesaria.textContent = "¡Enhorabuena!";
      }
  
  
    })
  
  
  }
  
  //Llama la función predeterminada.
  funcionPredeterminada();
  
  //No me dio la cabeza pa calcular v:
  
  