<template>
  <div class="main-component-title">
    <span>
      <b-link :to="to">
        <svg
          width="11"
          height="19"
          viewBox="0 0 11 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="11" height="19" fill="url(#pattern0)" />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="11"
            height="19"
          >
            <rect width="11" height="19" fill="url(#pattern1)" />
          </mask>
          <g mask="url(#mask0)">
            <rect width="11" height="19" fill="black" fill-opacity="0.01" />
          </g>
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0"
                transform="scale(0.0909091 0.0526316)"
              />
            </pattern>
            <pattern
              id="pattern1"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0"
                transform="scale(0.0909091 0.0526316)"
              />
            </pattern>
            <image
              id="image0"
              width="11"
              height="19"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAATCAYAAABGKffQAAABdmlDQ1BJQ0MgUHJvZmlsZQAAeJx1kc8rBGEYxz+7iFg5cJAc5oAkaqPkyDq4bNKiLC47s7O7anZ2mtlNclUuDspBXPw6+A+4KldKKVKS8h/4ddE2ntdsrWTf6Z3n0/d9v0/v+30hHLeMvFcfhbxddBNTMW0huag1vhChkxa6GUgZnjMxMxOn5vi8I6Tq7ZDqVXvfv6MlbXoGhJqERw3HLQqPC8dXi47iLeEOI5dKCx8KD7pyQOErpesBPyvOBvyu2J1LTEJY9dSyv1j/xUbOzQv3C/fkrZJROY+6ScS052eldsnsxiPBFDE0dEqsYFFkSKotmf3vi/74pimIx5C/wxquOLLkxDsoakm6mlIzopvyWayp3P/m6WVGhoPukRg0PPn+Wy807kB52/e/jny/fAx1j3BhV/0FyWnsQ/TtqtZzAG0bcHZZ1fRdON+Ezgcn5aZ+pDqZ4UwGXk+hNQntN9C8FGRVWefkHubW5YmuYW8f+mR/2/I3BFZoDMcvwwIAAABzSURBVHicjdLBCYAwDEbhJ7iAC1TcH3QCTypu4SrxYiSUpsl//l7ooRBvFBFEJIQFOIAlwgV4AAE2YMjAW5+Shi3swhp3ocUhVJyCivcPCjB5UPFsLl/R5XRgFwb1ukFrbuCtGfRmg5XOr7PBSeI/6/43v9Maz86BoB+NAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
      </b-link>
    </span>
    {{ text }}
  </div>
</template>

<script>
export default {
  props: ["to", "text"],
  name: "MainComponentTitle"
};
</script>

<style scoped lang="scss">
.main-component-title {
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 23px;
  margin-right: -16px;
  margin-left: -16px;
  span {
    margin-right: 18px;
    cursor: pointer;
    text-decoration: none;
  }
  @media all and(max-width: 960px) {
    font-size: 18px;
  }
  @media all and(max-width: 640px) {
    font-size: 15px;
  }
}
</style>
