import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
  car : [],
  productNum: 20180103,   //订单号
};

const mutations = {
  addCar(state, obj) {
    state.car.push(obj);
  },
  getProductNum(state, num) {
    state.productNum = state.productNum + num;
  },
  changeNumber(state, obj) {
    state.car.forEach(function(el) {
      if(el.productNum === obj.productNum){
        el.number = obj.number;
      }
    })
  },
  deleteProduct(state, num) {
    state.car.forEach(function(el, index) {
      if(el.productNum === num){
        state.car.splice(index, 1);
      }
    })
  }
};

export default new Vuex.Store({
  state,mutations
});
