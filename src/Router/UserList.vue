<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
           <h2>The Users List Page</h2>
            <button class="btn btn-info col-md-2 offset-md-4" @click="goToHome">Go to home</button>
            <button class="btn btn-info col-md-2" @click="goToAdd">News User</button><br><br>
            <ul class="list-group">
                <!-- <router-link tag="li" class="list-group-item" 
                v-for="(user, index) in users" 
                    :key="index" 
                    :to="'/router/user/' + user.id">
                    <a>{{ user.name }} :: {{ user.age }}</a>
                </router-link> -->
                <li class="list-group-item" v-for="(user, index) in users" :key="index" @click="goToEdit(user)">
                    {{ user.name }} :: {{ user.age }}
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "UserList",
    data() {
        return {
            users: [{
                    id: 1,
                    name: "user  1",
                    age: 10,
                },
                {
                    id: 2,
                    name: "user 20",
                    age: 20,
                },
                {
                    id: 3,
                    name: "user 30",
                    age: 30,
                },
                {
                    id: 4,
                    name: "user 40",
                    age: 40,
                },
            ],
        };
    },
    methods: {
        goToHome(){
            this.$router.push('/router');
        },
        goToAdd(){
            this.$router.push('/router/user/add')
        },
        goToEdit(user){
            this.$router.push({path:'/router/user/'+ user.id, query: { 'user': user} })
        }
    },
};
</script>

<style scoped>
.list-group {
    margin: 0px auto;
    width: 50%;
}

.list-group-item {
    margin-bottom: 1%;
    border-radius: 10px;
}

.list-group-item:hover {
    cursor: pointer;
    background-color: greenyellow;
}
</style>
