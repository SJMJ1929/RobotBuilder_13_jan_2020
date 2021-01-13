<template>
    <div>
        <h1>{{description}}</h1>
    </div>
</template>

<script>
import parts from '../data/parts';
export default {
    name:'PartInfo',   
    props:['partType','id'],
    computed:{
        description(){ 
            const {partType,id} = this;            
            return "You have selected "+ partType + " with Index " +id;
        },
    },
};
</script>