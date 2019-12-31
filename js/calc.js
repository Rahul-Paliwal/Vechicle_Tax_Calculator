   //result fields 
let Duties_group = document.getElementById('Duties-group');
let CAR_Tax_group = document.getElementById('CAR_Tax-group');
let vat_group = document.getElementById('vat-group');
let Tax_group = document.getElementById('Tax-group');
let result = document.getElementById('result');
let CO2_alert = document.getElementById('CO2_alert');
let flag;

 window.addEventListener('load', function() {
    //hidden results
    Duties_group.style.display = 'none';
    CAR_Tax_group.style.display = 'none';
    vat_group.style.display = 'none';
    Tax_group.style.display = 'none';
    result.style.display = 'none';
    CO2_alert.style.display='none';
})

 

// listen for submit
document.getElementById('calc-form').addEventListener('submit', function(e){


    e.preventDefault();
    flag = 0;
    //show loader after  calculateResults
    setTimeout(calculateResults, function() {
        document.getElementById('loading').style.display = 'block';

    }, 3500);

    
});

function calculateResults(){
    //ui vars
   
    const weight = document.getElementById('weight');
    const cubic_capacity =  document.getElementById('cubic_capacity');
    const condition= document.getElementById("condition").checked;
    const produced= document.getElementById("produced").checked;

    let Duties = document.getElementById('Duties');
    let CAR_Tax = document.getElementById('CAR_Tax');
    let vat = document.getElementById('vat');
    let TotalTax = document.getElementById('TotalTax');
    let chf = document.getElementById('value2').value;
    let Vtype = document.getElementById('Vtype').value; 
    let enginetype = document.getElementById('enginedropdown').value;


switch(Vtype) { 
   case "CAR": { 
   
  
    switch(enginetype)
    {
            case "100% Electro":
                {
                      if(condition == true)
                         {
                            CO2_alert.style.display = 'block';
                            result.style.display = 'block';
                            Duties_group.style.display = 'none';
                            vat_group.style.display = 'none';
                            Tax_group.style.display = 'none';
                            CAR_Tax_group.style.display='none';
                            flag = 1;
     
                        }
                if(produced==true){
                  
                    const duty = 0;
           Duties.value = duty;
           let x = parseFloat(weight.value);
           let cartax = 0;
           CAR_Tax.value = cartax;
           let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(duty) ;
           let Vat = (0.077 * sum).toFixed(2); 
               vat.value =Vat;
           if (x<1200){
              
             
              
               let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
               TotalTax.value=Totaltax.toFixed(2);
           }
           else if(x>=1200 && x<1600) {
              
               let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
               TotalTax.value=Totaltax.toFixed(2);


           }
           else
           {
            
               let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
               TotalTax.value=Totaltax.toFixed(2);
           }
                
                
        }
                else{
                   
                    let x = parseFloat(weight.value);
                    let cartax = 0;
                    CAR_Tax.value = cartax;
                    let Duty;
                   
                    if (x<1200){
                       Duty = x * 0.12;
                        Duties.value = Duty;
                        let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
                        let Vat = (0.077 * sum).toFixed(2); 
                        vat.value =Vat;
                        let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
                        TotalTax.value=Totaltax.toFixed(2);
                    }
                    else if(x>=1200 && x<1600) {
                        Duty = x * 0.14;
                        Duties.value = Duty.toFixed(2);
                        let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
                        let Vat = (0.077 * sum).toFixed(2); 
                        vat.value =Vat;
                        let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
                        TotalTax.value=Totaltax.toFixed(2);


                    }
                    else
                    {
                        Duty = x * 0.15;
                        Duties.value = Duty.toFixed(2);
                        let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
                        let Vat = (0.077 * sum).toFixed(2); 
                        vat.value =Vat;
                        let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
                        TotalTax.value=Totaltax.toFixed(2);
                    }
           
    }
    if(flag == 0 ){
        CAR_Tax_group.style.display = 'block';
        result.style.display = 'block';
        Duties_group.style.display = 'block';
        vat_group.style.display = 'block';
        Tax_group.style.display = 'block';
        CO2_alert.style.display='none';
      }
    break;
}
case "Benzin":
    {
        
        let x = parseFloat(cubic_capacity.value);
        let y = parseFloat(weight.value);
        let z = parseFloat(chf);
        if(condition == true)
        {
           CO2_alert.style.display = 'block';
           result.style.display = 'block';
           Duties_group.style.display = 'none';
           vat_group.style.display = 'none';
           Tax_group.style.display = 'none';
           CAR_Tax_group.style.display='none';
           flag = 1;

       }
        if(produced==true)
        {
            const duty = 0;
            Duties.value = duty;
        let cartax = (0.04 * chf).toFixed(2);
        CAR_Tax.value = cartax;
        let sum = parseFloat(cartax) ;  sum += parseFloat(chf) ;
        Vat = (0.077 * sum).toFixed(2)
        vat.value =Vat; 
     if((x==1598)&&(z==15000)&&(y==1600))
        {
          CAR_Tax.value=cartax;
          CAR_Tax_group.style.display = 'block';
          result.style.display = 'block';
          Duties_group.style.display = 'none';
          vat_group.style.display = 'none';
          Tax_group.style.display = 'none';
          CO2_alert.style.display='none';
          flag = 1;
        }
   else if (x>=1 && x<=1500)
   {
      
     
      
       let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);
   }
   else if((x>=1501 && x<=3000)&& (y<1201) ) {
      
       let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);
       


   }
   else if((x>=1501 && x<=3000)&& (y>=1201 && y <=1600))
   {
    
       let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);
      
   }
   else if((x>=1501 && x<=3000)&& (y>1600 ))
   {
    
       let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);
      
   }
   else if((x>3000)&& (y<1601))
   {
    
       let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);
     
   }
      
   else if((x>3000)&& (y>1600))
   {
    
       let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);
    
   }
  
     
        
}
else
{
    let x = parseFloat(cubic_capacity.value);
    let y = parseFloat(weight.value);
    let z = parseFloat(chf)
    let Duty;
    let cartax = (0.04 * chf).toFixed(2);
        CAR_Tax.value = cartax;

   
  
     if((x==1598) && (z==15000) && (y==1600))
     {
        CAR_Tax.value=cartax;
       CAR_Tax_group.style.display = 'block';
       result.style.display = 'block';
       Duties_group.style.display = 'none';
       vat_group.style.display = 'none';
       Tax_group.style.display = 'none';
       CO2_alert.style.display='none';
       flag = 1;
     } 
   else if (x>=1 && x<=1500)
    {
       Duty = (y * 0.12)
       Duties.value = Duty.toFixed(2);
       let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
       let Vat = (0.077 * sum).toFixed(2); 
       vat.value =Vat;
       let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
       TotalTax.value=Totaltax.toFixed(2);
    }
    else if((x>=1501 && x<=3000)&& (y<1201) ) {
       
        Duty = (y * 0.12)
        Duties.value = Duty.toFixed(2);
        let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
        let Vat = (0.077 * sum).toFixed(2); 
        vat.value =Vat;
        let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
        TotalTax.value=Totaltax.toFixed(2);
 
 
    }
    else if((x>=1501 && x<=3000)&& (y>=1201 && y <=1600))
    {
        Duty = (y * 0.14)
       Duties.value = Duty.toFixed(2);
       let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
       let Vat = (0.077 * sum).toFixed(2); 
       vat.value =Vat;
       let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
       TotalTax.value=Totaltax.toFixed(2);
    }
    else if((x>=1501 && x<=3000)&& (y>1600))
    {
     
        Duty = (y * 0.15)
        Duties.value = Duty.toFixed(2);
        let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
        let Vat = (0.077 * sum).toFixed(2); 
        vat.value =Vat;
        let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
        TotalTax.value=Totaltax.toFixed(2);
    }
    else if((x>3000)&& (y<1601))
    {
     
        Duty = (y * 0.14)
        Duties.value = Duty.toFixed(2);
        let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
        let Vat = (0.077 * sum).toFixed(2); 
        vat.value =Vat;
        let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
        TotalTax.value=Totaltax.toFixed(2);
    }
       
    else if((x>3000)&& (y>1600))
    {
     
        Duty = (y * 0.15)
       Duties.value = Duty.toFixed(2);
       let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
       let Vat = (0.077 * sum).toFixed(2); 
       vat.value =Vat;
       let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
       TotalTax.value=Totaltax.toFixed(2);
    }

}

 if(flag == 0 ){
    CAR_Tax_group.style.display = 'block';
    result.style.display = 'block';
    Duties_group.style.display = 'block';
    vat_group.style.display = 'block';
    Tax_group.style.display = 'block';
    CO2_alert.style.display='none';
  }



