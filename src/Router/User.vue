<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <transition name="slide-fade">
                <router-view></router-view>
            </transition>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Router",

};
</script>

<style scoped>
.list-group {
    margin: 0px auto;
    width: 50%;
}

.list-group-item {
    margin-bottom: 1%;
    border-radius: 10px;
}

.list-group-item:hover {
    cursor: pointer;
    background-color: greenyellow;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
