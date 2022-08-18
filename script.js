// Botones Borrar

function borrar(a) {
  document.getElementById(a).remove();
}

document.getElementById('botonBorrar1').onclick = function () {
  borrar('aBorrar1');
};
document.getElementById('botonBorrar2').onclick = function () {
  borrar('aBorrar2');
};
document.getElementById('botonBorrar3').onclick = function () {
  borrar('aBorrar3');
};
document.getElementById('botonBorrar4').onclick = function () {
  borrar('aBorrar4');
};
document.getElementById('botonBorrar5').onclick = function () {
  borrar('aBorrar5');
};
document.getElementById('botonBorrar6').onclick = function () {
  borrar('aBorrar6');
};
document.getElementById('botonBorrar7').onclick = function () {
  borrar('aBorrar7');
};
document.getElementById('botonBorrar8').onclick = function () {
  borrar('aBorrar8');
};
document.getElementById('botonBorrar9').onclick = function () {
  borrar('aBorrar9');
};
document.getElementById('botonBorrar10').onclick = function () {
  borrar('aBorrar10');
};
document.getElementById('botonBorrar11').onclick = function () {
  borrar('aBorrar11');
};
document.getElementById('botonBorrar12').onclick = function () {
  borrar('aBorrar12');
};

// Botones modificar

//Boton modificar "Un poco de mí"

function aparecer(formulario) {
  document.getElementById(formulario).style.display = 'inline';
}

function modificarOcultar(textoNuevo, textoViejo, cuadroTexto) {
  var nuevoSobreMi = document.getElementById(textoNuevo).value;
  document.getElementById(textoViejo).innerHTML = nuevoSobreMi;
  document.getElementById(cuadroTexto).style.display = 'none';
}

document.getElementById('botonModificar1').onclick = function () {
  aparecer('formMod1');
};

document.getElementById('enviar1').onclick = function () {
  modificarOcultar('textoSobreMi', 'textoOriginalSobreMi', 'formMod1');
};

// Botones modificar "Experiencia" y "Educacion"

function modificarOcultarExperiencia(
  puestoViejo,
  puestoNuevo,
  empresaVieja,
  empresaNueva,
  periodoViejo,
  periodoNuevo,
  formularioMod
) {
  document.getElementById(puestoViejo).innerHTML =
    document.getElementById(puestoNuevo).value;
  document.getElementById(empresaVieja).innerHTML =
    document.getElementById(empresaNueva).value;
  document.getElementById(periodoViejo).innerHTML =
    document.getElementById(periodoNuevo).value;
  document.getElementById(formularioMod).style.display = 'none';
}
// Experiencia 1
document.getElementById('botonModificar2').onclick = function () {
  aparecer('formExp1');
};

document.getElementById('botonFormExp1').onclick = function () {
  modificarOcultarExperiencia(
    'puesto1',
    'nuevoPuesto1',
    'empresa1',
    'nuevaEmpresa1',
    'periodo1',
    'nuevoPeriodo1',
    'formExp1'
  );
};
//Experiencia 2
document.getElementById('botonModificar3').onclick = function () {
  aparecer('formExp2');
};

document.getElementById('botonFormExp2').onclick = function () {
  modificarOcultarExperiencia(
    'puesto2',
    'nuevoPuesto2',
    'empresa2',
    'nuevaEmpresa2',
    'periodo2',
    'nuevoPeriodo2',
    'formExp2'
  );
};
//Educación 1
document.getElementById('botonModificar4').onclick = function () {
  aparecer('formEdu1');
};

document.getElementById('botonFormEdu1').onclick = function () {
  modificarOcultarExperiencia(
    'titulo1',
    'nuevoTitulo1',
    'establecimiento1',
    'nuevoEstablecimiento1',
    'tiempo1',
    'nuevoTiempo1',
    'formEdu1'
  );
};
//Educación 2
document.getElementById('botonModificar5').onclick = function () {
  aparecer('formEdu2');
};

document.getElementById('botonFormEdu2').onclick = function () {
  modificarOcultarExperiencia(
    'titulo2',
    'nuevoTitulo2',
    'establecimiento2',
    'nuevoEstablecimiento2',
    'tiempo2',
    'nuevoTiempo2',
    'formEdu2'
  );
};
// Botones modificar Skills e Idiomas
function modificarOcultarSkill(
  skillViejo,
  skillNuevo,
  porcentajeViejo,
  porcentajeNuevo,
  formularioMod
) {
  document.getElementById(skillViejo).innerHTML =
    document.getElementById(skillNuevo).value;
  document.getElementById(porcentajeViejo).innerHTML =
    document.getElementById(porcentajeNuevo).value;
  document.getElementById(porcentajeViejo).style.width =
    document.getElementById(porcentajeNuevo).value;
  document.getElementById(formularioMod).style.display = 'none';
}
// Skill 1
document.getElementById('botonModificar6').onclick = function () {
  aparecer('formSkill1');
};
document.getElementById('botonFormSkill1').onclick = function () {
  modificarOcultarSkill(
    'skill1',
    'nuevoSkill1',
    'porcentaje1',
    'nuevoPorcentaje1',
    'formSkill1'
  );
};
// Skill 2
document.getElementById('botonModificar7').onclick = function () {
  aparecer('formSkill2');
};
document.getElementById('botonFormSkill2').onclick = function () {
  modificarOcultarSkill(
    'skill2',
    'nuevoSkill2',
    'porcentaje2',
    'nuevoPorcentaje2',
    'formSkill2'
  );
};
//Skill 3
document.getElementById('botonModificar8').onclick = function () {
  aparecer('formSkill3');
};
document.getElementById('botonFormSkill3').onclick = function () {
  modificarOcultarSkill(
    'skill3',
    'nuevoSkill3',
    'porcentaje3',
    'nuevoPorcentaje3',
    'formSkill3'
  );
};
//Skill 4
document.getElementById('botonModificar9').onclick = function () {
  aparecer('formSkill4');
};
document.getElementById('botonFormSkill4').onclick = function () {
  modificarOcultarSkill(
    'skill4',
    'nuevoSkill4',
    'porcentaje4',
    'nuevoPorcentaje4',
    'formSkill4'
  );
};
//Skill 5
document.getElementById('botonModificar10').onclick = function () {
  aparecer('formSkill5');
};
document.getElementById('botonFormSkill5').onclick = function () {
  modificarOcultarSkill(
    'skill5',
    'nuevoSkill5',
    'porcentaje5',
    'nuevoPorcentaje5',
    'formSkill5'
  );
};
//Idioma 1
document.getElementById('botonModificar11').onclick = function () {
  aparecer('formIdioma1');
};
document.getElementById('botonFormIdioma1').onclick = function () {
  modificarOcultarSkill(
    'idioma1',
    'nuevoIdioma1',
    'porcentaje6',
    'nuevoPorcentaje6',
    'formIdioma1'
  );
};
//Idioma 2
document.getElementById('botonModificar12').onclick = function () {
  aparecer('formIdioma2');
};
document.getElementById('botonFormIdioma2').onclick = function () {
  modificarOcultarSkill(
    'idioma2',
    'nuevoIdioma2',
    'porcentaje7',
    'nuevoPorcentaje7',
    'formIdioma2'
  );
};
//Idioma 3
document.getElementById('botonModificar13').onclick = function () {
  aparecer('formIdioma3');
};
document.getElementById('botonFormIdioma3').onclick = function () {
  modificarOcultarSkill(
    'idioma3',
    'nuevoIdioma3',
    'porcentaje8',
    'nuevoPorcentaje8',
    'formIdioma3'
  );
};
