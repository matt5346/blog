<template>
  <div class="header__inner__nav-list__item-language-box">
    <span
      value="ru"
      v-for="(item, key) in languages"
      :key="key"
      :class="['header__inner__nav-list__item-language-option', { 'active': activeLanguage === item.toLowerCase() }]"
      @click="localeChanged(item)"
    >{{item.toLowerCase()}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      languages: ['Ru', 'En']
    }
  },
  computed: {
    activeLanguage () {
      console.log(this.$i18n.locale, this.$i18n.locale)
      return this.$i18n.locale
    }
  },
  methods: {
    localeChanged (item) {
      this.$emit('change-locale', item)
    }
  }
}
</script>
