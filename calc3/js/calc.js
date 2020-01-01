let Duties_group = document.getElementById('Duties-group');
let vat_group = document.getElementById('vat-group');
let Tax_group = document.getElementById('Tax-group');
let result = document.getElementById('result');
 window.addEventListener('load', function() {
    //hidden results
    Duties_group.style.display = 'none';
    vat_group.style.display = 'none';
    Tax_group.style.display = 'none';
    result.style.display = 'none';
})
 

// listen for submit
document.getElementById('calc-form').addEventListener('submit', function(e){

    e.preventDefault();

    //show loader after  calculateResults
    setTimeout(calculateResults, function() {

        document.getElementById('loading').style.display = 'block';

    }, 3500);

    
});

function calculateResults(){
    //ui vars
   
  
   const produced= document.getElementById("produced").checked;
 

    let Duties = document.getElementById('Duties');
   
    let vat = document.getElementById('vat');
    const chf = document.getElementById('value2').value
  
    let TotalTax = document.getElementById('TotalTax');
    const Vtype = document.getElementById('Vtype').value; 
switch(Vtype) { 
  
       
         
       case "CAR":
           {
        if(produced == true)
        {
        let duty=0
         Duties.value = duty;
         let addition = parseFloat(duty)+parseFloat(chf); 
        let extratax=(0.19*addition);
//          Extratax.value=extratax.toFixed(2);
          
        let sum = parseFloat(chf); sum += parseFloat(duty) ;
        let Vat = (0.19 * sum).toFixed(2); 
        vat.value =Vat;
        let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
        TotalTax.value=Totaltax.toFixed(2);
    } 
    else{
         let duty=(0.10 * chf).toFixed(2);
         Duties.value = duty;
         let addition = parseFloat(duty)+parseFloat(chf); 
        let extratax=(0.19*addition);
  //        Extratax.value=extratax.toFixed(2);
         
        let sum = parseFloat(chf); sum += parseFloat(duty) ;
        let Vat = (0.19 * sum).toFixed(2); 
        vat.value =Vat;
        let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
        TotalTax.value=Totaltax.toFixed(2);
    }
    
    Duties_group.style.display = 'block';
    vat_group.style.display = 'block';
    Tax_group.style.display='block';
    result.style.display = 'block';
     
    break; 
   } 
   
  
   default: { 
     
      break;              
   } 
} 

}












