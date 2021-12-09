const app = new Vue({
    el: '#root',
    data: {
        email: []
    },
    methods: {

    },
    created() {
        for (i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then ((email) => {
            this.email.push(email.data.response)
            console.log(email);
            console.log(email.data);
            console.log(email.data.response);
        })
        }
    }
})