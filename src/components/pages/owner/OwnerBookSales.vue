<template>
  <div class="">
    <q-layout view="lHh Lpr lff" container style="height: 650px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="left" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="400"
        show-if-above
        style="background-image: @/assets/logo1.png;"
        content-class="bg-grey-3"
      >
      <div style="margin-top:180px;">
        <!-- <q-scroll-area style="height: calc(100% - 10px); margin-top: 750px; border-right: 1px solid #ddd"> -->
          <q-list padding>
            <router-link class="a" to="/Owner-Account-Settings" style="text-decoration:none">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="account_box" />
              </q-item-section>

              <q-item-section>
                Account Settings
              </q-item-section>
            </q-item>
            </router-link>
            <router-link class="a" to="/Owner-Book-Sales" style="text-decoration:none">
            <q-item clickable active v-ripple>
              <q-item-section avatar>
                <q-icon name="store" />
              </q-item-section>

              <q-item-section>
                Book Sales
              </q-item-section>
            </q-item>
            </router-link>

          </q-list>
        <!-- </q-scroll-area> -->
      </div>
        <div class="absolute-top" > 
          <img src="@/assets/bg-ava-cms.png" style="height: 165px">
          <div style="margin-top:-30px; ">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="@/assets/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold font-white">Owner AGT Book</div>
            <div class="font-white">Selamat Bekerja!</div>
          </div>
          </div>
        </div>
      </q-drawer>


      <q-page-container>
        <div class="bg-primary text-white shadow-2 row" style="">
          
          <h5>&nbsp;&nbsp;&nbsp;&nbsp;Owner Book Sales</h5>
        <br>
        <br>
        </div>

        <!-- Untuk Tabel -->
          
        <canvas id="streamChart" class="full-width full-height" style="height: 350px;"></canvas>

        <div class="row  ">
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
         <!-- Untuk Tabel -->




<!--          
        <q-page padding>
           
        </q-page> -->
      </q-page-container>
    </q-layout>
  </div>
</template>     


<style>




</style>


 
<script>

import Chart from 'chart.js';

export default {
  data () {
    return {
          drawer: true,
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
