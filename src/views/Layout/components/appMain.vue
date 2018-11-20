<template>
    <main class="pc-main">
        <aside>左</aside>
        <section>
            <div>
                <Card :bordered="false" v-for="(v,k) in msgList" :key="k">
                    <p slot="title">{{v.title}}{{k}}</p>
                    <p style="text-align:justify">{{v.msg}}</p>
                </Card>
            </div>
            <Button type="success" long>加载更多</Button>
        </section>
        <aside>右</aside>
    </main>
</template>

<script>
    export default {
        name: "app-main",
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
        methods: {
        }
    }
</script>

<style  lang="less" scoped>
.pc-main{
    display: flex;
    justify-content: center;

    aside{
        width:250px;
    }
    section{
        overflow-y: auto;
    }
}
@media screen and (min-width: 1200px) {
    .pc-main{
        section{
            width:1200px;
        }
    }
}
@media screen and (max-width: 1200px) {
    .pc-main{
        section{
            flex:2;
            padding:0 20px;
        }

    }
}
@media screen and (max-width: 768px) {
    aside{
        display: none;
    }
}
</style>
