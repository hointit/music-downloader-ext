<template>
<div class="container">
    <table class="table">
        <thead>
        <tr>
            <th style="width:30px">
                <input type="checkbox" v-bind:checked="IsCheckAll" v-on:click="CheckAllChange">
            </th>
            <th>Tên bài hát</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in ListSong" v-bind:key="row.index">
            <th style="width:30px">
                <input type="checkbox" v-bind:checked="row.checked" v-on:click="CheckedChange(row.index)">
            </th>
            <td class="p-0 align-middle">{{row.name}}</td>
        </tr>
        </tbody>
    </table>
    <!-- <div class="clearfix">
        <button type="button" v-on:click="Download" class="btn btn-primary float-left">Download Checked</button>  
        <button type="button" v-on:click="Download" class="btn btn-primary float-right">Download All</button>  
    </div> -->
    <div class="clearfix">
        <button type="button" v-on:click="Download" class="btn btn-primary float-center">Download</button>  
        <!-- <button type="button" v-on:click="Download" class="btn btn-primary float-right">Download All</button>   -->
    </div>
</div>
</template>

<script>
import _ from 'lodash';

function LoadJsonFromDom(){
    let scriptExcute = document.getElementById('jwplayer-0').nextElementSibling.innerHTML;
    let json = scriptExcute.substring(279 + 11, scriptExcute.length - 4);
    let rawList = JSON.parse(json);
    let lstSong = [];
    rawList.forEach((element, index)  => {
        lstSong.push({
            index: index,
            name: element.title,
            url: element.sources[0].file,
            checked: true,
        })
    });
    return  lstSong;
}


export default {
    name: 'ConMatViet',
    data () {
        return {
            ListSong: [],
            IsCheckAll: true
        }
    },
    mounted:function (){
        let self = this;
        this.$nextTick(function (){
            self.ListSong = LoadJsonFromDom();
            
        });


        var aPromise = fetch("https://conmatviet.com/nhac-chon-loc/album-em-oi-ha-noi-pho.html/");
        
  // Work with Promise object:
        aPromise
            .then(function(response) {
                console.log("OK! Server returns a response object:");
                console.log(response)
                return response.text();
            })
            .then(function (text) {
                console.log(text);
                debugger
                var dom = document.implementation.createDocument(text);
            })
            .catch(function(error)  {
                console.log("Noooooo! Something error:");
                // Network Error!
                console.log(error);
            });
    },
    methods:{
        Download() {
            let self = this;
            var param = "hihihehe"
            chrome.runtime.sendMessage({
                action: "download-playlist",
                ListSong: self.ListSong
            });

        },
        CheckedChange(index){
            this.ListSong[index].checked = !this.ListSong[index].checked;
            this.IsCheckAll = _.every(this.ListSong, {'checked': true})
        },
        CheckAllChange(){
            let self = this;
            self.IsCheckAll = !self.IsCheckAll;
            self.ListSong = _.map(self.ListSong, function(item){
                item.checked = self.IsCheckAll;
                return item;
            })
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
