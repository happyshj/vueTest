<template>
  <!-- <span v-text="msg"></span> -->
  <!-- 和下面的一样 -->
  <span>{{ msg }}</span>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello',
      isButtonDisabled: false
    }
  }
}
</script>
<style>

</style>


