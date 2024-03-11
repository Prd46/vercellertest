<!-- src/routes/teams/+page.svelte -->
<script lang="js">
    import Filter from "../Filter.svelte" //Gets the filter element
    import {onMount} from 'svelte';
    import {slugify} from '$lib/utils';
 //Gets the data?
    // import { writable } from "svelte/store";
    // import { setContext } from 'svelte';
    // import { getContext } from 'svelte';
    export let data; //GET THE DATA FROM PAGE.SERVER.JS
    // setContext("categorySelection", "all");
    // On mount, check data



    onMount(() => {
        console.log(data); // CHECK THE DATA WHEN THE PAGE LOADS
});


  </script>
  
  <h1>Items</h1>
  <p>Select a team for more details.</p>
  <Filter />
<div class="cardContainer">
    <!-- CYCLE THROUGH EACH TAT -->
    {#each data.items as { id, image, name, price}} 
            <a href="/items/{slugify(name)}">
                <div class="card">
                    <div class="image"><img src="/images/{image}" alt="Placeholder Image"></div>
                    <div class="caption">
                        <p>{name}</p> 
                        <p>{price}</p> 
                        </div>
                    </div>
                </a>
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