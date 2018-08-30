new Vue({
    el: '#main',
    data: {
        people: [],
        name: '',
        pass: '',
        num: 0,

    },
    methods: {
        addname: function() {
            if (this.name != '' && this.pass != '') {

                var urlLogin = 'http://localhost/Decameronback/ConsultaLogin.php?identificacion=' + this.name + '&password=' + this.pass;
                axios.get(urlLogin).then(response => {
                    this.people = response.data;

                    if (response.data.activo_inactivo == '1') {
                        window.location.assign("Menu.html?tipo_u=" + response.data.tipo_u + "&token=" + response.data.remember_token);
                    }
                });
            } else {
                alert('Tienes Campos Vacios');
            }
        },
    }
});


new Vue({
    el: '#appVue',
    data: {
        lists: [],
        newKeep: ''
    },
    methods: {
        addKeep: function() {
            this.lists.push({ keep: this.newKeep, completed: false });
            this.newKeep = '';
        }
    }
});