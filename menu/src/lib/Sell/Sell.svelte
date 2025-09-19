<script>
    import style from './Sell.module.scss';
    export let onCancel;
</script>

<section class={style.backgrounds}>
    <section class={style.sell}>
        <div class={style.question}>Вы уверены что хотите <span>продать компанию</span>?</div>
        <div class={style.question2}>При продаже компании государству, компанию нельзя будет и все участники компании останутся без работы, вы уверены?</div>
        <div class={style.btn}>
            <button class={`${style.back} ${style.btns}`} on:click={onCancel}><img src="/exit.svg" alt="">Отмена</button>
            <button class={`${style.sell_btn} ${style.btns}`}><img src="/sell.svg" alt="">Продать</button>
        </div>
    </section>
</section>