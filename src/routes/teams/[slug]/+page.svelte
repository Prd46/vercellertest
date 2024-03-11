<!-- src/routes/[slug]/+page.svelte -->
<script lang="js">
    /**
     * @typedef {Object} Team
     * @property {string} image - The name of the team.
     * @property {string} name - The name of the team.
     * @property {string} price - The city of the team.
     */
  
    /**
     * @typedef {Object} Data
     * @property {Team} team - The team data.
     */
  
    /** @type {Data} */
    export let data;
  
    const { image, name, price } = data.team;
  </script>
  

  <h1>{name} Team Data</h1>
  <dl>
    <dt>Image</dt>
    <dd>{image}</dd>
    <dt>Price</dt>
    <dd>{price}</dd>
  </dl>