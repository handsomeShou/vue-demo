<template>
    <div class="container">
        <div class="row">
        <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
                <a href="#" @mouseenter="enterImage($event)" @mouseleave="leaveImage($event)">
                    <!-- <img src="../assets/image/1.jpg" alt="..."> -->
                </a>
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>...</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
                <a href="#">
                    <!-- <img src="../assets/image/1.jpg" alt="..."> -->
                </a>
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>...</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
                <a href="#">
                    <!-- <img src="../assets/image/1.jpg" alt="..."> -->
                </a>
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>...</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
                <a href="#">
                    <!-- <img src="../assets/image/1.jpg" alt="..."> -->
                </a>
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>...</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: "ImageIcon",
    methods:{
        enterImage($event){
            console.log($event);
            var that = $($event.target);
            that.css({
                "background-size": "150% 270px",
                "transition":"0.8s ease-in-out",
                "-webkit-transition":" 0.8s ease-in-out"
            });
        },
        leaveImage($event){
            var that = $($event.target);
            that.css({
                "background-size": "100% 180px",
                "transition":"0.8s ease-in-out",
                "-webkit-transition":" 0.8s ease-in-out"
            });
        }
    }
}
</script>
<style scoped>
    .thumbnail a{
        display: block;
        max-width: 100%;
        min-height: 180px;
        overflow: hidden;
        background:url(../assets/image/1.jpg) no-repeat center;
        background-size: 100% 180px;
    }
    
</style>
