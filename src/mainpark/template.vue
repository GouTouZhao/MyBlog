<template>
  <div>
    <h1 class="blogtitle">title</h1>                                         <!--更改标题-->

    <router-link to="/photography" class="homeicon">                          <!--更改返回目录-->
      <img src="/icon/home.png" class="navicon">
    </router-link>


    <ArticleWithTOC>
        
    <CollapsibleSection id="intro" title="一、 简介" class="collapark">       <!--更改章节标识-->
      <div class="textbox">
        <p>
          helloworld
        </p>                                   <!--更改内容-->
      </div>
      
    </CollapsibleSection>

    <CollapsibleSection id="chapter1" title="二、 章节一" class="collapark">
      <div class="textbox"></div>

      <div class="blogimgbox">
        <ZoomableImage src="/picture/32.jpg"/>              <!--更改图片-->
        <p>东校中心大楼仰望蓝天</p>
      </div>

    </CollapsibleSection>

    <CollapsibleSection id="chapter2" title="三、 章节二" class="collapark">
      <div class="textbox"></div>
    </CollapsibleSection>

    <CollapsibleSection id="chapter3" title="四、 章节三" class="collapark">         <!--多的章节记得换id-->
      <div class="textbox">
            <p>
                The End！
            </p>
        </div>
    </CollapsibleSection>
  </ArticleWithTOC>
  </div>
</template>

<script>
    import ArticleWithTOC from '@/views/catalog/ArticleWithTOC.vue'
    import CollapsibleSection from '@/views/catalog/CollapsibleSection.vue'
    import ZoomableImage from '@/views/ZoomableImage.vue';
export default {
  name: "p250801",                                                              /**更改文件名称，再在router里增加目录和引入 */
  components:{
    ArticleWithTOC,
    CollapsibleSection,
    ZoomableImage,
  }
};
</script>