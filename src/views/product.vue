<style scoped>
  .container{
    width:100%;
    height:100%;
  }
  .center{
    width:976px;
    height:210px;
    margin:150px auto;
  }
  .products{
    width:220px;
    height:330px;
    float:left;
    border:2px solid #ccc;
    margin-right:20px;
    text-align:left;
    border-radius:3px;
  }
  .products:hover{
    border:2px solid #ff0036;
  }
  .products a{
    width:210px;
    height:330px;
    margin:5px;
    display:block;
  }
  .products a img{
    width:210px;
    height:210px;
    display:inline-block;
  }
  .new-price{
    color:#ff0036;
    font-size:20px;
    height:30px;
    line-height:30px;
  }
  .name{
    color:#000;
    height:22px;
    line-height:22px;
  }
  .tradeName{
    color:#ccc;
  }
  .detail{
    border-top:1px solid #ccc;
    text-align:center;
    height:34px;
    line-height:34px;
    color:#000;
    margin-top:9px;
  }
  .detail span{
    display:inline-block;
    width:100px;
    height:34px;
  }
  .detail span em{
    font-weight:700;
    color:#b57c5b;
  }
  .detail span:nth-child(2){
    border-left:1px solid #ccc;
  }
  .detail span .color-change{
    color:#38b;
  }
</style>
<template>
  <div class="container">
    <div class="center">
      <div class="products" v-for="item in productList">
        <a @click="toDetail(item.id)">
          <img :src="item.bigPic" />
          <p class="new-price">￥{{item.newPrice}}</p>
          <p class="name">{{item.name}}</p>
          <p class="tradeName">{{item.tradeName}}</p>
          <p class="detail">
            <span>月成交 <em> {{item.sales}}</em></span>
            <span>评价 <em class="color-change"> {{item.comment}}</em></span>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        productList: []
      }
    },
    mounted() {
      this.getProductList();
    },
    methods: {
      getProductList() {
        this.$http.get('../../json/productlist.json')
          .then((res) => {
            if(res.data.code === 0){
              this.productList = res.data.productList
            }
          })
      },
      toDetail(id) {
        this.$router.push({name:'productDetail', params:{id: id}})
      }
    }
  }
</script>
