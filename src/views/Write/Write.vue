<template>
  <div class="write">
    <div class="write-title">
      <Row>
        <Col span="20"><Input v-model="blogTitle" placeholder="输入博客标题"  /></Col>
        <Col span="4">
          <Button @click="$router.go(-1)" style="float:right;background-color:#808695;color:#fff;" size="small" icon="md-close"></Button>
        </Col>
      </Row>
    </div>
    <div class="editor-container">
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
        editor: null,
        blogTitle: ''
      };
    },
    mounted() {
      this.initCKEditor()
    },
    methods: {
      initCKEditor() {
        CKEditor.create(document.querySelector('#editor'), {
          language: 'zh-cn',
          height: 800
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
    .editor-container{
      padding:15px;
      #editor{
        margin-top:15px;
        border: 1px solid #e8eaec;
        height:500px;
      }
    }
  }
</style>