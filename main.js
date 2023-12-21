let numeriTastiera =[]  //array che conterrà i numeri che comporranno a tastiera
let numeriGenerati = []
let ricordati = []
let numeriScelti =[]
let bottone = document.querySelector('#gioca')

//ciclo for che genera i numeri della tastiera
for(let i= numeriTastiera.length; i < 100; i++){
         let numeroTastiera = Math.floor(Math.random()*(100)+1)
        !numeriTastiera.includes(numeroTastiera)?numeriTastiera.push(numeroTastiera):i--     
}


//con questo map converto i numeri da stringa e  poi li ordino dal più piccolo al più grande
 numeriTastiera.map(Number)
console.log(numeriTastiera.sort(function(a, z) {
    return a-z
}));


bottone.addEventListener('click',function(){

  

       let  secondi = document.querySelector('#difficoltaSecondi').value
       let   numeriDaRicordare = document.querySelector('#difficoltaNumeri').value

       if(((secondi!='facile')&&(secondi!='medio')&&(secondi!='difficile'))||((numeriDaRicordare!='facile')&&(numeriDaRicordare!='medio')&&(numeriDaRicordare!='difficile'))){
          alert('parametri non consetiti ')
          location.reload()
       } 
     


switch (secondi) {
    case 'facile':secondi = 30
        break;
    case 'medio':secondi = 20
        break;
    case 'difficile':secondi = 10
        break;
    default:
        break;
}
switch (numeriDaRicordare) {
    case 'facile':numeriDaRicordare = 5
        break;
    case 'medio':numeriDaRicordare = 10
        break;
    case 'difficile':numeriDaRicordare = 20
        break;
    default:
        break;
}

        for(let i = numeriGenerati.length;i<numeriDaRicordare;i++){

            let numeroDaRicordare = Math.floor(Math.random()*(100)+1)
            if(!numeriGenerati.includes(numeroDaRicordare)){
                numeriGenerati.push(numeroDaRicordare)
            }  else {
                i--
            }
        }
           
            console.log(numeriGenerati);

               numeriGenerati.map((numeroG)=>{
                      
                    let containerNumeriGenerati = document.querySelector('.numeriDaRicordare')
                    let div = document.createElement('div');
                    div.className='numeroGenerato';
                    let tag = document.createElement('span');
                    tag.append(numeroG)
                    div.append(tag)
                    containerNumeriGenerati.append(div)
                    
               })





                    let mioTempo= setInterval(() => {
                         document.querySelector('#clock').innerHTML=secondi
                          if(secondi===0){
                              document.querySelector('.numeriDaRicordare').style.display='none'
                           clearInterval(mioTempo)
                                     numeriTastiera.map((numero)=>{
                                        let tastiera = document.querySelector('#tastiera')
                                        let div = document.createElement('div');
                                        div.className='tasto';
                                        let tag = document.createElement('span');
                                        tag.append(numero)
                                        div.append(tag)
                                        tastiera.append(div)

                                   div.addEventListener('click',function(){
                                       div.style.background='green'
                                       div.style.color='white'
                                       
                                       if(!numeriScelti.includes(numero)){
                                           numeriScelti.push(numero)
                                       } 
                                       numeriScelti.forEach((numero)=>{
                                          if(numeriGenerati.includes(numero)&&!ricordati.includes(numero)){
                                            ricordati.push(numero)
                                          }
                                       })

                                       if(numeriScelti.length===numeriDaRicordare){
                                          document.querySelector('#tastiera').style.display='none'
                                        if(numeriScelti.length===ricordati.length){

                                            alert(`complimenti hai vinto hai ricordato tutti e ${numeriDaRicordare} i numeri i numeri erano ${ricordati.length} ${ricordati}`)

                                        } else {
                                            alert(`mi spiace hai perso hai ricordato solo ${ricordati.length} e sono ${ricordati}`)
                                        }
                                       }
                                   })
                                })
                                    console.log(numeriScelti);
                                    console.log(ricordati);
                          }else {
                            secondi--
                          }

                        
                        },  1000);

      
                        bottone.disabled=true
})





