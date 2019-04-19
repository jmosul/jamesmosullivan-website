<template>
  <div class="home-hero">
    <v-carousel hide-delimiters height="600">
      <v-carousel-item
        v-for="(item,i) in carouselItems"
        :key="i"
        :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
    <div class="hero__content">
      <v-avatar size="168">
        <img
          class="elevation-20"
          src="images/profile.jpeg"
          alt="John"
        >
      </v-avatar>
      <h1 class="display-1 white--text mt-3">James O'Sullivan</h1>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeHero",
        data: () => ({
            carouselItems: [
                {
                    src: 'images/home-carousel/P1030091-compressor.jpg'
                },
                {
                    src: 'images/home-carousel/P1030311-compressor.jpg'
                },
                {
                    src: 'images/home-carousel/P1030332-compressor.jpg'
                },
                {
                    src: 'images/home-carousel/P1050080-compressor.jpg'
                },
                {
                    src: 'images/home-carousel/P1050543-compressor.jpg'
                }
            ]
        })
    }
</script>

<style scoped>
  .home-hero > .hero__content {
    position: absolute;
    top: 200px;
    width: 100%;
    text-align: center;
  }

  .hero__content h1 {
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.8);
  }
</style>
