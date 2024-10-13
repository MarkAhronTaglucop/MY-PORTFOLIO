<template>
  <section class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <div class="flex flex-col lg:flex-row justify-between">
        <div class="mb-10 lg:mb-0">
          <h1
            :class="{ 'text-white': isDarkMode, 'text-gray-600': !isDarkMode }"
            class="font-medium text-3xl md:text-4xl mb-5"
          >
            Work Experience
          </h1>

          <p
            :class="{ 'text-white': isDarkMode, 'text-gray-600': !isDarkMode }"
            class="font-normal text-xs md:text-base"
          >
            My work experience throughout my academic years
          </p>
        </div>

        <div class="space-y-24">
          <div class="flex space-x-6">
            <h1
              :class="{
                'text-white': isDarkMode,
                'text-gray-600': !isDarkMode,
              }"
              class="font-normal text-3xl md:text-4xl"
            >
              01
            </h1>

            <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

            <div>
              <h1
                :class="{
                  'text-white': isDarkMode,
                  'text-gray-600': !isDarkMode,
                }"
                class="font-normal text-3xl md:text-4xl mb-5"
              >
                Marketing Manager
              </h1>

              <p
                :class="{
                  'text-white': isDarkMode,
                  'text-gray-600': !isDarkMode,
                }"
                class="font-normal text-sm md:text-base"
              >
                <span class="font-bold">Project Starlight NFT</span>
                <br />
                Marketed a Web Project online through social media platforms<br />(Twitter,
                Youtube, Instagram, and Discord)
              </p>
            </div>
          </div>

          <div class="flex space-x-6">
            <h1
              :class="{
                'text-white': isDarkMode,
                'text-gray-600': !isDarkMode,
              }"
              class="font-normal text-3xl md:text-4xl"
            >
              02
            </h1>

            <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

            <div>
              <h1
                :class="{
                  'text-white': isDarkMode,
                  'text-gray-600': !isDarkMode,
                }"
                class="font-normal text-3xl md:text-4xl mb-5"
              >
                Community Moderator
              </h1>

              <p
                :class="{
                  'text-white': isDarkMode,
                  'text-gray-600': !isDarkMode,
                }"
                class="font-normal text-sm md:text-base"
              >
                <span class="font-bold">Discord & Twitter   </span>
                <br />
                I Managed user interaction and user experience in certain
                communities
              </p>
            </div>
          </div>

          <div class="flex space-x-6">
            <h1
              :class="{
                'text-white': isDarkMode,
                'text-gray-600': !isDarkMode,
              }"
              class="font-normal text-3xl md:text-4xl"
            >
              03
            </h1>

            <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

            <div>
              <h1
                :class="{
                  'text-white': isDarkMode,
                  'text-gray-600': !isDarkMode,
                }"
                class="font-normal text-3xl md:text-4xl mb-5"
              >
                Junior Developer
              </h1>

              <p
                :class="{
                  'text-white': isDarkMode,
                  'text-gray-600': !isDarkMode,
                }"
                class="font-normal text-sm md:text-base"
              >
                <span class="font-bold">BSIT Student</span>
                <br />
                I am now learning to be a proficient full stack developer in my
                university
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
    },
  },
};
</script>