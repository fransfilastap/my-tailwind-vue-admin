import { createStore } from 'vuex'

export default createStore({
    state: {
        sidebarOpen: false,
        notificationOpen : false
    },
    getters: {
        sidebarOpen: state => {
            return state.sidebarOpen
        },
        notificationOpen : state => {
            return state.notificationOpen
        }
    },
    mutations: {
        toggleSidebar (state) {
            state.sidebarOpen = !state.sidebarOpen
        },
        toggleNotification (state){
            state.notificationOpen = !state.notificationOpen
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        },
        toggleNotification(context) {
            context.commit('toggleNotification')
        }
    }
})
