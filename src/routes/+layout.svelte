<script>
	import Header from './Header.svelte';
	import './styles.css';
	import Footer from './Footer.svelte';
	import { fade } from 'svelte/transition';

// ⚠️ Store these values in a .env file
// Set the values up in your hosting dashboard for production deployments

</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	<!-- <Footer /> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}


</style>
