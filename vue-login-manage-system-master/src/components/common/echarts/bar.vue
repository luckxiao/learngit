<template>
 <div id="myChart" :style="{width: '300px', height: '300px'}">
 </div>
</template>
<script>
  export default {
  name: 'bar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '月销售额' },
            tooltip: {},
            legend: {
              data:['销量']
            },
            xAxis: {
                data: [],
                axisLabel: {
                  interval: 0,  //坐标轴刻度标签的显示间隔(在类目轴中有效) 0:显示所有
                  rotate: -30,   //标签倾斜的角度，显示不全时可以通过旋转防止标签重叠（-90到90）
            }
            },
            yAxis: {
                     axisTick: {
            inside: true
        },
        scale: true,
        axisLabel: {
            margin: 2,
            // formatter: function (value, index) {
            //     if (value >= 10000 && value < 10000000) {
            //         value = value / 10000 + "万";
            //     } else if (value >= 10000000) {
            //         value = value / 10000000 + "千万";
            //     }
            //     return value;
            // }
        },
    },
          grid: {
            left: 35
        },
            series: [{
                name: '销量',
                type: 'bar',
                data: []
            }]
        })
        //异步加载数据
        const self = this;	
				let sale_id = sessionStorage.getItem('ms_user').sale_id;
        self.$http.get('/api/sale/getSale').then(function(response) {
        //JSON.stringify 转化为JSON 字符串
        // alert(JSON.stringify(response.data))
        var dataString = JSON.stringify(response.data)
        var data = JSON.parse(dataString)
        // 获得json 对象长度
        //alert(data.length)
        var months = []
        var sale_nums = []
        for(var i = 0;i<data.length;i++){
          months.push(data[i].month);
        }
        for(var j = 0;j<data.length;j++){
          sale_nums.push(data[j].sale_num);
        }
        myChart.setOption({
          xAxis:{
            data:months
          },
          yAxis:{},
          series:[
            {
              name:"销量",
              type:'bar',
              data:sale_nums
            }
          ]
        });
      })        
}
}
  }
</script>
<style>
.bm-view {
  width: 100%;
  height: 700px;
}
</style>
