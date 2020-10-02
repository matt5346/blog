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
          placeholder="Here is your message"
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
          placeholder="Here is your name"
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
      const commentItem = {
        id: Date.now(),
        content: this.content,
        author: this.name,
        postId: this.postId,
        replyStatus: 0,
        editStatus: 0,
        commentReplies: []
      }
      this.postComment(commentItem)
      this.name = ''
      this.content = ''
    }
  }
}

</script>

<style lang="scss">
@import './style';
</style>
