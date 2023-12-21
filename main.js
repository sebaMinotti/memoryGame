let listaNumeriDaIndovinare=[]
let numeriScelti=[]
let numeriRicordati =[]
let avvia = document.querySelector('#genera')

/*
 numeriTastiera.map(Number)
numeriTastiera.sort(function(a, z) {
    return a-z
});
*/

avvia.addEventListener('click',function(){

        let secondi = document.querySelector('#secondi').value ;
        let quantitaNumeri = document.querySelector('#numeri').value

        if((secondi!='facile')&&(secondi!='medio')&&(secondi!='difficile')||(quantitaNumeri!='facile')&&(quantitaNumeri!='medio')&&(quantitaNumeri!='difficile')){
            alert('hai inserito parametri non validi! inserisci solo facile medio difficile verrà ricaricata la pagina')
            location.reload()
        }

        switch (secondi) {
            case 'facile':secondi=30
                break;
            case 'medio':secondi=20
                break;
            case 'difficile':secondi=10
                break;
            default:
                break;
        }
        switch (quantitaNumeri) {
            case 'facile':quantitaNumeri=5
                break;
            case 'medio':quantitaNumeri=10
                break;
            case 'difficile':quantitaNumeri=16
                break;
            default:
                break;
        }
        
        for(let i= listaNumeriDaIndovinare.length; i < quantitaNumeri;i++){
            let numeroDaIndovinare = Math.floor(Math.random()*(100)+1);
              !listaNumeriDaIndovinare.includes(numeroDaIndovinare)?listaNumeriDaIndovinare.push(numeroDaIndovinare):i--

        }

        listaNumeriDaIndovinare.map(Number)
        listaNumeriDaIndovinare.sort(function(a,z){return a-z})

        console.log(listaNumeriDaIndovinare);

        listaNumeriDaIndovinare.map((numero)=>{
                 
                let containerNUmeri = document.querySelector('.containerNumeri')
                let div = document.createElement('div')
                    div.className='divNumero'
                    let tag = document.createElement('span')
                    tag.append(numero) ; div.append(tag); containerNUmeri.append(div)
        })

       let myTimer= setInterval(() => {
           document.querySelector('#time').innerHTML=secondi
              if(secondi==0){
                clearInterval(myTimer)
                document.querySelector('.containerNumeri').style.display='none'
                document.querySelector('#verifica').addEventListener('click',function(){
                 
                    let inputNumeri = document.querySelector('#num').value;
                    let numeriStr = inputNumeri.split(' ');

                    numeriStr.forEach(function(numeroStr){
                            
                              let numero = Number(numeroStr)

                              numeriScelti.push(numero)
                    })
                   
                    
                  
                    document.querySelector('#num').value=''

                    numeriScelti.forEach((numero)=>{
                        if(listaNumeriDaIndovinare.includes(numero)&&!numeriRicordati.includes(numero)){

                            numeriRicordati.push(numero)
                        }
                    })
                    if(numeriScelti.length===quantitaNumeri){
                        if(numeriScelti.length===numeriRicordati.length){
                               document.querySelector('#results').innerHTML=`Complimenti Hai vinto !  hai ricordato  <b> ${numeriRicordati.length} </b> numeri 
                               e sono ${numeriRicordati}
                               `
                        } else {
                            document.querySelector('#results').innerHTML=`Mi spiace Hai perso !   hai ricordato  <b> ${numeriRicordati.length} </b> numeri 
                            e sono ${numeriRicordati}
                            `
                        }
                    }
                      console.log(numeriScelti);
                console.log(numeriRicordati);
                })
                
              }else{
                secondi--
              }
                    
        }, 1000);


         document.querySelector('#secondi').value='' ;
         document.querySelector('#numeri').value='' 

})





