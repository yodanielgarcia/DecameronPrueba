<template>
  <div id="main" class="container">
        <div class="row">
            
            <div class="col-sm-4">
                <h1>hoteles</h1>
                <common-list v-bind:lists="hoteles"></common-list>
            </div>

        </div>
    </div>
</template>
<script>
import Vue from 'vue'
  var urlhoteles = 'http://localhost/Decameronback/mostarH.php';
 Vue.component('common-list', {
            props: ['lists'],
            template: `<ul class="list-group"> 
            <li v-for = "item in lists" class = "list-group-item" > 
            {{ item.nombre }} 
            </li> </ul>`,
        });

export default {
    name: 'listhoteles',
     created: function() {
                this.getHotel()
     },
    data () {
    return {
      hoteles: [],
    }
  },
  methods: {
                getHotel: function() {
                    axios.get(urlhoteles).then(response => {
                        this.hoteles = response.data
                    });
                },

}
}
</script>
