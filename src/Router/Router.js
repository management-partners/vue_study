import Index from './Index'
import Home from './Home'
// import User from './User'
// import UserList from './UserList'
// import UserAdd from './UserAdd'
// import UserDetail from './UserDetail'
// import UserEdit from './UserEdit'

const User = resolve => {
    require.ensure(['./User.vue'], () => {
        resolve(require('./User.vue'))
    }, 'user')
}
const UserList = resolve => {
    require.ensure(['./UserList.vue'], () => {
        resolve(require('./UserList.vue'))
    }, 'user')
}
const UserAdd = resolve => {
    require.ensure(['./UserAdd.vue'], () => {
        resolve(require('./UserAdd.vue'))
    })
}
const UserDetail = resolve => {
    require.ensure(['./UserDetail.vue'], () => {
        resolve(require('./UserDetail.vue'))
    }, 'user')
}
const UserEdit = resolve => {
    require.ensure(['./UserEdit.vue'], () => {
        resolve(require('./UserEdit.vue'))
    }, 'user')
}
export const homeRoute = {
    path: '/router', component: Index, children:
        [
            { path: '', component: Home},
            {
                path: '/router/user', component: User, children:
                    [
                        { path: '', component: UserList },
                        { path: 'add', component: UserAdd },
                        { path: ':id', component: UserDetail },
                        { path: ':id/edit', component: UserEdit },
                    ]
            },
            
        ]
}
// export const userRoute = {
//     path: '/router/user', component: User, children:
//         [
//             { path: '', component: UserStart },
//             { path: ':id', component: UserDetail },
//             { path: ':id/edit', component: UserEdit }
//         ]
// }
