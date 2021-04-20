<template>
    <div> 
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    name:"game",
     components:{
     
    },
    data(){
    return{
    }
    },
    created(){
         Promise.all([this.$store.dispatch("FETCH_DATA"),]).finally(()=>{
               console.log(this.data)
               
         })
    },
    computed:{
     ...mapState(['data']),
    }

}
</script>