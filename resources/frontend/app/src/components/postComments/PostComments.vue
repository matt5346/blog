<template>
  <div class="comments">
    <h2 class="comments__title">{{totalComments}} comment(s)</h2>
    <div
      class="comments__box"
      v-if="getComments"
    >
      <div
        class="comments__item"
        v-for="(item, key) in commentList"
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
          <div class="comment__btns">
            <button
              class="main-btn main-btn--comment small"
              @click="commentReply(item)"
            >
              <span class="main-btn__text">{{$t('reply')}}</span>
            </button>
            <button
              class="main-btn main-btn--edit small"
              @click="commentEdit(item)"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
                <g id="24 / basic / pencil-create">
                  <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M20.5467 2.5C21.3651 2.5 22.1497 2.82677 22.7226 3.40428L26.5988 7.2804C27.1759 7.8575 27.5001 8.64021 27.5001 9.45635C27.5001 10.2725 27.1759 11.0552 26.5988 11.6323L12.4469 25.7797C11.5738 26.7869 10.3361 27.4057 8.91825 27.5029H2.5V26.2529L2.50406 20.9841C2.61055 19.666 3.22333 18.4404 4.15812 17.6168L18.3692 3.40579C18.9455 2.82604 19.7292 2.5 20.5467 2.5ZM8.82998 25.006C9.49776 24.9588 10.1194 24.648 10.6185 24.077L20.0709 14.6246L15.3779 9.93149L5.87013 19.437C5.36369 19.8849 5.05039 20.5115 5 21.0848V25.0037L8.82998 25.006ZM17.1459 8.16394L21.8386 12.8569L24.831 9.86453C24.9392 9.75627 25.0001 9.60945 25.0001 9.45635C25.0001 9.30325 24.9392 9.15643 24.831 9.04817L20.9514 5.16857C20.8444 5.06068 20.6987 5 20.5467 5C20.3947 5 20.249 5.06068 20.142 5.16857L17.1459 8.16394Z"/>
                </g>
              </svg>
              <span class="main-btn__text">{{$t('edit')}}</span>
            </button>
            <button
              class="main-btn main-btn--delete small"
              @click="commentDelete(item)"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="black" xmlns="http://www.w3.org/2000/svg">
                <g id="24 / basic / trash-empty">
                  <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M11.25 1.25H18.75C20.1307 1.25 21.25 2.36929 21.25 3.75V5H25C26.3807 5 27.5 6.11929 27.5 7.5V10C27.5 11.3807 26.3807 12.5 25 12.5H24.8998L23.75 26.25C23.75 27.6307 22.6307 28.75 21.25 28.75H8.74997C7.36926 28.75 6.24997 27.6307 6.25429 26.3538L5.09981 12.5H5C3.61929 12.5 2.5 11.3807 2.5 10V7.5C2.5 6.11929 3.61929 5 5 5H8.75V3.75C8.75 2.36929 9.86929 1.25 11.25 1.25ZM5 7.5H8.75H21.25H25V10H5V7.5ZM7.6081 12.5H22.3915L21.2543 26.1462L21.25 26.25H8.74998L7.6081 12.5ZM18.75 3.75V5H11.25V3.75H18.75ZM10.3661 15.8839L12.1339 14.1161L15 16.9822L17.8661 14.1161L19.6339 15.8839L16.7678 18.75L19.6339 21.6161L17.8661 23.3839L15 20.5178L12.1339 23.3839L10.3661 21.6161L13.2323 18.75L10.3661 15.8839Z"/>
                </g>
              </svg>
              <span class="main-btn__text">{{$t('delete')}}</span>
            </button>
          </div>
        </div>
        <transition name="fade">
          <form
            class="form--reply"
            v-if="!!item.replyStatus || !!item.editStatus"
            @submit.prevent="updateComment(item)"
          >
            <div class="form__title">
              <span
                v-if="!!item.editStatus"
              >{{$t('edit')}}</span>
              <span
                v-if="!!item.replyStatus"
              >{{$t('reply')}}</span>
            </div>
            <div
              class="form__close"
              @click="item.replyStatus = 0; item.editStatus = 0"
            >
              <svg class="form__close__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="27" height="27" rx="4.5" stroke="black" stroke-width="3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0001 17.1213L8.56077 23.5606L6.43945 21.4393L12.8788 15L6.43945 8.56065L8.56077 6.43933L15.0001 12.8787L21.4395 6.43933L23.5608 8.56065L17.1214 15L23.5608 21.4393L21.4395 23.5606L15.0001 17.1213V17.1213Z" fill="black"/>
              </svg>
            </div>
            <div class="comments-form__field">
              <span class="comments-form__field-name">Your message</span>
              <textarea
                v-model="content"
                rows="1"
                cols="50"
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
        </transition>
        <div
          class="answers__box"
          v-if="item.commentReplies.length > 0"
        >
          <h2
            class="comments__item__replies-title"
          >{{item.commentReplies.length}} Answer(s)</h2>
          <button
            class="main-btn middle"
            @click="showAnswers(item)"
          >
            <span class="main-btn__text">{{$t('Show')}}</span>
          </button>
        </div>

        <transition name="fade">
          <div
            v-if="showAnswersBool"
          >
            <div
              class="comments__item__replies"
              v-for="(comment, key) in item.commentReplies"
              :key="key"
            >
              <div class="comments__item__inner">
                <div class="comments__item-img">
                  {{commentPlaceholder(comment.authorReply)}}
                </div>
                <div class="comments__item-content">
                  <div class="comments__item-content__header">
                    <h3 class="comments__item-content__header-text">{{comment.authorReply}}</h3>
                  </div>
                  <div class="comments__item-content__body">
                    <p v-html="comment.contentReply"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      active: false,
      itemId: 0,
      showAnswersBool: false
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
    commentList () {
      return this.getComments
    },
    totalComments () {
      let replies = 0
      this.getComments.filter(item => {
        replies += item.commentReplies.length
      })
      return this.getComments.length + replies
    },
    currentPostId () {
      return parseInt(this.$route.params.id)
    },
    ...mapGetters('Comments', ['getComments'])
  },
  methods: {
    ...mapActions('Comments',
      ['fetchComments',
        'updateCommentAction',
        'postComment',
        'deleteCommentAction',
        'editCommentAction'
      ]
    ),
    showAnswers (item) {
      this.showAnswersBool = !this.showAnswersBool
    },
    commentDelete (item) {
      this.deleteCommentAction(item.id)
    },
    commentEdit (item) {
      this.itemId = item.id
      if (parseInt(item.editStatus) === 0) {
        item.editStatus = 1
        item.replyStatus = 0
      } else if (parseInt(item.editStatus) === 1) {
        item.editStatus = 0
      }
    },
    updateComment (item) {
      /* eslint-disable */
      if(parseInt(item.replyStatus) === 1) {
        const replyObj = {
          "reply": {
            "authorReply": this.name,
            "contentReply": this.content
          }
        }

        const id = this.itemId

        item.replyStatus = 0
        item.editStatus = 0
        this.updateCommentAction({ replyObj, id })

      }
      if(parseInt(item.editStatus) === 1) {
        const commentEdit = {
          edit: {
            commentContent: this.name,
            commentAuthor: this.content
          }
        }

        const id = this.itemId

        item.replyStatus = 0
        item.editStatus = 0
        this.editCommentAction({ commentEdit, id })
      }
    },
    commentsListAssign () {
      this.commentsList = this.getComments
    },
    commentReply (item) {
      this.itemId = item.id
      if (parseInt(item.replyStatus) === 0) {
        item.replyStatus = 1
        item.editStatus = 0
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
