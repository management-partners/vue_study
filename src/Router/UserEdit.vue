<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>User Edit</h2>
            <form>
                <div class="form-group">
                    <input type="hidden" name="id" v-model="user.id">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" v-model="user.name">
                    <small id="usernameHelp" class="form-text text-muted">We'll share your username with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="text" class="form-control" id="age" v-model="user.age">
                </div>
                <button type="submit" class="btn btn-primary">Edit User</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "UserEdit",
    data() {
        return {
            user: [],
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
    created() {
        let id = this.$router.history.current.params.id
        var vm = this
        this.users.filter(function (element) {
            if (element.id == id) {
                vm.user = element
                return
            }
        })
    },
};
</script>
