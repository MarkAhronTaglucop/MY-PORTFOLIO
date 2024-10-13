<template>
  <section id="about" class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h1
        :class="{ 'text-white': isDarkMode, 'text-gray-600': !isDarkMode }"
        class="font-medium text-3xl md:text-4xl my-5"
      >
        My Interests
      </h1>

      <p
        :class="{ 'text-white': isDarkMode, 'text-gray-600': !isDarkMode }"
        class="font-normal text-xs md:text-base mb-20"
      >
        Below is my various interests
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
          <div class="card-1">
            <p class="card-p"><img src="../asset/cards/h2.jpg" alt="" class="card-sp" /></p>
            <p class="card-p"><img src="../asset/cards/h1.jpg" alt="" class="card-sp" /></p>
            <p class="card-p"><img src="../asset/cards/h3.jpg" alt="" class="card-sp" /></p>
          </div>
          <h5 class="text-center font-bold">My hobbies</h5>
          <p class="px-5">
            These are what i do during my free time! read books, coding, and play games.
          </p>
        </div>

        <div class="card">
          <div class="main-3">
            <div class="currentplaying">
              <svg
                height="50px"
                width="50px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                class="spotify"
              >
                <path
                  d="M51.03,37.34c0.16,0.98,1.08,1.66,2.08,1.66h5.39c2.63,0,4.75,2.28,4.48,4.96	C62.74,46.3,60.64,48,58.29,48H49c-1.22,0-2.18,1.08-1.97,2.34c0.16,0.98,1.08,1.66,2.08,1.66h8.39c1.24,0,2.37,0.5,3.18,1.32	C61.5,54.13,62,55.26,62,56.5c0,2.49-2.01,4.5-4.5,4.5h-49c-1.52,0-2.9-0.62-3.89-1.61C3.62,58.4,3,57.02,3,55.5	C3,52.46,5.46,50,8.5,50H14c1.22,0,2.18-1.08,1.97-2.34C15.81,46.68,14.89,44,13.89,44H5.5c-2.63,0-4.75-2.28-4.48-4.96	C1.26,36.7,3.36,35,5.71,35H8c1.71,0,3.09-1.43,3-3.16C10.91,30.22,9.45,29,7.83,29H4.5c-2.63,0-4.75-2.28-4.48-4.96	C0.26,21.7,2.37,20,4.71,20H20c0.83,0,1.58-0.34,2.12-0.88C22.66,18.58,23,17.83,23,17c0-1.66-1.34-3-3-3h-1.18	c-0.62-0.09-1.43,0-2.32,0h-9c-1.52,0-2.9-0.62-3.89-1.61S2,10.02,2,8.5C2,5.46,4.46,3,7.5,3h49c3.21,0,5.8,2.79,5.47,6.06	C61.68,11.92,60.11,14,57.24,14H52c-2.76,0-5,2.24-5,5c0,1.38,0.56,2.63,1.46,3.54C49.37,23.44,50.62,24,52,24h6.5	c3.21,0,5.8,2.79,5.47,6.06C63.68,32.92,61.11,35,58.24,35H53C51.78,35,50.82,36.08,51.03,37.34z"
                  fill="url(#ipdIa4~cOclR8yt_ClW93a)"
                ></path>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(0 -534)"
                  y2="590.253"
                  y1="530.096"
                  x2="32"
                  x1="32"
                  id="ipdIa4~cOclR8yt_ClW93b"
                >
                  <stop stop-color="#42d778" offset="0"></stop>
                  <stop stop-color="#3dca76" offset=".428"></stop>
                  <stop stop-color="#34b171" offset="1"></stop>
                </linearGradient>
                <path
                  d="M57,32c0,12.837-9.663,23.404-22.115,24.837C33.942,56.942,32.971,57,32,57	c-1.644,0-3.25-0.163-4.808-0.471C15.683,54.298,7,44.163,7,32C7,18.192,18.192,7,32,7S57,18.192,57,32z"
                  fill="url(#ipdIa4~cOclR8yt_ClW93b)"
                ></path>
                <path
                  d="M41.683,44.394c-0.365,0-0.731-0.181-1.096-0.365c-3.471-2.009-7.674-3.105-12.24-3.105	c-2.559,0-5.116,0.364-7.491,0.912c-0.365,0-0.914,0.183-1.096,0.183c-0.914,0-1.461-0.732-1.461-1.462	c0-0.913,0.547-1.463,1.279-1.643c2.923-0.732,5.846-1.096,8.951-1.096c5.116,0,9.866,1.276,13.885,3.655	c0.548,0.364,0.914,0.73,0.914,1.642C43.145,43.847,42.414,44.394,41.683,44.394z M44.241,38.181c-0.547,0-0.912-0.18-1.279-0.364	c-3.835-2.375-9.135-3.839-15.163-3.839c-2.924,0-5.664,0.366-7.674,0.916c-0.549,0.18-0.731,0.18-1.096,0.18	c-1.096,0-1.827-0.912-1.827-1.826c0-1.096,0.549-1.645,1.461-2.009c2.74-0.73,5.481-1.279,9.317-1.279	c6.213,0,12.241,1.463,16.991,4.384c0.73,0.364,1.096,1.096,1.096,1.826C46.069,37.269,45.337,38.181,44.241,38.181z M47.165,30.876	c-0.548,0-0.731-0.182-1.279-0.364c-4.385-2.559-10.961-4.021-17.356-4.021c-3.289,0-6.577,0.366-9.5,1.096	c-0.366,0-0.731,0.182-1.279,0.182c-1.279,0.183-2.193-0.912-2.193-2.192c0-1.279,0.731-2.009,1.644-2.192	c3.471-1.096,7.125-1.462,11.327-1.462c6.943,0,14.25,1.462,19.731,4.567c0.73,0.366,1.278,1.096,1.278,2.193	C49.357,29.961,48.442,30.876,47.165,30.876z"
                  fill="#fff"
                ></path>
              </svg>
              <p class="heading">My Favorite Songs</p>
            </div>
            <div class="loader">
              <div class="song">
                <p class="name">Apocalypes</p>
                <p class="artist">Cigarretes After Sex</p>
              </div>
              <div><img src="../asset/cards/spotify1.jpg" alt="" class="albumcover" /></div>
              <div class="loading">
                <div class="load"></div>
                <div class="load"></div>
                <div class="load"></div>
                <div class="load"></div>
              </div>
            </div>
            <div class="loader">
              <div class="song">
                <p class="name">I Wanna Be Yours</p>
                <p class="artist">Arctic Monkeys</p>
              </div>
              <div><img src="../asset/cards/spotify2.jpg" alt="" class="albumcover" /></div>
              <div class="play"></div>
            </div>
            <div class="loader">
              <div class="song">
                <p class="name">Sanctuary</p>
                <p class="artist">Joji</p>
              </div>
              <div><img src="../asset/cards/spotify3.jpg" alt="" class="albumcover" /></div>
              <div class="play"></div>
            </div>
            <div class="loader">
              <div class="song">
                <p class="name">Valentine</p>
                <p class="artist">Laufey</p>
              </div>
              <div><img src="../asset/cards/spotify4.jpg" alt="" class="albumcover" /></div>
              <div class="play"></div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-1">
            <p class="card-p"><img src="../asset/cards/l1.jpg" alt="" class="card-sp" /></p>
            <p class="card-p"><img src="../asset/cards/l2.jpg" alt="" class="card-sp" /></p>
            <p class="card-p"><img src="../asset/cards/l3.jpg" alt="" class="card-sp" /></p>
          </div>
          <h5 class="text-center font-bold">My likes</h5>
          <p class="px-5">
            These are the things that interests me! trading, cats and watching anime
          </p>
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
  width: 85%;
  height: 365px;
  background: rgb(40, 40, 55);
  background: linear-gradient(
    344deg,
    rgba(40, 40, 55, 1) 0%,
    rgba(16, 16, 18, 1) 50%
  );
  box-shadow: 4px 6px 14px #b1aeae36;
  border-radius: 20px;
  color: #f9f9f9;
  transition: all 0.3s;
  margin: 20px;
}

