export const state = () => ({
    articles: [],
    post: {},
    slug: '',
    title: '',
    category: {}
})

export const mutations = {
    SET_ARTICLES (state, articles) {
        state.articles = articles
    },
    SET_POST (state, post) {
        state.post = post
    },
    SET_TITLE (state, title) {
        state.title = title
    },
    SET_CATEGORY (state, category) {
        state.category = category 
    }, 
    SET_SLUG(state, slug) {
        state.slug = slug
    }
}
export const actions = {
    async loadAllArticles({commit}) {
        let response = await this.$axios.$get('https://api.runsim.ru/api/main?language=ru'),
            articles = response.news;
        commit('SET_ARTICLES', articles)
    },
    async loadPost({commit}, {postSlug}) {
        let response = await this.$axios.$get(`https://api.runsim.ru/api/news/card/${postSlug}?language=ru`),
            post = response.content,
            title = response.title,
            category = response.category;
        commit('SET_POST', post)
        commit('SET_TITLE', title)
        commit('SET_CATEGORY', category)
        commit('SET_SLUG', postSlug)
    }
}