<template>
    <div id="Search">
        <select v-model="search_target">
            <option value="https://search.bilibili.com/all?keyword=">bilibili</option>
            <option value="https://github.com/search?q=">github</option>
        </select>
        <br />
        <input type="text" @keydown.enter="Search()" v-model="search_content" />
        <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
</template>

<script>
import axios from "axios";

export default {
    el: "#Search",
    data() {
        return {
            search_target: "https://search.bilibili.com/all?keyword=",
            target: "",
            search_content: "",
        };
    },
    watch: {
        search_content: {
            handler() {
                this.target = this.search_target + this.search_content;
            },
        },
    },
    methods: {
        Search() {
            axios.post("api/search", "target=" + this.target).then(
                (response) => {
                    //访问成功时调用，response.data代表返回成功时的数据
                    console.log(response.data);
                },
                (error) => {
                    //访问失败时调用，error.message可以表示返回失败时的信息
                    console.log(error.message);
                }
            );
        },
    },
};
</script>

<script setup>
import { ref } from "vue";

const value = ref("");

const options = [
    {
        value: "Option1",
        label: "Option1",
    },
    {
        value: "Option2",
        label: "Option2",
    },
    {
        value: "Option3",
        label: "Option3",
    },
    {
        value: "Option4",
        label: "Option4",
    },
    {
        value: "Option5",
        label: "Option5",
    },
];
</script>

<style scoped>
#Search {
    width: 100%;
    height: 100%;
    margin: auto;
    text-align: center;
}

input {
    width: 600px;
    height: 40px;
    border-radius: 15px;
    outline: none;
    border: none;
    text-indent: 1em;
}

select {
    margin: 20px;
    outline: none;
}
</style>