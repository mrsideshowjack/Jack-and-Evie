<template>
  <Layout>
    <section class="hero">
      <h1 class="main-title">
        Jack & <span>Evie</span>
      </h1>
    </section>
  </Layout>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
  metaInfo: {
    title: 'Home'
  },
  created: function () {
  this.$nextTick(function () {
    anime({
      targets: '.main-title',
      opacity: [0,1],
      duration: 1500,
      easing: 'linear'
    });
    anime({
      targets: '.main-title',
      translateY: [-300,0],
      duration: 600,
      easing: 'easeOutCubic'
    });
    })
  }
}
</script>

<style>
.hero{
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.hero .main-title{
  font-family: 'Playfair Display', serif;
  font-size: 25vmin;
  font-weight: 400;
  margin: 0rem auto;
  max-width: 80vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  user-select: none;
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
