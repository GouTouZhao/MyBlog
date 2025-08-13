<template>
    <div >
        <img src="/picture/主页东校.jpg" class="allback hide-text">  
        <p class="abp" style="top: 0; left: 40px;">SYSU</p>   
        <img src="/picture/学校logo.png" alt="中山大学" class="abp" style="width: 100px; height: auto; bottom: 0px; right: 20px;" >

    </div>

                <div style="width: 100%; height: 180px;"></div>

    <img src="/picture/头像.png" alt="goutou" class="circle" style="position: relative;"> 
                <div style="width: 20px; height: 30px;"></div>



  <div class="whiteback" style="opacity: 0.8; left: 33%;">
                <div style="width: 20px; height: 10px;"></div>
    <p class="title" style="font-size: 20px; color:black;">“行到水穷处，坐看云起时”</p>  
    <p class="text" style="font-size: 20px;">欢迎来到goutou的小站</p>
                <div style="width: 20px; height: 10px;"></div>
  </div>
                <div style="width: 20px; height: 20px;"></div>



  <div>
    <router-link to="/Home">
        <button class="enterbutton">enter</button> 
    </router-link>
  </div>

</template>

<script>
    export default{
        name:"StartPage"
    }
</script>

<style>

.enterbutton {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 4px;
  position: relative;
  background-color: #00561f;
  border: none;
  color: #fff;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 5px 15px #193047;
  border-radius: 4px;
}

.button:hover {
  background: #fff;
  box-shadow: 0px 2px 10px 5px #00561f;
  color: #000;
}

.button:after {
  content: "";
  background: #00561f;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

.button:focus { outline:0; }

</style>
