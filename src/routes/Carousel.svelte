<script lang="js">
    import Card from './Card.svelte';
    // export let data;
const tempData = [
    { image: 'HolcombBlueBurst', name: 'PRS SE Mark Holcomb SVN Signature 7-string Electric Guitar - Holcomb Blue Burst', price: '1249.00', description: 'Boasting a pair of revamped Seymour Duncan pickups, the PRS SE Mark Holcomb SVN delivers the crushing high-gain tones, pristine cleans, and effortless playability that modern prog metal players have come to require from their 7-strings. This guitar starts off with the classic PRS tonewood combination of maple-capped mahogany, but the top of the SE Mark Holcomb SVN is upgraded even further with a violin carve and quilted maple veneer that’s sure to capture your audience’s attention. On the opposite end, Mark opted for a maple neck with a PRS Wide Thin neck profile: this slightly skinnier shape has a smooth, fast feel to facilitate all manner of fleet-fingered metal technicality. Finally, this iteration of the PRS SE Mark Holcomb SVN marks the introduction of Seymour Duncan’s Scarlet and Scourge humbucking pickups, specifically voiced to retain extreme clarity and maximize the tonal output of any modeling amplifier.', category: '7-string' },
    { image: 'QX527PB', name: 'Ibanez QX527PB 7-string Electric Guitar - Antique Brown Stain', price: '1249.00', description: "Part of Ibanez's boundary-pushing Quest series, the QX527PB vaunts a headless design built from the ground up to maximize tone, performance, and playing comfort. This 7-string electric guitar's lightweight nyatoh body resonates with rich, woody tones, while its poplar burl top brings eye-grabbing visuals into the fray. Technically minded players will be blown away by the zero-drag feel of the QX527PB's Parallel Wizard neck, and its slanted frets make intricate fretboard maneuvers like tapping, fingerstyle, and slapping feel effortless. This headless guitar's made-to-measure pickups exude amazing levels of articulation and definition that are bolstered by Ibanez's acclaimed dyna-MIX10 switching system. Rock-solid hardware, including a custom string lock and innovative Mono Tune bridge, ensures easy string changes and ultra-reliable, stage-worthy performance. Stainless steel frets round out the QX527PB's generous features. If you've been hunting for the perfect headless electric guitar — or even if you're considering your first headless instrument — the Ibanez QX527PB is guaranteed to unlock unlimited creative possibilities.", category: '7-string' },
    { image: 'HolcombBlueBurst', name: 'PRS SE Mark Holcomb SVN Signature 7-string Electric Guitar - Holcomb Blue Burst', price: '1199.99', description: 'loremirtghsdkfgjsdkfjghsdfsdfgsdfgasdg', category: '7-string' },
    { image: 'QX527PB', name: 'Ibanez QX527PB 7-string Electric Guitar - Antique Brown Stain', price: '1249.00', description: "Part of Ibanez's boundary-pushing Quest series, the QX527PB vaunts a headless design built from the ground up to maximize tone, performance, and playing comfort. This 7-string electric guitar's lightweight nyatoh body resonates with rich, woody tones, while its poplar burl top brings eye-grabbing visuals into the fray. Technically minded players will be blown away by the zero-drag feel of the QX527PB's Parallel Wizard neck, and its slanted frets make intricate fretboard maneuvers like tapping, fingerstyle, and slapping feel effortless. This headless guitar's made-to-measure pickups exude amazing levels of articulation and definition that are bolstered by Ibanez's acclaimed dyna-MIX10 switching system. Rock-solid hardware, including a custom string lock and innovative Mono Tune bridge, ensures easy string changes and ultra-reliable, stage-worthy performance. Stainless steel frets round out the QX527PB's generous features. If you've been hunting for the perfect headless electric guitar — or even if you're considering your first headless instrument — the Ibanez QX527PB is guaranteed to unlock unlimited creative possibilities.", category: '7-string' },
    { image: 'HolcombBlueBurst', name: 'PRS SE Mark Holcomb SVN Signature 7-string Electric Guitar - Holcomb Blue Burst', price: '1249.00', description: 'loremirtghsdkfgjsdkfjghsdfsdfgsdfgasdg', category: '7-string' },
  ];

  import { slugify } from '$lib/utils';
    // Can I load all my images here and pick one out 
</script>

<div>
    <div class="carousel-container">
        <div class="carousel">
<!-- For each row in the database, create a card. Get the image, name, and price. -->
<!-- {#each data.items as { image, name, price, slug }}
    <a href="/itemPage/{slug}"> -->
    
    {#each tempData as { image, name, price}}
    <a href="/itemPage">
            <div class="card">
                <!-- How do I put a prop in for the image name to complete the image source if I have to import images? -->
                <div class="image"><img src="/images/{image}.jpeg" alt="Placeholder Image"></div>
                <div class="caption">
                    <h3>{name}</h3>
                    <p>{price}</p>
                    </div>
                </div>
            </a>
        {/each}
        </div>
        <div class="controls">
            <button class="prev">&lt;</button>
            <button class="next">&gt;</button>
        </div>
    </div>
</div>

<style>
.carousel-container {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
}
.controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1;
}

button{
    cursor: pointer;
    font-size: 24px;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 10px;
    border-radius: 50%;
}

button:hover {
    background-color: rgba(255, 255, 255, 0.9);
}


.card {
    width: 30vw;
    height: 20rem;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 10px;
    background-color: #f0f0f0;
    display: flex;
    color: black;
}
img{
    max-width: 100%;
    border-radius: 8px;
}

.caption {
    width: 50%;
}

</style>