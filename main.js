const appVue = new Vue({

    el: "#app",

    data: (
        {
            text: "Seguire lezione",
            done: false
        },
        {
            text: "Andare in palestra",
            done: false
        },
        {
            text: "Fare l'esercizio",
            done: false
        },
        {
            text: "Andare a calcetto",
            done: false
        }
),
	methods: {
        done: function () {
            this.text = "text-decoration-line-through";
        }
	}
});