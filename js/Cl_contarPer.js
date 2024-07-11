export default class Cl_contarPer{
    constructor() {
        this.contT = 0;
        this.contF = 0;
        this.contM = 0;
    }
    procesarPersona(per){
        this.contT ++;
        if(per.sexo == "F"){
            this.contF ++;
        }
        if(per.sexo == "M"){
            this.contM ++;
        }
    }
}