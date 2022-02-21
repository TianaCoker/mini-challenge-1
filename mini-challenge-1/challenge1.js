// Your age in days
function ageInDays(){

    var birthYear = prompt('What year were you born...Good friend?');
    var age = (2022 - birthYear) * 365;
    var h3 = document.createElement('h3');
    var textAnswer = document.createTextNode('You are ' + age + ' days old');
    h3.setAttribute('id', 'ageInDays');
    h3.appendChild(textAnswer);
    document.getElementById('result').appendChild(h3);  
}

function reset(){
    document.getElementById('ageInDays').remove();
}