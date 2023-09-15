$.ajax({

    url: "https://6503abc8a0f2c1f3faec1708.mockapi.io/api/ver1/LanHuong ",

    beforeSend: function(xhr) {

        xhr.overrideMimeType("text/plain;charset = x - user - defined ");

    }

})

.done(function(data) {

    if (console && console.log) {

        console.log("Sample of data:",
            data.slice(0, 100));

    }

});