<script>
	import { page } from '$app/stores';
	import {goto} from '$app/navigation'
    // import Img from '../lib/images/github.svg';
</script>
<!-- Make header prop -->

<header>
	<div class="header_buttonBox">
            <button on:click={() => goto('/')}><h3 class="footer_pageLink">Home</h3></button>
            <button on:click={() => goto('/cart')}><h3 class="footer_pageLink">Cart</h3></button>
            <button on:click={() => goto('/checkout')}><h3 class="footer_pageLink">Checkout</h3></button>
            <button on:click={() => goto('/purchases')}><h3 class="footer_pageLink">Purchases</h3></button>
	</div>
</header>

<style>

    .header_icon{
        width: var(--smallImg);
        height: var(--smallImg);
        padding: var(--smallBuffer);
        display: flex;
        flex-direction: column;
        align-items: center;
        filter: opacity(40%);
        transition: var(--tsn);
    }
    .header_iconCaption{
        filter: opacity(0%);
        position: absolute;
        top: 4.7rem;
        transition: var(--tsn);
    }
    .header_icon:hover{
        filter: opacity(100%);
        transition: var(--tsn);
    }
    
    .header_icon:hover .header_iconCaption{
        filter: opacity(100%);
        top: 5.2rem;
    }
    
    .header_buttonBox{
        display: flex;
        width: 100%;
    }
    
    .header_buttonsRight{
        display: flex;
    }
    
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
    