break;
}
case"Diesel":{
    let x = parseFloat(cubic_capacity.value);
    let y = parseFloat(weight.value)
    let z = parseFloat(chf);
    if(condition == true)
    {
       CO2_alert.style.display = 'block';
       result.style.display = 'block';
       Duties_group.style.display = 'none';
       vat_group.style.display = 'none';
       Tax_group.style.display = 'none';
       CAR_Tax_group.style.display='none';
       flag = 1;

   }
    if(produced==true){
        const duty = 0;
        Duties.value = duty;
    let cartax = (0.04 * chf).toFixed(2);
    CAR_Tax.value = cartax;
    let sum = parseFloat(cartax) ;  sum += parseFloat(chf) ;
    Vat = (0.077 * sum).toFixed(2)
    vat.value =Vat; 
if (x>=1 && x<=1500)
{
  
 
  
   let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x>=1501 && x<=2500)&& (y<1201) ) {
  
   let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);


}
else if((x>=1501 && x<=2500)&& (y>=1201 && y <=1600))
{

   let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x>=1501 && x<=2500)&& (y>1600))
{

   let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x>2500)&& (y<1601))
{

   let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);
}
  
else if((x>2500)&& (y>1600))
{

   let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x==1598)&&(z=15000)&&(y=1600))
{
  CAR_Tax.value=cartax;
  CAR_Tax_group.style.display = 'block';
  result.style.display = 'block';
  Duties_group.style.display = 'none';
  vat_group.style.display = 'none';
  Tax_group.style.display = 'none';
  CO2_alert.style.display='none';
  flag = 1;
}

    
    
}
else
{
let x = parseFloat(cubic_capacity.value);
let y = parseFloat(weight.value);
let z = parseFloat(chf)
let Duty;
let cartax = (0.04 * chf).toFixed(2);
 CAR_Tax.value = cartax;


if (x>=1 && x<=1500)
{
   Duty = (y * 0.12)
   Duties.value = Duty.toFixed(2);
   let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
   let Vat = (0.077 * sum).toFixed(2); 
   vat.value =Vat;
   let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x>=1501 && x<=2500)&& (y<1201) ) {
   
    Duty = (y * 0.12)
    Duties.value = Duty.toFixed(2);
    let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
    let Vat = (0.077 * sum).toFixed(2); 
    vat.value =Vat;
    let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
    TotalTax.value=Totaltax.toFixed(2);


}
else if((x>=1501 && x<=2500)&& (y>=1201 && y <=1600))
{
 
    Duty = (y * 0.14)
   Duties.value = Duty.toFixed(2);
   let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
   let Vat = (0.077 * sum).toFixed(2); 
   vat.value =Vat;
   let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x>=1501 && x<=2500)&& (y>1600))
{
 
    Duty = (y * 0.15)
    Duties.value = Duty.toFixed(2);
    let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
    let Vat = (0.077 * sum).toFixed(2); 
    vat.value =Vat;
    let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
    TotalTax.value=Totaltax.toFixed(2);
}
else if((x>2500)&& (y<1601))
{
 
    Duty = (y * 0.14)
    Duties.value = Duty.toFixed(2);
    let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
    let Vat = (0.077 * sum).toFixed(2); 
    vat.value =Vat;
    let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
    TotalTax.value=Totaltax.toFixed(2);
}
   
