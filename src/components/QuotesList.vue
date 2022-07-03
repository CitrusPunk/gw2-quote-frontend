<template>
  <input
    type="text"
    class="border rounded-l-lg m-4 mr-0 px-2 py-1"
    placeholder="Search by Text"
    v-model="text"
  />
  <button
    class="bg-amber-500 hover:bg-amber-600 text-white m-4 ml-0 px-2 py-1 rounded-r-lg"
    type="button"
    @click="searchTitle"
  >
    Search
  </button>
  <div class="flex flex-col w-1/2 m-auto text-center">
    <h4 class="font-semibold">Quotes List</h4>
    <ul class="flex flex-col">
      <li
        class="bg-red-700 hover:bg-red-800 text-white my-2 rounded-md shadow-md shadow-red-800 p-2"
        :class="{ active: index == currentIndex }"
        v-for="(quote, index) in quotes"
        :key="index"
        @click="setActiveQuote(quote, index)"
      >
        <div>{{ quote.text }}</div>
        <div class="flex justify-end">
          <div class="bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md">
            Author Name
          </div>
        </div>
      </li>
    </ul>
    <button
      class="bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded-lg"
      @click="removeAllQuotes"
    >
      Remove All
    </button>
  </div>
  <div>
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
