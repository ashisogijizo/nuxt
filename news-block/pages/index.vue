<template>
  <div class='container'>
    <nuxt-link :to='"articles/" + article.slug'
    v-for='article in articles'
    :key='article.id'>
      <div class="article-preview">
        <img :src="article.img" alt="" class="preview-img">
        <p class="category">{{article.category.title}}</p>
        <h3 class="preview-title">{{article.title}}</h3>
        <p class="preview-date">{{article.date}}</p>
        <p class="preview-content">{{article.short_content}}</p>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  async asyncData({$axios}) {
    const info = await $axios.$get('https://api.runsim.ru/api/main?language=ru')
    const articles = info.news
    return {
      articles
    }
  },
  data() {
    return {
      news: [],
    }
  }
}
</script>
<style>
  .container {
    margin: 90px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 30px;
  }
  .article-preview {
    max-width: 28vw;
    max-height: 60vh;
    padding: 30px;
    overflow: hidden;
  }
  .preview-img {
    object-fit: cover;
    max-width: 100%;
  }
</style>