import Vue from 'vue';

Vue.mixin({
  computed: {
    $binding () {
      const binding = {};
      const name = this.$vuetify.breakpoint.name;
      
      if (name === 'xs' || name === 'sm') {
        binding.column = true;
      }

      if (this.$vuetify.breakpoint.mdAndUp) {
        binding.row = true;
      }
      
      return binding;
    },
    $isMobile () {
      return this.$vuetify.breakpoint.mdAndDown;
    }
  }
});
