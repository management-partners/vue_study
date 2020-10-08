<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2>The Add User Page</h2>
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
                <button type="submit" class="btn btn-primary">Add User</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import UserList from './User'
export default {
    name: 'UserAdd',
    data() {
        return {
            user:[]
        }
    },
    components: {
        UserList
    }
}
</script>
