<script>
// @ts-nocheck

    import style from './Lk.module.scss'
    import Chart from '../InfoCompany/Chart/Chart.svelte';

    export let lk = {};

    let spisok = true;
    let chs = false;
    function handleClick(args) {
        if(args == "go"){
            spisok = false;
            chs = true;
        }else{
            spisok = true;
            chs = false;
        }
    }
</script>

<section class={`${style.Lk} ${style.ScrollContent}`}>
    <section class={style.statistics}>
        <h3 class={style.header}>Личная статистика в <span>компании</span></h3>
        <section class={style.AddChart}>
            <div class={style.cards}>
                <div class={style.card}>
                    <div class={style.cards_text}>
                        {#each lk.Statistics as index}
                            <p>{index.txt}</p>
                        {/each}
                    </div>
                    <div class={style.cards_info}>
                        {#each lk.Statistics as index, activeIndex}
                            {#if activeIndex === 1 || activeIndex === 3}
                                <p>{index.info} $</p>
                            {:else if activeIndex === 2}
                                <p>{index.info} заказа</p>
                            {:else}
                                <p>{index.info}</p>
                            {/if}
                        {/each}
                    </div>
                </div>
            </div>
            <section class={style.chart}>
                <Chart data={[
                    { label: "25.02", info: "16 лвл", value: 2 },
                    { label: "25.02", info: "15 лвл", value: 4 },
                    { label: "", info: "14 лвл", value: 6 },
                    { label: "25.02", info: "13 лвл", value: 8 }
                ]}/>
            </section>
        </section>
    </section>
    <section class={style.persons}>
        <div class={style.text_btn}>
            <h3 class={style.header}>Участники <span>компании</span></h3>
            {#if spisok}
                <button class={style.go_btn} on:click={handleClick("go")}><img src="/spisok.svg" alt="">Черный список</button>
            {:else if chs}
                <button class={style.back_btn} on:click={handleClick("back")}>Назад</button>
            {/if}
        </div>
        {#if spisok}
            <div class={style.top_header}>
                <p>Место в топе</p>
                <p>Ник</p>
                <p>Кол-во заказов за день</p>
                <p>Доход за неделю</p>
            </div>
            <div class={style.top_cards}>
                {#each lk.Top as index}
                    <div class={style.top_card}>
                        <p>#{index.place}</p>
                        <p>{index.company}</p>
                        <p>{index.persons} заказов за день</p>
                        <p>+ {index.income} $</p>
                        <img src="/Menu_Alt_04.svg" alt="">
                    </div>
                {/each}
            </div>
        {:else if chs}
            <div class={`${style.top_header} ${style.top_head}`}>
                <p>Ник</p>
                <p>Действие</p>
            </div>
            <div class={style.top_cards}>
                {#each lk.Top as index}
                    <div class={`${style.top_card} ${style.top_card2}`}>
                        <p>{index.company}</p>
                        <p>Убрать человека из ЧС</p>
                        <img src="/Menu_Alt_04.svg" alt="">
                    </div>
                {/each}
            </div>
        {/if}
    </section>
</section>