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
</div>
</template>

<script>
export default {
    name: "Animation",
    data() {
        return {
            fade: true,
            slide: true,
            apear: true,
        };
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
