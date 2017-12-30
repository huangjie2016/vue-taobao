<style scoped>
  .container{
    width:100%;
    height:100%;
    text-align:left;
  }
  .center{
    width:976px;
    height:210px;
    margin:150px auto;
  }
  .fl{
    float:left;
  }
  .center .left{
    margin-right:20px;
    width:420px;
    height:420px;
  }
  .center .right{
    width:510px;
    height:420px;
  }
  .center .left img{
    width:100%;
    height:100%;
    display:block;
  }
  .center .right h2{
    color:#000;
    font-size:16px;
    margin-left:12px;
  }
  .color{
    color:#999;
    font-size:12px;
    width:69px;
    margin-left:8px;
    display:inline-block;
  }
  .txt-style{
    color:#333;
    font-size:14px;
    margin-left:8px;
  }
  .txt-style2{
    color:#ff0036;
    font-size:30px;
  }
  .center .right .price{
    height:24px;
    line-height:24px;
  }
  .center .right .new-price{
    height:36px;
    line-height:36px;
  }
  .integral{
    height:38px;
    line-height:38px;
    border-top:1px dotted #ccc;
    border-bottom:1px dotted #ccc;
    color:#ccc;
  }
  .integral>span{
    width:164px;
    display:inline-block;
    text-align:center;
    font-size:12px;
  }
  .integral span span{
    color:#ff0036;
  }
  .integral span .change-color{
    color:#280;
  }
  .size-style{
    padding:0 9px;
    text-align:center;
    border:1px solid #000;
    display:inline-block;
    margin-right:10px;
    cursor:pointer;
  }
  .border-red{
    border: 1px solid #ff0036;
  }
  .size{
    height:30px;
    line-height:30px;
  }
  .color-classification{
    height:52px;
    line-height:52px;
  }
  .small-img-style{
    width:38px;
    height:38px;
    border: 1px solid #000;
    margin-right:4px;
    cursor:pointer;
    display:inline-block;
    vertical-align: middle;
  }

</style>
<template>
  <div class="container">
    <div class="center" v-for="item in product">
      <div class="fl left">
        <img :src="item.bigPic" />
      </div>
      <div class="fl right">
        <h2>{{item.name}}</h2>
        <p class="price">
          <span class="color">价格 </span><span class="txt-style"> <s>￥{{item.price}}</s></span>
        </p>
        <p class="new-price">
          <span class="color">促销价</span><span class="txt-style2">￥{{item.newPrice}}</span>
        </p>
        <p class="integral">
          <span>月销量 <span> {{item.sales}}</span></span>|
          <span>累计评论 <span> {{item.comment}}</span></span>|
          <span>送天猫积分 <span class="change-color"> {{item.integral}}</span></span>
        </p>
        <div>
          <p class="size">
            <span class="color">尺码</span>
            <span v-for="sizeList in item.sizeList">
              <span class="size-style" :class="{'border-red': active}">{{sizeList.size}}</span>
            </span>
          </p>
          <p class="color-classification">
            <span class="color">颜色分类</span>
            <span v-for="smallPicList in item.smallPicList">
              <img class="small-img-style" :src="smallPicList.img" />
            </span>
          </p>
          <p class="number">
            <span class="color">数量</span>
            <input type="number" value="1" />
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        product: [],
        id: this.$route.params.id,
        active: false
      }
    },
    mounted() {
      this.getProductDetail();
    },
    methods: {
      getProductDetail() {
        console.log(this.id);
        this.$http.get('../../json/product'+ this.id + '.json')
          .then((res) => {
          console.log(res);
            if(res.data.code === 0) {
              this.product = res.data.productList;
            }
          })
      }
    }
  }
</script>
