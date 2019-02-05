<template>
  <div class="container" style="max-width: 1040px; padding: 40px 0; ">
    <div class="post-feed flex">
      <article class="post-card" v-for="post in posts">
        <a class="flex flex-flow-column full-width" :href="post.href">
          <div class="post-card-image" :style="getBackgroundStyle(post)"></div>
          <div class="post-card-content flex-flow-column flex-justify-space-between">
            <header class="post-card-header">
              <span class="post-card-tags">{{post.label}}</span>
              <h2 class="post-card-title bold">{{post.title}}</h2>
            </header>
            <div class="post-card-description">
              <p>{{getCardDescription(post)}}</p>
            </div>
          </div>
        </a>
      </article>
    </div>
  </div>
</template>
<script>
  import articles from './article'
  export default {
    data() {
      return {
        posts: ''
      }
    },
    beforeMount() {
      this.posts = Object.keys(articles).map(key => articles[key]);
    },
    methods: {
      getBackgroundStyle(post) {
        return `background-image: url(${post.image.url})`;
      },
      getCardDescription(post) {
        return post.description.length > 100 ? post.description.slice(0, 100) + '...' : post.description;
      }
    }
  }
</script>
<style>
  .post-feed {
    flex-wrap: wrap;
  }

  .post-card {
    min-height: 300px;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 8px 14px 38px rgba(39, 44, 49, .06), 1px 3px 8px rgba(39, 44, 49, .03);
    transition: 0.5s all ease;
    margin: 0 20px 40px;
    flex: 1 1 300px;
    flex-direction: column;
    display: flex;
  }

  .post-card:hover {
    box-shadow: 8px 28px 50px rgba(39, 44, 49, .07), 1px 6px 12px rgba(39, 44, 49, .04);
    transition: all .4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }

  .post-card-image {
    height: 200px;
    width: auto;
    background: grey no-repeat 50%;
    background-size: cover;
  }

  .post-card:first-child .post-card-content {
    flex: 0 1 357px;
    padding: 30px 40px;
  }

  .post-card-content {
    flex-grow: 1;
    display: flex;
    padding: 25px 25px;
  }

  .post-card-tags {
    display: block;
    margin-bottom: 10px;
    color: #738a94;
    font-size: 0.7rem;
    line-height: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  @media (max-width: 650px) {
    .post-card {
      margin: 0 0 5vw;
    }
    .post-card:first-child .post-card-content, .post-card .post-card-content {
      padding: 20px 10px;
    }
  }
  @media (min-width: 400px) {
    .post-card:first-child {
      flex: 1 1 100%;
      flex-direction: row;
    }
    .post-card:first-child .post-card-image {
      flex: 1 1 auto;
      height: 100%;
      background-size: cover;
    }
    .post-card:first-child a {
      flex-direction: row;
    }

  }
</style>
