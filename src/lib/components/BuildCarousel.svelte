<script>
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  import { Navigation, Pagination } from 'swiper/modules';

  export let builds = [
    {
      title: 'Build 1',
      description: 'Description of build 1',
      image: '/path/to/image1.jpg'
    },
    // Add more builds here
  ];
</script>

<div class="carousel-container">
  <Swiper
    modules={[Navigation, Pagination]}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
  >
    {#each builds as build}
      <SwiperSlide>
        <div class="build-slide">
          <img src={build.image} alt={build.title} />
          <h3>{build.title}</h3>
          <p>{build.description}</p>
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>
</div>

<style>
  .carousel-container {
    width: 100%;
    max-width: 800px;
    margin: 2rem auto;
  }

  .build-slide {
    padding: 2rem;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
</style> 