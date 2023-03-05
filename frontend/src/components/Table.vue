<script>
import { mapState } from 'pinia'
import { useWeatherStore } from '../stores/weather';
export default {
    props: ["data"],
    data() {
        return {
            weatherData: []
        }
    },
    computed : {
        // userWeather() {
            ...mapState(useWeatherStore, ['apiWeather']),
            // const useWeatherStore = useWeatherStore()
            // useWeatherStore.apiWeatherGetter()
        // }
    },
    methods: {
        async weather(lat, lon) {

            let key = "81fa87f84299898a33b391a6160d1481";
            const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + key;

            const main = await fetch(url)
            .then((response) => response.json())
            .then((res) => {
                return res
            })
            this.weatherData.push(main);
            console.log(main)
            return main;
        }
    }
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>s/n</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Current weather</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ apiWeather[index]["weather"][0]["main"] }}</td>
            </tr>
        </tbody>
    </table>
</template>