<template>
    <svg :style="{ width: computedWidth, height: computedHeight, transform: rotate ? `rotate(${rotate}deg)` : 'none' }" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5009 6.66585L10.5009 13.3325L17.1676 13.3325C18.0881 13.3325 18.8342 12.5863 18.8342 11.6659L18.8342 8.33252C18.8342 7.41205 18.0881 6.66585 17.1676 6.66585L10.5009 6.66585Z" :fill="color"/>
        <path d="M2.47604 9.31245C2.06359 9.67726 2.06356 10.3208 2.476 10.6857L8.97514 16.4348C9.56678 16.9582 10.4992 16.5381 10.4992 15.7482L10.4992 4.25057C10.4992 3.4607 9.56684 3.04063 8.97518 3.56395L2.47604 9.31245Z" :fill="color"/>
    </svg>
</template>

<script setup>
    import { defineProps, computed } from 'vue'

    function vw(px) {
        return `${(px * 0.052083333333333336)}vw`
    }

    const props = defineProps({
        color: {type: String, default: '#ffffff'},
        width: {type: [String, Number], default: 21},
        height: {type: [String, Number], default: 20},
        rotate: {type: [String, Number], default: null}
    })

    const computedWidth = computed(() => vw(Number(props.width)))
    const computedHeight = computed(() => vw(Number(props.height)))
</script>
