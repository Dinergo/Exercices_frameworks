<script>

export default {
    props : {
        valeur : String,
        displayed : Boolean
    }
}
</script>


<template>

<span v-if="displayed"> {{valeur}}</span>


</template>