import { DataManager } from "./helpers/dataManager.helper.js";
import { Film } from "./models/filmModel.model.js";
import { Reservation } from "./models/reservationModel.model";
import { Salle } from "./models/salleModel.model";
import { Seance } from "./models/seanceModel.model";

const dm = new DataManager(["film","reservation","salle","seance"]);
dm.initDataStorage();

// const filmJsonObj = {"id":1,"title":"Avenger's 1","synopsis":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quibusdam quisquam. Quasi blanditiis quam laborum est quae facere a. Enim fuga qui, distinctio deserunt molestias consequatur necessitatibus nesciunt repudiandae fugiat!","affiche":"https://picsum.photos/id/1001/400/600"};
// const film1 = new Film(filmJsonObj);
// console.log(film1);

// const resaJsonObj = {"id":1, "customer":"John Doe", "nbPlace":2, "seance_id":1};
// const resa1 = new Reservation(resaJsonObj);
// console.log(resa1);

// const salleJsonObj = {"id":1,"name":"bleu","capacity":200};
// const salle1 = new Salle(salleJsonObj);
// console.log(salle1);

// const seanceJsonObj = {"id":1,"jour":"2022-08-01","heure":"14:00","price":7.5,"film_id":1,"salle_id":1};4
// const seance1 = new Seance(seanceJsonObj);
// console.log(seance1);

const films = dm.getAll("film");
const reservations = dm.getAll("reservation");
const salles = dm.getAll("salle");
const seances = dm.getAll("seance");

console.log(films);
console.log(reservations);
console.log(salles);
console.log(seances);


const film1 = dm.getOne("film", 1);
const film10 = dm.getOne("film", 10);

console.log(film1);
console.log(film10);