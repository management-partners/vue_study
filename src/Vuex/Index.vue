<template>
<div class="">
    <div class="row">
        <div class="col-md-12">
            <h2>Vuex</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-6 col-lg-6 col-sm-6 float-left">
                <result class="text-center" />
            </div>
            <div class="col-md-6  col-lg-6 col-sm-6 float-right">
                <another-result class="text-center" />
            </div>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-6 col-lg-6 col-sm-6 float-left">
                <action-store class="text-center" />
            </div>
            <div class="col-md-6  col-lg-6 col-sm-6 float-right">
                <input type="text" name="value" id="value" v-model="value" @input="updateValue">
                <br>
                Value: {{value}}
            </div>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-6 col-lg-6 col-sm-6 float-left">
                <counter class="text-center" />
            </div>
            <div class="col-md-6  col-lg-6 col-sm-6 float-right">
                <another-counter class="text-center" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Counter from './components/Counter'
import Result from './components/Result'
import AnotherResult from './components/AnotherResult'
import AnotherCounter from './components/AnotherCounter'
import ActionStore from './components/ActionStore'
import * as types from './store/types'
export default {
    name: 'Vuex',
    data() {
        return {
            counter: 0
        }
    },
    components: {
        Counter,
        Result,
        AnotherResult,
        AnotherCounter,
        ActionStore
    },
    computed: {
        value: {
            get() {
                return this.$store.getters[types.VALUE]
            },
            set(value) {
                this.$store.dispatch(types.UPDATE_VALUE, value)
            }
        }
    },
    methods: {
        updateValue(event) {
            this.$store.dispatch(types.UPDATE_VALUE, event.target.value)
        }
    },
}
</script>
