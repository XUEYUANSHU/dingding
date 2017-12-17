<template>
        <div class="footer">
            <ul>
                <li@click="goUrl(1)">
                    <img src="../assets/img/icon-home-index.png" alt="">
                    <span>首页</span>
                </li>
                <li @click="goUrl(2)">
                    <img src="../assets/img/icon-product-dark.png" alt="">
                    <span>产品</span>
                </li>
                <li @click="goUrl(3)">
                    <img src="../assets/img/icon-user-dark.png" alt="">
                    <span>我的</span>
                </li>
            </ul>
        </div>
</template>
<script>
    export default {
  methods: {
    goUrl(index) {
        switch (index) {
			case 1:
			case "1":
                this.$router.push('Home');
            	break;
			case 2:
			case "2":
                this.$router.push('Products');
            	break;
			case 3:
			case "3":
                this.$router.push('UserCenter');
            	break;
			default:
			break;
       
      }
    }
  },
    }
</script>
<style lang="less">
    .footer{
        position: fixed;
        bottom:0;
        z-index: 9999;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #e2e2e2;
        padding: .1rem 0;
        ul{
            display: flex;
            align-items: center;
            li{
                flex:1;
                text-align: center;
                span{
                    display: block;
                    font-size: 14px;
                    color: #3d3d3d;
                }
            }
        }
    }
</style>
