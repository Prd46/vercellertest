<script>
    export let data;
    $: {
        console.log(data);
    }
</script>
Cart
<ul>
    {#if data.items}
    {#each data.items as {name}}
      <li>{name}</li>
    {/each}
    {/if}
  </ul>