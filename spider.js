function makeSpiderChartSettings(categories, data, color, title, subtitle ) {
    return {
        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: title,
            x: -80
        },

        subtitle: {
        text: subtitle,
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

function updateChart(event){
   //event.preventDefault();
   
   var val1 = document.getElementById('value1').valueAsNumber;
   var val2 = document.getElementById('value2').valueAsNumber;   
   var val3 = document.getElementById('value3').valueAsNumber; 
   var values = [val1, val2, val3];
   
   var lab1 = document.getElementById('label1').value;
   var lab2 = document.getElementById('label2').value;   
   var lab3 = document.getElementById('label3').value;
    var labels = [lab1, lab2, lab3];

   var heading = document.getElementById('title').value;  

   var subheading = document.getElementById('subtitle').value;   

    var hue = 'green';

    var settings = makeSpiderChartSettings(labels, values, hue, heading, subheading)    
    $('#container').highcharts(settings);
    
    //return false;
}
    

//This function will run when the page loads
$(function () {
    //find the element with id byBtn and when it's clicked, run our updateChart function above
   //$('#byBtn').click(updateChart);

    //watch changes on the #title element 
    $('#title').keyup(updateChart);
    $('#subtitle').keyup(updateChart);
    $('#label1').keyup(updateChart);
    $('#label2').keyup(updateChart);
    $('#label3').keyup(updateChart);
    $('#value1').keyup(updateChart);
    $('#value2').keyup(updateChart);
    $('#value3').keyup(updateChart);

});