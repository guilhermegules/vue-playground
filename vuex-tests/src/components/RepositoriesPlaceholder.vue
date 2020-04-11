<template>
  <div class="placeholder container">
    <div v-for="repo in 6" :key="repo.id" class="card my-3">
      <h5 class="card-header"></h5>
      <div class="card-body">
        <h5 class="card-tile"></h5>
        <p class="card-text"></p>
        <a :href="repo.url" class="btn btn-primary"></a>
        <p class="mt-5 mb-0"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.placeholder {
  margin-top: calc(49px * 3);
}

.card {
  height: 253px;
}

.card-header {
  height: 49px;
}
</style>
