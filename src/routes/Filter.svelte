<script>
    import { setContext } from "svelte";
</script>

<section>
    <button on:click={() => setContext('categorySelection', "7-String")}>
        7-String
    </button>
    <button on:click={() => setContext('categorySelection', "8-String")}>
        8-String
    </button>
    <button on:click={() => setContext('categorySelection', "Amp")}>
        Amp
    </button>
    <button on:click={() => setContext('categorySelection', "Pre-Amp")}>
        Pre-Amp
    </button>
    <button on:click={() => setContext('categorySelection', "Cable")}>
        Cable
    </button>
    <button on:click={() => setContext('categorySelection', "Strings")}>
        Strings
    </button>
</section>


<style>
    section{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center
    }
    button{
        padding: 0 .25rem;
        border-radius: 5rem;
        width: 8rem;
        background-color: aliceblue;
        margin: .5rem;
        text-align: center;
        padding: 1rem;
        font-size: 1.25rem;
        font-family: var(--ptext);
    }
</style>