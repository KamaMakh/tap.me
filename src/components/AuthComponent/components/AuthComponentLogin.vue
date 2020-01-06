<template>
  <div class="auth-component-login">
    <instbtn/>
    <div class="email-title">
      <span>
        или войти через e-mail
      </span>
    </div>
    <div class="input-wrap email">
      <b-form-input size="lg" placeholder="Электронная почта" type="email"></b-form-input>
      <div class="icons">
        <span style="margin-right: 4px">
          <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50007 0.000244141C1.57014 0.000244141 0.000244141 1.4814 0.000244141 3.302C0.000244141 4.54562 0.742624 5.67788 1.90923 6.23999V11.4985C1.90923 11.5782 1.94253 11.6545 2.00238 11.7109L3.27508 12.9115C3.39948 13.0288 3.60066 13.0288 3.72506 12.9115L4.99776 11.7109C5.0575 11.6545 5.09091 11.5782 5.09091 11.4986L5.09069 10.8981C5.09069 10.8065 5.04628 10.7199 4.97006 10.6629L4.58863 10.3777L5.01767 9.88871C5.11529 9.7776 5.11529 9.61719 5.01767 9.50607L4.58863 9.01716L4.97029 8.73218C5.04228 8.68036 5.08496 8.59989 5.09046 8.51434C5.09549 8.42872 5.06185 8.34517 4.99776 8.28466L4.57879 7.88948L4.99009 7.50149C5.04983 7.44511 5.08325 7.36882 5.08325 7.28927L5.09091 6.20786C6.25752 5.64621 7.00036 4.546 6.9999 3.302C6.9999 1.4814 5.42989 0.000244141 3.50007 0.000244141ZM4.45451 2.10151C4.45451 2.59808 4.0265 3.00189 3.50007 3.00189C2.97364 3.00189 2.54563 2.59808 2.54563 2.10151C2.54563 1.60487 2.97364 1.20112 3.50007 1.20112C4.0265 1.20112 4.45439 1.60487 4.45451 2.10151Z" fill="black"/>
          </svg>
        </span>
        <span>
          <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="11" height="7" fill="url(#pattern0)"/>
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="11" height="7">
            <rect width="11" height="7" fill="url(#pattern1)"/>
            </mask>
            <g mask="url(#mask0)">
            <rect width="11" height="7" fill="black" fill-opacity="0.01"/>
            </g>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0" transform="scale(0.0909091 0.142857)"/>
            </pattern>
            <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0" transform="scale(0.0909091 0.142857)"/>
            </pattern>
            <image id="image0" width="11" height="7" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAABdmlDQ1BJQ0MgUHJvZmlsZQAAeJx1kTtLA0EUhb8kSsRELLQIYpEiEYsEREEsNRZpgoQYwajNZvMS8lh2N0iwFWwsAhaija/Cf6CtYKsgCIogIvgPfDUi6x0jRERnmb0fZ+ZcZs6AO1HWK1bHCFSqtpmKx4LzmYWg9xE/AXyECGu6ZUwlkwn+HW/XuFS9iqpe/+/7c/hyeUsHV5fwuG6YtvCkcGLFNhRvCPfrJS0nvCccMeWAwudKz7b4QXGxxS+KzXRqGtyqZ7D4g7M/WC+ZFeFh4VClXNe/z6Nu4s9X52alDsgcxCJFnBhBstRZpoxNVGpVMvvbN/Llm6EmHl3+Bg1McRQpiTcial265qUWRM/LV6ahcv+dp1UYG21198eg895xnsPg3YSPpuO87zvOxwF47uC02vbXJKeJV9GbbS20C71rcHzW1rJbcLIOgVtDM7UvySPTXSjA0xH0ZKDvEroXW1l9r3N4A+lVeaIL2N6BIdnfu/QJCuFoD/7nyJoAAABZSURBVHicfc7BCcNAEEPRN3XEwXEr7tutOIEUolw2sAzGAzoI/Q9TSVTVgkry1a5vCz4jWxL/4DVtT3jgRGYB2+jBe3BgbcLewLW/Nwu5A6+E8w6cheMK/AHTAC/HDft+/gAAAABJRU5ErkJggg=="/>
            </defs>
          </svg>
        </span>
      </div>
    </div>
    <div class="input-wrap password">
      <b-form-input size="lg" placeholder="Пароль" type="password"></b-form-input>
      <div class="link">
        <b-link :to="{ name: 'AuthComponentReset' }">Восстановить</b-link>
      </div>
    </div>
    <basic-button text="Войти" />
  </div>
</template>

<script>
import AuthComponentInstBtn from "./AuthComponentInstBtn";
export default {
  name: "AuthComponentLogin",
  components: {
    instbtn: AuthComponentInstBtn
  }
}
</script>

<style scoped lang="scss">
.auth-component-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  .email-title {
    margin-top: 47px;
    margin-bottom: 8px;
    text-align: center;
    max-width: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      background: #ccc;
      left: 0;
      right: 0;
      top: 50%;
      margin-top: -0.5px;
    }
    span {
      color: #959595;
      font-size: 13px;
      background: #fff;
      position: relative;
      padding: 0 11px;
    }
  }
  .input-wrap {
    margin-top: 20px;
    width: 100%;
    position: relative;
    &.email {
      .icons {
        display: flex;
        position: absolute;
        top: 50%;
        right: 11px;
        margin-top: -14px;
        cursor: pointer;
      }
    }
    &.password {
      margin-bottom: 20px;
      .link {
        position: absolute;
        top: 50%;
        right: 15px;
        margin-top: -12px;
        a {
          font-weight: 600;
          font-size: 13px;
          color: #1B3FC6;
          text-decoration: none;
        }
      }
    }
    input {
      border: 1px solid #CCCCCC;
      box-sizing: border-box;
      border-radius: 0;
      padding: 1.6rem 1rem;
      outline: none;
      font-size: 14px;
      font-weight: 600;
      color: #959595;
      &:focus {
        border: 2px solid #1B3FC6;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
      }
    }
  }
}

@media all and (max-width: 400px) {
  .auth-component-login .input-wrap.email .icons {
    display: none;
  }
  .auth-component-login .input-wrap.password .link {
    position: initial;
    margin-top: 15px;
  }
}
</style>
