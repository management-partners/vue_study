<template>
<div class="col-md-12">
    <h3>Edit Component Communication</h3>
    <button class="btn btn-outline-danger" @click="eventBusChangeName">Change Age</button><br>
    <h4>Edit: <span class="name">{{myName}}</span></h4>
    <h4>Age: {{ myAge }}</h4>
    <button class="btn btn-primary" @click="changeAge">Edit age</button><br>
</div>
</template>

<script>
import { eventBus } from './../main'

export default {
    name: 'EditCommunication',
    props:{
        myName:{
            type: String
        },
        myAge:{
            type: Number
        }
    },
    data() {
        return {
           age: this.myAge
        }
    },
    watch: {
        
    },
    computed: {
       
    },
    methods: {
        changeAge(){
            this.age = 30;
            this.$emit('editChangeAge', this.age);
        },
        eventBusChangeName(){
            this.myAge = 40;
            // eventBus.$emit('editChangeAge', this.myAge)
            eventBus.changeAge(this.myAge)
        }
    },
}
</script>
