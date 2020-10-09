<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>Result Component</h2>
            <!-- <p>Counter is: {{ counter }}</p> -->
            <p>Counter is: {{ counter }}</p>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'

export default {
    name: 'Result',
    // computed: {
    //     counter (){
    //        return this.$store.state.counter
    //     }
    // },
    computed: {
        ...mapGetters({
            counter: types.DOUBLE_COUNTER
        })
    }
}
</script>
