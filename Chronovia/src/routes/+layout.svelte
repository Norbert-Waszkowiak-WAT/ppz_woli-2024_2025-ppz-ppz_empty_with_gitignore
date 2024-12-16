<script lang=ts>
    import { slide } from 'svelte/transition';
    import Bar from '$lib/bar/Bar.svelte';
    import Icon from '$lib/Icon.svelte';
    import Toaster from '$lib/Toaster.svelte';

 

    let bar_visibility = true;
</script>

<main>
    <div class="barContainer">
        {#if bar_visibility === true}
        <div class="bar" transition:slide="{{axis: "x"}}"><Bar/></div>
        {/if}
        <button class="barSwitch" onclick={() => bar_visibility = !bar_visibility}>
            {#if bar_visibility === true}
                <Icon icon="caret-back-outline"/>
            {:else}
                <Icon icon="caret-forward-outline" />
            {/if}
        </button>
    </div>
    <div class="slot"><slot/></div>
</main>

<Toaster />

<style>
    .barContainer {
        display: flex;
        align-items: center; /* Center the button vertically with the bar */
        position: relative;
    }
    .barSwitch {
        /* Optional styles for the button */
        position: absolute;
        background-color: #444;
        color: #D4D4D4;
        border: none;
        padding: 10px;
        margin: 10px;
        cursor: pointer;
        align-self:flex-start;

        border-radius: 10px;
    }

    main {
        display: flex;
        flex-direction: row;
        height: 100vh; /* Take full viewport height */
    }
    .bar {
        padding-right: 10px;
        height: 100%; /* Full height for the bar container */
    }
    .slot {
        flex: 1; /* Take remaining space */
        align-self: center;
    }
    :global(body) {
        background-color: #222222;
        color: #D4D4D4;

        margin: 0;
        height: 100vh; /* Ensure body takes the full height of the viewport */
    }
    :global(html) {
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        height: 100vh; /* Ensure html takes the full height of the viewport */
    }
</style>