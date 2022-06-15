<template>
  <div class="home">
    <h2>首页3333</h2>
    <div id="player">测试播放器</div>
    <button @click="btnClick">确认</button>
  </div>
</template>

<script>
import Mp3Player from '@tegfe/wbplayer-mp3';
  export default {
    mounted(){
      this.initPlayer();
    },
    methods: {
      btnClick() {
        console.log("来了");
        this.$router.push({
          name: "ShoppingCar",
          params: {
            username: "Nicholas Zakas",
            id: 102,
            age: 18,
          },
        });
      },
      initPlayer(){
        // 实例化该播放器，有问题，找不到Player，未定义
        let player = document.querySelector("#player");
        console.log(player.innerText);
        new Mp3Player.Player({
          id: player,
          url: this.list,
          preloadNext: true,
          width: 900,
          height: 80,
          volumeShow: false,
        })
      }
    },
  };
</script>