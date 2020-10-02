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
            <CommentsForm :post-id="currentPostId"/>
            <PostComments :post-id="currentPostId"/>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'
import PostComments from '@/components/postComments/PostComments'
import CommentsForm from '@/components/commentsForm/CommentsForm'

export default {
    name: 'post',
    components: {
      Breadcrumbs,
      PostComments,
      CommentsForm
    },
    props: {
        getParentPosts: Array
    },
    mounted () {
      this.fetchSinglePost(this.currentPostId)
    },
    computed: {
        ...mapGetters('Posts', ['getPost']),
        currentPostId () {
          return parseInt(this.$route.params.id)
        },
        BreadcrumbLinks () {
          return [
            {
              active: false,
              name: this.$t('header.home'),
              href: '/'
            },
            {
              active: false,
              name: this.$t('header.posts'),
              href: '/Posts'
            },
            {
              active: true,
              name: this.$t('posts.post') + ' №' + this.$route.params.id,
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
