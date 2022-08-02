<script setup>
// components
import Nav from "./components/Nav.vue";
import Search from "./pages/Search.vue";

// css
import css from "./style/responsive/App/app.css";
import theme from "./style/theme/dark.css";
</script>


<template>
    <div id="App">
        <div class="nav">
            <Nav></Nav>
        </div>
        <div class="page">
            <Search />
        </div>
    </div>
</template>

<script>
</script>


<style scoped>
</style>