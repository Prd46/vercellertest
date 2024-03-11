<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation'
</script>

<footer>
	<!-- About, Contact, Projects -->
	<div class="footer_links">
		<button on:click={() => goto('/')}><h3 class="footer_pageLink">Home</h3></button>
		<button on:click={() => goto('/cart')}><h3 class="footer_pageLink">Cart</h3></button>
		<button on:click={() => goto('/checkout')}><h3 class="footer_pageLink">Checkout</h3></button>
		<button on:click={() => goto('/purchases')}><h3 class="footer_pageLink">Purchases</h3></button>
	</div>
</footer>


    <style>
		h3{
			color: white;
		}
        	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
		.footer_links{
		display: flex;
		justify-content: space-evenly;
		width: 40rem;
		margin: 0 auto;
	}
	.footer_pageLink{
		/* background: var(--headerTextColor); */
		font-size: 1.5rem;
		padding: var(--smallBuffer) 1.5rem;
		border-radius: var(--brsmall);
		transition: var(--tsn);
	}
	.footer_pageLink:hover{
		background: var(--headerTextColor);
		color: var(--bg);
		transition: var(--tsn);
	}
    </style>