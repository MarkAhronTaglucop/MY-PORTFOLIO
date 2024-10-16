<template>
  <div :class="{ dark: isDarkMode }">
    <div
      :style="{
        backgroundColor: isDarkMode ? '#101010' : '#e8e8e8',
        color: isDarkMode ? 'white' : 'black',
      }"
      class="min-h-screen"
    >
      <nav
        :style="{
          backgroundColor: isDarkMode ? '#101010' : '#e8e8e8',
          color: isDarkMode ? 'white' : 'black',
        }"
        class="headerall fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
      >
        <div
          class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <p class="flex items-center space-x-3 rtl:space-x-reverse">
            <DarkModeToggle @toggle="toggleDarkMode" class="" />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Markyy</span
            >
          </p>

          <div
            class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          >
            <button
              @click="handleDownload"
              type="submit"
              class="hidden lg:flex xl:flex group flex-1 bg-gray-400 text-black rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/30 flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                class="h-4 w-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Download CV
            </button>
            <button
              @click="toggleMenu"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              :aria-expanded="isMenuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            :class="isMenuOpen ? '' : 'hidden'"
            class="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              :style="{
                backgroundColor: isDarkMode ? '#101010' : '#e8e8e8',
                color: isDarkMode ? 'white' : 'black',
              }"
              class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li class="">
                <a
                  href="#home"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm md:text-base"
                  >Home</a
                >
              </li>
              <li class="">
                <a
                  href="#about"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm md:text-base"
                  >About</a
                >
              </li>
              <li class="">
                <a
                  href="#educ"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm md:text-base"
                  >Education</a
                >
              </li>
              <li class="">
                <a
                  href="#contact"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm md:text-base"
                  >Contact</a
                >
              </li>
              <li class="flex lg:hidden xl:hidden head7">
                <button
                  @click="handleDownload"
                  type="submit"
                  class="group flex-1 bg-gray-400 text-black rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/30 flex items-center justify-center"
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-4 w-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <my-header :isDarkMode="isDarkMode" class="head4" />
      <my-projs :isDarkMode="isDarkMode" class="head3" />
      <my-experience :isDarkMode="isDarkMode" class="head2" />
      <my-skill :isDarkMode="isDarkMode" class="head3" />
      <my-educ :isDarkMode="isDarkMode" class="head2" />
      <my-portfolio :isDarkMode="isDarkMode" class="head3" />
      <my-footer :isDarkMode="isDarkMode" class="head2" />
    </div>
  </div>
</template>

<script>
import DarkModeToggle from "./components/DarkModeToggle.vue";
import { downloadFile } from "./SupabaseJS.js";

import MyHeader from "./views/myHeader.vue";
import MyProjs from "./views/myProjs.vue";
import MyExperience from "./views/myExperience.vue";
import MyEduc from "./views/myEducation.vue";
import MySkill from "./views/mySkills.vue";
import MyPortfolio from "./views/myPortfolio.vue";
import MyFooter from "./views/myFooter.vue";

import ScrollReveal from "scrollreveal";

export default {
  components: {
    MyHeader,
    MyProjs,
    MyExperience,
    MyEduc,
    MySkill,
    MyPortfolio,
    MyFooter,
    DarkModeToggle,
  },
  data() {
    return {
      isDarkMode: true,
      isMenuOpen: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    async handleDownload() {
      console.log("Download button clicked!");
      try {
        await downloadFile();
        console.log("File download initiated!");
      } catch (error) {
        console.error("Download failed: ", error);
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  mounted() {
    // ScrollReveal setup
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".headerall", { delay: 100 });
    sr.reveal(".head2", { delay: 200 });
    sr.reveal(".head3", { delay: 300 });
    sr.reveal(".head4", { delay: 400 });
    sr.reveal(".head5", { delay: 500 });
    sr.reveal(".head6", { delay: 600 });
    sr.reveal(".head7", { delay: 700 });

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about1", { delay: 200 });
    srLeft.reveal(".about3", { delay: 200 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".about2", { delay: 200 });
    srRight.reveal(".project1", { delay: 400 });
    srRight.reveal(".project2", { delay: 200 });
    srRight.reveal(".project3", { delay: 50 });
    srRight.reveal(".lastpart", { delay: 100 });
  },
};
</script>


<style>
.min-h-screen {
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
}

nav {
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
}

ul {
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
}
</style>

