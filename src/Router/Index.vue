<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Routing</h2>
                <Header />
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Header'
export default {
    name: 'Index',
    components:{
        Header
    }
}
</script>
<style>
    
</style>