<template>
  <div class="general-component-header">
    <b-link to="/" class="logo">
      <span class="ico">
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="39" height="39" fill="url(#pattern0)" />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="39"
            height="39"
          >
            <rect width="39" height="39" fill="url(#pattern1)" />
          </mask>
          <g mask="url(#mask0)">
            <rect width="39" height="39" fill="black" fill-opacity="0.01" />
          </g>
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlink:href="#image0" transform="scale(0.025641)" />
            </pattern>
            <pattern
              id="pattern1"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlink:href="#image0" transform="scale(0.025641)" />
            </pattern>
            <image
              id="image0"
              width="39"
              height="39"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAABdmlDQ1BJQ0MgUHJvZmlsZQAAeJx1kTtLA0EUhb8kSsRELLQIYpEiEYsEREEsNRZpgoQYwajNZvMS8lh2N0iwFWwsAhaija/Cf6CtYKsgCIogIvgPfDUi6x0jRERnmb0fZ+ZcZs6AO1HWK1bHCFSqtpmKx4LzmYWg9xE/AXyECGu6ZUwlkwn+HW/XuFS9iqpe/+/7c/hyeUsHV5fwuG6YtvCkcGLFNhRvCPfrJS0nvCccMeWAwudKz7b4QXGxxS+KzXRqGtyqZ7D4g7M/WC+ZFeFh4VClXNe/z6Nu4s9X52alDsgcxCJFnBhBstRZpoxNVGpVMvvbN/Llm6EmHl3+Bg1McRQpiTcial265qUWRM/LV6ahcv+dp1UYG21198eg895xnsPg3YSPpuO87zvOxwF47uC02vbXJKeJV9GbbS20C71rcHzW1rJbcLIOgVtDM7UvySPTXSjA0xH0ZKDvEroXW1l9r3N4A+lVeaIL2N6BIdnfu/QJCuFoD/7nyJoAAAK0SURBVHic7ZhPiE1RHMc/72Hy/19RJCORxMIoCyVFSIoSpSgsRFmxsEBEsrKYlLKhFFKKlWJjmkyUsJipiahpME0UC3+m9Pz5WMx73DndN/fedy82vnXq/v7ez7v3nt45B5Wc46z6Vr2tTi6g36+Rt8Fqh+pEkXBlkjUCOADsjYlNC+zZKfql1siEeAm4Bayv2guBg5H4lyA/tHMp6clN5DcYwPaEfOv4R6UmiigJrgx8itgfM/afAbQBPcDJjLWJcAI/Ivb3jP2PAquAWcBxoCVLcZoJkUczA3t6luIaXDOwvBCcoco1YcrAWuA58AC4UhBUTfUmSCqVgSNAU9XeASzKS1SUykAl8E34FyBxioP7+i9A4vSnZ2su/YdrVP/hGlVeuLC+KTaroOZZFa4Hf8RmNaiscKXAvge8ql4LXMxNFFHSSrgMjIvY44L4W2AxsA7oBp4Vh5YM9xkYACZV7dcxOZ+AG0VC1ZT0WivARqADuAvsytg/XJ5n+oxGMri7iipc7XYAKzNC1YMJv9nE4oHAN7ZBkDhdiFx3A0+yFJeB/sDXnJcoojvAUmArsAT4kJC/AbgMtAJjUPcFu/bzRe7aU44takfAcQ11fuB8/5eASuoetct49dQSO4PAwT8INUE9pL6oA6X6Tl1XK9gZBCvqtIKhpqvH1DfDQPWrR9QpOvSUqS9I7CwIaq7aqg4MA/VU3a+OjtZGm6yMKbqvTm0QqkW9qH4bBuqxurtej9BxOqbBG3VbBqgV6vVhgFTb1E1JveKcl+o0fKgeUBepTZH8Eeo8da/angB1U12V9ofWC5xJuEmf+qgK/DIhV/WquiwtVBIc6ma1N8WN66minlMXZIVKA4eDs+ew2pMBqk89pc5uFKo2SprqrKUErKmOFmAOML7q/wz0Al1Ae/X/tJBTg58Q8saUMzwtcQAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      </span>
      <span class="text">логотип</span>
    </b-link>
    <div class="buttons">
      <HeaderButton class="sign-in" text="Войти" to="/auth" />
      <HeaderButton text="Начать" :to="{ name: 'AuthComponentCreateLink' }" />
    </div>
  </div>
</template>

<script>
import HeaderButton from "@/components/Buttons/HeaderButton";
export default {
  name: "GeneralComponentHeader",
  components: {
    HeaderButton
  }
};
</script>

<style scoped lang="scss">
.general-component-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1172px;
  margin: 0 auto 30px;
  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    background: url("../../assets/logo.png") 0 0 no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
    .ico {
      margin-right: 10px;
      opacity: 0;
    }
    .text {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      text-align: right;
      color: #ffffff;
      opacity: 0;
    }
  }
  .buttons {
    display: flex;
    > * {
      margin: 0 5px;
    }
  }
  .sign-in {
    margin-right: 37px;
  }
}
@media all and (max-width: 480px) {
  .general-component-header {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 15px;
    .logo {
      margin-bottom: 5px;
    }
    .sign-in {
      margin-right: 5px;
    }
  }
}
</style>
