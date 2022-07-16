class listNameTeams {
  constructor(nameTeam1, nameTeam2){
    this.nameTeam1 = nameTeam1;
    this.nameTeam2 = nameTeam2;  
}}

let btnListTeams = document.getElementById("btnNameTeams");
let nameTeams = document.getElementById("nameTeam");

nameTeams.addEventListener("submit", function(e){
	e.preventDefault()
})

function listTeam() {
  let nameTeam1 = document.getElementById("nameTeam1").value;
  let nameTeam2 = document.getElementById("nameTeam2").value;

  if (nameTeam1 == "" || nameTeam2 == "") {
    alert("falta rellenar campos");
} else {
  let newTeams = new listNameTeams(nameTeam1, nameTeam2);
  alert(newTeams);
  }
}
btnListTeams.addEventListener("click", listTeam);








/* let nombreEquipo1 = prompt("ingrese el nombre del equipo #1");
let nombreEquipo2 = prompt("Ingrese el nombre del equipo #2");

const listaEquipo1 = [
  {"id": 1, "jugador": prompt("ingresa el nombre del jugador #1 del equipo " + nombreEquipo1)},
  {"id": 2, "jugador": prompt("ingresa el nombre del jugador #2 del equipo " + nombreEquipo1)},
  {"id": 3, "jugador": prompt("ingresa el nombre del jugador #3 del equipo " + nombreEquipo1)},
  {"id": 4, "jugador": prompt("ingresa el nombre del jugador #4 del equipo " + nombreEquipo1)}];

const listaEquipo2 = [
  {"id": 1, "jugador": prompt("ingresa el nombre del jugador #1 del equipo " + nombreEquipo2)},
  {"id": 2, "jugador": prompt("ingresa el nombre del jugador #2 del equipo " + nombreEquipo2)},
  {"id": 3, "jugador": prompt("ingresa el nombre del jugador #3 del equipo " + nombreEquipo2)},
  {"id": 4, "jugador": prompt("ingresa el nombre del jugador #4 del equipo " + nombreEquipo2)}];

function partido() {
  listaEquipo1.find(id =>{
    console.log(id);
  });

  listaEquipo2.find(id =>{
    console.log(id);
  });
}

alert(nombreEquipo1 + " Vs " + nombreEquipo2);

partido(); */