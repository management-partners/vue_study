<template>
<div class="communication row container">
    <h2>Pass value to child component and callback</h2>
    <div class="main-component col-md-12">
        <h3>Communication Component</h3>
        <button class="btn btn-info" @click="changeName">Change Communication Name</button><br>
        <h4>Hello : <span class="name">{{name}}</span></h4>
        <h4>Age: {{ age }}</h4><button class="btn btn-primary" @click="resetAge">Reset Age</button>
        <hr>
    </div>
    <br>
    <div class="col-md-12">
        <div class="col-md-6 view">
            <view-com :myName.sync="name" 
                      @childChange="name = $event" 
                      :callbackFN="parrentChangeName"
                      :myAge.sync="age"
                      @viewDefaultAge="age = $event"
                      />
        </div>
        <div class="col-md-6 edit">
           <edit-com :myAge.sync="age"
                     :myName.sync="name"
                     @editChangeAge="age = $event"
                     />
        </div>
    </div>

</div>
</template>

<script>
import ViewCom from './ViewCommunication'
import EditCom from './EditCommunication'
export default {
    name: 'Communication',
    data() {
        return {
            name: 'Name',
            age : 1
        }
    },
    watch: {
       
    },
    methods: {
        changeName(){
            this.name = 'Parrent Name is changed'
        },
        parrentChangeName(){
            this.name = "Parrent callback"
        },
        resetAge(){
            this.age = 1;
        }
    },
    components:{
        ViewCom,
        EditCom
    }
}
</script>

<style lang="scss">

.communication {
    // background-color: aquamarine;
    // // height: 600px;
    // margin: 0px auto;
    // width: 100%;
    // padding-bottom: 5%;
    // border: 2px solid #fff;
    // border-radius: 20px;

    .main-component {
        padding: 0px 5% 0px 5%;
        margin: 0px auto;
        text-align: center;
    }

    hr {
        height: 1px;
        background-color: azure;
        width: 100%;
    }

    .view {
        background-color: bisque;
        width: 45%;
        float: left;
        padding: 2% 2% 2% 0px;
        min-height: 300px;
    }

    .edit {
        background-color: burlywood;
        width: 45%;
        float: right;
        padding: 2% 2% 2% 0px;
        min-height: 300px;
    }
    .name{
        color: red;
    }
}
</style>
