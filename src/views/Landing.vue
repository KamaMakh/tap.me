<template>
  <div
    class="landing"
    :class="{
      secondBg: secondBg,
      thirdBg: thirdBg,
      fourthBg: fourthBg,
      noBg: noBg
    }"
  >
    <div class="inner" :style="{ minHeight: wHeight + 'px' }">
      <!--<general-header />-->
      <LandingComponent @on-scroll-block="changeBg" />
      <div class="scroll-ic"></div>
    </div>
  </div>
</template>

<script>
import LandingComponent from "@/components/LandingComponent/LandingComponent";
export default {
  name: "Landing",
  components: {
    LandingComponent
  },
  data() {
    return {
      wHeight: window.innerHeight,
      secondBg: false,
      thirdBg: false,
      fourthBg: false,
      noBg: false
    };
  } /* eslint-disable */,
  methods: {
    changeBg(value) {
      console.log(value);
      console.log(value.next === 0);
      if(value && value.hasOwnProperty("next") && value.next === 0) {
        this.noBg = this.secondBg = this.thirdBg = this.fourthBg = false;
      }
      else if(value && value.next && value.next === 1) {
        this.noBg = true;
        this.secondBg = this.thirdBg = this.fourthBg = false;
      }
      else if(value && value.next && (value.next === 2 || value.next === 3)) {
        this.secondBg = true;
          this.thirdBg = this.fourthBg = this.noBg = false;
      }
      else if(value && value.next && value.next === 6 || (window.outerWidth < 1201 && value.next === 5)) {
        this.fourthBg = true;
        this.secondBg = this.thirdBg = this.noBg = false;
      }
      else if(value && value.next && (value.next === 4 || value.next === 5)) {
        this.thirdBg = true;
        this.secondBg = this.fourthBg = this.noBg = false;
      }
    }
  }
};
</script>

<style lang="scss">
.landing {
  background: url("../components/LandingComponent/assets/top_bg.png") -285px 0px
      no-repeat;
  &.secondBg {
    background: url("../components/LandingComponent/assets/left_bg.png") -282px 0 no-repeat;
  }
  &.thirdBg {
    background: url("../components/LandingComponent/assets/right_bg.png") 133% 0 no-repeat;
  }
  &.fourthBg {
    background: url("../components/LandingComponent/assets/footer.png") -440px bottom repeat-x;
  }
  &.noBg {
    background: #fff;
  }
  .inner {
    max-width: 1172px;
    margin: 0 auto;
    padding: 30px 0;
    position: relative;
  }
  @media all and(max-width: 1170px) {
    padding: 28px;
    background: url("../components/LandingComponent/assets/top_bg.png") -285px 0px
        no-repeat;
    /*url("../components/LandingComponent/assets/footer.png") -440px bottom repeat-x*/
  }
  @media all and(max-width: 768px) {
    background: url("../components/LandingComponent/assets/landing_mob.png") 0px
        0px no-repeat,
      url("../components/LandingComponent/assets/footer.png") -440px bottom repeat-x;
    .header-button {
      color: #fff;
      &:hover {
        color: #7f360d;
      }
    }
  }
  @media all and(max-width: 330px) {
    background: url("../components/LandingComponent/assets/landing_sm.png") 0px
        0px no-repeat,
      url("../components/LandingComponent/assets/footer.png") -440px bottom repeat-x;
  }
  .scroll-ic {
    position: fixed;
    top: auto;
    right: 50px;
    bottom: 50px;
    width: 100px;
    height: 100px;
    background: url("../assets/scroll_ic.png") 0 0 no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
    @media all and(max-width: 700px) {
      right: 20px;
      bottom: 20px;
      width: 70px;
      height: 70px;
    }
  }
}
</style>
