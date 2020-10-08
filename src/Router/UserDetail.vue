<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>User Detail</h2>
            <table class="table table-hover table-bordered">
                <thead class="thead-dark">
                    <th>User ID</th>
                    <th>Username</th>
                    <th>User Age</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ user.id }}</td>
                        <td>{{ user. name }}</td>
                        <td>{{ user.age }}</td>
                    </tr>
                </tbody>
            </table>
            <router-link tag="button" class="btn btn-info" :to="'/router/user/'+ user.id+ '/edit'">Edit User</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "UserDetail",

    data() {
        return {
            // userId: this.$router.history.current.params.id,
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
            user: this.$router.history.current.query.user,
        };
    },
    created() {
        // console.log(this.$router.history.current.query.user)
        // let id = this.$router.history.current.params.id
        // var vm = this
        //     this.users.filter(function (element) {
        //         if (element.id == id) {
        //             vm.user = element
        //             return
        //         }
        //     })
            
    },
    methods: {
        
    },
   
};
</script>
<style>
/* .list-group {
    margin: 0px auto;
    width: 50%;
}

.list-group-item {
    margin-bottom: 1%;
    border-radius: 10px;
} */
</style>