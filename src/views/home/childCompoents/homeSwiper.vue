<template>
  <div>
    <swiper>
      <swiper-item
        v-for="(item,index) in swiperList"
        :key="index"
      >
        <a :href="item.link">
          <img :src="item.iamge" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'homeSwiper',
  props: {
    swiperList: {
      type: Array,
      default:() => []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>