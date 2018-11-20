<template>
    <div class="left-aside">
        <Card style="width:100%">
            <div class="left-aside-avatar" style="text-align:center">
                <img src="../../../images/logo.png">
                <div class="left-aside-avatar-badge">
                    <span>原创</span>
                    <span>喜欢</span>
                    <span>评论</span>
                    <span>访问</span>
                </div>
                <div class="left-aside-avatar-badge">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>
            </div>
        </Card>
        <Card class="left-aside-classification" >
            <div slot="title">个人分类</div>
            <div class="left-aside-classification-item">
                <span>Content of card</span>
                <p>1篇</p>
            </div>
            <div class="left-aside-classification-item">
                <span>Content of card</span>
                <p>1篇</p>
            </div>
            <div class="left-aside-classification-item">
                <span>Content of card</span>
                <p>1篇</p>
            </div>
            <div class="left-aside-classification-item">
                <span>Content of card</span>
                <p>1篇</p>
            </div>
            <div class="left-aside-classification-item">
                <span>Content of card</span>
                <p>1篇</p>
            </div>

        </Card>
        <Card class="left-aside-hot" >
            <div slot="title">热门文章</div>
            <div class="left-aside-hot-item">
                <span>Content of card</span>
                <p>阅读量123</p>
            </div>
            <div class="left-aside-hot-item">
                <span>Content of card</span>
                <p>阅读量123</p>
            </div>
            <div class="left-aside-hot-item">
                <span>Content of card</span>
                <p>阅读量123</p>
            </div>
            <div class="left-aside-hot-item">
                <span>Content of card</span>
                <p>阅读量123</p>
            </div>
            <div class="left-aside-hot-item">
                <span>Content of card</span>
                <p>阅读量123</p>
            </div>

        </Card>
        <Card class="left-aside-classification">
            <div slot="title">归档</div>
            <div class="left-aside-classification-item">
                <span>2018年1月</span>
                <p>1篇</p>
            </div>
            <div class="left-aside-classification-item">
                <span>2018年2月</span>
                <p>1篇</p>
            </div>
            <div class="left-aside-classification-item">
                <span>2018年3月</span>
                <p>1篇</p>
            </div>
            <div class="left-aside-classification-item">
                <span>2018年3月</span>
                <p>1篇</p>
            </div>
            <div class="left-aside-classification-item">
                <span>2018年3月</span>
                <p>1篇</p>
            </div>
        </Card>
        <Card class="left-aside-classification">
            <div slot="title">个人分类</div>
            <div class="left-aside-classification-item">
                <span>Content of card</span>
                <span>1</span>
            </div>
            <div class="left-aside-classification-item">
                <span>Content of card</span>
                <span>1</span>
            </div>
            <div class="left-aside-classification-item">
                <span>Content of card</span>
                <span>1</span>
            </div>

        </Card>
    </div>
</template>

<script>
    export default {
        name: "left-aside"
    }
</script>

<style lang="less" scoped>
    .left-aside {
        .left-aside-avatar {
            & img {
                width: 70%;
                border-radius: 50%;
            }
            & .left-aside-avatar-badge {
                display: flex;
                justify-content: space-around;
                & span {
                    padding: 2px 5px;
                }
            }
        }
        .left-aside-classification{
            width:100%;
            margin-top:5px;
            .left-aside-classification-item{
                padding:2px 0;
                display: flex;
                justify-content: space-between;
                & span{
                    color:#2d8cf0;
                    cursor: pointer;
                }
            }
        }
        .left-aside-hot{
            & .left-aside-hot-item{
                & span{
                    cursor: pointer;
                    color: #2d8cf0;
                }
                & p{
                    font-size:12px;
                    color: #969696;
                }
            }
        }
    }
</style>
