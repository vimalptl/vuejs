<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
       <router-link to="/" class="navbar-item">
       <img src="..\assets\logo.png" width="40" height="28">
       </router-link>
      


    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/home" class="navbar-item">Home</router-link>

      <a class="navbar-item " href="https://bulma.io">
        Documentation
      </a>

      <router-link to="/login" class="navbar-item">Login</router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <router-link to="/FAQ" class="navbar-item">FAQ - Axios</router-link>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>