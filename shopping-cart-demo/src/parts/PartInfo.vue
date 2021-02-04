<template>
    <div>
        <h1>Title : {{part[parseInt(id)-1].title}}</h1>
        <h3>Description : {{part[parseInt(id)-1].description}} </h3>
        <h3>Cost : &#x24;{{part[parseInt(id)-1].cost}}</h3>
    </div>
</template>

<script>
export default {
    name:'PartInfo',
    props:['partType','id'],
    computed:{
        part(){
          const {partType,id} = this;
          if (partType=='arms')
          {
            return this.$store.state.parts['arms'];
          }
          else if(partType=='bases')
          {
            return this.$store.state.parts['bases'];
          }
          else if(partType=='torsos')
          {
            return this.$store.state.parts['torsos'];
          }
          else if(partType=='heads')
          {
            return this.$store.state.parts['heads'];
          }
      },
    },
};
</script>



