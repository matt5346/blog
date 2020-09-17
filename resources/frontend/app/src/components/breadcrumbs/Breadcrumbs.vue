<template>
  <div class="breadcrumbs">
    <div
      v-for="(item, key) in links"
      :key="key"
    >
      <router-link
        :to="item.href"
        :class="['breadcrumbs__item', {'active': links.length - 1 === key}]"
      >{{item.name}}</router-link>
      <span class="breadcrumbs__arrow" v-if="key + 1 < links.length">»</span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'links'
  ]
}
</script>
