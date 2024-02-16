<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/remote01">remote01</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
nav {
  background-color: #f8f8f8;
  padding: 1rem;
}
ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
}
li {
  margin: 0 1rem;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
