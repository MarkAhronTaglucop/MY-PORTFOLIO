<template>
  <section id="educ" class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h1
        :class="{ 'text-white': isDarkMode, 'text-gray-600': !isDarkMode }"
        class="font-medium text-3xl md:text-4xl my-5"
      >
        Education
      </h1>

      <p
        :class="{ 'text-white': isDarkMode, 'text-gray-600': !isDarkMode }"
        class="font-normal text-xs md:text-base mb-20"
      >
        Below is a summary of the places I studied
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="group flex flex-col justify-start items-start gap-2 w-full h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800"
        >
          <div>
            <div class="flex items-center space-x-2 mb-3">
              <img
                src="../asset/cards/CSU.png"
                alt=""
                class="w-8 h-8 object-cover"
              />
              <h2 class="text-1xl font-bold text-gray-100">
                Caraga State University
              </h2>
            </div>
            <p class="text-gray-200 line-clamp-3">
              The current school im studying at as a BSIT student. A 4-year
              course that focuses on the development of the ICT skills of
              students
            </p>
          </div>
          <a href="https://www.facebook.com/cciscarsu/" target="_blank">
            <button
              class="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6"
            >
              CSU
            </button>
          </a>
        </div>

        <div
          class="group flex flex-col justify-start items-start gap-2 w-full h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800"
        >
          <div>
            <div class="flex items-center space-x-2 mb-3">
              <img
                src="../asset/cards/ANHS.png"
                alt=""
                class="w-8 h-8 object-cover"
              />
              <h2 class="text-1xl font-bold text-gray-100">
                Agusan National High School
              </h2>
            </div>
            <p class="text-gray-200 line-clamp-3">
              The school i went to in highschool. Ive spent 6 years there
              including my senior high school as a STEM student.
            </p>
          </div>
          <a href="https://www.facebook.com/sanhaySHSofficial/" target="_blank">
            <button
              class="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6"
            >
              ANHS
            </button>
          </a>
        </div>

        <div
          class="group flex flex-col justify-start items-start gap-2 w-full h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800"
        >
          <div>
            <div class="flex items-center space-x-2 mb-3">
              <img
                src="../asset/cards/DEPED.png"
                alt=""
                class="w-8 h-8 object-cover"
              />
              <h2 class="text-1xl font-bold text-gray-100">
                Pinana-an Elementary School
              </h2>
            </div>
            <p class="text-gray-200 line-clamp-3">
              I spent my elementary years in this school, developing my basic
              skills and communication skills. my hometown school, my alma mater.
            </p>
          </div>
          <a href="https://www.facebook.com/pinanaanes/" target="_blank">
            <button
              class="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6"
            >
              PES
            </button>
          </a>
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