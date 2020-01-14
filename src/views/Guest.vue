<template>
  <div class="guest">
    <GuestComponent />
  </div>
</template>

<script>
import GuestComponent from "@/components/GuestComponent/GuestComponent";
export default {
  name: "Guest",
  components: {
    GuestComponent
  }
};
</script>

<style scoped lang="scss">
.guest {
  background: #fafafa;
}
</style>
