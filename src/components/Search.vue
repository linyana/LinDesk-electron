<template>
    <div id="Search">
        <select>
            <option value="bilibili">bilibili</option>
            <option value="github">github</option>
        </select>
        <input type="text" v-model="searchInput" @keyup="EnterSearch"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchInput: "",
            bilibili: "https://search.bilibili.com/all?keyword=",
        };
    },
    methods: {
        EnterSearch(e) {
          if(e.keyCode === 13){
            window.open(this.bilibili+this.searchInput, "_blank");
          }
        },
    },
};
</script>

<style scoped>
#Search {
    width: 500px;
    height: 100px;
    padding: 50px;
    margin: auto;
    background-color: rgb(165, 165, 165);
}

select {
    width: 100px;
    outline: none;
    border-radius: 6px;
    margin: 10px;
}

input {
    width: 400px;
    height: 35px;
    outline: none;
    border: none;
    border-radius: 20px;
    text-indent: 1em;
}
</style>