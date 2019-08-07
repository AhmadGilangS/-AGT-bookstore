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
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="account_box" />
              </q-item-section>

              <q-item-section>
                Account Settings
              </q-item-section>
            </q-item>

            <q-item clickable active v-ripple>
              <q-item-section avatar>
                <q-icon name="store" />
              </q-item-section>

              <q-item-section>
                Book Sales
              </q-item-section>
            </q-item>

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
        





         
        <q-page padding>
           
        </q-page>
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
      drawer: true
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
    streamData() {}
  }
}
</script>
