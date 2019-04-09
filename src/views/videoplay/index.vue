<template>
    <div class="videoplay">
        <div class="video_top">
            <div class="video_border">
                <div class="played">

                </div>
                <video controls="controls">
                    <source src="http://video.5lux.com.cn/1535102651.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        let id = this.$route.params.id;
        console.log(id)
    },
}
</script>
<style lang="scss" scoped>
.videoplay{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #f2f2f2;
    .video_top{
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        .video_border{
            position: relative;
            height: 0;
            padding-bottom: 4.22rem;
            z-index: 0;
            .played{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                
            }
        }
    }
}
</style>
