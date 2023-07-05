function splitbill(){
   var bill = document.getElementById(`bill`).value ;
   var persons = document.getElementById(`person`).value ;

   var splitvalue = (bill/persons).toFixed(2);
   document.getElementById(`splits`).innerHTML=splitvalue;
}
