<template>
  <input
    type="text"
    class="form-control"
    placeholder="Search by Text"
    v-model="text"
  />
  <div class="input-group-append">
    <button
      class="bg-amber-500 hover:bg-amber-700 text-white px-2 py-1 rounded-lg"
      type="button"
      @click="searchTitle"
    >
      Search
    </button>
  </div>
  <div>
    <h4>Quotes List</h4>
    <ul>
      <li
        :class="{ active: index == currentIndex }"
        v-for="(quote, index) in quotes"
        :key="index"
        @click="setActiveQuote(quote, index)"
      >
        {{ quote.text }}
      </li>
    </ul>
    <button
      class="bg-amber-500 hover:bg-amber-700 text-white px-2 py-1 rounded-lg"
      @click="removeAllQuotes"
    >
      Remove All
    </button>
  </div>
  <div class="col-md-6">
    <div v-if="currentQuote.id">
      <h4>Quote</h4>
      <div>
        <label><strong>Title:</strong></label> {{ currentQuote.text }}
      </div>
      <div>
        <label><strong>Description:</strong></label>
        {{ currentQuote.date }}
      </div>
      <div>
        <label><strong>Status:</strong></label>
        {{ currentQuote.authorId ? "Got Author" : "Got none" }}
      </div>
      <router-link
        :to="'/quotes/' + currentQuote.id"
        class="badge badge-warning"
        >Edit</router-link
      >
    </div>
    <div v-else>
      <br />
      <p>Please click on a Quote...</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import QuoteDataService from "@/services/QuoteDataService";
import Quote from "@/types/Quote";
import ResponseData from "@/types/ResponseData";
export default defineComponent({
  name: "quotes-list",
  data() {
    return {
      quotes: [] as Quote[],
      currentQuote: {} as Quote,
      currentIndex: -1,
      text: "",
    };
  },
  methods: {
    retrieveQuotes() {
      QuoteDataService.getAll()
        .then((response: ResponseData) => {
          this.quotes = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveQuotes();
      this.currentQuote = {} as Quote;
      this.currentIndex = -1;
    },
    setActiveQuote(quote: Quote, index = -1) {
      this.currentQuote = quote;
      this.currentIndex = index;
    },
    removeAllQuotes() {
      QuoteDataService.deleteAll()
        .then((response: ResponseData) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    searchTitle() {
      QuoteDataService.findByTitle(this.text)
        .then((response: ResponseData) => {
          this.quotes = response.data;
          this.setActiveQuote({} as Quote);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveQuotes();
  },
});
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
