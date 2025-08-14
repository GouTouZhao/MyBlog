<template>
  <div>
    <h1 class="blogtitle">我的博客（搭建）</h1>                                         <!--更改标题-->

    <router-link to="/technology" class="homeicon">                          <!--更改返回目录-->
      <img src="/icon/home.png" class="navicon">
    </router-link>


    <ArticleWithTOC>
        
    <CollapsibleSection id="intro" title="一、 简介" class="collapark">       <!--更改章节标识   &nbsp;  -->
      <div class="textbox">
        <p>
          低价解决服务器和部署网站的问题困扰了我很久，在国内若要合法似乎只能租大厂的服务器。
          但这样对于长租的学生党来说是一笔极高的花费。
        </p>                                   <!--更改内容-->
        <p>
            这里的方法要感谢我们院集市上的“苏书”匿名大佬，让我接触vercel+ cloudflare+ github的搭建方法。
        </p>
        <p>
            参考文档：<a href="https://jaison.ink/blog/building_blog/article">如何优雅的搭建一个博客</a>
        </p>
        <p>
            这篇文章是给像我一样的纯新手一个更详细的操作说明。
        </p>
      </div>

      <div class="blogimgbox">
        <ZoomableImage src="/picture/techno/t250814/art.png"/>              <!--更改图片-->
        <p>新手如何优雅的搭建一个博客</p>
      </div>
      
    </CollapsibleSection>

    <CollapsibleSection id="chapter1" title="二、 上传github" class="collapark">
        
      <div class="textbox">
        <p>
            首先你需要在github上创建一个新的项目。
        </p>
        <p>
            假设你已经安装了<a href="https://git-scm.com/">Git for Windows</a>
        </p>

        <p>
            ##在你的项目根目录下打开终端并进行初始化：
        </p>
        <CodeBlock>
            git init
        </CodeBlock>
        <br><br><br>

        <p>
            ##添加所有文件（会自动忽略.gitignore里的）
        </p>
        <CodeBlock>
            git add .
        </CodeBlock>
        <br><br><br>
        
        <p>
            ##提交一次：
        </p>
        <CodeBlock>
            git commit -m "第一次提交"
        </CodeBlock>
        <br><br><br>

        <p>
            ##关联 GitHub 仓库（替换成你自己的地址）：
        </p>
        <CodeBlock>
            git remote add origin https://github.com/你的用户名/仓库名.git
        </CodeBlock>
        <br><br><br>

        <p>
            ##推送到 GitHub：
        </p>
        <CodeBlock>
            git push -u origin main
        </CodeBlock>
        <br><br><br>

        <p>
            如果你需要修改/更新源文件：
        </p>
        <p>
            ##依旧在根目录打开终端；将文件添加到暂存区域：
        </p>
        <CodeBlock>
            git add .
        </CodeBlock>
        <br><br><br>

        <p>
            ##提交改动：
        </p>
        <CodeBlock>
            git commit -m "你的提交说明，比如：修复bug，优化功能"
        </CodeBlock>
        <br><br><br>

        <p>
            ##推送到远程仓库：
        </p>
        <CodeBlock>
            git push origin main
        </CodeBlock>
        <br><br><br>

        <p>github会自动识别那些文件是更改过的，会自动只更新已修改文件</p>

        <p>
            等待半分钟即可，即使后面的vercel，cloudflare都部署完了，他也会自动更新，我们要做的只是上传源码到git就好了
        </p>
      </div>


    </CollapsibleSection>

    <CollapsibleSection id="chapter2" title="三、 注册域名" class="collapark">
      <div class="textbox">
        <p>
            在国内国外注册域名没有什么影响，我们只需要低价优先就好了。这里是一些域名注册网站：
        </p>
        <p>
            <a href="https://wanwang.aliyun.com/">阿里云</a>
        </p>
        <p>
            <a href="https://buy.cloud.tencent.com/domain">腾讯云</a>
        </p>
        <p>
            <a href="https://www.namecheap.com/">namecheap</a>
        </p>
        <p>
            国内域名需要备案，可能要等1天以上，国外则比较方便，但是还是主要看价格。
            国内例如阿里云有低至8元年的域名，namecheap也有1.59美金（12元）的，当然也会有更便宜的，网上随便挖掘就有
        </p>
        <p>
            域名一年购买比较，后面续费大可以换一个，不买.com这样的顶级域名还是很便宜的，就像我在namecheap上买的.icu一共12元一年。
        </p>

      </div>
    </CollapsibleSection>

    <CollapsibleSection id="chapter3" title="四、 Vercel" class="collapark">         <!--多的章节记得换id-->
      <div class="textbox">
        <p>
            官网<a href="https://vercel.com/">Vercel</a>；；建议使用github登录
        </p>

        <p>
            Vercel的自动化程度非常高，直接将源码挂上去他会帮你完成后面的一切。
            直接在Vercel的控制台上（dashboard），点击“add new->Project”
        </p>

        <p>
            然后一路默认让他自己搭建就好了。
        </p>

        </div>

        <div class="blogimgbox">
            <ZoomableImage src="/picture/techno/t250814/vercelhome.png"/>              <!--更改图片-->
            <p>Vercel</p>
        </div>

        <div class="textbox">

            <p>进入刚刚部署好的项目，点击 “Settings -> Domains”。</p>
            <p>
                在输入框中填入您自己的域名（例如 goutou.icu），然后点击 “Add”。
            </p>
            <p>
                Vercel 此时会提示您，
                需要您去配置 DNS 解析。它通常会建议您添加一条 A 记录或 CNAME 记录。先不要在这里操作，
                记下它建议的记录值，通常是：
                <CodeBlock>
                    cname.vercel-dns.com
                </CodeBlock>
                <br>
                下一步去cloudflare里配置
            </p>
        </div>
    </CollapsibleSection>

    <CollapsibleSection id="chapter4" title="五、 Cloudflare" class="collapark">         <!--多的章节记得换id-->
      <div class="textbox">
            <p>
                在 <a href="https://dash.cloudflare.com/">Cloudflare</a> 控制台首页添加根域名。
                一路点击确认，然后选择free套餐。
            </p>

            <p>
                首次解析域名会显示找不到代理记录，需要手动添加两条：
            </p>
            <p>
                类型（type）&nbsp; 名称（name）&nbsp; 值（value）&nbsp; &nbsp;&nbsp;TTL&nbsp;&nbsp;&nbsp;代理（橙色云朵）
                <CodeBlock>
                    A&nbsp;&nbsp;&nbsp;&nbsp;@&nbsp;&nbsp;&nbsp;&nbsp;76.76.21.21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;auto <br><br>
                    &nbsp;&nbsp;CNAME&nbsp;&nbsp;www&nbsp;&nbsp;cname.vercel-dns.com&nbsp;&nbsp;auto
                </CodeBlock>
            </p>


            <p>
                最后cloudflare会给你两个名称服务器（nameserve）例如：
                <CodeBlock>
                    rick.ns.cloudflare.com <br><br>
                    &nbsp;&nbsp;daisy.ns.cloudflare.com
                </CodeBlock>
                
                
            </p>
            <p>
                在你购买域名的地方找到设置名称服务器（nameserve），添加这两个名称进去,Save。
            </p>

            <p>
                cloudflare需要一段时间来解析域名（几分钟到几小时）当出现：
                <CodeBlock>
                    Great news! Cloudflare is now protecting your site
                </CodeBlock>
                
                    
                
            </p>
            <p>
                表示解析成功，大功告成了！
            </p>
        </div>
    </CollapsibleSection>
    <CollapsibleSection id="chapter5" title="六、 END" class="collapark">         <!--多的章节记得换id-->
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
    import CodeBlock from '@/views/CodeBlock.vue';
export default {
  name: "t250814",                                                              /**更改文件名称，再在router里增加目录和引入 */
  components:{
    ArticleWithTOC,
    CollapsibleSection,
    ZoomableImage,
    CodeBlock,
  }
};
</script>