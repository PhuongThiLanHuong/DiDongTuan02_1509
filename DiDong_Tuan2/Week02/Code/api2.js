const urlBacon = "https: //6503abc8a0f2c1f3faec1708.mockapi.io/api/ver1/LanHuong ";


(function() {
    $.ajax({

        method: "GET",

        url: urlBacon,

        dataType: "json"

    })

    .done(function(data) {

        console.log(data);

    })

    .fail(function() {

        alert("no good");

    });

})()