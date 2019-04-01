<template>
    <div class="mall">
        <h2>商城</h2>
    </div>
</template>
<script>
import axios from "axios"
export default {
    created() {
        axios.get("http://localhost:8000/v1/user?user_id=24597").then((data)=>{
            console.log(data);
        })
    },
}
</script>
<style lang="scss" scoped>

</style>
