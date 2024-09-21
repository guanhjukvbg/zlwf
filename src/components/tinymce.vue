<template>
  <div>
    <textarea id="tinymce"></textarea>
  </div>
</template>

<script>

export default {
  mounted() {
    
    tinymce.init({
      selector: '#tinymce',
      language: "zh_CN",
      placeholder:'请在此输入内容',
      plugins: 'quickbars formatpainter paste preview searchreplace autolink directionality visualblocks visualchars fullscreen image link  code codesample table charmap kityformula-editor hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount textpattern help emoticons autosave',
      quickbars_insert_toolbar: 'quickimage quicktable',
      quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote',
      toolbar: [
        'undo redo formatpainter forecolor backcolor bold italic underline strikethrough lineheight  blocks fontfamily fontsize customStyles',
        'preview alignleft aligncenter alignright alignjustify link image outdent indent table emoticons code hr bullist numlist blockquote subscript superscript removeformat kityformula-editor ',
      ],
      block_formats:
        '标题1=h1;标题2=h2;标题3=h3;标题4=h4;标题5=h5;标题6=h6;段落=p;div', // formatselect 的配置
      formats:{
        h1: { block: 'h1', styles: { margin: '0px', padding: '0px', textAlign: 'justify' }},
        h2: { block: 'h2', styles: { margin: '0px', padding: '0px', textAlign: 'justify' }},
        h3: { block: 'h3', styles: { margin: '0px', padding: '0px', textAlign: 'justify' }},
        h4: { block: 'h4', styles: { margin: '0px', padding: '0px', textAlign: 'justify' }},
        h5: { block: 'h5', styles: { margin: '0px', padding: '0px', textAlign: 'justify' }},
        h6: { block: 'h6', styles: { margin: '0px', padding: '0px', textAlign: 'justify' }},
        p: { block: 'p', styles: { margin: '0px', padding: '0px', textAlign: 'justify' }},
      },
      resize: true,
      statusbar: false,
      style_formats: [
        {title: 'Bold text', inline: 'b'},
        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
        {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
        {title: 'Example 1', inline: 'span', classes: 'example1'},
        {title: 'Example 2', inline: 'span', classes: 'example2'},
        {title: '首行缩进', block: 'p', styles: {'text-indent': '2em'}},
        {title: 'Table styles'},
        {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
    ],
      style_formats_merge: true,
      style_formats_autohide: false,
      quickbars_selection_toolbar: 'custom_styles', 
      branding: false,
      toolbar_sticky: true,
      paste_as_text: true,
      promotion: false,
      forced_root_block: 'div',
      toolbar_drawer: 'floating',
      // images_upload_url: '/demo/upimg.php',
      // images_upload_base_path: '/demo',
      fontsize_formats:
        '12px 14px 15px 16px 18px 24px 36px 48px 56px 72px',
      font_family_formats:
        '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Times New Roman=times new roman,times,serif',
      importcss_append: true,
      autosave_ask_before_unload: true,
      autosave_interval: '30s', // 自动存稿的时间间隔
      autosave_restore_when_empty: false,
      height: "90vh",
      suffix: '.min',
      setup: (editor) => {
        console.log('ID为: ' + editor.id + ' 的编辑器即将初始化.')
        editor.ui.registry.addMenuButton('customStyles', {
          text: '其他样式',
          fetch: function (callback) {
            const items = [
              {
                type: 'menuitem',
                text: '高亮',
                onAction: function () {
                  editor.selection.setContent(
                    '<div style="margin:10px -5px 10px -5px;padding:10px;border-radius:8px;background-color:#FFC5C5; line-height: 2;text-align:left; font-size: 16px; font-weight: 500">' +
                    editor.selection.getContent({ format: 'text' }) +
                    '</div>'
                  )
                },
              },
              {
                type: 'menuitem',
                text: '正文内容',
                onAction: function () {
                  editor.selection.setContent(
                    '<span style="margin:0; padding:0;color: #696B70; line-height: 1.5; font-size: 15px; font-weight: 400">' +
                    editor.selection.getContent({ format: 'text' }) +
                    '</span>'
                  )
                },
              },
              {
                type: 'menuitem',
                text: '强调',
                onAction: function () {
                  editor.selection.setContent(
                    '<div style="margin:0; padding:0;color: #FF9500; line-height: 1.5; font-size: 15px; font-weight: 400">' +
                    editor.selection.getContent({ format: 'text' }) +
                    '</div>'
                  )
                },
              },
              {
                type: 'menuitem',
                text: '超强调',
                onAction: function () {
                  editor.selection.setContent(
                    '<div style="margin:0; padding:0;color: #EB4B4B; line-height: 1.5; font-size: 15px; font-weight: 400">' +
                    editor.selection.getContent({ format: 'text' }) +
                    '</div>'
                  )
                },
              },
              {
                type: 'menuitem',
                text: '链接',
                onAction: function () {
                  editor.selection.setContent(
                    '<a style="color: #0075FF; line-height: 1.5; font-size: 15px; font-weight: 400; text-decoration: underline; cursor: pointer">' +
                    editor.selection.getContent({ format: 'text' }) +
                    '</a>'
                  )
                },
              },
            ]
            callback(items)
          },
        })
      },
      file_picker_callback: function (callback, value, meta) {
        //文件分类
        var filetype='.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4';
        //后端接收上传文件的地址
        var upurl='/demo/upfile.php';
        //为不同插件指定文件类型及后端地址
        switch(meta.filetype){
            case 'image':
                filetype='.jpg, .jpeg, .png, .gif';
                upurl='upimg.php';
                break;
            case 'media':
                filetype='.mp3, .mp4';
                upurl='upfile.php';
                break;
            case 'file':
            default:
        }
        //模拟出一个input用于添加本地文件
        var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', filetype);
        input.click();
        input.onchange = function() {
            var file = this.files[0];

            var xhr, formData;
            console.log(file.name);
            xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', upurl);
            xhr.onload = function() {
                var json;
                if (xhr.status != 200) {
                    failure('HTTP Error: ' + xhr.status);
                    return;
                }
                json = JSON.parse(xhr.responseText);
                if (!json || typeof json.location != 'string') {
                    failure('Invalid JSON: ' + xhr.responseText);
                    return;
                }
                callback(json.location);
            };
            formData = new FormData();
            formData.append('file', file, file.name );
            xhr.send(formData);
        };
    },
    });
  },
  methods: {
    
  }
}
</script>
