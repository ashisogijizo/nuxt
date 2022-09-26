<template>
  <div class="container">
    <article class="article">
        <h1>{{title}}</h1>
        <p :style="`color: ${category.color}`">{{category.title}}</p>
        <div v-html="post"></div>
    </article>
    <nuxt-link class="home-link" to="/">На главную</nuxt-link>
  </div>
</template>
<script> 
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['post', 'content', 'title', 'category', 'slug'])
  },
   async asyncData({store, params}) {
    if(store.state.slug != params.slug) {
      await store.dispatch('loadPost', {postSlug: params.slug});
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