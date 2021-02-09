<template>
  <Layout>
    <section class="hero-title-container">
      <h1 class="hero-title">
        Jack & <span>Evie</span>
      </h1>
    </section>
    <hr class="hero-hr">
    <h2 class="hero-date">{{ consts.date }}</h2>
  </Layout>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import consts from '~/data/consts.json'
export default {
  metaInfo: {
    title: 'Home'
  },
  data () {
    return {
      consts
    }
  },
  created: function () {
  this.$nextTick(function () {

    anime.timeline({
      }).add({
        targets: '.hero-title',
        opacity: {
          value: [0,1],
          duration: 1300,
          easing: 'linear',
        },
        translateY: {
          value: [-300,0],
          duration: 600,
          easing: 'easeOutCubic'
        }
      }).add({
        targets: '.hero-hr',
        translateX: {
          value: [300,0],
          duration: 200,
          easing: 'easeOutCubic'
        },
        opacity: {
          value: [0,1],
          duration: 300,
          easing: 'linear',
        },
      }, '-=50').add({
        targets: '.hero-date',
        opacity: {
          value: [0,1],
          duration: 300,
          easing: 'linear',
        },
      })
  })
  }
}
</script>

<style>
.hero-title-container{
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.hero-title-container .hero-title{
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

.hero-title-container .hero-title > span{
  flex: 1;
  flex-grow: 1;
  text-align: right;
}

.hero-hr{
  max-width: 300px;
  border: 1px solid var(--text-color);
}

.hero-date  {
  text-align: center;
}
</style>
