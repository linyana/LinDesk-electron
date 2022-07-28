<template>
  <div id="Search">
      <select>
        <option value="bilibili">bilibili</option>
        <option value="github">github</option>
      </select>
      <input type="text">
  </div>
</template>

<script>
export default {

}
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