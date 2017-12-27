<template>
  <div id="app">
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态  
    </span>
    <button v-bind:disabled="isButtonDisabled">Button</button>
    <h4>typeof</h4>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello',
      isButtonDisabled: false
    }
  },
  created: () => console.log(this),
  mounted: function () {
    // let a = 11
    // console.log(String(a))
    // let b = true
    // console.log(String(b))
    // let c = false
    // console.log(String(c))
    // let d = {}
    // console.log(String(d))
    // let e = [1, 2, 3]
    // console.log(String(e))
    // let f = null
    // console.log(String(f))
    // let g
    // console.log(String(g))
    // let e = null
    // console.log(e + '')
    // console.log(JSON.stringify(42))
    // console.log(JSON.stringify('42'))
    // console.log(JSON.stringify(null))
    // console.log(JSON.stringify(true))
    // console.log(JSON.stringify(undefined))
    // let f = () => {}
    // console.log(JSON.stringify(f))
    // console.log(undefined)
    // let obj = {
    //   a: 2,
    //   b: f
    // }
    // obj.toJSON = function() {
    //   return "function"
    // }
    // console.log(JSON.stringify(obj))
    // let arr = [1, undefined, f, 'aaa']
    // console.log(JSON.stringify(arr))
    // let a = {
    //   b: 42,
    //   c: '42',
    //   d: [1, 2, 3]
    // }
    // console.log(JSON.stringify(a, ['b', 'c']))
    // console.log(JSON.stringify(a, function (k, v) {
    //   if (k !== 'c') {
    //     return v
    //   }
    // }))

    // let b = [2, '3', [4]]
    // console.log(JSON.stringify(b, ['0', '1']))
    // console.log(JSON.stringify(b, function (k, v) {
    //   if (k !== '2') {
    //     return v
    //   }
    // }))
    let a = {
      b: 42,
      c: '42',
      d: [1, 2, 3]
    }
    console.log(JSON.stringify(a, null, 3))
    console.log(JSON.stringify(a, null, '----'))
  }
}
</script>

<style scoped>

</style>



