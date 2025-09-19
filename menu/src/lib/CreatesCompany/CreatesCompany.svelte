<script>
    import style from './CreatesCompany.module.sass'

    let logo = false;
    let colors = ["#D92F2F", "#FFEB53", "#796AFF", "#5CFF8D", "#090909", "#FFF"];
    let number = Array.from({ length: 10 }, (_, i) => i + 1); // Создаем массив от 1 до 10

    function handleItemClick(args) {
        logo = args === "go";
    }
</script>

{#if logo}
    <section class={style.logo_item}>
        <div class={style.item_cards}>
            {#each number as index}
                <img class={style.card} src="/Rectangle.png" alt="card {index}">
            {/each}
        </div>
    </section>
{/if}

<main class={`${style.create} ${logo ? style.create_logo_active : ''}`}>
    <h1>Создание <span>Предприятия</span></h1>
    <label class={style.label} for="name">Введите название<img src="/Info.svg" alt=""></label>
    <input class={style.input} type="text" placeholder="Введите текст...">
    <label class={style.label} for="person">Введите кол-во участников<img src="/Info.svg" alt=""></label>
    <input class={style.input} type="text" placeholder="Введите текст...">
    <label class={style.label} for="logo">Создайте логотип<img src="/Info.svg" alt=""></label>
    <div class={style.create_logo}>
        {#if !logo}
            <button on:click={() => handleItemClick("go")} class={style.btn_logo}><img src="/search.svg" alt=""></button>
            <div class={style.colors}>
                {#each colors as color}
                    <div class={style.color} style="background-color: {color};"></div>
                {/each}
            </div>
        {:else}
            <button on:click={() => handleItemClick("back")} class={`${style.btn_logo} ${style.btn_logo_open}`}><img src="/search.svg" alt=""></button>
        {/if}
    </div>
    <p class={style.buy}>Стоимость:  <span>3.000.000 $</span> за 10 участников</p>
    <button class={style.create_company}>Создать предприятие</button>
</main>