<script>
  // @ts-nocheck
  import style from './app.module.scss'

  import Navigate from './lib/Navigate.svelte';
  import InfoCompany from './lib/InfoCompany/InfoCompany.svelte';
  import Top from './lib/Top/Top.svelte';
  import Sell from './lib/Sell/Sell.svelte';
  import Lk from './lib/Lk/Lk.svelte';
  import Kick from './lib/Kick/Kick.svelte';
  import JoinCompany from './lib/JoinCompany/JoinCompany.svelte';
  import CreatesCompany from './lib/CreatesCompany/CreatesCompany.svelte';

  import config from './config.json';

  const headerData = config.Header_txt[0];
  const navigateData = config.Navigate;
  const info = config.Activity;
  const statistics = config.Statistics;
  const cargos = config.Cargo;
  const taxis = config.Taxi;
  const top = config.Top;
  const lk = config.Lk;
  const CreateCompany = config.CreateCompany;
  const joinCompany = config.JoinCompany;

  let activeIndex = 0;
  let previousIndex = null;
  let selectedCompany = null;

  let create = true;

  function handleItemClick(index) {
    previousIndex = activeIndex;
    activeIndex = index;
  }

  function handleCancel(){
    activeIndex = 0;
  }

  function openKick(company) {
    selectedCompany = company;
  }

  function closeKick() {
    selectedCompany = null;
  }

  let create_btn = false;
  let join_btn = false;
  let main_create = true;

  function handleCompanyClick(args){
    if(args === "join"){
      main_create = false;
      join_btn = true;
      create_btn = false;
    }else{
      main_create = false;
      join_btn = false;
      create_btn = true;
    }
  }
</script>

{#if !create}
<main class={style.MainSection}>
  <section class={style.Navigate}>
    <div class={style.Header}>
      <h2>ООО <span>“{headerData.name}”</span></h2>
      <p class={style.Header_p}>{headerData.description}</p>
    </div>
  
    <Navigate navigateData={navigateData} on:click={handleItemClick} bind:activeIndex={activeIndex} />
  </section>
  {#if activeIndex === 0}
    <InfoCompany info={info} statistics={statistics} cargos={cargos} taxis={taxis} />
  {:else if activeIndex === 1}
    <Top top={top} />
  {:else if activeIndex === 2}
    <Sell onCancel={handleCancel} />
  {:else}
    <Lk lk={lk} />
  {/if}
</main>
<Kick />
{:else}
  {#if main_create}
    <main class={style.createCompany}>
      <h1>Создание <span>Предприятия</span></h1>
      <div class={style.create_cards}>
        {#each CreateCompany as index, activeIndex}
          <button on:click={() => (activeIndex === 0 ? handleCompanyClick('join') : handleCompanyClick('create'))} class={style.create_card}>
            <img src={index.src} alt="">
            <h2>{index.head}</h2>
            <p>{index.text}</p>
          </button>
        {/each}
      </div>
    </main>
  {:else if join_btn}
    <JoinCompany joinCompany={joinCompany} />
  {:else if create_btn}
    <CreatesCompany />
  {/if}
{/if}