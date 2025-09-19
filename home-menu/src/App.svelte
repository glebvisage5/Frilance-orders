<script>
  import './css/setting.css';
  import config from './config.json';

  function withAlpha(varName, alpha) {
    const hex = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    const [r, g, b] = hex.match(/\w\w/g).map(v => parseInt(v, 16));
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  function formatPrice(price){
    return price.toLocaleString('de-DE')
  }

  const processedHomes = config.home.map((home, index) => ({
    ...home,
    id: `${home.number}-${index}`
  }));

  const sortedHome = processedHomes.sort((a, b) => a.number - b.number)
  let activeHomeId = sortedHome[0].id

  function setActiveHome(homeId) {
    activeHomeId = homeId;
  }

  const call = true;
  const noexit = false;
  let info = false;

  function callButton(){
    info = true
  }

  function exitCallButton(){
    info = false
  }
</script>

<main class="menus">
  <section class="header">
    <section class="left">
      <img src="/home.svg" alt="home">
      <div>
        <p class="HomeNumber">Дом №{config.numberHome}</p>
        <p class="HomeEntrance" style="color: {withAlpha('--color-main', 0.4)}">Подъезд #{config.entranceHome}</p>
      </div>
    </section>

    <section class="right">
      <div class="balance">
        <p class="text" style="color: {withAlpha('--color-main', .4)}">Ваш баланс:</p>
        <div class="CashCard">
          <p>{formatPrice(config.cash)} $</p>
          <div class="vector" style="background: {withAlpha('--color-main', .4)}"></div>
          <p class="card">{formatPrice(config.card)} <img src="/card.svg" alt="card"></p>
        </div>
      </div>
      <img class="close" src="/Vector.svg" alt="close">
    </section>
  </section>

  <section class="mainMenu">
    <section class="stairwell">
      <p class="header_text">Лестничная клетка</p>
      
      <div class="home_grid">
        {#each sortedHome as home}
          <button class="home_card" class:active={home.id === activeHomeId} on:click={() => setActiveHome(home.id)}><p>{home.number}</p></button>
        {/each}
      </div>

      <img src="/building.svg" alt="building">
    </section>

    <section class="home_details">
      {#each sortedHome as home}
        {#if home.id === activeHomeId}
          <img class="photo" src={home.src} alt="">

          <div class="room">
            <p class="room_header">Квартира №{home.number}</p>
            
            <div class="class">
              <p style="color: {withAlpha('--color-main', .4)}">Класс:</p>
              <p style="font-weight: 800">{home.class}</p>
            </div>
          </div>

          <div class="room_info">
            <div class="class">
              <p style="color: {withAlpha('--color-main', .4)}">Хранилище:</p>
              <p style="font-weight: 800">{home.storage} кг</p>
            </div>

            <div class="class">
              <p style="color: {withAlpha('--color-main', .4)}">Максимальный доход с аренды в неделю:</p>
              <p style="font-weight: 800">{formatPrice(home.income)} $</p>
            </div>

            <div class="helicopter">
              <img src="/helicopter.svg" alt="">
              <p>Доступ к вертолету на время проживания</p>
            </div>
          </div>

          <div class="costButton">
            <div class="cost">
              <p style="color: {withAlpha('--color-main', .4)}">Стоимость:</p>
              <p style="font-weight: 800">{formatPrice(home.cost)} $</p>
            </div>

            {#if call}
              <button class="call" on:click={callButton}><img class="call_img" src="/call.svg" alt="call">Позвонить</button>
            {:else if noexit}
              <button class="call"><img class="go_img" src="/go.svg" alt="go">Войти в квартиру</button>
            {:else}
              <button class="call"><img class="go_img exit_img" src="/go.svg" alt="exit">Выйти из квартиры</button>
            {/if}
          </div>
        {/if}
      {/each}
    </section>
  </section>
</main>

{#if info}
  <div class="information">
    <img on:click={exitCallButton} src="/Vector.svg" alt="">
    <div class="info">
      <h1>Информация</h1>
      <p style="color: {withAlpha('--color-main', .4)}">Хозяина данного жилого помещения на данный момент нет дома.</p>
      <button on:click={exitCallButton}>Принять</button>
    </div>
  </div>
{/if}

<style lang="sass">
  @use './sass/app.sass'
</style>
