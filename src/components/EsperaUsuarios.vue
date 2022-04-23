<template>
<div id="loading-wrapper">
  <div class="container">
    <div>{{ percent }}%</div>
    <div class="loading-bar">
      <div class="percentage" :style="{'width' : percentage + '%'}"></div>
    </div>
  </div>
  <a id="continuar" target="_blank" href="#">Siguiente</a>
</div>
</template>
<script>
new Vue({
  el:'loading-wrapper',
  data: () => {
    return {
      percentage: 0
    }
  },
  computed: {
    percent() {
      return this.percentage.toFixed();
    }
  },
  created() {
    var intval = setInterval(() => {
      if(this.percentage < 100)
        this.percentage += .1;
      else
        clearInterval(intval);
    }, 10);
  }
})
</script>

<style lang="scss" scoped>


 body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#loading-wrapper {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  color: #222;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #efefef, #ccc);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  text-align: right;
  font-size: 8rem;
  color: #555;
}

.loading-bar {
  position: relative;
  width: 400px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(color   #000, $alpha: .4, 
      0 -1px 1px #fff, 0 1px 0 #fff);

  .percentage {
    position: absolute;
    top: 1px; left: 1px; right: 1px;
    display: block;
    height: 100%;
    border-radius: 15px;
    background-color: #a5df41;
    background-size: 30px 30px;
    background-image: linear-gradient(135deg, rgba($color: #fff, $alpha: .15) 25%, transparent 25%,
      transparent 50%, rgba($color: #fff, $alpha: .15) 50%,
      rgba($color: #fff, $alpha: .15) 75%, transparent 75%,
      transparent); 
    animation: animate-stripes 3s linear infinite;
  } 
}

@keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 60px 0; }
}

#continuar
{
  position: absolute;
  right: 0;
  left: 0;
  bottom: -200px;
  display: block;
  width: 160px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  margin: 0 auto;
  background-color: red;
  border-radius: 2px;
  animation: showYtLink 1.5s ease 3s forwards;
}

@keyframes showYtLink
{
  0%{ bottom: -200px; }
  100%{ bottom: 20px; }
}
</style>