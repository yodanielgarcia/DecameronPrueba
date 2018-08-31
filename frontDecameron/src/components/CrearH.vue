<template>
<div id="appVue">

    <div class="container">
        <div class="row">
                <div class="col-sm-12">
                    <h1 style="background: #0031ffbf; border-radius: 5px 5px 5px 5px;">Crear Hotel</h1>
                </div>
                <div class="col-sm-4">
                    <h1>Nombre</h1>
                    <input type="text" class="form-control" v-model="NombreHotel">
                </div>
                <div class="col-sm-4">
                    <h1>Direccion</h1>
                    <input type="text" class="form-control" v-model="DireccionHotel">
                </div>
                <div class="col-sm-4">
                    <h1>Ciudad</h1>
                    <input type="text" class="form-control" v-model="CiudadHotel">
                </div>
         </div>
        <div class="row">
                <div class="col-sm-4">
                    <h1>NIT.</h1>
                    <input type="text" class="form-control" v-model="NitHotel">
                </div>
                <div class="col-sm-4">
                    <h1>N° Habitaciones</h1>
                    <input type="text" class="form-control" v-model="NumeroHabtaciones">
                </div>
                <div class="col-sm-4">
                    <br>
                    <input type="button" class="btn btn-default" value="Guardar" v-on:click="addHotel">
                </div>
        </div>        
    </div>
</div>
</template>
<script>
export default {
     name: 'Crear',
    data () {
    return {
      people: [],
        NombreHotel: '',
        DireccionHotel: '',
        CiudadHotel: '',
        NitHotel:'',
        NumeroHabtaciones:''
    }
  },
    methods: {
        addHotel: function() {
            if (this.NombreHotel != '' && this.NitHotel != '') {
                alert("entro");
                var urlLogin = 'http://localhost/Decameronback/ConsultaCrearH.php?id=1&nombre='+this.NombreHotel+'&nit='+this.NitHotel+'&direccion='+this.DireccionHotel+'&ciudad='+this.CiudadHotel+'&no_habitaciones='+this.NumeroHabtaciones;
                axios.get(urlLogin).then(response => {
                    this.people = response.data;
                    this.$router.push('/listarh')
                });
            } else {
                alert('Tienes Campos Vacios');
            }
        },
    }
}
</script>