else if((x>2500)&& (y>1600))
{
 
    Duty = (y * 0.15)
   Duties.value = Duty.toFixed(2);
   let sum = parseFloat(cartax) ;  sum += parseFloat(chf); sum += parseFloat(Duty) ;
   let Vat = (0.077 * sum).toFixed(2); 
   vat.value =Vat;
   let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x==1598)&&(z==15000)&&(y==1600))
{
  CAR_Tax.value=cartax;
  CAR_Tax_group.style.display = 'block';
  result.style.display = 'block';
  Duties_group.style.display = 'none';
  vat_group.style.display = 'none';
  Tax_group.style.display = 'none';
  CO2_alert.style.display='none';
  flag = 1;
}
}
}
}
 
    
if(flag == 0 ){
    CAR_Tax_group.style.display = 'block';
    result.style.display = 'block';
    Duties_group.style.display = 'block';
    vat_group.style.display = 'block';
    Tax_group.style.display = 'block';
    CO2_alert.style.display='none'
  }
      break; 
   } 
   case "MOTORCYCLE": { 
     if(produced == true){
        const duty = 0;
        Duties.value = duty;
    
    let sum = parseFloat(duty) ;  sum += parseFloat(chf) ;
    Vat = (0.077 * sum).toFixed(2)
    vat.value =Vat; 
    let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
    TotalTax.value=Totaltax.toFixed(2);  
 }
 else{
     let x = parseFloat(weight.value);
     let duty= x * 0.37;
      Duties.value = duty; 
     
     let sum = parseFloat(chf); sum += parseFloat(duty) ;
     let Vat = (0.077 * sum).toFixed(2); 
     vat.value =Vat;
     let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
     TotalTax.value=Totaltax.toFixed(2); 
 } 

 
 Duties_group.style.display = 'block';
 CAR_Tax_group.style.display = 'block';
 vat_group.style.display = 'block';
 Tax_group.style.display='block';
 result.style.display='block';
 CO2_alert.style.display='none';
    
      break; 
   }
   case "TRUCK": { 
    if(produced == true){
        const duty = 0;
        Duties.value = duty;
    
    let sum = parseFloat(duty) ;  sum += parseFloat(chf) ;
    Vat = (0.077 * sum).toFixed(2);
    vat.value =Vat;   
    let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
    TotalTax.value=Totaltax.toFixed(2); 
 }
 else{
     let x = parseFloat(weight.value);
     let duty=x * 57;
      Duties.value = duty; 
     let sum = parseFloat(chf); sum += parseFloat(duty) ;
     let Vat = (0.077 * sum).toFixed(2); 
      vat.value =Vat;
      let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
      TotalTax.value=Totaltax.toFixed(2); 
 } 

 
 Duties_group.style.display = 'block';
 CAR_Tax_group.style.display = 'block';
 vat_group.style.display = 'block';
 Tax_group.style.display='block';   
 result.style.display='block';
 CO2_alert.style.display = 'none';
      break;    
   } 
   case "CAMPER": { 
   switch(enginetype)
    {
            case "100% Electro":
             
                if(produced==true){
                    const duty = 0;
           Duties.value = duty;
           let x = parseFloat(weight.value);
           let sum = parseFloat(chf); sum += parseFloat(duty) ;
           let Vat = (0.077 * sum).toFixed(2); 
               vat.value =Vat;
           if (x<1200){
              
             
              
               let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
               TotalTax.value=Totaltax;
           }
           else if(x>=1200 && x<=1600) {
              
               let Totaltax =  parseFloat(Vat)+ parseFloat(duty);
               TotalTax.value=Totaltax;


           }
           else
           {
            
               let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
               TotalTax.value=Totaltax;
           }
                
        
        }
                else{
                    let x = parseFloat(weight.value);
                   
                   
                    let Duty;
                   
                    if (x<1200){
                       Duty = x * 0.12;
                        Duties.value = Duty;
                        let sum =  parseFloat(chf); sum += parseFloat(Duty) ;
                        let Vat = (0.077 * sum).toFixed(2); 
                        vat.value =Vat;
                        let Totaltax =  parseFloat(Vat)+ parseFloat(Duty);
                        TotalTax.value=Totaltax;
                    }
                    else if(x>=1200 && x<=1600) {
                        Duty = x * 0.14;
                        Duties.value = Duty.toFixed(2);
                        let sum = parseFloat(chf); sum += parseFloat(Duty) ;
                        let Vat = (0.077 * sum).toFixed(2); 
                        vat.value =Vat;
                        let Totaltax =  parseFloat(Vat)+ parseFloat(Duty);
                        TotalTax.value=Totaltax;


                    }
                    else
                    {
                        Duty = x * 0.15;
                        Duties.value = Duty.toFixed(2);
                        let sum =  sum += parseFloat(chf); sum += parseFloat(Duty) ;
                        let Vat = (0.077 * sum).toFixed(2); 
                        vat.value =Vat;
                        let Totaltax =  parseFloat(Vat)+ parseFloat(Duty);
                        TotalTax.value=Totaltax;
                    }
            break;
    }
    case "Benzin":
    {
       
        let x = parseFloat(cubic_capacity.value);
        let y = parseFloat(weight.value)
        if(produced==true){
            const duty = 0;
            Duties.value = duty;
        
        let sum = parseFloat(duty) ;  sum += parseFloat(chf) ;
        Vat = (0.077 * sum).toFixed(2)
        vat.value =Vat; 
   if (x>=1 && x<=1500)
   {
      
     
      
       let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);
   }
   else if((x>=1501 && x<=3000)&& (y<1201) ) {
      
       let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);


   }
   else if((x>=1501 && x<=3000)&& (y>=1201 && y <=1600))
   {
    
       let Totaltax =  parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);
   }
   else if((x>=1501 && x<=3000)&& (y>1600))
   {
    
       let Totaltax = parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);
   }
   else if((x>3000)&& (y<1601))
   {
    
       let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);
   }
      
   else if((x>3000)&& (y>1600))
   {
    
       let Totaltax =  parseFloat(Vat)+ parseFloat(duty);
       TotalTax.value=Totaltax.toFixed(2);
   }
  
        
        
}
else
{
    let x = parseFloat(cubic_capacity.value);
    let y = parseFloat(weight.value);
   let Duty;
   
    
   
    if (x>=1 && x<=1500)
    {
       Duty = (y * 0.12)
       Duties.value = Duty.toFixed(2);
       let sum =  parseFloat(chf); sum += parseFloat(Duty) ;
       let Vat = (0.077 * sum).toFixed(2); 
       vat.value =Vat;
       let Totaltax =  parseFloat(Vat)+ parseFloat(Duty);
       TotalTax.value=Totaltax.toFixed(2);
    }
    else if((x>=1501 && x<=3000)&& (y<1201) ) {
       
        Duty = (y * 0.12)
        Duties.value = Duty.toFixed(2);
        let sum = parseFloat(chf); sum += parseFloat(Duty) ;
        let Vat = (0.077 * sum).toFixed(2); 
        vat.value =Vat;
        let Totaltax = parseFloat(Vat)+ parseFloat(Duty);
        TotalTax.value=Totaltax.toFixed(2);
 
 
    }
    else if((x>=1501 && x<=3000)&& (y>=1201 && y <=1600))
    {
     
        Duty = (y * 0.14)
       Duties.value = Duty.toFixed(2);
       let sum =  parseFloat(chf); sum += parseFloat(Duty) ;
       let Vat = (0.077 * sum).toFixed(2); 
       vat.value =Vat;
       let Totaltax =   parseFloat(Vat)+ parseFloat(Duty);
       TotalTax.value=Totaltax.toFixed(2);
    }
    else if((x>=1501 && x<=3000)&& (y>1600))
    {
     
        Duty = (y * 0.15)
        Duties.value = Duty.toFixed(2);
        let sum =  parseFloat(chf); sum += parseFloat(Duty) ;
        let Vat = (0.077 * sum).toFixed(2); 
        vat.value =Vat;
        let Totaltax =   parseFloat(Vat)+ parseFloat(Duty);
        TotalTax.value=Totaltax.toFixed(2);
    }
    else if((x>3000)&& (y<1601))
    {
     
        Duty = (y * 0.14)
        Duties.value = Duty.toFixed(2);
        let sum =  parseFloat(chf); sum += parseFloat(Duty) ;
        let Vat = (0.077 * sum).toFixed(2); 
        vat.value =Vat;
        let Totaltax =   parseFloat(Vat)+ parseFloat(Duty);
        TotalTax.value=Totaltax.toFixed(2);
    }
       
    else if((x>3000)&& (y>1600))
    {
     
        Duty = (y * 0.15)
       Duties.value = Duty.toFixed(2);
       let sum =parseFloat(chf); sum += parseFloat(Duty) ;
       let Vat = (0.077 * sum).toFixed(2); 
       vat.value =Vat;
       let Totaltax =  parseFloat(Vat)+ parseFloat(Duty);
       TotalTax.value=Totaltax.toFixed(2);
    }
   
}



