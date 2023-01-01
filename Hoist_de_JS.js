//Ejercicio 1
console.log(example);
let example = "I'm the example!";    

/* let example // elevó la variable
console.log(example);  //undefined
let example = "I'm the example!"; */

//Ejercicio 2                                    ***
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
/* 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);  // imprime 'magnet'
}
 */


//Ejercicio 3                                     ***
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); 
}
console.log(brendan);

/* 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); //imprime 'only okay'
}
console.log(brendan); //imprime 'super cool'
 */

//Ejercicio 4                                    ***
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}


/* 
var food = 'chicken';
console.log(food); //imprime 'chicken'
eat(); // aún no esá definida esta función
function eat(){ // error. Ignora todo lo que retorne estafunción
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
 */

//Ejercicio 5                                    ***
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

/* 
mean(); // no está definida aún
console.log(food);
var mean = function() {// x2 ignora toda la función
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); //no sé qué hacer */

//Ejercicio 6                                    ***
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


/* console.log(genre); // imprime 'genre'
var genre = "disco";
rewind(); //esto debería ir después. Undefined
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);// imprime 'genre'
 */

//Ejercicio 7                                    ***
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/* 
dojo = "san jose";
console.log(dojo); //imprime 'san jose'
learn(); // no está definida
function learn() { //ya que no está definida, ignora el resto
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); //imprime 'san jose'
 */

//Ejercicio 8                                    ***
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
/* 
console.log(makeDojo("Chicago", 65)); //imprime los argumentos
console.log(makeDojo("Berkeley", 0)); //imprime los argumentos
function makeDojo(name, students){  // está declarando una función, no llamándola.
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo; 
} 
 */
