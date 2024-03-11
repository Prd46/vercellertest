<!-- src/routes/[slug]/+page.svelte -->
<script lang="js">
    /**
     * @typedef {Object} Item
     * @property {string} image - The name of the team.
     * @property {string} name - The name of the team.
     * @property {string} price - The city of the team.
     */
  
    /**
     * @typedef {Object} Data
     * @property {Item} item - The team data.
     */
  
    /** @type {Data} */
    export let data;
    console.log(data); //DATA IS GETTING HERE, but cannot get the information from it.

  </script>
  

  <h1>{data} Team Data</h1>