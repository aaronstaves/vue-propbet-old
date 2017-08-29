<template>
  <div class="container">

    <NavBar/>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/Navbar'

export default {
  name: 'app',
  components: { NavBar }
}
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #B3404B;
$primary-invert: findColorInvert($primary);
$info: #2A746A;
$info-invert: findColorInvert($info);
$danger: #B97542;
$danger-invert: findColorInvert($danger);
$success: #489B37;
$success-invert: findColorInvert($success);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
<style>

