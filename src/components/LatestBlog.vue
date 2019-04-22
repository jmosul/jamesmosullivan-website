<template>
  <div class="latest-blog text-xs-center">
    <h2 class="display-2 mb-3">Latest Blog Post</h2>

    <h3 class="title mb-3">{{title}}</h3>
    <p class="body-1">{{content}}</p>
  </div>
</template>

<script>
    const apiHost = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://api.jamesmosullivan.uk';

    export default {
        name: "LatestBlog",
        data: () => ({
            title: '',
            content: '',
        }),
        mounted() {
            fetch(`${apiHost}/posts/latest`)
                .then((result) => result.json())
                .then((body) => Object.assign(this, body))
                .catch((err) => console.log('err', err))
        }
    }
</script>

<style scoped>
  .latest-blog {
  }
</style>
