<template>
  <QuotesList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuotesList from "@/components/QuotesList.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    QuotesList,
  },
});
</script>
