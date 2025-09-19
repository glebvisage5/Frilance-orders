<script>
  import style from './Navigate.module.scss'

  export let navigateData = [];
  export let onClick;
  export let activeIndex = 0;

  function handleClick(index) {
    activeIndex = index;
    if (onClick) onClick(index);
  }
</script>

<section class={style.navigate}>
  <div>
    {#each navigateData as item, index}
      <button
        class={`${style.button} ${activeIndex === index && index !== 2 ? style.active : ''}`}
        on:click={() => handleClick(index)}
      >
        <img src={item.src} alt="" />
        <p>{item.txt}</p>
      </button>
    {/each}
  </div>
</section>