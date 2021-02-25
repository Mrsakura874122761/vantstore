<template>
    <div>
        <div >
 <h1 ref="hello">{{ value }}</h1>
 <button @click="get">sasa</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        return{
              value:"000"
        }
    },
    methods:{
        get(){
           this.value="111"
           console.log(this.$refs.hello.innerText)
        }
        ,
        gohome(){
            this.$router.push("/home")
        }
    }
    
    
}
</script>