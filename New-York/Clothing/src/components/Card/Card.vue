<template>
    <div class="carousel">
        <div class="stripe"></div>
        <div v-for="(card, index) in visibleCards" :key="card.id" class="card" :style="getCardStyle(index)" :class="{'center-card': card.id === cards[currentIndex].id}" @click="centerCard(card.id)">
            <div class="card__head">{{ card.id }}/{{ cards.length }}</div>
            <p class="card__name" :class="{'cards': card.id !== cards[currentIndex].id}">{{ card.name }}</p>
            <p class="card__price" :class="{'cards': card.id !== cards[currentIndex].id}" v-if="card.price">
                <img :src="card.id !== cards[currentIndex].id ? '/usd_black.svg' : '/usd.svg'" alt="USD">{{ formatPrice(card.price) }}
            </p>
        </div>
    </div>
    <div class="arrow" @click="clickTextures()"><Arrow width="26.32" height="26.32" color="#F922FD" /></div>

    <div class="bottom">
        <div class="bottom__arrow" ><Arrow width="26.32" height="26.32" color="#1CFF60" /></div>
        <div class="bottom__info">
            <div class="bottom__info__btn">
                <p class="head btn_p">TOTAL OPTIONS</p>
                <p class="descript btn_p">23</p>
            </div>
            <div class="bottom__info__btn">
                <p class="head_r btn_p">TOTAL TEXTURES</p>
                <p class="descript_r btn_p">7</p>
            </div>
        </div>
        <div class="bottom__arrow"><Arrow width="26.32" height="26.32" color="#1CFF60" rotate="180"/></div>
    </div>

    <div class="ellipse">
        <div class="div"></div>
        <div class="div"></div>
        <div class="div"></div>
        <div class="divs"></div>
        <div class="div"></div>
        <div class="div"></div>
        <div class="div"></div>
    </div>
</template>

<script>
    import Arrow from '../icons/Arrow.vue'

    export default {
        data() {
            return {
                cards: [
                    { id: 1, name: 'id 20', price: 20000, texture: [10, 2, 4, 6, 3] },
                    { id: 2, name: 'id 21', price: 22222, texture: [1, 2, 3, 4, 5] },
                    { id: 3, name: 'id 22', price: 46467, texture: [10, 20, 9] },
                    { id: 4, name: 'id 23', price: 353455, texture: [22, 18, 32, 5, 1] },
                    { id: 5, name: 'id 24', price: 32141, texture: [0, 9, 8, 7, 6, 5] },
                    { id: 6, name: 'id 25', price: 18567, texture: [11, 7] },
                    { id: 7, name: 'id 26', price: 43216, texture: [10, 2, 4, 6, 3] },
                    { id: 8, name: 'id 27', price: 89532, texture: [10, 2, 4, 6, 3] },
                    { id: 9, name: 'id 28', price: 57833, texture: [10, 2, 4, 6, 3] },
                ],
                currentIndex: 4,  // Начальная карточка в центре
                visibleCount: 9,   // Количество карточек, которые видны на экране
                currentTextureIndex: 0,
            };
        },
        components: {
            Arrow
        },
        computed: {
            visibleCards() {
                const totalCards = this.cards.length;
                const startIndex = (this.currentIndex - Math.floor(this.visibleCount / 2) + totalCards) % totalCards;

                let cards = [];
                for (let i = 0; i < this.visibleCount; i++) {
                    const cardIndex = (startIndex + i) % totalCards;
                    cards.push(this.cards[cardIndex]);
                }

                return cards;
            }
        },
        methods: {
            getCardStyle(index) {
                const angleStep = 10;
                const angle = (index - Math.floor(this.visibleCount / 2)) * angleStep;
                const radius = 857; 

                return {
                    transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                    transition: 'transform 0.5s ease',
                };
            },
            centerCard(id) {
                const totalCards = this.cards.length;
                const cardIndex = this.cards.findIndex(card => card.id === id);
                this.currentIndex = cardIndex % totalCards;
                this.currentTextureIndex = 0;
                const card = this.cards[this.currentIndex];
                if (card.texture && card.texture.length > 0) {
                    this.$emit('update-texture', card.texture[0]);
                } else {
                    this.$emit('update-texture', null);
                }
            },
            formatPrice(price) {
                return price.toLocaleString('de-DE');
            },
            clickTextures() {
                const card = this.cards[this.currentIndex];
                if (card.texture && card.texture.length > 0) {
                    this.currentTextureIndex = (this.currentTextureIndex + 1) % card.texture.length;
                    this.$emit('update-texture', card.texture[this.currentTextureIndex]);
                }
            },
        }
    };
</script>

<style lang="scss" src="@/assets/scss/card.scss" scoped/>
