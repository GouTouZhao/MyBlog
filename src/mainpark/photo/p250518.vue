<template>
  <div>
    <h1 class="blogtitle">广州美术馆</h1>                                         <!--更改标题-->

    <router-link to="/photography" class="homeicon">                          <!--更改返回目录-->
      <img src="/icon/home.png" class="navicon">
    </router-link>


    <ArticleWithTOC>
        
    <CollapsibleSection id="intro" title="一、 简介" class="collapark">       <!--更改章节标识-->
      <div class="textbox">
        <p>
            主播艺术细胞少得可怜，没能力拍摄那些艺术品，所以这篇都是对于美术馆建筑的拍摄。
        </p>                                   <!--更改内容-->
      </div>
      
      
    </CollapsibleSection>

    <CollapsibleSection id="chapter1" title="二、 钢琴" class="collapark">

        <div class="blogimgbox">
            <ZoomableImage src="/picture/photo/p250518/一楼钢琴.jpg"/>              <!--更改图片-->
            <p>一楼钢琴</p>
        </div>

        <div class="textbox">
            <p>
                一楼中心有一台钢琴，人多的时候根本闲不下来，接续会有人去演奏给整个场馆的人听。
                所以在旁边等待弹琴的人很多，站着听音乐的人也很多，等了一下午也没有等到一个空镜头。
            </p>
            <p>
                所以这一张是我等了一下午等到闭馆之后拍的无人镜头和之前拍的有人演奏的照片两张一起扣出来的。
                但是去的时候时候不好，如果是一个大晴天且在上午，头顶上的玻璃屋顶会洒下来阳光，效果或许就会非常好了。
            </p>
        </div>

      

    </CollapsibleSection>

    <CollapsibleSection id="chapter2" title="三、 外景" class="collapark">
        <div class="blogimgbox">
            <ZoomableImage src="/picture/photo/p250518/艺术馆全景.jpg"/>              <!--更改图片-->
            <p>艺术馆全景</p>
        </div>
      <div class="textbox">
        <p>
            天气实在是太差了，水泥天任怎么修都是一片白色，这里处理是直接丢掉颜色，拉高对比把云凸显出来。
        </p>
        <p>
            24mm还是不够广，拍不完全景。。。显得拘谨
        </p>
      </div>

        <div class="blogimgbox">
            <ZoomableImage src="/picture/photo/p250518/艺术馆棱角.jpg"/>              <!--更改图片-->
            <p>艺术馆棱角</p>
        </div>

        <div class="blogimgbox">
            <ZoomableImage src="/picture/photo/p250518/广州塔.jpg"/>              <!--更改图片-->
            <p>艺术馆与广州塔</p>
        </div>

        <div class="textbox">
        <p>
            这张是照骗，左右是对称出来的，水面也是p的。我也是跟着其他人的帖子来的没找到，也这样P,实景不一样别怪我。。。
        </p>

      </div>
    </CollapsibleSection>

    <CollapsibleSection id="chapter3" title="四、 特写" class="collapark">  
        <div class="blogimgbox">
            <ZoomableImage src="/picture/photo/p250518/屋顶的对称.jpg"/>              <!--更改图片-->
            <p>屋顶（做了上下对称处理）</p>
        </div>

        <div class="blogimgbox">
            <ZoomableImage src="/picture/photo/p250518/走廊顶部.jpg"/>              <!--更改图片-->
            <p>走廊顶部</p>
        </div>

        <div class="blogimgbox">
            <ZoomableImage src="/picture/photo/p250518/走廊.jpg"/>              <!--更改图片-->
            <p>走廊（做了上下对称处理）</p>
        </div>

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
  name: "p250518",                                                              /**更改文件名称，再在router里增加目录和引入 */
  components:{
    ArticleWithTOC,
    CollapsibleSection,
    ZoomableImage,
  }
};
</script>