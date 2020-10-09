<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>Another Counter Component</h2>
            <button class="btn btn-primary" @click="increment(1)">Increament</button>
            <button class="btn btn-info" @click="decrement(2)">Decrement</button>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import * as types from '../store/types'
export default {
    name: 'AnotherCounter',
    methods: {
        // ...mapMutations([
        //     'increment',
        //     'decrement'
        // ])
        ...mapActions({
            increment: types.COUNTER_INCREMENT,
            decrement: types.COUNTER_DECREMENT
        })
    },
}
</script>
