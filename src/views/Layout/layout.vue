<template>
    <Layout class="layout">
        <layout-header class="layout-head"></layout-header>
        <app-main class="layout-main"></app-main>
        <layout-footer class="layout-foot"></layout-footer>
    </Layout>
</template>

<script>
    import { AppMain, layoutHeader, layoutFooter} from './components/'
    export default {
        name: "layout",
        components: {
            AppMain,
            layoutHeader,
            layoutFooter
        },
    }
</script>

<style lang="less" scoped>
    .layout{
        height:100vh;
        display: flex;
        flex-wrap: wrap;
        .layout-head{
            height:65px;
            background: #2db7f5;
        }
        .layout-main{
            flex:10
        }
        .layout-foot{
            height:65px;
        }
    }
</style>
