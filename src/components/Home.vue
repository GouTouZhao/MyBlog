<template>
<div>
              
    <div id="app" class="container" style="position: absolute; left: 25%; top:30%;">
    <router-link to="/photography">
    <CardView data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
        <template #header>
        <h1>摄影</h1>
        </template>
        <template #content>
        <p>永远年轻，永远热爱，永远热泪盈眶</p>
        </template>
    </CardView>
  </router-link>

  <router-link to="/technology">
    <CardView data-image="/picture/技术主图.jpg">
        <template #header>
        <h1>技术</h1>
        </template>
        <template #content>
        <p>计算机相关，一个小白对于软件硬件等领域的探索</p>
        </template>
    </CardView>
  </router-link>

  <router-link to="/blog">
    <CardView data-image="/picture/日志主图.jpg">
        <template #header>
        <h1>日常</h1>
        </template>
        <template #content>
        <p>第二个朋友圈，分享生活中鸡毛蒜皮的小事</p>
        </template>
    </CardView>
  </router-link>

  <router-link to="/other">
    <CardView data-image="/picture/其他主图.jpg">
        <template #header>
        <h1>其他</h1>
        </template>
        <template #content>
        <p>网站建立之后新增的一些内容板块</p>
        </template>
    </CardView>
  </router-link>
    </div>

    <div class="rightnav"> <!--侧边栏-->
        <img src="/picture/头像.png" alt="goutou" class="circle" style="position: absolute; width: 58%; top: 6%;left: 21%;">
        <div style="position: relative; top: 28%;">
          <p class="title hide-text" style="color: aliceblue;">goutou</p>
          <a href="https://www.sysu.edu.cn/" style="text-decoration: none;">
            <p class="text title hide-text" style="color: aliceblue; font-weight: 350px;">中山大学 | 软件工程</p>
          </a>
              <div style="width: 100%; height: 30px;"></div>


          <ul class="navull">
            <li>     <!--第一个标签，地址 -->
              <InfoPopover content="中国广东省广州市中山大学">
                <template #trigger="{toggle}">
                  <div @click="toggle" class="navlidiv">
                    <img src="/icon/zuobiao.png"  class="icon">
                    <p  class="text hide-text" style="color: aliceblue; ">广州 | 中国</p>
                  </div>
                </template>
              </InfoPopover>
            </li>


            <li>
              <InfoPopover content="微信号：goutouspare">
                <template #trigger="{toggle}">
                  <div @click="toggle" class="navlidiv">
                    <img src="/icon/weixin.png"  class="icon">
                    <p  class="text title hide-text" style="color: aliceblue; ">Wechat</p>
                  </div>
                </template>
              </InfoPopover>
            </li>


            <li>
              <InfoPopover content="ID:320714950">
                <template #trigger="{toggle}">
                  <div @click="toggle" class="navlidiv">
                    <img src="/icon/xiaohongshu.png"  class="icon">
                    <p class="text title hide-text" style="color: aliceblue; ">小红书</p>
                  </div>
                </template>
              </InfoPopover>
            </li>


            <li>
              <InfoPopover content="@goutou0624">
                <template #trigger="{toggle}">
                  <div @click="toggle" class="navlidiv">
                    <img src="/icon/tuite.png"  class="icon">
                    <p class="text title hide-text" style="color: aliceblue; ">Twiter</p>
                  </div>
                </template>
              </InfoPopover>
            </li>


            <li>
              <InfoPopover content="骗你的，我根本没发作品">
                <template #trigger="{toggle}">
                  <div @click="toggle" class="navlidiv">
                    <img src="/icon/github.png"  class="icon">
                    <p class="text title hide-text" style="color: aliceblue; ">Github</p>
                  </div>
                </template>
              </InfoPopover>
            </li>


            <li>
              <InfoPopover content="骗你的，根本没有ins">
                <template #trigger="{toggle}">
                  <div @click="toggle" class="navlidiv">
                    <img src="/icon/instagram.png"  class="icon">
                    <p class="text title hide-text" style="color: aliceblue; ">Instagram</p>
                  </div>
                </template>
              </InfoPopover>
            </li>


            <li>
              <router-link to="/helloworld" style="text-decoration: none;">
                  <div class="navlidiv">
                    <img src="/icon/my.png"  class="icon">
                    <p class="text title hide-text" style="color: aliceblue; " >About Me</p>
                  </div>
              </router-link>
            </li>
          </ul>
        </div> 
    </div>

    <!--附件-->
    <h1 class="title hide-text" style="font-weight: 800; font-size: 50px; position: absolute; z-index: 5; top: 100px; left: 45%;">Welcome to my blog!</h1>
    <div class="circle" style="background-color:#00561f; width: 80px; height: 80px; position: absolute; top: 20px; right: 20px;">
      <router-link to="/" style="text-decoration: none;">
        <h1 class="title" style="color: aliceblue;">G</h1> 
      </router-link>
    </div>

</div>
</template>

<script>
    import CardView from '@/views/card-effect.vue';
    import InfoPopover from '@/views/InfoPopover.vue';

    export default{
        name:"HomePage",
        components:{
            CardView,
            InfoPopover,
        }
    }
    
</script>


<style>

html, body {
  height: 100%;
  margin: 0;
}


.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5D4037;
  text-align: center;
}

p {
  line-height: 1.5em;
}

h1 + p, p + p {
  margin-top: 10px;
}

.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
}

.card-wrap:hover .card-info {
  transform: translateY(0);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-wrap:hover .card-info p {
  opacity: 1;
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-wrap:hover .card-info::after {
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  transform: translateY(0);
}

.card-wrap:hover .card-bg {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0.8;
}

.card-wrap:hover .card {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow:
    rgba(255, 255, 255, 0.2) 0 0 40px 5px,
    rgba(255, 255, 255, 1) 0 0 0 1px,
    rgba(0, 0, 0, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset white 0 0 0 6px;
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px; left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.card-info p {
  opacity: 0;
  text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.card-info * {
  position: relative;
  z-index: 1;
}

.card-info::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  background-blend-mode: overlay;
  opacity: 0;
  transform: translateY(100%);
  transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
}

</style>