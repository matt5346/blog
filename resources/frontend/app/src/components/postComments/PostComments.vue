<template>
  <div class="comments">
    <h2 class="comments__title">{{getComments.length}} comment(s)</h2>
    <div
      class="comments__box"
      v-if="getComments"
    >
      <div
        class="comments__item"
        v-for="(item, key) in getComments"
        :key="key"
      >
        <div class="comments__item__inner">
          <div class="comments__item-img">
            {{commentPlaceholder(item.author)}}
          </div>
          <div class="comments__item-content">
            <div class="comments__item-content__header">
              <h3 class="comments__item-content__header-text">{{item.author}}</h3>
            </div>
            <div class="comments__item-content__body">
              <p v-html="item.content"></p>
            </div>
          </div>
          <button
            class="main-btn main-btn--comment"
            @click="commentReply(item)"
          >
            <span class="main-btn__text">{{$t('Reply')}}</span>
          </button>
        </div>
        <transition name="fade">
          <form
            class="form--reply"
            v-if="!!item.replyStatus"
            @submit.prevent="postCommentSubmit"
          >
            <div class="comments-form__field">
              <span class="comments-form__field-name">Your message</span>
              <textarea
                v-model="content"
                rows="1"
                cols="50"
                name="subject"
                placeholder="Your message"
                class="comments-form__field-textarea"
                maxlength="250"
                required
              ></textarea>
            </div>
            <div class="comments-form__field">
              <span class="comments-form__field-name">Your name</span>
              <input
                v-model="name"
                name="name"
                placeholder="What is your name?"
                class="comments-form__field-input"
                maxlength="50"
                required
              />
            </div>
            <button class="main-btn main-btn--create-comment" type="submit">
              <span class="main-btn__text">{{$t('send')}}</span>
            </button>
          </form>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PostComments',
  data () {
    return {
      name: '',
      content: '',
      commentsList: [],
      active: false
    }
  },
  props: {
    postId: Number
  },
  mounted () {
    this.fetchComments(this.currentPostId)
    this.commentsListAssign()
  },
  computed: {
    currentPostId () {
      return parseInt(this.$route.params.id)
    },
    ...mapGetters('Comments', ['getComments'])
  },
  methods: {
    ...mapActions('Comments', ['fetchComments']),
    ...mapActions('Comments', ['postComment']),
    postCommentSubmit () {
      const replyObj = {
        authorReply: this.name,
        contentReply: this.content
      }

      const commentItem = {
        id: Date.now(),
        content: this.content,
        author: this.name,
        postId: this.postId,
        replyStatus: 0,
        commentReplies: [JSON.stringify(replyObj)] + ''
      }

      this.postComment(commentItem)
    },
    commentsListAssign () {
      this.commentsList = this.getComments
    },
    commentReply (item) {
      if (parseInt(item.replyStatus) === 0) {
        item.replyStatus = 1
      } else if (parseInt(item.replyStatus) === 1) {
        item.replyStatus = 0
      }
    },
    commentPlaceholder (name) {
      return name.charAt(0).toUpperCase()
    }
  }
}
</script>

<style lang="scss">
@import './style';
</style>
