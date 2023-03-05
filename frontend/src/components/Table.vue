<script>
import { mapState } from 'pinia'
import { useWeatherStore } from '../stores/weather';
import ModalComponent from './Modal.vue'
import { Modal } from 'flowbite';
export default {
    components: { ModalComponent },
    props: ["data"],
    computed : {
        ...mapState(useWeatherStore, ['apiWeather']),
    },
    methods : {
        openModal(index) {

            const $targetEl = document.getElementById('defaultModal'+index);
            console.log('defaultModal'+index)

            // options with default values
            const options = {
            placement: 'top-center',
            backdrop: 'dynamic',
            backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
            closable: true,
            onHide: () => {
                console.log('modal is hidden');
            },
            onShow: () => {
                console.log('modal is shown');
            },
            onToggle: () => {
                console.log('modal has been toggled');
            }
            };
            const modal = new Modal($targetEl, options);
            modal.show();
        }
    }
}
</script>
<template>
    <table class="table-auto shadow-lg bg-white min-w-full">
        <thead>
            <tr>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">s/n</th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Fullname</th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Email</th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Current weather</th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"></th>
            </tr>
        </thead>
        <tbody v-if="apiWeather.length > 0">
            <tr v-for="(item, index) in data" :key="index">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ item.id }}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ item.name }}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ item.email }}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ apiWeather[index].weather === undefined ? "--" : apiWeather[index]["weather"][0]["main"] }}</td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <!-- <a :data-modal-target="'defaultModal'+index" :data-modal-toggle="'defaultModal'+index" class="cursor-pointer block text-stone-500 hover:underline font-medium text-sm px-5 py-2.5 text-center " type="button">
                        view
                    </a> -->
                    <a @click="openModal(index)" :id="'defaultModal'+index" class="cursor-pointer block text-stone-500 hover:underline font-medium text-sm px-5 py-2.5 text-center " type="button">
                        view
                    </a>
                    <ModalComponent :index="index" :weather="apiWeather[index]" :user="item" />

                    
                </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="4" class="text-center">Loading ...</td>
            </tr>
        </tbody>
    </table>
</template>