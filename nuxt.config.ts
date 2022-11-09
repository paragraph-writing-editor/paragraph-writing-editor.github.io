// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Paragraph Writing Editor | A tool for improving your writing.',
      meta: [
        { name: 'description', content: 'A tool for improving your writing.' },
        { name: 'keywords', content: 'paragraph writing,editor,polishing,tool,パラグラフライティング,エディタ,推敲,ツール' }
      ],
      link: [{ rel: 'stylesheet', href: 'https://unpkg.com/balloon-css/balloon.min.css' }]
    }
  }
})
