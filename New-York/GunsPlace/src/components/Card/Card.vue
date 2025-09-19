<template>
    <div class="info_guns">
        <img src="/gun.png" alt="">
        <div class="info_guns__info">
            <div class="discription">{{ currentCardDescription }}</div>
            <div class="price"><img src="/usd.svg" alt="">{{ formatPrice(currentCardPrice) }}</div>
            <div class="status">{{ currentCardStatus }}</div>
        </div>
    </div>

    <div class="carousel">
        <div class="stripe"></div>
        <div v-for="(card, index) in visibleCards" :key="card.id" class="card" :style="getCardStyle(index)" :class="{'center-card': card.id === cards[currentIndex].id}" @click="centerCard(card.id)">
            <p class="card__name" :class="{'cards': card.id !== cards[currentIndex].id}">{{ card.name }}</p>
            <p class="card__price" :class="{'cards': card.id !== cards[currentIndex].id}" v-if="card.description">{{ card.description }}</p>
        </div>
    </div>
    <div class="arrow"><Arrow width="26.32" height="26.32" color="#F922FD" /></div>

    <div class="bottom">
        <div class="bottom__arrow" ><Arrow width="26.32" height="26.32" color="#1CFF60" /></div>
        <div class="bottom__info">
            <div class="bottom__info__btn">
                <p class="head btn_p">TOTAL OPTIONS</p>
                <p class="descript btn_p">23</p>
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
                    { id: 1, name: 'AK47', price: 20000, description: 'stock 23', status: 'normal' },
                    { id: 2, name: 'M24', price: 22222, description: 'stock 23', status: 'normal' },
                    { id: 3, name: 'AK47', price: 46467, description: 'stock 23', status: 'normal' },
                    { id: 4, name: 'AK47', price: 353455, description: 'stock 23', status: 'normal' },
                    { id: 5, name: 'AK47', price: 32141, description: 'stock 23', status: 'normal' },
                    { id: 6, name: 'M39', price: 18567, description: 'stock 23', status: 'normal' },
                    { id: 7, name: 'AK47', price: 43216, description: 'stock 23', status: 'normal' },
                    { id: 8, name: 'AK47', price: 89532, description: 'stock 23', status: 'normal' },
                    { id: 9, name: 'AK47', price: 57833, description: 'stock 23', status: 'normal' },
                ],
                currentIndex: 4,  // Начальная карточка в центре
                visibleCount: 9,   // Количество карточек, которые видны на экране
                currentCardPrice: '',
                currentCardDescription: '',
                currentCardStatus: ''
            };
        },
        mounted() {
            this.updateCardInfo(this.currentIndex);
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
                const angleStep = 15.5;
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

                this.updateCardInfo(this.currentIndex);
            },
            formatPrice(price) {
                return price.toLocaleString('de-DE');
            },
            updateCardInfo(index) {
                const selectedCard = this.cards[index];
                this.currentCardPrice = selectedCard.price;
                this.currentCardDescription = selectedCard.description;
                this.currentCardStatus = selectedCard.status;
            }
        }
    };
</script>

<style lang="scss" src="@/assets/scss/card.scss" scoped/>
