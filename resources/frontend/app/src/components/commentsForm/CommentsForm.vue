<template>
  <div class="comments-form">
    <h2>Add Your comment</h2>
    <form @submit.prevent="postCommentSubmit">
      <div class="comments-form__field">
        <span class="comments-form__field-name">Your message</span>
        <textarea
          v-model="content"
          rows="4" cols="50"
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'commentsForm',
  data () {
    return {
      name: '',
      content: ''
    }
  },
  props: {
    postId: Number
  },
  methods: {
    ...mapActions('Comments', ['postComment']),
    postCommentSubmit () {
      console.log('POSTED')
      const commentItem = {
        id: Date.now(),
        content: this.content,
        author: this.name,
        likes: 0,
        dislikes: 0,
        postId: this.postId
      }
      this.postComment(commentItem)
    }
  }
}
</script>

<style lang="scss">
@import './style';
</style>
