//vähentäminen
function vahenna(elementti) {
  e=document.getElementById(elementti);
  maara=Number(e.value);
  maara=maara-1;
  if (maara<0) {
    maara=0;
  }
  e.value=maara;
  laske();
}

//lisääminen
function lisaa(elementti){
  e=document.getElementById(elementti);
  maara=Number(e.value);
  maara=maara+1;
  e.value=maara;
  laske();
}

function laske(yhteismaara) {
  //1. rivi
  var op1=document.lomake.maara1.value;
  var op2=document.lomake.yksikkohinta1.value;
  var tulos1=op1*op2;
  document.lomake.summa1.value=tulos1;

  //2. rivi
  var op3=document.lomake.maara2.value;
  var op4=document.lomake.yksikkohinta2.value;
  var tulos2=op3*op4;
  document.lomake.summa2.value=tulos2;

  //3. rivi
  var op5=document.lomake.maara3.value;
  var op6=document.lomake.yksikkohinta3.value;
  var tulos3=op5*op6;
  document.lomake.summa3.value=tulos3;

 //yhteensä
  var kaikki=tulos1+tulos2+tulos3;
  document.lomake.yhteensa.value=kaikki;
}

function keyCode(event) {
  var n = event.keyCode;
    if (n == 13) {
    laske();
  }
}

document.getElementById("lomake").onkeypress = function(e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      e.preventDefault();
    }
}

document.getElementById('submit').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault(); // estää lomakkeen lähettämisen enterillä
    }
});
