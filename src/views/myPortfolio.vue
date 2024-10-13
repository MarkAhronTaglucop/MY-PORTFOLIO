<template>
  <section class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h1
        :class="{ 'text-white': isDarkMode, 'text-gray-600': !isDarkMode }"
        class="font-medium text-gray-700 text-3xl md:text-4xl mb-5"
      >
        Portfolio
      </h1>

      <p
        :class="{ 'text-white': isDarkMode, 'text-gray-600': !isDarkMode }"
        class="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20"
      >
        These are some of the projects i created in my class IT 110
      </p>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
      >
        <div class="card my-5">
          <img src="../asset/cards/PROJ1.png" alt="" />
          <div class="card__content">
            <p class="card__title">Login & Signup</p>
            <p class="card__description">
              A login and signup page designed to counter payloads, we made this
              during our lab, where our discussion was about security.
              <a
                href="https://github.com/MarkAhronTaglucop/login-signup"
                class="hover:underline text-xs"
                >https://github.com/MarkAhronTaglucop/login-signup
              </a>
            </p>
          </div>
        </div>
        <div class="card my-5">
          <img
            src="../asset/cards/PROJ2.1.png"
            alt=""
            class="w-1/2 object-contain"
          />
          <img
            src="../asset/cards/PROJ2.2.png"
            alt=""
            class="w-1/2 object-contain"
          />
          <div class="card__content">
            <p class="card__title">To-do-list & Weather-app</p>
            <p class="card__description">
              A simple to do list app containing basic crud mechanism, made in
              vue3 framework and vuetify, and wether-app utilizing API
              <a
                href="https://github.com/MarkAhronTaglucop/vue-vuetify-todolist"
                class="hover:underline text-xs"
                >https://github.com/MarkAhronTaglucop/vue-vuetify-todolist
              </a>
              <a
                href="https://github.com/MarkAhronTaglucop/Weather-app"
                class="hover:underline text-xs"
                >https://github.com/MarkAhronTaglucop/Weather-app
              </a>
            </p>
          </div>
        </div>
        <div class="card my-5">
          <img
            src="../asset/cards/PROJ3.png"
            alt=""
            class="w-1/2 object-contain"
          />
          <img
            src="../asset/cards/PROJ4.png"
            alt=""
            class="w-1/2 object-contain"
          />
          <div class="card__content">
            <p class="card__title">Autobiography</p>
            <p class="card__description">
              A simple personal autobiography /   portfolio. one made with
              tailwind and one made with Bootstrap.
              <a
                href="https://github.com/MarkAhronTaglucop/Personal-Website-Tailwind"
                class="hover:underline text-xs"
                >https://github.com/MarkAhronTaglucop/Personal-Website-Tailwind
              </a>
              <a
                href="https://github.com/MarkAhronTaglucop/Personal-website-in-Bootstrap"
                class="hover:underline text-xs"
                >https://github.com/MarkAhronTaglucop/Personal-website-in-Bootstrap
              </a>
            </p>
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


<style scoped>
.card {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card svg {
  width: 48px;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: black;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 15px;
  color: white;
  font-weight: 700;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: white;
  line-height: 1.4;
}
</style>