<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>Animation</h2>
            <hr />
            <button class="btn btn-primary" @click="fade = !fade">
                Fade alert
            </button>

            <br /><br />
            <transition name="fade">
                <div class="alert alert-info" v-if="fade">
                    This is some infomation
                </div>
            </transition>

            <hr />
            <button class="btn btn-primary" @click="slide = !slide">
                Slide alert
            </button>

            <br /><br />
            <transition name="slide" type="animation">
                <div class="alert alert-info" v-if="slide">
                    This is some infomation
                </div>
            </transition>

            <hr />
            <button class="btn btn-primary" @click="apear = !apear">
                Appear alert
            </button>

            <br /><br />
            <transition name="fade" appear>
                <div class="alert alert-info" v-if="apear">
                    This is some infomation
                </div>
            </transition>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <button class="btn btn-primary" @click="load = !load">Load Or Remove Element</button>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12"><br>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCanceled"
            
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancel"
            :css="false">
            <div style="width: 100px; height: 40px; background-color: green; border-radius:10px;" v-if="load"></div>
        </transition>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Animation",
    data() {
        return {
            fade: false,
            slide: false,
            apear: false,
            load: false,
            elementWidth: 100
        };
    },
    methods: {
       beforeEnter(el){
           this.elementWidth = 100;
           el.style.width = this.elementWidth + 'px';
       },
       enter(el, done){
           let round = 1;
           const interVal = setInterval(()=>{
               el.style.width = (this.elementWidth + round * 10 ) + 'px';
               round ++;
               if(round > 100){
                   clearInterval(interVal);
                   this.currentWidth = this.width;
                   done();
               }
           }, 20);
       },
       afterEnter(){},
       enterCanceled(){},
       beforeLeave(el){
           this.elementWidth = 800;
           el.style.width = this.elementWidth + 'px';
       },
       leave(el, done){
           let round = 1;
           const interVal = setInterval(()=>{
               el.style.width = (this.elementWidth - round * 10 ) + 'px';
               round ++;
               if(round > 100){
                   clearInterval(interVal);
                   done();
               }
           }, 20);
       },
       afterLeave(){},
       leaveCancel(){}
    },
};
</script>

<style scoped>
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 1s;
}

.fade-leave {}

.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}

.slide-enter {
    /*transform: translateY(20px);*/
    opacity: 0;
}

.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
}

.slide-leave {}

.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
}

@keyframes slide-in {
    from {
        transform: translateY(50px);
    }

    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(30px);
    }
}
</style>
