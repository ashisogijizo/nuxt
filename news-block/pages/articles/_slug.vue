<template>
  <div class="container">
    <article class="article">
        <h1>{{post.title}}</h1>
        <p :style="'color:' + post.category.color">{{post.category.title}}</p>
        <div v-html="post.content"></div>
    </article>
    <nuxt-link class="home-link" to="/">На главную</nuxt-link>
  </div>
</template>
<script> 
export default {
   async asyncData({params, $axios}) {
    const post = await $axios.$get('https://api.runsim.ru/api/news/card/'+ params.slug + '?language=ru')
    return {
      post
    }
  },
  data() {
    return {
      
    }
  }
}
</script>
<style>
  img {
    max-width: 60%;
    object-fit: cover;
    object-position: center;
  }
  .home-link {
    color: #0dbc79;
    font-size: 20px;
    margin-bottom: 50px;
  }
  h1 {
    margin-top: 20px;
  }
</style>