break;}
case"Diesel":{
  
    let x = parseFloat(cubic_capacity.value);
    let y = parseFloat(weight.value)
    if(produced==true){
        const duty = 0;
        Duties.value = duty;
   
    let sum = parseFloat(duty) ;  sum += parseFloat(chf) ;
    Vat = (0.077 * sum).toFixed(2)
    vat.value =Vat; 
if (x>=1 && x<=1500)
{
  
 
  
   let Totaltax =   parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x>=1501 && x<=2500)&& (y<1201) ) {
  
   let Totaltax =  parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);


}
else if((x>=1501 && x<=2500)&& (y<=1201 && y <=1600))
{

   let Totaltax =  parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x>=1501 && x<=2500)&& (y>1600))
{

   let Totaltax =  parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x>2500)&& (y<1601))
{

   let Totaltax =  parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);
}
  
else if((x>2500)&& (y>1600))
{

   let Totaltax = parseFloat(Vat)+ parseFloat(duty);
   TotalTax.value=Totaltax.toFixed(2);
}


    
    
}
else
{
let x = parseFloat(cubic_capacity.value);
let y = parseFloat(weight.value);
let Duty;



if (x>=1 && x<=1500)
{
   Duty = (y * 0.12)
   Duties.value = Duty.toFixed(2);
   let sum =  parseFloat(chf); sum += parseFloat(Duty) ;
   let Vat = (0.077 * sum).toFixed(2); 
   vat.value =Vat;
   let Totaltax =  parseFloat(cartax) + parseFloat(Vat)+ parseFloat(Duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x>=1501 && x<=2500)&& (y<1201) ) {
   
    Duty = (y * 0.12)
    Duties.value = Duty.toFixed(2);
    let sum =  parseFloat(chf); sum += parseFloat(Duty) ;
    let Vat = (0.077 * sum).toFixed(2); 
    vat.value =Vat;
    let Totaltax =   parseFloat(Vat)+ parseFloat(Duty);
    TotalTax.value=Totaltax.toFixed(2);


}
else if((x>=1501 && x<=2500)&& (y<=1201 && y <=1600))
{
 
    Duty = (y * 0.14)
   Duties.value = Duty.toFixed(2);
   let sum =  parseFloat(chf); sum += parseFloat(Duty) ;
   let Vat = (0.077 * sum).toFixed(2); 
   vat.value =Vat;
   let Totaltax =   parseFloat(Vat)+ parseFloat(Duty);
   TotalTax.value=Totaltax.toFixed(2);
}
else if((x>=1501 && x<=2500)&& (y>1600))
{
 
    Duty = (y * 0.15)
    Duties.value = Duty.toFixed(2);
    let sum =  parseFloat(chf); sum += parseFloat(Duty) ;
    let Vat = (0.077 * sum).toFixed(2); 
    vat.value =Vat;
    let Totaltax =   parseFloat(Vat)+ parseFloat(Duty);
    TotalTax.value=Totaltax.toFixed(2);
}
else if((x>2500)&& (y<1601))
{
 
    Duty = (y * 0.14)
    Duties.value = Duty.toFixed(2);
    let sum =  parseFloat(chf); sum += parseFloat(Duty) ;
    let Vat = (0.077 * sum).toFixed(2); 
    vat.value =Vat;
    let Totaltax =  parseFloat(Vat)+ parseFloat(Duty);
    TotalTax.value=Totaltax.toFixed(2);
}
   
else if((x>2500)&& (y>1600))
{
 
    Duty = (y * 0.15)
   Duties.value = Duty.toFixed(2);
   let sum = parseFloat(chf); sum += parseFloat(Duty) ;
   let Vat = (0.077 * sum).toFixed(2); 
   vat.value =Vat;
   let Totaltax =   parseFloat(Vat)+ parseFloat(Duty);
   TotalTax.value=Totaltax.toFixed(2);
}

}



break;

}
} 
 
 Duties_group.style.display = 'block';
 CAR_Tax_group.style.display = 'block';
 vat_group.style.display = 'block';
 Tax_group.style.display='block';
 result.style.display='block';
 CO2_alert.style.display='none';
    
      break; 
   }  
   default: { 
     
      break;              
   } 
} 

}












