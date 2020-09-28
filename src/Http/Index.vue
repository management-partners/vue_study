<template>
<div class="container">
    <div class="row">
        <div class="col-md-4" style="margin: 0px auto">
            <h2>Http</h2>
            <div class="form-group">
                <label for="username">User Name</label>
                <input type="text" class="form-control" v-model="user.username" />
            </div>
            <div class="form-group">
                <label for=" email">Email</label>
                <input type="email" class="form-control" v-model="user.email" />
            </div>
            <div class="form-group text-center">
                <button class=" btn btn-primary" @click="submit">Submit</button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <h2>List Firebase account</h2>
            <div class="form-group">
                <button class="btn btn-warning" @click="getAll">Get All</button>
            </div>
            <div class="form-group">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(u, index) in users" :key="index">
                        <label for="username"> {{ u.username }}</label> ===
                        <label for="email"> {{ u.email }}</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Http",
    data() {
        return {
            user: {
                username: "",
                email: "",
                link: "/data.json",
                resource: {}
            },
            users: []
        };
    },
    methods: {
        submit() {},
        getAll() {}
    }
};
</script>

<style></style>
