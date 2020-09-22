<template>
<div class="col-md-12">
    <h3>View Component Communication</h3>
    <button class="btn btn-warning" @click="childChangeName">Change Communication Name</button><br>
    <h4>View: <span class="name">{{myName}}</span></h4>
    <h4>My age: <span class="name">{{myAge}}</span></h4>
    <button class="btn btn-primary" @click="defaultAge">Default Age</button><br><br>
    <button class="btn btn-info" @click="callbackFN()">Callback Change Name</button><br>

</div>
</template>

<script>
import {
    eventBus
} from './../main'
export default {
    name: 'ViewCommunication',
    props: {
        myName: {
            type: String,
            default: 'Default'
        },
        callbackFN: Function,
        myAge: Number
    },
    data() {
        return {
            name: this.myName,
            age: this.myAge
        }
    },
    methods: {
        childChangeName() {
            this.name = "Child component change Name";
            this.$emit('childChange', this.name);
        },
        defaultAge() {
            this.age = 20;
            this.$emit("viewDefaultAge", this.age);
        }
    },
    computed: {
        
    },
    watch: {
        
    },
    created() {
        eventBus.$on('editChangeAge', (value)=>{
            this.myAge = value;
        });
    },
}
</script>
