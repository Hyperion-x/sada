/*var a = +prompt('Enter a number a:');
var b = +prompt('Enter a number b:');
var sum = a +b;
alert('Summa of numbers: ' + sum);
console.log(sum); */

/*var answer = prompt('Как хорошо ты знаешь JS?:');

if (answer == 'хорошо' || answer == 'мега хорошо') {
    alert('Ты красавчик');
} 
else if (answer == 'плохо') {
    alert('Иди учись к Александру');
} 
else if( answer == 'не знаю') {
    alert('Иди отсюда');
} 
else {
    alert('Варианты ответов: хорошо, плохо, не знаю');
}*/

/*var answer = prompt('Enter a number:');

if(answer === 5) {
    alert('good!!!');
} else {
    alert('Not good!!!')
}*/

var cities = ['Dnepr', 'Kiev', 'Kharkov', 'Lvov', 'Chernigov', 'Odessa'];

/*console.log(cities.length);*/

/*for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    console.log(city);
}*/

/*for( var i in cities) {
    var city = cities[i];
    console.log(city);
}*/

/*var i = 0;
while (i < cities.length) {
    var city = cities[i];
    console.log(city);
    i++;
}*/
var i = 0;

do {
    var city = cities[i];
    console.log(city);
    i++;
} while (i < cities.length);
