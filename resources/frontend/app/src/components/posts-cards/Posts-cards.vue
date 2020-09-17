<template>
    <div
      class="posts"
    >
      <div
        class="posts__inner-card"
        v-for="item in getParentPosts"
        :key="item.id"

      >
        <div class="posts__inner-card__description">
          <span class="posts__inner-card__description__date">03/02/2020</span>
          <h1 class="posts__inner-card__description__title">Title</h1>
          <p class="posts__inner-card__description__text">{{item.title}}...</p>
          <router-link
            tag="button"
            :to="'/posts/' + item.id"
            class="main-btn main-btn--read-post"
          >
            <span class="main-btn__text">Read more</span>
          </router-link>
          <div class="posts__inner-card__id">Post №{{item.id}}</div>
        </div>
        <router-link
          class="posts__inner-card__img-box"
          :to="'/posts/' + item.id"
          tag="div"
        >
          <img class="posts__inner-card__img" src="@/resources/img/placeholder-post.png"/>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'posts',
  props: {
      getParentPosts: Array
  }
}
</script>
<style lang="scss">
    @import 'style.scss';
</style>
