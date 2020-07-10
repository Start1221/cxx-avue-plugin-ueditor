# avue-plugin-ueditor

## avue 富文本编辑器
<p align="center">
  <img width="600" src="https://gitee.com/smallweigit/avue-plugin-ueditor/raw/master/packages/demo/demo.png">
</p>

## Avue官网
[https://avuejs.com](https://avuejs.com)

## 介绍
- [例子](https://avuejs.com/doc/plugins/ueditor-plugins)
- [npm](https://www.npmjs.com/package/avue-plugin-ueditor)
- [git](https://gitee.com/smallweigit/avue-plugin-ueditor)

## 三方编辑器wangEditor

- [文档](https://www.kancloud.cn/wangfupeng/wangeditor3/332599)
- 组件配置中customConfig属性为wangEditor编辑器的配置

## 使用
```
1.安装
npm install avue-plugin-ueditor --save

2.导入
import AvueUeditor from 'avue-plugin-ueditor'
Vue.use(AvueUeditor);

3.使用(双击图片可改变大小)
...
column:[
  ...
    {
      label:'test',
      prop:'test',
      component: "avueUeditor",
      params:{
        options:{
          //普通图片上传
          action: "https://avuejs.com/upload",
          customConfig: {},//wangEditor编辑的配置
          props: {
            res: "data",
            url:'url'
          },
          //七牛云oss配置
          qiniu: {
            AK: "",
            SK: "",
            scope: "test",
            url: "http://pm7cc17lu.bkt.clouddn.com/",
            deadline: 1
          },
          //阿里云oss配置
          ali: {
            region: "oss-cn-beijing",
            endpoint: "oss-cn-beijing.aliyuncs.com",
            accessKeyId: "",
            accessKeySecret: "",
            bucket: "avue"
          }
        }
      }
    }
  ...
]
或者直接
<avue-ueditor v-model="text" :options="options"></avue-ueditor>

4.图片上传配置————(支持oss,支持ctrl+v粘贴图片)
具体用法参考https://avuex.avue.top/#/doc/form-upload
options: {
  //普通图片上传
  action: "https://avuejs.com/upload",
  customConfig: {},//wangEditor编辑的配置
  props: {
    res: "data",
    url:'url'
  },
  //七牛云oss配置
  qiniu: {
    AK: "",
    SK: "",
    scope: "test",
    url: "http://pm7cc17lu.bkt.clouddn.com/",
    deadline: 1
  },
  //阿里云oss配置
  ali: {
    region: "oss-cn-beijing",
    endpoint: "oss-cn-beijing.aliyuncs.com",
    accessKeyId: "",
    accessKeySecret: "",
    bucket: "avue"
  }
}
...
```

