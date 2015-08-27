function makeSpiderChartSettings(categories, data, color, title ) {
    return {
        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: title,
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
   
   var val1 = document.getElementById('value1').valueAsNumber;
   var val2 = document.getElementById('value2').valueAsNumber;   
   var val3 = document.getElementById('value3').valueAsNumber; 
   var values = [val1, val2, val3];
   
   var lab1 = document.getElementById('label1').value;
   var lab2 = document.getElementById('label2').value;   
   var lab3 = document.getElementById('label3').value;
    var labels = [lab1, lab2, lab3];

   var heading = document.getElementById('title').value;    

    var hue = 'green';

    var settings = makeSpiderChartSettings(labels, values, hue, heading)    
    $('#container').highcharts(settings);
    return false;
}
    


$(function () {
    $('#byBtn').click(change);
});