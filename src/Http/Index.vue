<template>
<div class="container">
    <div class="row">
        <div class="col-md-4" style="margin: 0px auto">
            <h2>Http</h2>
            <div class="form-group">
                <label for="username">User Name</label>
                <input type="text" class="form-control" v-model="user.userName" />
            </div>
            <div class="form-group">
                <label for=" email">Email</label>
                <input type="email" class="form-control" v-model="user.email" />
            </div>
            <div class="form-group">
                <input class="form-control" type="text" v-model="node" />
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
                        {{ u.userName }}- {{ u.email }}
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
                userName: "",
                email: ""
            },
            users: [],
            resource: {},
            node: "data"
        };
    },
    methods: {
        submit() {
            this.resource.saveAlt(this.user);
            this.user.userName = "";
            this.user.email = "";
        },
        getAll() {
            this.resource
                .getData({
                    node: this.node
                })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key]);
                    }
                    this.users = resultArray;
                });
        }
    },
    created() {
        const customActions = {
            saveAlt: {
                method: "POST",
                url: this.node + ".json"
            },
            getData: {
                method: "GET"
            }
        };
        this.resource = this.$resource("{node}.json", {}, customActions);
    }
};
</script>

<style></style>
