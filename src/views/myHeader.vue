<template>
  <section id="home" class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <div
        class="flex flex-col md:flex-row items-center justify-center text-center md:text-left"
      >
        <div class="flex justify-center my-16 md:mr-12">
          <img
            src="../asset/profile1.jpg"
            alt="Image"
            class="rounded-lg w-5/6 h-auto"
          />
        </div>

        <div class="md:w-2/3 md:ml-12">
          <h6
            :class="{ 'text-white': isDarkMode, 'text-gray-600': !isDarkMode }"
            class="font-bold text-lg md:text-2xl uppercase mb-8"
          >
            Mark Ahron R. Taglucop
          </h6>

          <h1
            :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
            class="font-bold text-3xl md:text-6xl leading-none mb-8"
          >
            BSIT-II Junior Web Developer
          </h1>

          <p
            :class="{ 'text-white': isDarkMode, 'text-gray-600': !isDarkMode }"
            class="font-bold text-md md:text-xl mb-16"
          >
            I have a passion for software. I enjoy creating tools that make life
            easier for people . <a href="https://github.com/MarkAhronTaglucop" target="_blank"><button class="cta dark:text-white">see portfolio</button></a>
          </p>

          <!-- Conditional centering for the button -->
          <div class="flex justify-center md:justify-start mb-8">
            <button
              @click="hireMe"
              class="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
            >
              Hire Me!
            </button>
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
  methods: {
    hireMe() {
      const email = "mtaglucop2@gmail.com";
      const subject = "Hiring Inquiry";
      const body = "Good day! I would like to inquire of your availability...";

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.open(gmailLink, "_blank");
    },
  },
};
</script>

<style scoped>
.cta {
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding-bottom: 7px;
  padding-left: 2px;
  letter-spacing: 4px;
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 10px;
  position: relative;
}

.cta::before {
  content: "\21DD";
  font-size: 28px;
  position: absolute;
  top: -2px;
  right: -10px;
  transform: translateX(100%);
}

.cta:active {
  transform: scale(0.9);
}

.cta {
  position: relative;
  padding-bottom: 1px;
}

.cta::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.cta:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
