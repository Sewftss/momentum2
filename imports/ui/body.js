

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';

 
import './body.html';
 Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});



let cont1 = document.createElement("div");
cont1.className+="container1";
document.body.appendChild(cont1);

let cont2 = document.createElement("div");
cont2.className+="container2";
document.body.appendChild(cont2);

let liste = document.createElement("div");
liste.className+="liste";
cont2.appendChild(liste);

let butco = document.createElement("div");
butco.className+="butco";
cont2.appendChild(butco);

let butto = document.createElement("button");
butto.className+="butto";
butto.innerHTML="Ajouter une activité";
butco.appendChild(butto);

let activites = document.createElement("div");
activites.className+="activites";
cont1.appendChild(activites);

let dates = document.createElement("div");
dates.className+="dates";
cont1.appendChild(dates);


for(let k=0;k<=1;k++){

for(let i=1;i<= 31;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+"janv.";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);

}

for(let i=1;i<= 31;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+ "fev";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);

}

for(let i=1;i<= 31;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+ "mars";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);

}

for(let i=1;i<= 30;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+"avr.";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);

}

for(let i=1;i<= 31;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+"mai";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);

}

for(let i=1;i<= 30;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+"juin";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);


}

for(let i=1;i<= 31;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+"juil.";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);

}



for(let i=1;i<= 31;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+"août";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);

}


for(let i=1;i<= 30;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+"sept.";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);

}

for(let i=1;i<= 31;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+"oct.";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);



}

for(let i=1;i<= 30;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+"nov.";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);

}

for(let i=1;i<= 31;i++){
  let nb = document.createElement("span");
  if (i==1){
    nb.innerHTML=i+"dec.";
  }
  else {
    nb.innerHTML=i;
  }
  dates.appendChild(nb);

}


}