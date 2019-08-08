<template>
    <q-page class="q-pt-sm">
        <div id="result"> </div>
        <canvas id="streamChart" class="full-width" style="height: 350px;"></canvas>
        <div class="row gutter-lg q-py-xl layout-padding">
            <div class="col-md-6">
                <q-card-title>
                    <q-icon name="remove" size="64px" color="light-blue" class="q-my-md"/>
                    <span slot="subtitle" class="uppercase text-dark">Humidity</span>
                </q-card-title>
                <q-card-main>
                    <h1>{{curTemp}}</h1>
                </q-card-main>
            </div>
            <div class="col-md-6">
                <q-card-title>
                    <q-icon name="remove" size="64px" color="light-green" class="q-my-md"/>
                    <span slot="subtitle" class="uppercase text-dark">Humidity</span>
                </q-card-title>
                <q-card-main>
                    <h1>{{curHum}}</h1>
                </q-card-main>
            </div>
        </div>
    </q-page>
</template>

<style>

</style>

<script>

import Chart from 'chart.js';

export default {
  data () {
    return {
          curTemp: 24,
          curHum: 50,
          name: 'PageIndex',
          maxBar: 100,
          mChart: null
    }
  },
  mounted(){
    this.drawTheChart()
    this.streamData()
  },
  methods: {
    drawTheChart () {
      let ctx = document.getElementById("streamChart").getContext('2d');

      this.mChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [this.getDateTime(), this.getDateTime()],
          datasets:[
            {
              label: 'Temperature',
              data: [this.curTemp, this.curTemp],
              backgroundColor: 'rgba(129, 212, 250, 0.2)',
              borderColor: 'rgba(129, 212, 250, 1)',
              borderWidth:1
            },
            {
              label: 'Humidity',
              data: [this.curHum, this.curHum],
              backgroundColor: 'rgba(104, 159, 56, 0.2)',
              borderColor: 'rgba(104, 159, 56, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          // animation: false,
          legend: {
            position: 'botom',
            //labels: {userPointStyle: true}
          },
          tooltips: {
            position: 'nearest',
            mode: 'index'
          },
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true
              },
              display: false,
              stacked: true
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              display: false,
              stacked: true
            }]
          }
        }
      });
    },
    getDateTime(){
      let today = new Date ()
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let time = today.getHours()+'-'+(today.getMinutes()+1)+'-'+today.getSeconds();
      return date+' '+time;
    },
    streamData() {
        if (typeof(EventSource) !== "undefined"){
            let source = new EventSource("//localhost:8080/stream/");
            let that = this;

            source.onmessage = function (event){
                let streamData = JSON.parse(event.data)

                if (that.mChart.data.labels.length > that.maxBar) that.mChart.data.labels.shift()

                that.curTemp = streamData.temp.toFixed(1)
                that.curHum = streamData.hum.toFixed(1)
                that.mChart.data.labels.push(streamData.wkt);
                that.mChart.data.datasets.forEach(dataset => {
                    if (dataset.data.length > that.maxBar) {
                        dataset.data.shift()
                    }
                    if (dataset.label == 'Temperature'){
                        dataset.data.push(streamData.temp)
                    } else {
                        dataset.data.push(streamData.hum)
                    }
                })

                that.mChart.updata()
            };
        } else {
            document.getElementById("result").innerHTML = "Browser is not suport this events..."
        }
    }
  }
}
</script>
