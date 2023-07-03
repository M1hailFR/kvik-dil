<template>
  <div class="container">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
body {
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  width: $loader-height;
  height: $loader-height;
  border-radius: 100%;
  background: linear-gradient(165deg, hsl(180, 69%, 50%), hsl(180, 69%, 30%), hsl(180, 69%, 20%), hsl(180, 69%, 10%));
  position: relative;
  top: 3rem;
  margin: 0 auto;
  transition: .3s;
}

.loader {
  transition: .3s;
}

.loader:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border-bottom: 0 solid #cccccc05;

  box-shadow:
    0 -10px 20px 15px #28d7d740 inset,
    0 -5px 15px 10px #28d7d750 inset,
    0 -2px 4px #50949480 inset,
    0 -3px 2px #28d7d7BB inset,
    0 2px 0px hsl(180, 69%, 50%),
    0 2px 3px hsl(180, 69%, 70%),
    0 5px 3px #28d7d790,
    0 10px 15px #28d7d760,
    0 10px 20px 15px #28d7d730;
  filter: blur(3px);
  animation: 2s rotate linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg)
  }
}
</style>
