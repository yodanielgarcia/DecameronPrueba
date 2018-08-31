<template>
        <div>
            <h1>{{titulo}}</h1>
            <ul>
                <li v-for="item in prueba" :key="item.algo">{{item.path}}</li>              
            </ul>
        </div>
</template>
<script>
export default {
    name:'tabla',
      props: ['titulo','prueba'],
}
</script>

