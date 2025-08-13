<template>
  <div>
    <h1 class="blogtitle">中大北校</h1>                                         <!--更改标题-->

    <router-link to="/photography" class="homeicon">                          <!--更改返回目录-->
      <img src="/icon/home.png" class="navicon">
    </router-link>


    <ArticleWithTOC>
        
    <CollapsibleSection id="intro" title="一、 简介" class="collapark">       <!--更改章节标识-->
      <div class="textbox">
        <p>
            这时候有人就要问了，煮播煮播，为什么北校就拍了这一张照片？
            毕竟北校就这么大点地方，我还没带长焦，你知道的呀，能拍的建筑似乎就这一栋了[/doge]。
        </p>                                   <!--更改内容-->

        <p>
            其实也拍了，但似乎主播技术不太行，没拍出来。。。
        </p>
      </div>
      
      <div class="blogimgbox">
        <ZoomableImage src="/picture/photo/p250802/中山医科大学.jpg"/>              <!--更改图片-->
        <p>中山医科大学</p>
      </div>

      <div class="textbox">
        <p>
            也是看网上没有中大北校的摄影相关的照片，中山医科大学这栋很不错的建筑没有全景。
            当时实地看了一下，前面的空地实在是太小了，广角似乎得上到10mm多一点。
            
        </p>                                   <!--更改内容-->

        <p>这张用的是三张接片，当时拍了好多组，但是透视关系都不行，视角转的太大了，最后成片就这一张。</p>
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
  name: "p250802",                                                              /**更改文件名称，再在router里增加目录和引入 */
  components:{
    ArticleWithTOC,
    CollapsibleSection,
    ZoomableImage,
  }
};
</script>