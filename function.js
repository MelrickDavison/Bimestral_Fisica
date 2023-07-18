
 var temp = document.getElementById("temp")
 var valueRange = document.getElementById("range")

 let intervalo;
 let i = 0;

function incrementarTemp() {
   temp.value = Number(temp.value) + 1
}

function decrementarTemp() {
    if(Number(temp.value) - 1 >= 0 ){
    temp.value = Number(temp.value) - 1
    }else{
        pararTemp()
    }
    
 }

function aumentarTemperatura(){ 
     intervalo = setInterval(incrementarTemp, 200)

}

function pararTemp(){
    clearInterval(intervalo);
    i = 0;
}

function diminuirTemperatura(){

     intervalo = setInterval(decrementarTemp, 200)

}


valueRange.addEventListener("input", ()=>{
    document.getElementById("pressão").textContent = valueRange.value + " atm"
})

