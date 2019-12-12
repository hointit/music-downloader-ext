<template>
<div class="container">
    <table class="table">
        <thead>
        <tr>
            <th style="width:30px">
                <input type="checkbox" v-bind:checked="IsCheckAll" v-on:click="CheckAllChange">
            </th>
            <th>Name</th>
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
import $ from 'jquery'

function LoadJsonFromDom(){
    let elementSong = $('[id^=music-listen-]').toArray();
    
    let lstSong = [];
    elementSong.forEach((element, index)  => {
        console.log(element.children[0].children[0].innerText);
        console.log(element.children[2].firstElementChild.firstElementChild.firstElementChild.href)
        lstSong.push({
            index: index,
            name: element.children[0].children[0].innerText,
            url: element.children[2].firstElementChild.firstElementChild.firstElementChild.href,
            checked: true,
        })
    });
    return  lstSong;
}


export default {
    name: 'ChiaSeNhac',
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
    },
    methods:{
        Download() {
            let self = this;
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
