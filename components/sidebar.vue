<template lang="pug">
    .sidebar
        .flex.center.middle
            h2 30
            small.ml-1 appointments today
        .flex.center.middle.text-center
            p <a href="#">Melissa</a>, <a href="#">Joan</a>, <a href="#">Zach</a> are in today.
        h3 Memos
        ul.list-unstyled
            li.mt-2 
                span We are running low on fucking shampoo. Please order more if you can!
                .text-right
                    span <a href="#">comments </a>
                    span.badge.badge-pill.badge-primary 5
            li.mt-2
                span We have off on Thanksgiving, don't make an appointment for that day please.
                .text-right
                    span <a href="#">comments </a>
                    span.badge.badge-pill.badge-success 2
</template>

<script lang="ts">
export default {
  
}
</script>
