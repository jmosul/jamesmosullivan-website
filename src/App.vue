<template>
  <v-app light>
    <v-content>
      <section>
        <home-hero></home-hero>
      </section>
      <v-toolbar class="white">
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </v-toolbar>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">
                New Serverless Website
              </h2>
              <span class="subheading red--text">
                Development in progress
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Vue + Vuetify</div>
                    </v-card-title>
                    <v-card-text>
                      Built in Vue using webpack to build.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="yellow--text text--darken-1">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Deployment</div>
                    </v-card-title>
                    <v-card-text>
                      Using the Serverless Framework to deploy.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="orange--text text--darken-1">cloud_upload</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">AWS Hosted</div>
                    </v-card-title>
                    <v-card-text>
                      Hosted on AWS S3
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <section>
        <v-flex xs12>
          <latest-blog></latest-blog>
        </v-flex>
      </section>
    </v-content>
  </v-app>
</template>

<script>

import HomeHero from '@/components/HomeHero';
import LatestBlog from '@/components/LatestBlog';

export default {
  name: 'App',
  components: {
      HomeHero,
      LatestBlog
  },
  data () {
    return {
        title: "Home"
    }
  }
}
</script>
