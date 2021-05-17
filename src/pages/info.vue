<template>
  <Layout>
    <h1>Info</h1>
    <h2>Date & Times</h2>
    <p>{{ consts.date }}</p>

    <h2>The Venue</h2>
    <p>The venue for the whole event is <a href="http://www.tithe-barn.co.uk/">The Tithe Barn.</a> Located near Petersfield, The Tithe Barn is a unique wedding and reception venue, set in the heart of the South Downs National Park.</p>
    <h2>Getting There</h2>
    <p>The Tithe Barn <br> Old Ditcham Farm, Ditcham,<br> Petersfield GU31 5RQ</p>
    <iframe width="600" height="600" frameborder="0" style="border:0" :src='mapsUrl' allowfullscreen></iframe>
  </Layout>
</template>

<script>
import consts from '~/data/consts.json'
export default {
  metaInfo: {
    title: 'Info'
  },
  data () {
    return {
      consts,
      mapsUrl: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYzykVmVIdEgRBAG3SdD1ahg&key=${process.env.GRIDSOME_MAPS_API_KEY}&zoom=12`
    }
  },
}
</script>
