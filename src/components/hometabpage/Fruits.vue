<template>
    <div>
      {{this.name}}
       
    </div>
</template>
<script>

export default {
    name:"fruits",
     components:{
        
    },
    computed:{
        name(){
            return this.$store.state.name;
        }
    }
}
</script>