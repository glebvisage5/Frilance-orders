<script>
    import style from './JoinCompany.module.scss';

    export let joinCompany = {};

    let arr_company = true;
    let it_company = false;
    let activeIndexs = null;

    function handleItemClick(activeIndex){
        it_company = true;
        arr_company = false;
        activeIndexs = activeIndex;
    }
    function handleClick(){
        it_company = false;
        arr_company = true;
    }
</script>

<section class={`${style.join} ${it_company ? style.joinActive : ''}`}>
    <div class={style.content}>
        {#if arr_company}
            <div class={style.ScrollContent}>
                <div class={style.header}>
                    <h2>Список <span>компаний</span></h2>
                    <p>Хотите стать частью чего-то большего? Выберите компанию, которая соответствует вашим амбициям, и присоединяйтесь к её рядам. Каждая компания предлагает уникальные возможности, роли и бонусы для своих сотрудников</p>
                </div>
                <div class={style.head}>
                    <p>Компания</p>
                    <p>Кол-во участников</p>
                    <p>Суточный доход компании</p>
                    <p>Средний чек</p>
                </div>
                <div class={style.cards}>
                    {#each joinCompany.Main as index, activeIndex}
                        <button on:click={() => (handleItemClick(activeIndex))} class={style.card}>
                            <div class={style.text}>
                                <p>{index.company}</p>
                                <p>{index.persons} участника</p>
                                <p>{index.income} $</p>
                                {#if activeIndex === 0 || activeIndex % 3 === 0}
                                    <p>{index.reseipt} $</p>
                                {:else if activeIndex === 1 || activeIndex % 4 === 0}
                                    <p style="color: #E2C102; background: rgba(226, 193, 2, 0.15)">{index.reseipt} $</p>
                                {:else}
                                    <p style="color: #E20206; background: rgba(226, 2, 2, 0.15)">{index.reseipt} $</p>
                                {/if}
                            </div>
                        </button>
                    {/each}
                </div>
            </div>
        {:else}
            <div class={`${style.content_company} ${style.ScrollContent}`}>
                <div class={style.header_company}>
                    <div class={style.header_arr}>
                        <h1>ООО <span>{joinCompany.Main[activeIndexs].company}</span></h1>
                        <p>Компания {joinCompany.Main[activeIndexs].company} предоставляет много разных решений для всех сфер бизнеса и деятельности</p>
                        <p>Лидер: {joinCompany.Main[activeIndexs].king}</p>
                    </div>
                    <img src={joinCompany.Main[activeIndexs].src} alt="">
                    <div class={style.company_info}>
                        <div class={style.left_info}>
                            <p>Кол-во участников</p>
                            <p>Суточный доход компании</p>
                            <p>Средний чек за заказ</p>
                            <p>Уровень предприятия</p>
                        </div>
                        <div class={style.right_info}>
                            <p>{joinCompany.Main[activeIndexs].persons} участника</p>
                            <p>+ {joinCompany.Main[activeIndexs].income} $</p>
                            <p>{joinCompany.Main[activeIndexs].reseipt} $</p>
                            <p>{joinCompany.Main[activeIndexs].level} уровень</p>
                        </div>
                    </div>
                </div>
                <div class={style.head_card}>
                    <p>Ник</p>
                    <p>Кол-во заказов за день</p>
                    <p>Заработок за день</p>
                </div>
                <div class={style.card_company}>
                    {#each joinCompany.Personal[activeIndexs] as index}
                        <div class={style.card_comp_div}>
                            <div class={style.text}>
                                <p>{index.name}</p>
                                <p>{index.day} заказов за день</p>
                                <p>{index.money} $</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            <div class={style.buttons}>
                <button on:click={() => (handleClick())} class={`${style.back_btn} ${style.btn}`}><img src="/exit.svg" alt="">Вернуться</button>
                <button class={`${style.go_btn} ${style.btn}`}><img src="/Log_Out.svg" alt="">Вступить</button>
            </div>
        {/if}
    </div>
</section>