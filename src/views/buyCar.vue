<style scoped>
  .fl{float:left;}
  .buy-car{
    width: 976px;
    height:auto;
    margin:0 auto;
  }
  .title{
    height:60px;
    line-height:60px;
    font-size:16px;
    font-weight:bold;
  }
  .item{
    height: 80px;
    line-height:80px;
    border:1px solid #ccc;
    margin-bottom:20px;
  }
  .item:hover{
    border:1px solid orange;
    background:#D5FFFD;
  }
  .img,.img img{
    width:80px;
    height:80px;
  }
  .name{
    height:60px;
    margin-top:10px;
    margin-left:30px;
    overflow:hidden;
  }
  .name,.name span{
    width: 220px;
    line-height:30px;
    text-align:left;
  }
  .size{
    width:90px;
    margin-left:50px;
    color: #7d7d7d;
  }
  .price{
    height:60px;
    margin-top:10px;
    line-height:30px;
    width:150px;
  }
  .price span{
    color:#9c9c9c;
  }
  .price .new-color{
    color:#000;
    font-size:14px;
  }
  .number{
    width:180px;
  }
  .number-btn{
    width:19px;
    height:28px;
    background:#ccc;
    display:inline-block;
    line-height:28px;
    vertical-align: middle;
    cursor:pointer;
    font-size:14px;
  }
  .number input{
    width:40px;
    height:24px;
    display:inline-block;
    vertical-align: middle;
    text-align:center;
  }
  .count{
    width:120px;
    color:#ff0036;
    font-size:16px;
  }
  .delete button{
    cursor:pointer;
  }
  .title span{ display:inline-block;}
  .title1{ width:390px; }
  .title2{ width:150px; margin-left:60px;}
  .title3{ width:150px; }
  .title4{ width:100px; margin-left:30px;}
  .footer{
    text-align:right;
  }
  .count-price{
    font-size:16px;
    color:#ff0036;
  }
  .account{
    width:120px;
    height:50px;
    margin-left:6px;
    line-height:50px;
    text-align:center;
    cursor:pointer;
    border:none;
    outline:none;
    display:inline-block;
    font-size:20px;
    background:#ff0036;
    color:#fff;
  }
  .is-dis{
    cursor: not-allowed;
    background:#7d7d7d;
  }
  .dialog{
    position:absolute;
    margin:0 auto;
    top:100px;
    left:0;
    right:0;
    bottom:0;
    width:300px;
    height:200px;
    background:#000;
    opacity:.8;
    filter:alpha(opacity=80);
    color:#fff;
    border-radius:5px;
  }
  .dialog-tit{
    height:28px;
    line-height:28px;
    border-bottom:1px solid #ccc;
  }
  .dialog-main p{
    margin-top:30px;
    height:40px;
    line-height:40px;
    color:orangered;
    font-size:16px;
  }
  .dialog-main button{
    margin-top:15px;
    width:60px;
    height:30px;
    line-height:30px;
    font-size:16px;
    background:#ff0036;
    color:#fff;
    display:inline-block;
    text-align:center;
    cursor:pointer;
    border:none;
    border-radius:3px;
  }
</style>
<template>
  <div class="buy-car">
    <div class="title">
      <span class="title1">商品信息</span>
      <span class="title2">单价</span>
      <span class="title3">数量</span>
      <span class="title4">金额</span>
      <span class="title5">操作</span>
    </div>
    <div class="item" v-for="item in buyCarList">
      <div class="fl img">
        <img :src="item.img" />
      </div>
      <div class="fl name">
        <span>{{item.name}}</span>
      </div>
      <div class="fl size">
        <span>{{item.size}}</span>
      </div>
      <div class="fl price">
        <span><s>￥{{item.price}}</s></span><br/>
        <span class="new-color">￥{{item.newPrice}}</span>
      </div>
      <div class="fl number">
        <span class="number-btn" @click="reduceNum(item)">-</span><input type="text" v-model="item.number" /><span @click="addNum(item)" class="number-btn">+</span>
      </div>
      <div class="fl count">
        ￥<span class="price">{{(item.newPrice * item.number).toFixed(2)}}</span>
      </div>
      <div class="fl delete">
        <button @click="deleteItem(item.productNum)">删除</button>
      </div>
    </div>
    <div class="footer">
      <span>合计： <span class="count-price">￥{{count.toFixed(2)}}</span></span>
      <input type="button" @click="buyProduct(count)" class="account" :class="{'is-dis':count == 0}" value="结算" :disabled="count == 0" />
    </div>
    <div class="dialog" v-if="dialog">
      <p class="dialog-tit">订单信息</p>
      <div class="dialog-main">
        <p>下单成功！</p>
        <span>我们会尽快为您安排送货~</span><br/>
        <button @click="overProduct()">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        dialog: false
      }
    },
    computed: {
      buyCarList: {
        get: function() {
          return this.$store.state.car
        },
        set: function(newValue){
          this.$store.state.car = newValue;
        }
      },
      count() {
        let price = 0;
        for(var i=0; i<this.$store.state.car.length; i++){
          price += this.$store.state.car[i].newPrice * this.$store.state.car[i].number
        }
        return price;
      }
    },
    methods: {
      reduceNum(item) {
        if(item.number > 0){
          item.number--;
          this.$store.commit('changeNumber', item);
        }
      },
      addNum(item) {
        item.number++;
        this.$store.commit('changeNumber', item);
      },
      deleteItem(productNum) {
        this.$store.commit('deleteProduct', productNum);
      },
      buyProduct(count) {
        if(count > 0){
          this.dialog = true;
        }
      },
      overProduct() {
        this.$store.state.car = [];
        this.$router.push('/');
      }
    }
  }
</script>
