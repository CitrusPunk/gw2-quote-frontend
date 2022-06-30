<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Quote</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="quote.text"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="quote.date"
          name="description"
        />
      </div>
      <button @click="saveQuote" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newQuote">Add</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import QuoteDataService from "@/services/QuoteDataService";
import Quote from "@/types/Quote";
import ResponseData from "@/types/ResponseData";
export default defineComponent({
  name: "add-quote",
  data() {
    return {
      quote: {
        id: "",
        text: "",
        date: "",
        authorId: "",
      } as Quote,
      submitted: false,
    };
  },
  methods: {
    saveQuote() {
      let data = {
        id: this.quote.id,
        text: this.quote.text,
        date: this.quote.date,
      };
      QuoteDataService.create(data)
        .then((response: ResponseData) => {
          this.quote.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    newQuote() {
      this.submitted = false;
      this.quote = {} as Quote;
    },
  },
});
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
