<template>
  <div>
    {{obj}}
    <avue-ueditor v-model="obj"></avue-ueditor>
  </div>
</template>
<script>
export default {
  name: 'main',
  data () {
    return {
      obj: '',
    }
  }
}
</script>