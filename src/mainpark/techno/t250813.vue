<template>
  <div>
    <h1 class="blogtitle">我的博客（源码）</h1>                                         <!--更改标题-->

    <router-link to="/technology" class="homeicon">                          <!--更改返回目录-->
      <img src="/icon/home.png" class="navicon">
    </router-link>


    <ArticleWithTOC>
        
    <CollapsibleSection id="intro" title="一、 简介" class="collapark">       <!--更改章节标识-->
      <div class="textbox">
        <p>
          本网站主要使用Vue3，HTML，CSS，课程来源主要是<a href="https://www.bilibili.com/video/BV1oz421q7BB?p=121&vd_source=bcf4e82ef1cb262f7547c5f7334eba62">哔哩哔哩课程</a>。
          主要由AI完成网站代码编写。这里介绍如何用稍微少量的时间制作还算自定义的网站。
        </p>                                   <!--更改内容-->
        <p>
          <a href="https://github.com/GouTouZhao/MyBlog">gitbub托管源代码</a>
        </p>
      </div>
      
    </CollapsibleSection>

    <CollapsibleSection id="chapter1" title="二、 更简便的方式" class="collapark">
      <div class="textbox">
        <p>
          完全可以在github等平台上搜索UI不错的大佬开源网站，然后再进行少量修改直接就可使用。
          或者市面上也有很多借AI直接生成网站代码的（大部分会收费，而且质量不算好）
        </p>
      </div>

      

    </CollapsibleSection>

    <CollapsibleSection id="chapter2" title="三、 需要学习的内容" class="collapark">
      <div class="textbox">
        <p>
          这里说的仅仅是我尝试的方法，只能说还算能用
        </p>
        <p>
          <a href="https://www.bilibili.com/video/BV1oz421q7BB?p=121&vd_source=bcf4e82ef1cb262f7547c5f7334eba62">哔哩哔哩课程</a>
          从头开始看他的html和css内容（粗略看也没问题），js可跳过（如果你只是简单了解前端或者有c++/java等语言基础）。
          最后看他新更新的vue前几节就行了，然后就可以依赖AI进行一边编程一边学习了。
        </p>
      </div>
    </CollapsibleSection>

    <CollapsibleSection id="chapter3" title="四、 组件" class="collapark">         <!--多的章节记得换id-->
      <div class="textbox">
            <p>
                此网站你能看到的所有看起来似乎酷炫的动效都是来自免费网站的组件直接复制粘贴的。这里推荐一些
            </p>
            <p><a href="https://navnav.co/">navnav+</a></p>
            <p><a href="https://magicui.design/">magic UI</a></p>
            <p><a href="https://www.cult-ui.com/">cult UI</a></p>
            <p>
              这些网站提供的源码基本只需要交给ai改成vue3语法的就可以直接复制粘贴使用了。当然还有很多不错的网站，github上也有数不尽的资源，简单搜索就可以搜到。
            </p>
        </div>

        <div class="blogimgbox">
          <ZoomableImage src="/picture/techno/t250813/magicui.png"/>              <!--更改图片-->
          <p>magic UI</p>
        </div>

    </CollapsibleSection>

    <CollapsibleSection id="chapter4" title="五、 缺点" class="collapark">         <!--多的章节记得换id-->
      <div class="textbox">
          <p>
            有好多板块因为技术不到没做好的：
          </p>
          <p>
            1、现在的router—link方式是每个界面都在index里面做目录记录，没有用id自动化管理，所以自己写博客的时候很繁琐，每写一章都要加index目录。
          </p>
          <p>
            2、有些动效因为总是报错，也不明白原因就省略了很多，少了很多观感。
          </p>
          <p>
            3、UI乱设计的。
          </p>
          <p>
            4、好多的css没有做class统一管理，不便于后期维护。
          </p>
          <p>
            5、一点后端都没写，现在还是纯前端，所以搜索等交互功能都没做。技术含量大打折扣。
          </p>
          <p>
            6、UI设计仅仅是对于1920px的电脑屏幕做的设计，几乎没考虑过手机和平板等小屏用户，在其他设备上看此网站会有很多卡UI的地方。
          </p>
      </div>
    </CollapsibleSection>

    <CollapsibleSection id="chapter5" title="六、 END" class="collapark">         <!--多的章节记得换id-->
      <div class="textbox">
            <p>
                是的，我根本没有技术，这篇文章就是凑数的。
                文章到这里就结束了，这也就是我搭建网站历经的主要几步，时间主要花在了繁琐的打代码上，如果你善用ai肯定是可以很快完成的。
            </p>
            <p>
              毕竟一个个人博客不需要很高的技术含量，它可能只是做给自己看的，最多给不是计算机专业的朋友炫耀一下。当然如果有人光顾我的小站我将万分感激。
            </p>
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
  name: "t250813",                                                              /**更改文件名称，再在router里增加目录和引入 */
  components:{
    ArticleWithTOC,
    CollapsibleSection,
    ZoomableImage,
  }
};
</script>