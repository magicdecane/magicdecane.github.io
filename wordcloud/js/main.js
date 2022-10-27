var text = 'AI|Blazor|.Net Standard|Vue.js|MongoDB Atlas|Azure Functions|Logic apps|Logic apps|Docker|Microservices|Serverless';
text += '|ReactJS|.Net Core|IoT|Machine Learning|GraphQL|Svelte|Automation|Powershell|Kubernetes|PowerBI|Progressive Web Apps';
text += '|gRPC|Blockchain|DevOps';
var lines = text.split('|'),
    data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            //obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: Math.ceil(Math.random() * 3)
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('chart1', {
    series: [{
        type: 'wordcloud',
        data: data,
        rotation: {
            from: -5,
            to: 5
        },
        name: 'Occurrences'
    }],
    tooltip: {
        enabled: false
    },
    renderTo: "chart1",
    title: {
        margin: 0,
        text: ''
    },
    colors: ["#E09731", "#9ACE37", "#458fa1"]
});