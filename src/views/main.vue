<template>
  <div>
    <avue-ueditor v-model="obj"
                  :upload="upload"></avue-ueditor>
    <span class="avue-ueditor__code">{{obj}}</span>
  </div>
</template>
<script>
export default {
  name: "main",
  data () {
    return {
      obj: '<h1 class="ql-align-center" style="text-align: center;"><a href="https://avuejs.com/doc/plugins/ueditor-plugins" target="_blank" style="color: rgb(194, 79, 74);">欢迎使用Avue富文本编辑器</a></h1><p class="ql-align-center" style="text-align: center;"><span style="color: rgb(194, 79, 74); font-weight: bold;"><img src="https://avuejs.com/images/logo-bg.jpg" height="200" width="200"></span></p>',
      upload: {
        // modules: {
        //   toolbar: {
        //     container: [
        //       ['bold', 'italic', 'underline', 'strike'], // 加粗、倾斜、下划线、删除线
        //       [{ 'header': 1 }, { 'header': 2 }], // 标题一、标题二
        //       [{ 'list': 'ordered' }, { 'list': 'bullet' }], // 列表
        //       [{ 'color': [] }, { 'background': [] }], // 字体颜色、背景颜色
        //       [{ 'align': [] }, 'image']
        //     ]
        //   }
        // },
        action: "https://avuejs.com/imgupload",
        props: {
          res: "data",
          url: 'url'
        },
        qiniu: {
          AK: "BLEIUCkTJhUKfb7Yl4wa2X-5B6uecKNxoCd93IlG",
          SK: "1_Falie5zL2BH7IBuZSZi1EJqm_5_G1-Gdjz-DS4",
          scope: "test",
          url: "http://pm7cc17lu.bkt.clouddn.com/",
          deadline: 1
        },
        ali: {
          region: "oss-cn-beijing",
          endpoint: "oss-cn-beijing.aliyuncs.com",
          accessKeyId: "DVVDfw5e3GK53rxt",
          accessKeySecret: "T3xEVl1BPOOmBSEfz8w0Qpp9lqmyHa",
          bucket: "avue"
        }
      }
    };
  }
};
</script>