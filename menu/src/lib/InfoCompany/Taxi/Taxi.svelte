<script>
    import style from './Taxi.module.scss'

    export let nameCar = [];
    export let statistics = [];
    export let car = [];
</script>

<section class={style.taxi}>
    <section class={style.car_company}>
        <section class={style.car}>
            <h3>Выбор <span>авто</span></h3>
            <p>Подберите идеальный грузовик, который станет вашим верным спутником в дальних рейдах. От мощных фур до маневренных фургонов — каждый найдёт то, что нужно для успеха на дороге.</p>
            <div class={style.car_btn}>
                {#each nameCar as index}
                    <button>{index.name}</button>
                {/each}
            </div>
        </section>
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
    </section>
    <section class={`${style.order} ${style.ScrollContent}`}>
        <h3 class={style.order_h3}>Выбор <span>заказа</span></h3>
        <div class={style.order_cards}>
            {#each car as index}
                <div class={style.order_card}>
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