<template>
  <div>
    <h1>Cart</h1>
    <div v-if="cart.length">
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{robot.head.title}}-{{robot.leftArm.title}}-{{robot.rightArm.title}}-{{robot.torso.title}}-{{robot.base.title}}
          </td>
          <td class="cost">
            {{robot.cost}}
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="buyNow()">
      Buy Now!
    </button>
    </div>
    <div v-else>
      No items added to cart
    </div>
 </div>
</template>

<script>
export default {
  name: 'Cart',
  computed:{
      cart(){
          return this.$store.state.cart;
      },
  },
  methods:{
    buyNow(){
        alert('Thank you for Shopping!');
        this.$store.commit('buyNow');
      }
  }
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }
</style>
