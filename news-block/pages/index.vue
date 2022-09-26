<template>
  <div class='container'>
    <nuxt-link :to='"articles/" + article.slug'
    v-for='article in articles'
    :key='article.id'>
      <div class="article-preview">
        <img :src="article.img" alt="" class="preview-img">
        <div class="preview-text">
          <p class="category" :style="'color:' + article.category.color">{{article.category.title}}</p>
          <h3 class="preview-title">{{article.title}}</h3>
          <p class="preview-date">{{article.date}}</p>
          <p class="preview-content">{{article.short_content}}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['articles'])
  },
  async fetch({store, from}) {
    if(!from) {
      await store.dispatch('loadAllArticles')
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style>
  a {
    transition: .2s ease-out;
    color: #212121;
  }
  a:hover {
    text-decoration: none;
    color: #0dbc79;
  }
  a:hover .preview-text {
    border-color: rgb(13, 188, 121);
  }
  .container {
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 30px;
    padding-bottom: 50px;
  }
  .article-preview {
    max-width: 400px;
    padding: 5px;
    text-decoration: none;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .preview-img {
    object-fit: cover;
    max-width: 100%;
  }
  .preview-text {
    border: 1px solid rgba(33, 33, 33, 0.2);
    padding: 10px;
    border-top: none;
    transition: .2s ease-out;
    height: 100%;
  }
</style>