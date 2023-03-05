import { defineStore } from 'pinia'
import { useWeatherStore } from './weather'
import  { readFromCache, writeToCache } from '../utils/weather';

interface State {
    users: any[] 
}

export const useUsersStore = defineStore('user', {
    state: () : State => ({
        users: []
    }),
    
    getters: {
        usersGetter: (state) => state.users
    },

    actions: {
        async fetchUsers() {
            const url = 'http://127.0.0.1:8001'
            const res = await (await fetch(url)).json()
            this.updateUsers(res);
            try {
                await this.getWeather(res);
            }
            catch (error) {
                console.log(error)
            }

        },

        async getWeather(payload:any) {
            const weatherStore = useWeatherStore();

            await payload.users.forEach( (user:any) => {
                weatherStore.fetchWeather(user.latitude, user.longitude)
            })

            this.writeWeather();
            // console.log(weatherStore.apiWeatherGetter);

            // writeToCache(weatherStore.apiWeather);
        },

        updateUsers(payload:any) {
            this.users = payload.users
        },
        writeWeather(){
            const weatherStore = useWeatherStore();
            console.log(weatherStore.apiWeather);
            writeToCache(weatherStore.apiWeather);
        }
    }
})