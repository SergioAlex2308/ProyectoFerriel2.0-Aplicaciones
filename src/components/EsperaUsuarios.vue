<template>
<div id="loading-wrapper">
<div class="container">
<div class="progress">
  <div class="progress-value"></div>
</div>
</div>
</div>
</template>
<script>

</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-content: center;
}
body {
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #000;
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
}

.progress {
  background: rgba(255, 0, 0, 0.1);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 40px;
  width: 50%;
}

.progress-value {
  animation: load 20s normal forwards;
  box-shadow: 0 10px 40px -10px rgb(0, 0, 0);
  border-radius: 100px;
  background: rgb(20, 218, 56);
  height: 30%;
  width: 0;
}

@keyframes load {
  0% { width: 0; }
  100% { width: 100%; }
}
</style>