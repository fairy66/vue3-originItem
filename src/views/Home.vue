<template>
  <div class="home">
    <van-button type="primary">默认按钮</van-button>
    <van-cell-group title="分组1">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button ,Cell, CellGroup } from 'vant';

export default {
  name: 'home',
  components: {
    HelloWorld,
    [Button.name]: Button ,
    [Cell.name]: Cell ,
    [CellGroup.name]: CellGroup ,
  }
}
</script>
