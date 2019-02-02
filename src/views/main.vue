<template>
  <div>
    <span> {{obj}}</span>
    <avue-ueditor v-model="obj"
                  :upload="upload"></avue-ueditor>
  </div>
</template>
<script>
export default {
  name: "main",
  data() {
    return {
      obj: "",
      upload: {
        action: "https://avueupload.91eic.com/upload/list",
        props: {
          res: "data.0",
          url: "url"
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