<script>
    import Cargo from "./Cargo/Cargo.svelte";
    import Taxi from "./Taxi/Taxi.svelte";
    import style from './InfoCompany.module.scss';
    import Chart from "./Chart/Chart.svelte";

    export let info = [];
    export let statistics = [];
    export let cargos = {};
    export let taxis = {};

    let cargo = false;
    let taxi = false;
    let company = true;

    function handleClick(args){
        if (args == "cargo"){
            cargo = true;
            company = false;
            taxi = false;
        }else{
            cargo = false;
            company = false;
            taxi = true;
        }
    }
</script>

{#if company}
    <main>
        <section class={style.activity}>
            <h3 class={style.name}>Сфера деятельности <span>компании</span></h3>
            <div class={style.cards}>
                {#each info as index, activeIndex}
                    <div class={style.card}>
                        <div class={style.center}>
                            <img src={index.src} alt="">
                            <div class={style.text}>
                                <h3>{index.header}</h3>
                                <p>{index.txt}</p>
                            </div>
                        </div>
                        {#if activeIndex === 0}
                            <button on:click={() => handleClick("cargo")}>Информация и настройка</button>
                        {:else}
                            <button on:click={() => handleClick("taxi")}>Информация и настройка</button>
                        {/if}
                    </div>
                {/each}
            </div>
        </section>
        <section class={style.Stat}>
            <section class={style.statistics}>
                <h3 class={style.name}>Статистика <span>компании</span></h3>
                <div class={style.cards}>
                    <div class={`${style.card} ${style.card_stat}`}>
                        <div class={style.stat_txt}>
                            {#each statistics as index}
                                <p>{index.txt}</p>
                            {/each}
                        </div>
                        <div class={`${style.stat_txt} ${style.stat_info}`}>
                            {#each statistics as index, activeIndex}
                                {#if activeIndex === 0 || activeIndex === 1}
                                    <p>{index.info} $</p>
                                {:else if activeIndex === 2}
                                    <p>{index.info} / 8</p>
                                {:else}
                                    <p>{index.info}</p>
                                {/if}
                            {/each}
                        </div>
                    </div>
                </div>
            </section>
            <section class={style.chart}>
                <Chart data={[
                    { label: "25.02", info: "от 2$", value: 2 },
                    { label: "25.02", info: "от 2$", value: 4 },
                    { label: "", info: "от 2$", value: 6 },
                    { label: "25.02", info: "от 2$", value: 8 }
                ]}/>
            </section>
        </section>
    </main>
{:else if cargo}
    <Cargo statistics={cargos.Statistics} car={cargos.Car} />
{:else if taxi}
    <Taxi nameCar={taxis.NameCar} statistics={taxis.Statistics} car={taxis.Car} />
{/if}