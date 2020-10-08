<template>
<ul class="nav nav-pills">
     <router-link role="presentation" tag="li" to="/router" active-class="active" exact><a>Home</a> </router-link>
     <router-link role="presentation" tag="li" to="/router/user" active-class="active"><a>User List</a></router-link>

</ul>
</template>

<script>
export default {
    name: 'Header'
}
</script>
<style >
    .nav{
        display: block !important;
        margin: 2% auto;
    }
</style>
