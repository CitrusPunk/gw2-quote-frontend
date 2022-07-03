<template>
  <nav class="bg-red-700 child:max-w-lg child:m-2 child:px-2 child:py-8 p-8">
    <router-link to="/" exact-active-class="text-white">Quotes</router-link>
    <router-link to="/authors" exact-active-class="text-white"
      >Authors</router-link
    >
    <router-link to="/about" exact-active-class="text-white"
      >Github</router-link
    >
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
