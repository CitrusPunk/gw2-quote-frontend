<template>
  <nav class="bg-slate-300">
    <router-link
      to="/"
      class="max-w-lg"
      exact-active-class="bg-pink-900 text-white"
      >Home</router-link
    >
    | <router-link to="/quotes">Quotes</router-link> |
    <router-link to="/authors">Authors</router-link> |
    <router-link to="/about">Github</router-link>
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
