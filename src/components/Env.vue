<template>
    <div>
        <backgroundImage></backgroundImage>
        <BreadCrumb></BreadCrumb>
        <ImageIcon></ImageIcon>
    </div>
</template>
<script>
import BreadCrumb from "./BreadCrumb.vue"
import backgroundImage from "./backgroundImage.vue"
import ImageIcon from "./ImageIcon.vue"
export default {
    name:"Env",
    components:{BreadCrumb,backgroundImage,ImageIcon}
}
</script>
<style scoped>

</style>


