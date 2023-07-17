function calcularLeiDosGases(pressao1,volume1,temperatura1,pressao2,volume2,temperatura2){



    if(pressao1<=0 || volume1 <= 0 || temperatura1 <= 0||pressao2<=0 || volume2 <= 0 || temperatura2 <= 0){
        return " OS valorres de pressão, volume e temperatura devem ser positivas"

    }
    let lei = pressao1 * volume1/  temperatura1 ==  pressao2 * volume2/  temperatura2
    return lei 
}
let resultado = calcularLeiDosGases(pressao1,volume1,temperatura1,pressao2,volume2,temperatura2)