<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>Store state management</h2>
            <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
                <ul class="nav justify-content-start">
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)" @click="selectedComponent = 'home'">Stock Trader</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="javascript:void(0)" @click="selectedComponent = 'portfolio'">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)" @click="selectedComponent = 'stock'">Stocks</a>
                    </li>
                </ul>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">End Day</a>
                    </li>
                    <li class="dropdown nav-item" :class="{ open: isDropdownOpen }" @click="isDropdownOpen = !isDropdownOpen">
                        <a href="javascript:void(0)" class="dropdown-toggle  nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link">Save Data</a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:void(0)" class="nav-link">Load Data</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">Funds: $10.000</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="row wrap-content">
        <transition>
            <component :is="selectedComponent"></component>
        </transition>
    </div>
</div>
</template>

<script>
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Stock from "./components/Stock";
export default {
    name: "Store",
    data() {
        return {
            selectedComponent: "home",
            isDropdownOpen: false
        };
    },
    components: {
        Home,
        Portfolio,
        Stock
    }
};
</script>

<style scoped>
.wrap-content {
    width: 99%;
    margin: 0px auto;
    color: #000;
}
</style>
