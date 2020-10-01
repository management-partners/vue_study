import User from './Index'
import UserDetail from './UserDetail'
import UserEdit from './UserEdit'
import UserStart from './UserStart'

export const userRoute = { path: '/user', component: User }
export const userDetailRoute = { path: '/user-detail', component: UserDetail }
export const userEditRoute = { path: '/user-detail', component: UserEdit }
export const userStartRoute = { path: '/user-detail', component: UserStart }