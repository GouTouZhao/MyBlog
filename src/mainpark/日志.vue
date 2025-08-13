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

                <router-link to="/technology" class="denone">
                    <div class="navmenu" style="position: absolute;top: 380%; gap: 15px;">
                        <img src="/icon/diannao.png" class="navicon" style="width: 40px;">
                        <p class="navtext hide-text" style="font-weight: 800;">Technology</p>
                    </div>
                </router-link>

                    <div class="navmenu navhere" style="position: absolute;top: 510%;">
                        <img src="/icon/icon-shishi.png" class="navicon">
                        <p class="navtext hide-text" style="color: #00561f; font-weight: 800;">DailyRecord</p>
                    </div>
               
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
            <p class="toptext">DailyRecord</p>
        </div>


        <div class="maindiv"><!--主板块-->

            <div class="contentdiv">
                <div class="contentpark">
                    <p>没有</p>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script>
    import InfoPopover from '@/views/InfoPopover.vue';

    export default{
        name:"BlogPark",
        components:{
            InfoPopover,
        }
    }
</script>