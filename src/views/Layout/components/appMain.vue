<template>
    <main class="pc-main">
        <aside>
            <left-aside></left-aside>
        </aside>
        <section>
            <div>
                <Card class="pc-main-blog" :bordered="false" v-for="(v,k) in msgList" :key="k">
                    <p slot="title">{{v.title}}{{k}}</p>
                    <p style="text-align:justify">{{v.msg}}</p>
                </Card>
            </div>
            <Button type="success" long>加载更多</Button>
        </section>
        <aside>
            <right-aside></right-aside>
        </aside>
    </main>
</template>

<script>
    import leftAside from './leftAside'
    import rightAside from './rightAside'
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
        components: {
            leftAside,
            rightAside
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
        max-width:1000px;
        flex:1;
        margin:0 5px;
        & .pc-main-blog{
            margin-bottom:10px;
            cursor:pointer;
        }
    }
}

@media screen and (max-width: 1200px) {
    .pc-main{
        section{
            flex:2;
        }

    }
}
@media screen and (max-width: 768px) {
    aside{
        display: none;
    }
}
</style>
