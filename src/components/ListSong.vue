<template>
    <div class="container">
    <h2>Basic Table</h2>
    <button type="button" class="btn btn-primary" v-on:click="OnLoad">Click me</button>
    <div>{{msg}}</div>
    <table class="table">
        <thead>
        <tr>
            <th style="width:30px">Firstname</th>
            <th>Lastname</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>John</td>
            <td>Doe</td>
        </tr>
        <tr>
            <td>Mary</td>
            <td>Moe</td>
        </tr>
        <tr>
            <td>July</td>
            <td>Dooley</td>
        </tr>
        </tbody>
    </table>
    <button type="button" v-on:click="Download" class="btn btn-primary">Download</button>  
</div>
</template>

<script>

export default {
    name: 'ListSong',
    data () {
        return {
            msg: "Ahihi",
        }
    },
    mounted:() => {
        var scriptExcute = document.getElementById('jwplayer-0').nextElementSibling.innerHTML;
        this.msg = scriptExcute;
    },
    methods:{
        OnLoad(){
            var scriptExcute = document.getElementById('jwplayer-0').nextElementSibling.innerHTML;
            this.msg = scriptExcute;
        },
        Download() {
            alert(ahihi);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
