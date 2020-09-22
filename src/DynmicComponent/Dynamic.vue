<template>
    <div class="dynamic">
        <button @click="isSelected = 'User'" class="btn btn-info"> User</button>
        <button @click="isSelected = 'Category'" class="btn btn-warning"> Category</button>
        <button @click="isSelected = 'Product'" class="btn btn-danger"> Product</button>
        <br><br>
        <p>{{ isSelected }}</p>
        <br><br>
        <keep-alive>
         <component :is="isSelected"></component>
        </keep-alive>
       
    </div>
</template>
<script>
import User from './User'
import Category from './Category'
import Product from './Product'
export default {
    name : 'Dynamic',
    data() {
        return {
            name:'User ',
            isSelected: 'User'
        }
    },
    components: {
        User,
        Category,
        Product
    }
}
</script>
<style>
    .dynamic{
        margin: 5% auto;
        text-align: center;
    }
    .btn{
        padding: 2%;
        margin: 0px 1%;
    }
</style>