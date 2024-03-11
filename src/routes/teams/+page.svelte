<!-- src/routes/teams/+page.svelte -->
<script lang="js">
    import Filter from "../Filter.svelte" //Gets the filter element
    export let data; //Gets the data?
    import { writable } from "svelte/store";
    import { setContext } from 'svelte';
    import { getContext } from 'svelte';
    setContext("categorySelection", "all");

  </script>
  
  <h1>Teams</h1>
  <p>Select a team for more details.</p>
  <Filter />
    <div class="cardContainer">
{#each data.teams as { image, name, price, category, slug }} 
<!-- get all the items from the data list and write out the details as variables to use. -->
<!-- {#if getContext("categorySelection") == {category} || getContext("categorySelection") == "all"} -->
    <a href="/teams/{slug}">
    
    <!-- {#each tempData as { image, name, price}} -->
    <!-- <a href="/itemPage"> -->
            <div class="card">
                <!-- How do I put a prop in for the image name to complete the image source if I have to import images? -->
                <div class="image"><img src="/images/{image}.jpeg" alt="Placeholder Image"></div>
                <div class="caption">
                    <p>{name}</p>
                    <p>{price}</p>
                    </div>
                </div>
            </a>
  <!-- {/if} -->
        {/each}
    
    </div>
    <style>
    .card {
    width: 30rem;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 10px;
    background-color: #f0f0f0;
}

.image {
    width: 50%;
}

.image img {
    max-width: 100%;
    border-radius: 8px;
}

.caption {
    width: 50%;
}
p{
    color: black;
}
a{
    width: 40rem;
    height: 15rem;
}
.cardContainer{
    width: 100%;
    display: flex;
}
        </style>