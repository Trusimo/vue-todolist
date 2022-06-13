const appVue = new Vue({

    el: "#app",

    data: {
        toDo: [
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
    ],
    addCross: false,
    removeItem: false
    },
	methods: {
        taskDone: function () {
                this.addCross = true;
        },
        itemCancel: function () {
                this.removeItem = true;
        }
	}
});