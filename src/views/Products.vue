<template>
    <div>
      <h1>产品页</h1>
    </div>

</template>
<script>
import footer from '@/components/footer.vue'
import axios from '@/api/axios'
import api from '@/api/index.api'
import router from '@/router/index'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    prop:{
//        option:Object
    },
    components: {
        swiper,
        swiperSlide,
        'ele_footer':footer
    },
        mounted(){
        console.log('进入了产品列表页')
    },
    data(){
            return{
                bannerList:[

                ],
                swiperOption: {
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,

                    }
                }
            }
    },
//    data: ,
    created() {//budgetListuserId
    }
 
}
</script>
<style lang="less">
   .nav{
       ul{
           display: flex;
           align-items: center;
           justify-content: center;
           padding: .2rem 0;
           border-bottom: .2rem solid #F3F0F0;;
           li{
              flex: 1;
               text-align: center;
               font-size: 0;
               span{
                   display: block;
                   margin-top: .1rem;
                   font-size: 14px/*no*/;
                   color: #3D3D3D;
               }
           }
       }
   }
    .huoke{
        p{
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #3d3d3d;
            padding:.2rem .3rem;
            i.icon-huoke{
                background: url("../assets/img/huoke-icon.png") no-repeat center;
                background-size: cover;
                width:20px;
                height:20px;
                display: block;
            }
            span{
                margin-left: 20px;
            }
            span:nth-child(3){
                flex:1;
                text-align: right;
            }
        }
    }
</style>
