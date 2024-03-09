<template>
  <ul>
    <li v-for="item in docs.sort((v1, v2) => v2.updated - v1.updated).slice(0, 10)" :key="item.id">
      <a :href="`/docs/${item.realName}`">{{ item.properties.title }}</a>
    </li>
  </ul>
</template>
<script>
import meta from '../../elog.cache.shorturl.json'

export default {
  setup() {
    return { docs: meta.docs }
  },
}
</script>
