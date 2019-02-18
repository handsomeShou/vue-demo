<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-3">
                <div class="thumbnail" @click="getModel()">
                    <a href="#" @mouseenter="enterImage($event)" @mouseleave="leaveImage($event)">
                        <!-- <img src="../assets/image/1.jpg" alt="..."> -->
                    </a>
                    <div class="caption">
                        <h3>Thumbnail label</h3>
                        <p>...</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">园区一角</h4>
                </div>
                <div class="modal-body">
                    <img src="../assets/image/1.jpg" style="width:100%;height:auto">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">  </button>
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
        },
        getModel(){
            $('#myModal').modal('show');
        }
    }
}
</script>
<style scoped>
    .container{
        margin-top: 18px;
    }
    .thumbnail{
        cursor: pointer;
    }
    .thumbnail:hover{
        box-shadow: 1px 2px 1px #e1e1e1;
    }
    .thumbnail a{
        display: block;
        max-width: 100%;
        min-height: 180px;
        overflow: hidden;
        background:url(../assets/image/1.jpg) no-repeat center;
        background-size: 100% 180px;
    }
    
</style>
