<script>
    import style from './Cargo.module.scss'

    export let statistics = [];
    export let car = [];
</script>

<section class={`${style.cargo} ${style.ScrollContent}`}>
    <section class={style.statistics}>
        <h3 class={style.name}>Статистика <span>компании</span></h3>
        <div class={style.card}>
            <div class={style.stat_txt}>
                {#each statistics as index}
                    <p>{index.txt}</p>
                {/each}
            </div>
            <div class={`${style.stat_txt} ${style.stat_info}`}>
                {#each statistics as index, activeIndex}
                    {#if activeIndex === 0 || activeIndex === 2}
                        <p>{index.info} $</p>
                    {:else}
                        <p>{index.info} заказа</p>
                    {/if}
                {/each}
            </div>
        </div>
    </section>
    <section class={style.car}>
        <h3 class={style.name}>Выбор <span>авто</span></h3>
        <div class={style.cars}>
            {#each car as index}
                <div class={style.card_car}>
                    <img class={style.car_img} src={index.src} alt="">
                    <div class={style.header}>
                        <h3>Тариф {index.rate}</h3>
                        <button><img src="" alt=""></button>
                    </div>
                    <div class={style.car_text}>
                        <div class={style.car_txt}>
                            {#each index.arr as index1}
                                <p>{index1.txt}</p>
                            {/each}
                        </div>
                        <div class={style.car_info}>
                            {#each index.arr as index1, activeIndex}
                                {#if activeIndex === 2}
                                    <p>{index1.info} минуты</p>
                                {:else if activeIndex === 3}
                                    <span>{index1.info} $</span>
                                {:else}
                                    <p>{index1.info}</p>
                                {/if}
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</section>