<template>


<div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <img src="static/css/logo-decameron.png" class="user-image img-responsive" style="margin-top: -4%;" />
            </div>

            <ul class="list-unstyled components">
                <a> </a>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li  v-for="item in menu" :key="item.name">
                            <a :href="item.path">
                               {{ item.name}}
                           </a>    
                        </li>                        
                    </ul>
                </li>                
                <li>
                    <a href="#">Portfolio</a>
                </li>
               
            </ul>
        </nav>

        <!-- Page Content  -->
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <span></span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                        
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <router-view></router-view>    
            </div>
        </div>
    </div>

 
</template>
<script>
export default {
    name:'menuprincipal',
    data () {
    return {     
        menu:[{
                  path: '#/CrearH',
                  name: 'Lista',                 
                },
                {
                  path: 'create',
                  name: 'Crear',
                },
                {
                  path: 'edit/:id',
                  name: 'Editar',
                }]
    }
    }
}
</script>

