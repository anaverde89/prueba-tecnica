<template>
  <div>
    <div class="search-wrapper" v-bind:class="{ active: searchOpen }">
      <div class="input-holder">
        <input
          type="text"
          class="search-input"
          placeholder="Buscar..."
          v-model="textSearch"
        />
        <button
          class="search-icon"
          v-on:click="searchOpen ? search() : toggleOpen()"
        >
          <span />
        </button>
      </div>
      <button class="close" v-on:click="toggleOpen()" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchOpen: false,
      textSearch: "",
    };
  },
  methods: {
    toggleOpen() {
      this.searchOpen = !this.searchOpen;
      if (!this.searchOpen) {
        this.textSearch = "";
      }
    },
    search() {},
  },
};
</script>
