function calcularLeiDosGases(pressao1,volume1,temperatura1,pressao2,volume2,temperatura2){



    if(pressao1<=0 || volume1 <= 0 || temperatura1 <= 0||pressao2<=0 || volume2 <= 0 || temperatura2 <= 0){
        return " OS valorres de pressão, volume e temperatura devem ser positivas"

    }
    let lei = pressao1 * volume1/  temperatura1 ==  pressao2 * volume2/  temperatura2
    return lei 
}
let resultado = calcularLeiDosGases(pressao1,volume1,temperatura1,pressao2,volume2,temperatura2)

function pressaoVolume(pressao1,volume1,volume2,){



    if(pressao1<=0 || volume1 <= 0 || pressao2<=0 || volume2 <= 0 ){
        return " OS valores de pressão e volume  devem ser positivas"

    }
    let pressao2 = pressao1 * volume1 /volume2
    return  pressao2
}

function pressaoTemp(pressao1,temperatura1,temperatura2){



    if(pressao1<=0 ||  pressao2<=0  ){
        return " OS valores de pressão devem ser positivas"

    }
    let pressao2 = pressao1 * temperatura2/ temperatura1 
    return  pressao2
}
function volume(pressao1,temperatura1,temperatura2){



    if(pressao1<=0 ||  pressao2<=0  ){
        return " OS valores de pressão devem ser positivas"

    }
    let volume2 = pressao1 * temperatura1 / temperatura1  
    return  volume2

 function temperatura(temperatura1,volume1,temperatura2,volume2,){



    if(| volume1 <= 0 || volume2 <= 0 ){
        return " OS valores volume  devem ser positivas"

    }
    let temperatura2 =  volume2 * temperatura1 / volume1
    return  temperatura2

}
