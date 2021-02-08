<template>
  <Layout>

    <h1 class="main-title">Jack & <span>Evie</span></h1>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.main-title{
  font-family: 'Playfair Display', serif;
  font-size: 300px;
  font-weight: 400;
  margin: 1rem 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.main-title > span{
  flex: 1;
  flex-grow: 1;
  text-align: right;
}
.home-links a {
  margin-right: 1rem;
}
</style>
