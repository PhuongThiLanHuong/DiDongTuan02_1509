// // Post a user

// var url = "http://localhost:8080/api/v1/users";


var url = "https://6503abc8a0f2c1f3faec1708.mockapi.io/api/ver1/LanHuong ";

var data = {};

data.firstname = "John";

data.lastname = "Snow";

var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();

xhr.open("POST", url, true);

xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhr.onload = function() {

    var users = JSON.parse(xhr.responseText);

    if (xhr.readyState == 4 && xhr.status == "201") {

        console.table(users);

    } else {

        console.error(users);

    }

}