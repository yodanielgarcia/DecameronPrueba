<template>

<div id="main">
        <div class="limiter">
            <div class="container-login100" style="background-image: url('static/css/fondo.jpg');">
                <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                    <span class="login100-form-title p-b-49">
						Login-Decameron
					</span>

                    <div class="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                        <span class="label-input100">Username</span>
                        <input class="input100" type="text" name="username" placeholder="Escribe tu usuario" v-model="name">
                        <span class="glyphicon glyphicon-user"></span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <span class="label-input100">Password</span>
                        <input class="input100" type="password" name="pass" placeholder="Type your password" v-model="pass">
                        <span class="glyphicon glyphicon-lock"></span>
                    </div>
                    <br>
                    <div class="container-login100-form-btn">
                        <div class="wrap-login100-form-btn">
                            <div class="login100-form-bgbtn"></div>
                            <button class="login100-form-btn" v-on:click="addname">
								Login
							</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data () {
    return {
      people: [],
        name: '',
        pass: '',
        num: 0,
    }
  },
    methods: {
        addname: function() {
            if (this.name != '' && this.pass != '') {

                var urlLogin = 'http://localhost/Decameronback/ConsultaLogin.php?identificacion=' + this.name + '&password=' + this.pass;
                axios.get(urlLogin).then(response => {
                    this.people = response.data;

                    if (response.data.activo_inactivo == '1') {
                        localStorage.setItem('tokenAdmin', response.data.remember_token)
                        this.$router.push('/')
                        //window.location.assign("Menu.html?tipo_u=" + response.data.tipo_u + "&token=" + response.data.remember_token);
                    }
                });
            } else {
                alert('Tienes Campos Vacios');
            }
        },
    }
}
</script>

