<template>
    <div><!--总容器-->
        <div class="rightnav"> <!--侧边栏-->
            <router-link to="/helloworld" class="touxiangbox"> <!--头像板块-->
                <img src="/picture/头像.png" class="circle touxiang" >
                <p class="touxiangtext allnohide">goutou</p>
            </router-link>

            <div style="position: absolute; top: 12%; left: 15%;">
                <div class="navmenu">    <!--菜单板块-->
                    <p class="navblock">Menu</p>
                </div>

                <router-link to="/Home" class="denone">
                    <div class="navmenu" style="position: absolute;top: 120%;">
                        <img src="/icon/home.png" class="navicon">
                        <p class="navtext hide-text" style="font-weight: 800;">BackHome</p>
                    </div>
                </router-link>

                <router-link to="/photography" class="denone">
                    <div class="navmenu" style="position: absolute; top: 250%;">
                        <img src="/icon/xiangji.png" class="navicon">
                        <p class="navtext hide-text" style="font-weight: 800;">Photography</p>
                    </div>
                </router-link>

                <div class="navmenu navhere" style="position: absolute;top: 380%; gap: 15px;">
                    <img src="/icon/diannao.png" class="navicon" style="width: 40px;">
                    <p class="navtext hide-text" style="color: #00561f; font-weight: 800;">Technology</p>
                </div>

                <router-link to="/blog" class="denone">
                    <div class="navmenu" style="position: absolute;top: 510%;">
                        <img src="/icon/icon-shishi.png" class="navicon">
                        <p class="navtext hide-text" style="font-weight: 800;">DailyRecord</p>
                    </div>
                </router-link>
               
                <router-link to="/other" class="denone">
                    <div class="navmenu" style="position: absolute;top: 640%;">
                        <img src="/icon/qita.png" class="navicon">
                        <p class="navtext hide-text" style="font-weight: 800;">OtherPark</p>
                    </div>
                </router-link>     
                
            </div>

            <div  class="hide-text-height" style="position: absolute; top: 58%; left: 15%;">
                <div class="navmenu">    <!--顺序板块-->
                    <p class="navblock">Sort</p>
                </div>

                <div class="navmenu navhere" style="position: absolute; top: 120%;">
                    <img src="/icon/a-clocktimeeventalarm.png" class="navicon">
                    <p class="navtext hide-text" style="color: #00561f; font-weight: 800;">LatestPre</p>
                </div>

                <InfoPopover content="骗你的，只做了时间顺序" class="navmenu" style="position: absolute;top: 250%;left: 0;">
                    <template #trigger="{toggle}">
                        <div @click="toggle" style="display: flex; gap: 20px; align-items: center;">
                            <img src="/icon/dianzan.png" class="navicon" style="width: 35px;">
                            <p class="navtext hide-text" style="font-weight: 800;">Recommend</p>
                        </div>
                    </template>
                </InfoPopover>

                <InfoPopover content="骗你的，只做了时间顺序" class="navmenu" style="position: absolute;top: 380%;left: 0;">
                    <template #trigger="{toggle}">
                        <div @click="toggle" style="display: flex; gap: 20px; align-items: center;">
                            <img src="/icon/yanjingkeshi.png" class="navicon " style="width: 35px;">
                            <p class="navtext hide-text" style="font-weight: 800; opacity: 0;">MostViewed</p>
                        </div>
                    </template>
                </InfoPopover>

                <InfoPopover content="骗你的，只做了时间顺序" class="navmenu" style="position: absolute;top: 380%;left: 0;">
                    <template #trigger="{toggle}">
                        <div @click="toggle" style="display: flex; gap: 20px; align-items: center;">
                            <img src="/icon/yanjingkeshi.png" class="navicon " style="width: 35px;">
                            <p class="navtext hide-text" style="font-weight: 800;">MostViewed</p>
                        </div>
                    </template>
                </InfoPopover>

                <InfoPopover content="骗你的，只做了时间顺序" class="navmenu" style="position: absolute;top: 510%;left: 0;">
                    <template #trigger="{toggle}">
                        <div @click="toggle" style="display: flex; gap: 20px; align-items: center;">
                            <img src="/icon/xingxing.png" class="navicon" style="width: 35px;">
                            <p class="navtext hide-text" style="font-weight: 800;">MostLiked</p>
                        </div>
                    </template>
                </InfoPopover>
            </div>
        </div>


        <div class="navtop"> <!--顶部信息栏-->
            <p class="toptext">Technology</p>
        </div>


        <div class="maindiv"><!--主板块-->

            <div class="contentdiv">
                <router-link to="/t250814" class="denone">
                    <div class="contentpark">
                        <img src="/picture/techno/t250814/githubmyblog.png" class="contentpicture">
                        <div class="contenttextdiv">
                            <p class="contenttitle">我的博客（搭建）</p>
                            <p class="contenttext">介绍仅需域名钱搭建个人博客的方法，不考虑合法性且流量较小（100G博客够用）</p>
                        </div>
                        <p class="contentanno">2025/08/14</p>
                    </div>
                </router-link>

                <router-link to="/t250813" class="denone">
                    <div class="contentpark">
                        <img src="/picture/techno/t250813/home.png" class="contentpicture">
                        <div class="contenttextdiv">
                            <p class="contenttitle">我的博客（源码）</p>
                            <p class="contenttext">本网站的底层代码及其使用的技术涉及</p>
                        </div>
                        <p class="contentanno">2025/08/13</p>
                    </div>
                </router-link>
                
            </div>
            
        </div>
    </div>
</template>

<script>
    import InfoPopover from '@/views/InfoPopover.vue';

    export default{
        name:"TechnologyPark",
        components:{
            InfoPopover,
        }
    }
</script>