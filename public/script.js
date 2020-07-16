let formID = document.getElementById('myForm');

let SelectID = document.getElementById('year');


async function callback(e) {
    e.preventDefault();
    // console.log(SelectID.options[SelectID.selectedIndex].value); // .text also works
    let year = SelectID.options[SelectID.selectedIndex].value;

    let result;

    try {
        result = await axios.get(`/year/?year=${year}`);
    } catch {
        console.log(error);
    }


    console.log(result);
    console.log(result.data);


    tenBestEconomyCalculator(result.data);


    // visual chart && the helper function for data shaping 

    function tenBestEconomyCalculator(bowlerFinalObj) {
        let finalArray = [];
        for (let bowler in bowlerFinalObj) {
            let totBall = bowlerFinalObj[bowler][0];
            let totalOver = Number(Math.floor(totBall / 6) + '.' + (totBall % 6));
            let totalRuns = bowlerFinalObj[bowler][1];
            finalArray.push([bowler, Number((totalRuns / totalOver).toFixed(2))]);
        }

        let series20 = finalArray.sort((a, b) => (a[1]) - (b[1])).slice(0, 20)

        let visualSeries = [];

        for (let elem of series20) {
            visualSeries.push(elem);
        }


        //visual chart-4


        Highcharts.chart("top-eco-bowler", {
            chart: {
                type: 'column'
            },
            title: {
                text: `4. Top Economical Bowlers in ${year} season`
            },
            subtitle: {
                text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Economy"
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Economy: <b>{point.y:.1f} </b>'
            },
            series: [{
                name: 'Population',
                data: visualSeries,
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y:f}', // one decimal
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });

    }











}



formID.addEventListener('submit', callback);