.card:hover {
  margin-top: -30px;
}

/* first card */
  .card-1 {
    width: 100%;
    height: 254px;
    border-radius: 20px;
    background: transparent;
    display: flex;
    gap: 5px;
    padding: .6em;
    margin: .2em .2em;
  }

  .card-p{
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    transition: all .5s;
    background: transparent;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-sp{
    min-width: 14em;
    padding: .5em;
    text-align: center;
    transform: rotate(-90deg);
    transition: all .5s;
    text-transform: uppercase;
    color: #ff568e;
    letter-spacing: .1em;
  }
  
 
  
  .card-p:hover {
    flex: 4;
  }
  
  .card-p:hover img {
    transform: rotate(0);
  }

  /* spotify card */

.main-3 {
    width: 305px;
    height: 340px;
    background-color: transparent;
    padding: 1em;
    padding-bottom: 1.1em;
    border-radius: 15px;
  }
  
  .loader {
    display: flex;
    flex-direction: row;
    height: 4em;
    padding-left: 1em;
    padding-right: 1em;
    transform: rotate(180deg);
    justify-content: right;
    border-radius: 10px;
    transition: .4s ease-in-out;
  }
  
  .loader:hover {
    cursor: pointer;
    background-color: #414141;
  }
  
  .currentplaying {
    display: flex;
    margin: 1em;
  }
  
  .spotify {
    width: 45px;
    height: 45px;
    margin-right: 0.6em;
  }
  
  .heading {
    color: #EAEAEA;
    font-size: 1.1em;
    font-weight: bold;
    align-self: center;
  }
  
  .loading {
    display: flex;
    margin-top: 1em;
    margin-left: 0.3em;
  }
  
  .load {
    width: 2px;
    height: 33px;
    background-color: limegreen;
    animation: 1s move6 infinite;
    border-radius: 5px;
    margin: 0.1em;
  }
  
  .load:nth-child(1) {
    animation-delay: 0.2s;
  }
  
  .load:nth-child(2) {
    animation-delay: 0.4s;
  }
  
  .load:nth-child(3) {
    animation-delay: 0.6s;
  }
  
  .play {
    position: relative;
    left: 0.35em;
    height: 1.6em;
    width: 1.6em;
    clip-path: polygon(50% 50%, 100% 50%, 75% 6.6%);
    background-color: #414141;
    transform: rotate(-90deg);
    align-self: center;
    margin-top: 0.7em;
    justify-self: center;
  }
  
  .albumcover {
    position: relative;
    margin-right: 1em;
    height: 40px;
    width: 40px;
    background-color: rgb(233, 232, 232);
    align-self: center;
    border-radius: 5px;
  }
  
  .song {
    position: relative;
    transform: rotate(180deg);
    margin-right: 1em;
    color: #EAEAEA;
    align-self: center;
  }
  
  .artist {
    font-size: 0.6em;
    color: #747272;
  }

  @media (max-width: 768px) {
    .grid {
      justify-content: center;
    }
  }
  
  @keyframes move6 {    
    0% {
      height: 0.2em;
    }
  
    25% {
      height: 0.7em;
    }
  
    50% {
      height: 1.5em;
    }
  
    100% {
      height: 0.2em;
    }
    
  }
  
</style>