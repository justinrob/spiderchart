function makeSpiderChartSettings(categories, data, color ) {
    return {
        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'XD Job Pattern',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: 'The Chart',
            data: data,
            pointPlacement: 'on',
            color: color,
        }]

    }
}

function change(e){
   e.preventDefault();
   var visDes = document.getElementById('vDes').valueAsNumber;
   var prodMan = document.getElementById('pMan').valueAsNumber;   
   var intDes = document.getElementById('iDes').valueAsNumber;   
   var labels = ['Visual designer', 'Product manager', 'Interaction designer']
    var values = [visDes, prodMan, intDes]
    var hue = 'green'
    var settings = makeSpiderChartSettings(labels, values, hue )    
    $('#container').highcharts(settings);
    return false
}
    


$(function () {
    $('#byBtn').click(change);
});