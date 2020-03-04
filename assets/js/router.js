axios.get("/marchen.json").then(({ data }) => {
    const routes = [{
            path: "/",
            component: window.httpVueLoader("/components/Header.vue"),
            props: {
                title: "Märchen!"
            }
        },
        {
            path: "/marchen",
            component: window.httpVueLoader("/components/MarchenList.vue"),
            props: {
                marchen: data
            }
        },
        {
            path: "/marchen/:id",
            component: window.httpVueLoader("/components/Marchen.vue"),
            props: {
                marchens: data
            }
        },
        {
            path: "/danke",
            component: window.httpVueLoader("/components/Danke.vue")
        },
        {
            path: "/*",
            component: { template: "<h1>Seite nicht gefunden!</h1>" }
        }
    ];

    // 3. Create the router instance and pass the `routes` option
    // You can pass in additional options here, but let's
    // keep it simple for now.
    const router = new VueRouter({
        routes,
        linkExactActiveClass: "active"
    });

    // 4. Create and mount the root instance.
    // Make sure to inject the router with the router option to make the
    // whole app router-aware.
    const app = new Vue({
        data() {
            return {
                marchenList: data
            };
        },
        router: router
    }).$mount("#app");
    // Now the app has started!
});