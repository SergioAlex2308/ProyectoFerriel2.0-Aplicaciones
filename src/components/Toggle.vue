<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input
        type="checkbox"
        :checked="mode === 'dark' ? 'checked' : false"
        @change="$emit('toggle')"
      />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style>
:root {
  --light: #d8dbe0;
  --dark: #28292c;

} 

.toggle-wrapper {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 7;
  right: 2%;
  top: 2%;
}
.toggle {
  position: relative;
  display: flex;
  width: 60px;
  height: 34px;
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000000;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.toggler:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .toggler {
  background: #f3d721;
}
input:focus + toggler {
  box-shadow: 0 0 2px #2196f3;
}
input:checked + .toggler:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.toggler.round {
  border-radius: 34px;
}
.toggler.round:before {
  border-radius: 50%;
}
</style>