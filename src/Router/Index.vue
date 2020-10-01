<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>User</h2>
            <ul class="list-group">
                <li class="list-group-item" v-for="(user, index) in users" :key="index">
                    {{ user.name }} :: {{ user.age }}
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Router",
    data() {
        return {
            users: [{
                    name: "user  1",
                    age: 10,
                },
                {
                    name: "user 20",
                    age: 20,
                },
                {
                    name: "user 30",
                    age: 30,
                },
                {
                    name: "user 40",
                    age: 40,
                },
            ],
        };
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
