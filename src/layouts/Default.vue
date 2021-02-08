<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/RSVP/">RSVP</g-link>
        <g-link class="nav__link" to="/info/">Info</g-link>
        <g-link class="nav__link" to="/photos/">Photos</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
:root{
  --main-color:#FFCC7E;
}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  font-family: 'Lateef', cursive;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

a, a:visited {
  margin-left: 20px;
  color: black;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
  color: var(--main-color);
}
</style>
