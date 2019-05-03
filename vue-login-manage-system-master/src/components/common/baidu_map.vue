<template>
 <baidu-map class="bm-view" v-bind="mapOptions">
 	    <bm-control :offset="{width: '10px', height: '10px'}">
	    <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 1}">
	   	    </bm-auto-complete>
	  </bm-control>
	  <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search>
</baidu-map>
</template>
<script>
 import {BaiduMap, BmControl, BmView, BmAutoComplete, BmLocalSearch} from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmView,
    BmControl,
    BmAutoComplete,
    BmLocalSearch
  },
  data() {
	   return {
	     mapOptions: {
	       ak: 'ak',
	       center: '长春',
	       scrollWheelZoom: true
	     },
	     keyword: ''
	   }
	},
	methods: {
	}
}
</script>
<style>
.bm-view {
  width: 100%;
  height: 700px;
}
</style>
