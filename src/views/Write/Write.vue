<template>
  <div class="write">
    <div class="write-title">
      <h3>标题</h3>
      <p class="write-title-info">
        <span>发布时间：2018年11月21日 15:32:21</span>
        <a href="#">李潮水</a>
        <i>阅读数: 3232</i>
        <span>标签:</span><b>宅男</b><b>Golang</b></p>
    </div>
    <div>
      <div id="toolbar-container"></div>
      <div id="editor"></div>
    </div>
    <div>
      <Button @click="sub">Default</Button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document';
  import  '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn';
  export default{
    name: 'Write',
    components: {
    },
    data() {
      return {
        editor: null
      };
    },
    mounted() {
      this.initCKEditor()
    },
    methods: {
      initCKEditor() {
        CKEditor.create(document.querySelector('#editor'), {
          language: 'zh-cn',
        }).then(editor => {
          const toolbarContainer = document.querySelector('#toolbar-container');
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          this.editor = editor;
//          this.editor.setData('<p>水电费水电费第三方</p><p>水电费水电费</p><h2><strong>水电费似懂非懂是的发送到</strong></h2>')
        }).catch(error => {
          console.error(error);
        });
      },
      sub() {
        console.log(this.editor.getData())
      }
    }
  }
</script>
<style scoped lang="less">
  .write{
    border-radius:4px;
    .write-title{
      border-bottom: 1px solid #e8eaec;
      padding: 14px 16px;
      line-height: 1;
      & > h3{
        font-size:24px;
        font-weight:600;
      }
      & > p.write-title-info{
        margin-top:10px;
        font-size:16px;
        & a,& i,& b{
          display: inline-block;
          margin:0 10px;
          font-style: normal;
          font-weight: 400;
        }
        & b{
          border:1px solid #646464;
          border-radius: 3px;
          padding:2px 4px;
          font-size:14px;
        }
      }
    }
  }
</style>