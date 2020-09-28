<template>
<div id="app">
    <ul>
        <li>
            <router-link to="/">Home</router-link>|
            <router-link to="/communication">Communication</router-link>|
            <router-link to="/quote">Quote</router-link>|
            <router-link to="/dynamic">Dynamic Component</router-link>|
            <router-link to="/quotes">Quote Procces</router-link>|
            <router-link to="/directive">Directive</router-link> |
            <router-link to="/filter">Filter anh mixins</router-link> |
            <router-link to="/animation">Animation</router-link> |
            <router-link to="/http">Http</router-link> |
        </li>
    </ul>
    <div class="my-container">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            msg: "Main Menu"
        };
    }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

body {
    background-color: #cdcdcd;

    .my-container {
        background-color: aquamarine;
        // height: 600px;
        margin: 0px auto;
        width: 90%;
        padding-bottom: 5%;
        border: 2px solid #fff;
        border-radius: 20px;
    }
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 10px;
}

h1,
h2 {
    font-weight: normal;
    text-align: center;
    margin: 2% auto;
    text-transform: uppercase;
}

ul {
    list-style-type: none;
    padding: 0;
    text-align: center;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
