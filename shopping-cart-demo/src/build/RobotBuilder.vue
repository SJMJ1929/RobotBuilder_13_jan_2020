<template>
  <div v-if="availableParts" class="content">
    <div class="preview">
      <div class="preview-content">
        <div class="top-row">
          <img :src="selectedRobot.head.src"/>
        </div>
        <div class="middle-row">
          <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
          <img :src="selectedRobot.torso.src"/>
          <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
        </div>
        <div class="bottom-row">
          <img :src="selectedRobot.base.src"/>
        </div>
        <button class="add-to-cart" @click="addToCart()">Add to cart (&#x24;{{total}} ) </button>
      </div>
    </div>
    <div class="top-row">
      <div class="top part">
        <PartSelector :parts="availableParts.heads"
        position="top"
        @partSelected="part=>selectedRobot.head=part"
        />
      </div>
    </div>
    <div class="middle-row">
      <PartSelector :parts="availableParts.arms"
        position="left"
        @partSelected="part=>selectedRobot.leftArm=part"
      />
      <PartSelector :parts="availableParts.torsos"
        position="center"
        @partSelected="part=>selectedRobot.torso=part"
      />
      <PartSelector :parts="availableParts.arms"
        position="right"
        @partSelected="part=>selectedRobot.rightArm=part"
      />
    </div>
    <div class="bottom-row">
      <PartSelector :parts="availableParts.bases"
        position="bottom"
        @partSelected="part=>selectedRobot.base=part"
      />
    </div>
  </div>
</template>
<script>


import PartSelector from './PartSelector.vue'

export default {
name:'RobotBuilder',
created(){
  this.$store.dispatch('getParts');
},
beforeRouteLeave(to,from,next){
  console.log(this.selectedRobot.leftArm);
  if(this.addedToCart){
    next(true);
  } else if
    ((this.selectedRobot.leftArm.id==1)&&
    (this.selectedRobot.rightArm.id==1)&&
    (this.selectedRobot.base.id==1)&&
    (this.selectedRobot.torso.id==1)&&
    (this.selectedRobot.head.id==1))
    {
      next(true);
    }
    else{
            const response = confirm('You have not added your robot to your cart, are you sure you want to leave?');
            next(response);
    }
},
components:{PartSelector},
    data(){
      return{
        cart:[],
        addedToCart:false,
        selectedRobot:{
          head:{},
          leftArm:{},
          rightArm:{},
          torso:{},
          base:{},
        },
      };
    },

    computed:{
      availableParts(){
        return this.$store.state.parts;
      },
      total(){
        return (this.selectedRobot.leftArm.cost +
        this.selectedRobot.rightArm.cost +
        this.selectedRobot.head.cost +
        this.selectedRobot.base.cost +
        this.selectedRobot.torso.cost )
      },
    },

    methods:{
      addToCart(){
        const robot = this.selectedRobot;
        const cost = robot.head.cost
        + robot.leftArm.cost
        + robot.torso.cost
        + robot.rightArm.cost
        + robot.base.cost;
        this.$store.commit('addRobotToCart',
        Object.assign({},robot,{cost}));
        this.addedToCart=true;
      },
    }
};

</script>
<style>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
.content {
  position:relative;
}
.add-to-cart {
  position: absolute;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
</style>
