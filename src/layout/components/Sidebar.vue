<template>
  <div
    class="app-sidebar sidebar-shadow"
    @mouseover="toggleSidebarHover('add', 'closed-sidebar-open')"
    @mouseleave="toggleSidebarHover('remove', 'closed-sidebar-open')"
  >
    <div class="app-header__logo">
      <!-- <div class="logo-src" /> -->
      <div class="header__pane ml-auto">
        <button
          type="button"
          class="hamburger vsm--toggle-btn hamburger--elastic"
          v-bind:class="{ 'is-active': isOpen }"
          @click="toggleBodyClass('closed-sidebar')"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="app-sidebar-content">
      <!-- <perfect-scrollbar class="app-sidebar-scroll"> -->
      <SidebarMenu @update:collapsed="onToggleCollapse()" :menu="menu" />
      <!-- </perfect-scrollbar> -->
    </div>
  </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
export default {
  components: {
    SidebarMenu,
  },
  data() {
    return {
      isOpen: false,
      sidebarActive: false,
      menu: [
        {
          header: "Main Navigation",
        },
        {
          title: "Productos",
          icon: "pe-7s-browser",
          child: [
            {
              href: "/",
              title: "Ver productos",
            },
            {
              href: "/registro",
              title: "Registrar productos",
            },
          ],
        },
      ],
      collapsed: true,
      windowWidth: 0,
    };
  },
  props: {
    // sidebarbg: String,
  },
  methods: {
    toggleBodyClass(className) {
      const el = document.body;
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    toggleSidebarHover(add, className) {
      const el = document.body;
      this.sidebarActive = !this.sidebarActive;

      this.windowWidth = document.documentElement.clientWidth;

      if (this.windowWidth > "992") {
        if (add === "add") {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      }
    },
    getWindowWidth() {
      const el = document.body;

      this.windowWidth = document.documentElement.clientWidth;

      if (this.windowWidth < "1350") {
        el.classList.add("closed-sidebar", "closed-sidebar-md");
      } else {
        el.classList.remove("closed-sidebar", "closed-sidebar-md");
      }
    },
    onToggleCollapse(collapsed) {
      console.log(collapsed);
    },
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("resize", this.getWindowWidth);

      //Init
      this.getWindowWidth();
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
};
</script>
