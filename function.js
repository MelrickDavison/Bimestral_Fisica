
 var temp = document.getElementById("temp")
 var temp1 = document.getElementById("range")

 temp1.addEventListener("input", () =>{
    
    if(temp1.value == 50){
        temp.value = temp.value
    }
    else if(temp1.value > 50 && temp1.value <= 70){
        
        for(let i = temp1.value; temp != 50; i++){
            temp.value = Number(temp.value) + 1
        }
    }
    else if(temp1.value > 70 && temp1.value <= 100){
        temp.value = Number(temp.value) + 10
    }

    else if(temp1.value < 50 && temp1.value >= 30){
        temp.value = Number(temp.value) - 1
    }
    else if(temp1.value >= 0 && temp1.value < 30){
        temp.value = Number(temp.value) - 10
    }
    
 })
// function temperatura(num) {
//    temp.value = Number(temp.value) + num
// }

function temperatura(){
     
}