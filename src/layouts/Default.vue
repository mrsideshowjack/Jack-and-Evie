<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">
          <svg
            viewBox="0 0 566 566"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ring-svg"
          >
            <path
              d="M249.5 129.5L202.5 63L245.5 31H319.5L363 63L316.5 129.5M443 286C443 374.366 371.366 446 283 446C194.634 446 123 374.366 123 286C123 197.634 194.634 126 283 126C371.366 126 443 197.634 443 286Z"
              stroke="#212121"
              stroke-width="31"
            />
          </svg>
          {{ $static.metadata.siteName }}
        </g-link>
      </strong>
      <nav class="nav">
        <g-link
          class="nav__link"
          to="/RSVP/"
        >
          RSVP
        </g-link>
        <g-link
          class="nav__link"
          to="/Photos/"
        >
          Photos
        </g-link>
        <g-link
          class="nav__link"
          to="/Info/"
        >
          Info
        </g-link>
      </nav>
    </header>
    <slot />
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
:root {
  --text-color: #212121;
  --link-color: #355070;
  --background-color: #fff;
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Helvetica Neue",
    Arial, sans-serif;
  font-family: "Lateef", cursive;
  color: var(--text-color);
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: var(--background-color);
  font-size: 1.2rem;
}

.layout {
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  height: 80px;
}

.header strong a {
  display: flex;
  align-items: center;
  margin-left: 0;
}
.header strong a .ring-svg {
  width: 40px;
  transition: 400ms;
}
.header strong a:hover .ring-svg,
.header strong a:focus .ring-svg {
  transform: rotate(45deg);
}

.header a,
.header a:visited {
  margin-left: 20px;
  color: var(--text-color);
  text-decoration: none;
}
.header a:hover {
  text-decoration: underline;
  color: var(--link-color);
}

/* site wide */
.btn{
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.16px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    vertical-align: top;
    flex-shrink: 0;
    min-height: 3rem;
    border-radius: 0;
    text-align: left;
    text-decoration: none;
    transition: all 200ms cubic-bezier(0, 0, 0.38, 0.9);
    outline: none;
    position: relative;
    max-width: 20rem;
    margin: 0;
    background-color: transparent;
    border-width: 1px;
    border-style: solid;
    border-color: var(--text-color);
    color: var(--text-color);
    min-height: 2rem;
    padding: calc(0.375rem - 3px) 60px calc(0.375rem - 3px) 12px;
}
.btn:hover,
.btn:focus{
  color: white;
  background: var(--text-color);
}
.btn:focus{
    border-width: 0.1875rem;
    border-color: var(--text-color);
    box-shadow: inset 0 0 0 1px #ffffff;
}
</style>
