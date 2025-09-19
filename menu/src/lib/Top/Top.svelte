<script>
    import style from './Top.module.scss';

    export let top = [];
</script>

<section class={`${style.top} ${style.ScrollContent}`}>
    <section class={style.txt}>
        <h3>Рейтинг <span>компании</span></h3>
        <p>Узнайте, какие компании доминируют в городе, и следите за их успехами! Рейтинг отражает самых влиятельных игроков, чья мощь, доходы и репутация задают тон в мире бизнеса.</p>
    </section>
    <section class={style.table}>
        <div class={style.header}>
            <p>Место</p>
            <p>Компания</p>
            <p>Кол-во участников</p>
            <p>Доход за неделю</p>
        </div>
        <div class={style.table_card}>
            {#each top as index, activeIndex}
                <div class={`
                    ${style.card} 
                    ${activeIndex === 0 ? style.activeCard1 : ''}
                    ${activeIndex === 1 ? style.activeCard2 : ''}
                    ${activeIndex === 2 ? style.activeCard3 : ''}
                `}>
                    <p>#{index.place}</p>
                    <p>{index.company}</p>
                    <p>{index.persons} участников</p>
                    <p>+ {index.income} $</p>
                </div>
            {/each}
        </div>
    </section>
</section>