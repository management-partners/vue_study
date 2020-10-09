<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Another Result Component</h2>
                <!-- <p>Counter is : {{ counter }}</p>
                <p>Number of click : {{ clicks }}</p> -->
                 <p>Another Counter is : {{ doubleCounter }}</p>
                <p>Number of click : {{ stringCounter }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types'
export default {
    name:'AnotherResult',
    // computed: {
    //     counter(){
    //         return this.$store.getters.doubleCounter
    //     },
    //     clicks(){
    //         return this.$store.getters.stringCounter
    //     }
    // },
    computed: {
        ...mapGetters({
            doubleCounter: types.DOUBLE_COUNTER,
            stringCounter: types.CLICK_COUNTER
        }
    )
    }
}
</script>