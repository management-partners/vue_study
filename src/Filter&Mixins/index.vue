<template>
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Filter & Mixins</h1>
            <h5>{{ globalFilter | toLowcase }}</h5>
            <h5>{{ localFilter | toUppercase }}</h5>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <input class="form-control col-md-3" type="text" v-model="selected" />
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <ul class="list-group float-left">
                <li v-for="(fruit, index) in filterFruit" :key="index">
                    {{ fruit }}
                </li>
            </ul>
        </div>
    </div>
    <hr />
    <div class="row">
        <h3>Other fruit page</h3>
    </div>
    <div class="row">
        <fruits-list />
    </div>
</div>
</template>

<script>
import FruitsList from "./ListFruits";
import {
    fruitsMixin
} from "./mixin";

export default {
    name: "FilterAndMixin",
    mixins: [fruitsMixin],
    filters: {
        toLowcase(value) {
            return value.toLowerCase();
        },
    },
    components: {
        FruitsList,
    },
};
</script>
