// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.



// definisco variabili a cui assegno un valore in seguito
  var prezzoStandard;
  var sconto = 0;
  var prezzo;


// richiedo all'utente il numero di km da percorrere e l'età
  var km = parseInt( prompt (" Buongiono utente, quanti chilometri devi percorrere ? ") )
  var eta = parseInt( prompt(" inserire la propria età ") )
  console.log(km,eta);
// calcolo il prezzo del biglietto in base ai chilometri

// se l'utente è minorenne applico lo sconto del 20%

// se l'utente è over 65 applico lo sconto del 60%

// output con il prezzo finale del biglietto tenendo conto del numero di cifre decimali appropriato
