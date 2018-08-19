<template>
  <div class="NavBar">
      <nav class="navbar navbar-expand-sm navbar-light bg-primary">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Logo</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to='/posts'>Posts</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" :to="{name:'addpost'}">Add Post</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link 3</a>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
</style>
