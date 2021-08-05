<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :swiperList="swiperList"></home-swiper>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar';
import homeSwiper from './childCompoents/homeSwiper.vue'
import { getHomeMultidata } from 'api/home';
export default {
  name:'',
  components: {
    navBar,
    homeSwiper
  },
  data () {
    return {
      swiperList: []
    };
  },
  mounted(){
    getHomeMultidata().then(res => {
      this.swiperList = res.data.swiperList
    })
  },
  methods: {},
}

</script>
<style scoped>
.home-nav{
  background: var(--color-tint);
}
</style>