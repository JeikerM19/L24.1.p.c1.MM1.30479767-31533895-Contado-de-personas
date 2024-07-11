import Cl_persona from "./Cl_persona.js";
import Cl_contarPer from "./Cl_contarPer.js";

let per1 = new Cl_persona("Luisa", "F");
let per2 = new Cl_persona("Ana", "F");
let per3 = new Cl_persona("José", "M");
let per4 = new Cl_persona("Carmen", "F");
let per5 = new Cl_persona("Rosa", "F");
let per6 = new Cl_persona("José", "M");
let per7 = new Cl_persona("María", "F");
let per8 = new Cl_persona("Luz", "F");
let per9 = new Cl_persona("Rafael", "M");
let per10 = new Cl_persona("Liz", "F");
let per11 = new Cl_persona("Marcos", "M");
let per12 = new Cl_persona("Leo", "M");

let contP = new Cl_contarPer();
contP.procesarPersona(per1);
contP.procesarPersona(per2);
contP.procesarPersona(per3);
contP.procesarPersona(per4);
contP.procesarPersona(per5);
contP.procesarPersona(per6);
contP.procesarPersona(per7);
contP.procesarPersona(per8);
contP.procesarPersona(per9);
contP.procesarPersona(per10);
contP.procesarPersona(per11);
contP.procesarPersona(per12);

let salida = document.getElementById("Salida");
salida.innerHTML += "Cantidad de personas: " + contP.contT + "<br> Cantidad de hombres: " + contP.contM + "<br> Cantidad de mujeres: " + contP.contF;
