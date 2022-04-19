$.getJSON('https://mindicador.cl/api', function(data) {
    var dailyIndicators = data;
    $("<p/>", {
        html: 'El valor actual de la UF es $' + dailyIndicators.uf.valor +
        '<br> El valor actual del DOLAR es $' + dailyIndicators.dolar.valor +
        '<br> El valor actual del EURO es $' + dailyIndicators.euro.valor +
        '<br> El valor actual del IPC es $' + dailyIndicators.ipc.valor +
        '<br> El valor actual de lsa UTM es $' + dailyIndicators.utm.valor +
        '<br> El valor actual del bitcoin es $' + dailyIndicators.bitcoin.valor
    }).appendTo(".indicadoresvdos");

    var fecha = new Date();
    document.getElementById("fechados").innerHTML = fecha.getDate() + "-" +(fecha.getMonth()+1) + "-" + fecha.getFullYear();
}).fail(function() {
    console.log('Error al consumir la API!');
});



