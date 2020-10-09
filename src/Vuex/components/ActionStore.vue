<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>Use Action Store Component</h2>
            <button class="btn btn-primary" @click="asyncIncrement({by: 100, duration:100})">Increament</button>
            <button class="btn btn-info" @click="asyncDecrement({by: 50, duration:100})">Decrement</button>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import * as types from '../store/types'
export default {
    name: 'AnotherCounter',
    methods: {
        // ...mapActions([
        //     'asyncIncrement',
        //     'asyncDecrement'
        // ])
        ...mapActions({
            asyncIncrement: types.COUNTER_INCREMENT_ASYNC,
            asyncDecrement: types.COUNTER_DECREMENT_ASYNC
        })
    },
}
</script>
