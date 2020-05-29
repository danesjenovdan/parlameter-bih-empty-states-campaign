<template>
    <div style="width: 60%; margin: auto; background-color: white;">
        <div class="progress"
                style="background-color: green;"
                :style="{width: progressBar + '%'}">
            {{ progressBar }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        data(){
            return {
                progressBar: 100
            }
        }
    }
</script>

<style scoped lang="scss">
    .progress{
        height: 40px;
        background-color: #eee;
        margin: auto;
        transition: width 500ms;
    }
</style>