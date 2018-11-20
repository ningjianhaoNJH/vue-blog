<template>
  <div class="home">
    <div>
      <Card class="pc-main-blog" :bordered="false" v-for="(v,k) in msgList" :key="k">
        <p slot="title">{{v.title}}{{k}}</p>
        <p style="word-break: break-all;">{{v.msg}}</p>
      </Card>
    </div>
    <Button type="success" long>加载更多</Button>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    name: 'Home',
    data() {
      return {
        msgList: [
          {
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          },
          {
            title: '这是大标题',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis debitis dolor, dolorum esse ex excepturi fuga, iste maxime molestias odit, officia perspiciatis sapiente soluta suscipit velit veritatis voluptas voluptatibus.'
          }
        ]
      }
    },
  }
</script>
<style scoped lang="less">
    .home{
      & .pc-main-blog{
        margin-bottom:10px;
        cursor:pointer;
      }
    }
</style>