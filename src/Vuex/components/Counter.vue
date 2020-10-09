<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>Counter Component</h2>
            <button class="btn btn-primary" @click="increment(10)">Increament</button>
            <button class="btn btn-info" @click="decrement(10)">Decrement</button>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import * as types from '../store/types'
export default {
    name: 'Counter',
    methods: {
        ...mapActions({
            increment: types.COUNTER_INCREMENT,
            decrement: types.COUNTER_DECREMENT
        })
        // increment() {
        //     this.$store.state.counter++ 
        // },
        // decrement() {
        //     this.$store.state.counter--
        // }
    },
}
</script>
