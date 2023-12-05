console.log("From details.js")

document.querySelector('.back__button').addEventListener('click', function () {
    console.log("From back button");
});

// Import Vue from the Vue.js library (make sure to include Vue in your project)
/*     import Vue from 'vue';

    // Create a new Vue instance
    const app = new Vue({
        data() {
            return {
                data: null,
            };
        },
        mounted() {
            fetch('data.json')
                .then((res) => res.json())
                .then((data) => {
                    // this.data = data;
                    console.log(data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    });

    // Mount the Vue instance on an element in your HTML
    app.$mount('#app'); // Replace '#app' with the ID of the element where you want to mount your Vue app
 */
