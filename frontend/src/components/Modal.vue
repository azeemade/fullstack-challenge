<script>
export default {
    props: ["index", "user", "weather"],
}
</script>

<template>
    <!-- <div :id="'defaultModal'+index" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"> -->
        <div :id="'defaultModal'+index" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
        <div class="relative w-full h-full max-w-2xl md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        User weather Info
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" :data-modal-hide="'defaultModal'+index">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <div class="grid grid-cols-4 gap-8">
                        <div>
                            <p class="text-sm text-gray-400">Fullname</p>
                            <p class="text-sm text-gray-700">{{ user.name }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400">Email</p>
                            <p class="text-sm text-gray-700">{{ user.email }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400">Longitude</p>
                            <p class="text-sm text-gray-700">{{ user.longitude }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400">Latitude</p>
                            <p class="text-sm text-gray-700">{{ user.latitude }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400">Main</p>
                            <p class="text-sm text-gray-700">{{ weather.weather[0].main }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400">Description</p>
                            <p class="text-sm text-gray-700">{{ weather.weather[0].description }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400">Humidity</p>
                            <p class="text-sm text-gray-700">{{ weather.main.humidity }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400">Temperature</p>
                            <p class="text-sm text-gray-700">{{ weather.main.temp }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-400">Pressure</p>
                            <p class="text-sm text-gray-700">{{ weather.main.pressure }}</p>
                        </div>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button :data-modal-hide="'defaultModal'+index" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>