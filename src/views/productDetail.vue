<template>
  <div>
    <div v-for="item in product">
      <div class="left">
        <img :src="item.bigPic" />
      </div>
      <div class="right">
        <h2>{{item.name}}</h2>
        <p>
          <span>月销量 <em> {{item.sales}}</em></span>
          <span>累计评论 <em> {{item.comment}}</em></span>
          <span>送天猫积分 <em> {{item.integral}}</em></span>
        </p>
        <div>
          <p>尺码</p>
          <p v-for="sizeList in item.sizeList">
            <span>{{sizeList.size}}</span>
          </p>
          <p>颜色分类</p>
          <p v-for="smallPicList in item.smallPicList">
            <img :src="smallPicList.img" />
          </p>
          <p>数量</p>
          <input type="number" value="1" />
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
        id: this.$route.params.id
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
