import { defineStore } from 'pinia'
// import { useUsersStore } from './users';
import  { readFromCache, writeToCache } from '../utils/weather';

interface State {
    weather: any[],
    apiWeather: any[]
}

export const useWeatherStore = defineStore('weather', {
    state: () : State => ({
        weather: readFromCache(),
        apiWeather: []
    }),
    
    getters: {
        weatherGetter: (state) => state.weather,
        apiWeatherGetter: (state) => state.apiWeather
    },

    actions: {
        async fetchWeather(lat: number, lon: number) {
            const key = "81fa87f84299898a33b391a6160d1481";
            let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + key;

            const _res = await fetch(url)
            .then((response) => response.json())
            .then((res) => {
                return res
            })

            this.updateWeather(_res);
            return _res;
        },

        updateWeather(payload:any) {
            this.apiWeather.push(payload);
        },
        
        async userWeather(payload:any){
            let key = "81fa87f84299898a33b391a6160d1481";
            const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + payload.lat + '&lon=' + payload.lon + '&appid=' + key;

            return await fetch(url)
            .then((response) => response.json())
            .then((res) => {
                return res
            })
        }
    }
})