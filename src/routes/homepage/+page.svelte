<script>
    import{onMount, beforeUpdate, afterUpdate, onDestroy} from 'svelte';
    let is_visible = true;

    let numbers = [1,2,3,4,5];
    let count = 0;
</script>

{#if is_visible}
<p>This paragraph is visible</p>
{/if}

<button on:click={() => { count++}}>
    Count: {count}
</button>

{#each numbers as number}
<li>{number}</li>
{/each}