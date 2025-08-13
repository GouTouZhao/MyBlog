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

                <div class="navmenu navhere" style="position: absolute; top: 250%;">
                    <img src="/icon/xiangji.png" class="navicon">
                    <p class="navtext hide-text" style="color: #00561f; font-weight: 800;">Photography</p>
                </div>

                <router-link to="/technology" class="denone">
                    <div class="navmenu" style="position: absolute;top: 380%; gap: 15px;">
                        <img src="/icon/diannao.png" class="navicon" style="width: 40px;">
                        <p class="navtext hide-text" style="font-weight: 800;">Technology</p>
                    </div>
                </router-link>

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

            <div class="hide-text-height" style="position: absolute; top: 58%; left: 15%;">
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
            <p class="toptext">Photography</p>
        </div>


        <div class="maindiv"><!--主板块-->
            <div class="hide-text" style="position: relative; top: 120px; left: 34%; right: 0; width: 50%;z-index: 4; padding-bottom: 50px;">
                <PhotoOptions />
            </div>

            <div class="contentdiv">


                    <!--博客目录-->


                <router-link to="/p250801" class="denone">
                    <div class="contentpark">
                        <img src="/picture/photo/p250801/主页东校.jpg" class="contentpicture">
                        <div class="contenttextdiv">
                            <p class="contenttitle">宫崎骏的中大东校</p>
                            <p class="contenttext">拍摄于25/06/07，在晴朗的夏日，身处中大东校园仿佛置身于宫崎骏的漫画世界，就是有亿点热</p>
                        </div>
                        <p class="contentanno">2025/08/01</p>
                    </div>
                </router-link>
                
                
                <router-link to="/p250802" class="denone">
                    <div class="contentpark">
                        <img src="/picture/photo/p250802/中山医科大学.jpg" class="contentpicture">
                        <div class="contenttextdiv">
                            <p class="contenttitle">中大北校</p>
                            <p class="contenttext">拍摄于25/06/08，对北校建筑的全景接片，单张</p>
                        </div>
                        <p class="contentanno">2025/08/02</p>
                    </div>
                </router-link>

                <router-link to="/p250518" class="denone">
                    <div class="contentpark">
                        <img src="/picture/photo/p250518/一楼钢琴.jpg" class="contentpicture">
                        <div class="contenttextdiv">
                            <p class="contenttitle">广州美术馆</p>
                            <p class="contenttext">参观广州美术馆的记录，主要是对于美术馆建筑的拍摄，无艺术品照片（艺术细胞不够）</p>
                        </div>
                        <p class="contentanno">Ealier</p>
                    </div>
                </router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
    import InfoPopover from '@/views/InfoPopover.vue';
    import PhotoOptions from '@/views/PhotoOptions.vue';

    export default{
        name:"PhotographyPark",
        components:{
            InfoPopover,
            PhotoOptions,
        }
    }
    
</script>

