<template>
    <div class="section s-post">
        <div class="container">
            <Breadcrumbs :links="BreadcrumbLinks"/>
            <div class="post__item" v-for="item in getPost" :key="item.id">
              <h1 class="post__item-title">{{item.title}}</h1>
              <div class="post__item__body">
                <img class="post__item__body-img" src="@/resources/img/placeholder-post.png"/>
                <p class="post__item__body-description">{{item.body}}</p>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'

export default {
    name: 'post',
    components: {
      Breadcrumbs
    },
    props: {
        getParentPosts: Array
    },
    mounted () {
      this.fetchSinglePost(this.$route.params.id)
    },
    computed: {
        ...mapGetters('Posts', ['getPost']),
        BreadcrumbLinks () {
          return [
            {
              active: false,
              name: 'Home',
              href: '/'
            },
            {
              active: false,
              name: 'Posts',
              href: '/Posts'
            },
            {
              active: true,
              name: 'Post ' + this.$route.params.id,
              href: '/Posts/' + this.$route.params.id
            }
          ]
        }
    },
    methods: {
      ...mapActions('Posts', ['fetchSinglePost'])
    }
}
</script>
