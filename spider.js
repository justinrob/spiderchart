function makeSpiderChartSettings(categories, data, color, title, subtitle ) {  
    
    return {
        chart: {
            polar: true,
            renderTo: 'container',
            type: 'line',
            marginTop: 110,
        },

        title: {
            text: title,
            style: {
                color: '#424242',
                fontWeight: 'normal',
                fontSize: '2em',
            }
        },

        subtitle: {
            text: subtitle,
        },

        pane: {
            size: '100%',
            y: 10,
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
            enabled: false,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
        },



        series: [{
            name: 'The Chart',
            data: data,
            pointPlacement: 'on',
            color: color,
        }]

    }
}

function getValueAsNumberFromInput(index, input) {
    return input.valueAsNumber;
}
function getValueFromInput(index, input) {
    return input.value;
}


function getValues(){
    var valueInputs = $("input.value-input");  
    var values = valueInputs.map(getValueAsNumberFromInput).get(); 
    return values;
};

function getLabels(){
    var labelInputs = $("input.label-input");
    var labels = labelInputs.map(getValueFromInput).get(); 
    return labels;
};

function updateChart(event){
   //event.preventDefault();
   
   // var val1 = document.getElementById('value1').valueAsNumber;
   // var val2 = document.getElementById('value2').valueAsNumber;   
   // var val3 = document.getElementById('value3').valueAsNumber;
   // var val4 = document.getElementById('value4').valueAsNumber; 
   // var values = [val1, val2, val3, val4];
   
    // var lab1 = document.getElementById('label1').value;
   // var lab2 = document.getElementById('label2').value;   
   // var lab3 = document.getElementById('label3').value;
   // var lab4 = document.getElementById('label4').value;
    // var labels = [lab1, lab2, lab3, lab4];

   var values = getValues();
   var labels = getLabels(); // <--- TODO: replace this hardcoded list with the result of a function call that gets the values from the label inputs
   var heading = document.getElementById('title').value;  
   var subheading = document.getElementById('subtitle').value;   

   var hue = '#EA4771';

   var settings = makeSpiderChartSettings(labels, values, hue, heading, subheading)    
   $('#container').highcharts(settings);

    //return false;
}

    function watchElements(elements) {
        var i;
        for (i = 0; i < elements.length; i++) {
            var element = elements[i]; // pick element i out of the array of elements
            
            if (element.tagName != 'INPUT') {
                throw element + " does not look like a valid DOM element";
            }
            var jqueryedElement = $(element); // turn this into a jqueryed object so we can watch it with .keyUp below
            jqueryedElement.keyup(updateChart); //attach a keyup event handler that calls updateChart
        }
    }

    function addAxis() {
        var axisLineHtml = $('#axisLineTemplate').html();
        $('#addAxis').before(axisLineHtml);
    }

//This function will run when the page loads
$(function () {
    //find the element with id byBtn and when it's clicked, run our updateChart function above
   //$('#byBtn').click(updateChart);

    //watch changes on the #title element 
    //TODO: try to clean this up into a function
    //1. Make a function that takes in a list of IDs (strings) 
    //2. Make that function body do this:
    //    for every string in the list, run a line like:
    //    $(string_item).keyup(updateChart);
    //  NOTE: in order to do #2, you need to learn how to write a 'for loop' that will iterate
    //       over each element in an array somehow
    //3. Replace all of the lines below with one line that calls your function 
    //   and passes in the list of all of these IDs

    var titles = document.getElementsByClassName("heading");
    var labels = document.getElementsByClassName("label-input");
    var values = document.getElementsByClassName("value-input");
    //var myIDs = document.getElementById("label-input");
        
    watchElements(titles);    // <--- TODO With Gabe next time: wtch elements by id or class   
    watchElements(labels);
    watchElements(values);
    updateChart();

    $('#addAxis').click(addAxis);
});