<template>
  <div class="main-component-my-page">
    <div class="title">
      Моя страница
    </div>
    <div class="share">
      {{ user.url }}
      <span>
        <b-link :to="{ name: 'MainComponentShare' }">
          <svg
            width="21"
            height="30"
            viewBox="0 0 21 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2234 8.73328V9.83328H19.7531V28.6333H1.24688V9.83328H7.77656V8.73328H0.164062V29.7333H20.8359V8.73328H13.2234Z"
              fill="#FF5C03"
            />
            <path
              d="M9.94219 11.5334V19.2334H11.025V11.5334V7.23339V2.36672L14.6344 6.03339L15.3891 5.26672L10.4672 0.266724L5.54532 5.26672L6.30001 6.03339L9.90938 2.36672V7.23339V11.5334H9.94219Z"
              fill="#FF5C03"
            />
          </svg>
        </b-link>
      </span>
    </div>
    <div class="edit">
      <editBtn :to="{ name: 'MainComponentEdit' }" />
    </div>
    <div class="list">
      <b-list-group>
        <b-list-group-item>
          <b-link to="/main">
            <span>
              <span class="icon">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="19" height="19" fill="url(#pattern0)" />
                  <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="19"
                    height="19"
                  >
                    <rect width="19" height="19" fill="url(#pattern1)" />
                  </mask>
                  <g mask="url(#mask0)">
                    <rect
                      width="19"
                      height="19"
                      fill="black"
                      fill-opacity="0.01"
                    />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlink:href="#image0" transform="scale(0.0526316)" />
                    </pattern>
                    <pattern
                      id="pattern1"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlink:href="#image0" transform="scale(0.0526316)" />
                    </pattern>
                    <image
                      id="image0"
                      width="19"
                      height="19"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABdmlDQ1BJQ0MgUHJvZmlsZQAAeJx1kc8rBGEYxz+7iFg5cJAc5oAkaqPkyDq4bNKiLC47s7O7anZ2mtlNclUuDspBXPw6+A+4KldKKVKS8h/4ddE2ntdsrWTf6Z3n0/d9v0/v+30hHLeMvFcfhbxddBNTMW0huag1vhChkxa6GUgZnjMxMxOn5vi8I6Tq7ZDqVXvfv6MlbXoGhJqERw3HLQqPC8dXi47iLeEOI5dKCx8KD7pyQOErpesBPyvOBvyu2J1LTEJY9dSyv1j/xUbOzQv3C/fkrZJROY+6ScS052eldsnsxiPBFDE0dEqsYFFkSKotmf3vi/74pimIx5C/wxquOLLkxDsoakm6mlIzopvyWayp3P/m6WVGhoPukRg0PPn+Wy807kB52/e/jny/fAx1j3BhV/0FyWnsQ/TtqtZzAG0bcHZZ1fRdON+Ezgcn5aZ+pDqZ4UwGXk+hNQntN9C8FGRVWefkHubW5YmuYW8f+mR/2/I3BFZoDMcvwwIAAAHSSURBVHicndTPi41hFAfwz33vnYaGpliPHyNZGEbMJCWmbKwIfwERRQoLRTaTlJqVlR0bpaysbUhJFn5LKRYT6opLDeEy71g8551e79w7xamn857nOd9zvuec93lqWI6bWIMcNcyELqSbXei32NXARgzjDl4jQz0cf8d3VrIbEWA61gB2YEsRrIkDeOPfZQkeYjTDCN4H1ZM4EWxW4Ro2B2gIV7E2mB7DWbQCOwJfcD0A93A/StkWpZ2Ks4Nh74lkd/E8zi5jqoFJbMIFDKIf48EA9mMh9oV9NFgMSwO7GImbNYzhijTVRwEYRBu3sRor8S6YjKE3SLSDSBOHiiYejhJ2hr0OK+K7L1j0h70M66NvW6WJnha9KUs99LPS3jc8KdmTsQr/6Sh3NlitogvHvdKvUw/AU9zAr4p/1olZWc7hDHpKezlGpQnnVUDWJdDSADyQ+jMk9fEWjkh9myPdmPUFoxf+7t9j6TdY3AnUjdmMVEY1WSP255Q4X7D/kiJYMZWOGeeRXOl5qgZrh26F488K+HuAP5f8iydptievQp/HbizCAumduhRJc2yX7ukEPmJDnL0sZ+zBcekp+oEp6b59km5AsVqx/zVYfpCuUi/8AZZsb0yAsTU9AAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              </span>
              Магазин
            </span>
            <span class="arrow"></span>
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link :to="{ name: 'MainComponentSocials' }">
            <span>
              <span class="icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="22" height="22" fill="url(#pattern0)" />
                  <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="22"
                    height="22"
                  >
                    <rect width="22" height="22" fill="url(#pattern1)" />
                  </mask>
                  <g mask="url(#mask0)">
                    <rect
                      width="22"
                      height="22"
                      fill="black"
                      fill-opacity="0.01"
                    />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlink:href="#image0" transform="scale(0.0454545)" />
                    </pattern>
                    <pattern
                      id="pattern1"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlink:href="#image0" transform="scale(0.0454545)" />
                    </pattern>
                    <image
                      id="image0"
                      width="22"
                      height="22"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABdmlDQ1BJQ0MgUHJvZmlsZQAAeJx1kc8rBGEYxz+7iFg5cJAc5oAkaqPkyDq4bNKiLC47s7O7anZ2mtlNclUuDspBXPw6+A+4KldKKVKS8h/4ddE2ntdsrWTf6Z3n0/d9v0/v+30hHLeMvFcfhbxddBNTMW0huag1vhChkxa6GUgZnjMxMxOn5vi8I6Tq7ZDqVXvfv6MlbXoGhJqERw3HLQqPC8dXi47iLeEOI5dKCx8KD7pyQOErpesBPyvOBvyu2J1LTEJY9dSyv1j/xUbOzQv3C/fkrZJROY+6ScS052eldsnsxiPBFDE0dEqsYFFkSKotmf3vi/74pimIx5C/wxquOLLkxDsoakm6mlIzopvyWayp3P/m6WVGhoPukRg0PPn+Wy807kB52/e/jny/fAx1j3BhV/0FyWnsQ/TtqtZzAG0bcHZZ1fRdON+Ezgcn5aZ+pDqZ4UwGXk+hNQntN9C8FGRVWefkHubW5YmuYW8f+mR/2/I3BFZoDMcvwwIAAAG/SURBVHicrdXPi01hGAfwz73GGNRcE2MUZUrxH/gHlJ2VWJBs2NgIiRTxBzCysMFWioUfWVgoZWUzmZmtBTIbxcRkiuhYvM9xz7y91wx3vnU65/k+3+d73/O+z7kPvTGEI7iPj6ji+oyHOI7OX+qLOI+fDbMfmMEUFhp8hStoLWXYwWSj6Ax2FHTjOIGvoXuDbb1Mh0NQ4U7ES2E1bkTNJ2wpiaZDcG4ZhjmORe17tJuJs5G4+x+mNa6Fx/WaGMAv6VAG+jAmdUwluuVwBKf6NIVDuofuUQSbVsB4VXhNwry0DTnWZXEbazJufaFuNsxVeJ0ld0v7/jjiQXzBd903uxWavVntM1T1YVVZcjBWuCHilm5f1+00HM9DWe0frwVpO3JsjR+oMYKxRtxW/tre1eZP42GkIPpXtMJrpo0HQR5YAeN9cb8HazEnNffmPo0/SCserYmJIPpZ9eXwuN0kp4IcKxQsB/ujfk6jS8aDnIi4JfVx3ka9cEl3GOxsJk5G4jQu6k6OeRzFxoJZBwelv8l6pbty0VuLR803PMm4WbzA84L+ph5DYVqaHFexp8GPxlu8tHj+VXiFC9heMoTfN8d8FBDeCckAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
              </span>
              Социальные сети
            </span>
            <span class="arrow"></span>
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link :to="{ name: 'MainComponentCallBack' }">
            <span>
              <span class="icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0742 16.2637C12.0742 15.6704 11.5933 15.1894 10.9999 15.1894C10.4066 15.1894 9.92575 15.6704 9.92575 16.2637C9.92575 16.857 10.4066 17.3379 10.9999 17.3379C11.5933 17.3379 12.0742 16.857 12.0742 16.2637ZM-5.34058e-05 11C-5.34058e-05 4.91983 4.92052 0 10.9999 0C17.0802 0 22 4.92063 22 11C22 17.0803 17.0793 22 10.9999 22C4.91975 22 -5.34058e-05 17.0794 -5.34058e-05 11ZM1.7187 11C1.7187 16.1302 5.8705 20.2813 10.9999 20.2813C16.1301 20.2813 20.2812 16.1295 20.2812 11C20.2812 5.86985 16.1294 1.71875 10.9999 1.71875C5.86982 1.71875 1.7187 5.87055 1.7187 11ZM7.56247 8.959C7.56247 7.06355 9.10452 5.52147 10.9999 5.52147C12.8954 5.52147 14.4374 7.06355 14.4374 8.959C14.4374 10.5578 13.3403 11.9052 11.8593 12.2877V13.6856C11.8593 14.1602 11.4745 14.5449 10.9999 14.5449C10.5253 14.5449 10.1406 14.1602 10.1406 13.6856V11.5371C10.1406 11.0625 10.5253 10.6778 10.9999 10.6778C11.9476 10.6778 12.7187 9.90675 12.7187 8.959C12.7187 8.01127 11.9476 7.24025 10.9999 7.24025C10.0522 7.24025 9.28125 8.01127 9.28125 8.959C9.28125 9.43365 8.89647 9.81837 8.42182 9.81837C7.94717 9.81837 7.56247 9.43365 7.56247 8.959Z"
                    fill="black"
                  />
                </svg>
              </span>
              Обратная связь
            </span>
            <span class="arrow"></span>
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link :to="{ name: 'MainComponentAnalytics' }">
            <span>
              <span class="icon">
                <svg
                  width="22"
                  height="19"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.6143 0.513303C19.4731 -0.250757 20.7615 -0.149205 21.5013 0.732379C22.2413 1.61929 22.148 2.94971 21.2892 3.71375C20.4303 4.47777 19.142 4.37626 18.4021 3.49468L15.9548 5.28994C16.2084 6.0593 16.0221 6.90886 15.4685 7.48055C14.6666 8.31402 13.3628 8.31939 12.5556 7.49122L10.0825 9.64445C10.2274 10.8092 9.43576 11.8831 8.30778 12.0327C7.17987 12.1823 6.14509 11.3649 5.99505 10.2001L4.03933 9.3826C3.8117 10.1841 3.14943 10.7718 2.34743 10.8894C1.21953 11.0497 0.179499 10.2428 0.019183 9.07808C-0.136089 7.91329 0.645237 6.83403 1.77312 6.67374C2.90102 6.51345 3.94105 7.32026 4.10136 8.48503L6.05711 9.30246C6.19683 8.80024 6.5176 8.3728 6.94709 8.09499C7.91458 7.47518 9.18221 7.78509 9.78234 8.7842L12.09 6.7753C11.7692 5.94708 11.9762 5.00139 12.6177 4.40299C13.461 3.61222 14.7649 3.68168 15.5254 4.55259L17.9986 2.74131C17.7554 1.93985 17.9986 1.06363 18.6143 0.513303ZM18.9299 7.08514H20.9995V19H18.9299V7.08514ZM12.9799 10.9321H15.0494V19H12.9799V10.9321ZM9.04771 14.9393H6.97808V19H9.04771V14.9393ZM1.02804 13.8173H3.09766V19H1.02804V13.8173Z"
                    fill="black"
                  />
                </svg>
              </span>
              Аналитика
            </span>
            <span class="arrow"></span>
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link to="/main">
            <span>
              <span class="icon">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.9732 9.75267C23.9226 9.59626 23.7881 9.48216 23.6262 9.45837L15.8575 8.32226L12.3833 1.23849C12.3112 1.09069 12.1616 0.997352 11.9985 0.997352C11.8353 0.997352 11.6854 1.09069 11.6137 1.23849L8.13902 8.32272L0.370312 9.4588C0.208444 9.48256 0.074464 9.59626 0.023308 9.7531C-0.026896 9.90916 0.0147119 10.0811 0.131976 10.1957L5.75387 15.7099L4.4265 23.4963C4.39895 23.6584 4.46512 23.8222 4.59697 23.919C4.72966 24.0166 4.90528 24.0292 5.0492 23.9518L11.9985 20.2759L18.947 23.9518C19.0097 23.9851 19.0788 24.0015 19.1471 24.0015C19.236 24.0015 19.3245 23.9738 19.3996 23.919C19.5318 23.8222 19.598 23.6584 19.5701 23.4963L18.2431 15.7103L23.865 10.1957C23.9818 10.0803 24.0239 9.90868 23.9732 9.75267Z"
                    fill="#FF5C03"
                  />
                </svg>
              </span>
              Выбрать тариф
            </span>
            <span class="arrow"></span>
          </b-link>
        </b-list-group-item>
        <b-list-group-item>
          <b-link to="/main">
            <span>
              <span class="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.93 9.62036H23.6025C23.7978 9.62036 23.9561 9.77905 23.9562 9.97474V14.0393C23.9562 14.235 23.7979 14.3937 23.6026 14.3937H21.9299C21.68 15.4407 21.2684 16.4346 20.7035 17.3556L21.8864 18.5401C21.9529 18.6065 21.9902 18.6968 21.9902 18.7908C21.9902 18.8849 21.9528 18.975 21.8864 19.0415L19.0145 21.9163C18.8764 22.0545 18.6525 22.0545 18.5146 21.9163L17.3313 20.7316C16.4081 21.3 15.4147 21.712 14.3711 21.9596V23.6334C14.3711 23.8292 14.2128 23.9879 14.0175 23.9879H9.95641C9.76108 23.9879 9.60273 23.8292 9.60273 23.6334V21.9593C8.55547 21.7099 7.56207 21.298 6.64244 20.7317L5.45836 21.9165C5.32022 22.0546 5.09654 22.0546 4.95845 21.9164L2.08653 19.0416C2.02009 18.9752 1.9828 18.8849 1.9828 18.7908C1.9828 18.6968 2.02014 18.6066 2.08658 18.5401L3.27006 17.3558C2.70508 16.4373 2.29293 15.4433 2.04207 14.3939H0.370408C0.175073 14.3939 0.0167236 14.2352 0.0167236 14.0395V9.97484C0.0167236 9.7791 0.175073 9.62041 0.370408 9.62041H2.04298C2.29349 8.57125 2.70533 7.57662 3.27026 6.65672L2.08664 5.47231C2.02019 5.40583 1.98285 5.3156 1.98285 5.22153C1.98285 5.12745 2.02014 5.03722 2.08658 4.97074L4.9585 2.09596C5.09654 1.95773 5.32027 1.95773 5.45836 2.09591L6.64234 3.28067C7.55955 2.71545 8.55264 2.303 9.60182 2.05165V0.378844C9.60182 0.183098 9.76017 0.0244141 9.9555 0.0244141H14.0175C14.2128 0.0244141 14.3712 0.183098 14.3712 0.378844V2.0515C15.4192 2.30269 16.4123 2.7151 17.3304 3.28057L18.5135 2.09586C18.6517 1.95763 18.8753 1.95763 19.0135 2.09581L21.8863 4.97059C21.9527 5.03702 21.9901 5.12725 21.9901 5.22133C21.9901 5.3154 21.9527 5.40563 21.8864 5.47211L20.7034 6.65667C21.269 7.57864 21.6805 8.57307 21.93 9.62036ZM21.6468 13.6849H23.2488H23.2489V10.3292H21.6469C21.4794 10.3292 21.3349 10.2116 21.3007 10.0473C21.0591 8.88948 20.6071 7.79712 19.957 6.80057C19.8653 6.66011 19.8846 6.47449 20.003 6.35591L21.136 5.22148L18.7637 2.8476L17.6303 3.98259C17.5119 4.10117 17.3268 4.12021 17.1868 4.02857C16.195 3.37895 15.1043 2.92593 13.9449 2.68219C13.7811 2.64771 13.6638 2.503 13.6638 2.33525L13.6639 0.733275H10.3092V2.3353C10.3092 2.503 10.1919 2.64776 10.0282 2.68219C8.86737 2.92624 7.77666 3.3792 6.78644 4.02846C6.64633 4.12036 6.46131 4.10112 6.34287 3.98269L5.2085 2.8476L2.83705 5.22143L3.97076 6.35576C4.08935 6.47444 4.10855 6.66021 4.01674 6.80072C3.36758 7.79449 2.91522 8.8869 2.67224 10.0475C2.63788 10.2117 2.49342 10.3292 2.32608 10.3292H0.724092V13.6849H2.32497C2.49226 13.6849 2.63672 13.8024 2.67112 13.9665C2.91461 15.1276 3.36722 16.2192 4.01649 17.2112C4.10845 17.3517 4.08935 17.5376 3.97066 17.6564L2.83695 18.7908L5.2084 21.1647L6.34277 20.0296C6.46115 19.9112 6.64618 19.892 6.78619 19.9838C7.77959 20.6344 8.8704 21.0867 10.0284 21.3281C10.1924 21.3623 10.31 21.5072 10.31 21.6751V23.279H13.6637V21.6751C13.6637 21.507 13.7815 21.3621 13.9458 21.3281C15.0985 21.0893 16.1892 20.637 17.1876 19.9837C17.3276 19.8921 17.5126 19.9112 17.631 20.0297L18.7645 21.1646L21.1359 18.7907L20.003 17.6564C19.8845 17.5377 19.8653 17.3521 19.9569 17.2117C20.6062 16.2163 21.0584 15.1244 21.3006 13.9666C21.335 13.8024 21.4794 13.6849 21.6468 13.6849Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.61118 12.0072C4.61118 7.93505 7.9199 4.62219 11.9869 4.62219C16.0539 4.62219 19.3626 7.93505 19.3626 12.0072C19.3626 16.0781 16.0539 19.3901 11.9869 19.3901C7.9199 19.3901 4.61118 16.0781 4.61118 12.0072ZM5.31855 12.0072C5.31855 15.6873 8.30996 18.6812 11.9869 18.6812C15.6639 18.6812 18.6552 15.6873 18.6552 12.0072C18.6552 8.32594 15.6638 5.33105 11.9869 5.33105C8.30996 5.33105 5.31855 8.32594 5.31855 12.0072Z"
                    fill="black"
                  />
                </svg>
              </span>
              Настройки аккаунта
            </span>
            <span class="arrow"></span>
          </b-link>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div class="pro-btn">
      Перейти на Pro
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainComponentBtnEdit from "./MainComponentBtn/MainComponentBtnEdit";
export default {
  name: "MainComponentMyPage",
  components: {
    editBtn: MainComponentBtnEdit
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  }
};
</script>

<style scoped lang="scss">
.main-component-my-page {
  padding-top: 40px;
  .title {
    font-weight: bold;
    font-size: 31px;
    color: #000000;
    margin-bottom: 9px;
  }
  .share {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 19px 9px 15px;
    background: #f2f2f2;
    border-radius: 6px;
    margin-bottom: 40px;
  }
  .list {
    margin-top: 45px;
    .list-group-item {
      border: none;
      padding: 0;
      a {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 0;
        border-bottom: 1px solid #e5e5e5;
        span:first-child {
          display: flex;
          align-items: center;
          .icon {
            margin-right: 8px;
          }
        }
        .arrow {
          width: 9px;
          height: 14px;
          background: url("../assets/arrow.png") 0 0 no-repeat;
        }
      }
    }
  }
  .pro-btn {
    width: 263px;
    max-width: 100%;
    margin: 38px auto 0;
    padding: 12px;
    text-align: center;
    border: 2px solid #1b3fc6;
    font-weight: 600;
    font-size: 15px;
    color: #000000;
  }
}
</style>
