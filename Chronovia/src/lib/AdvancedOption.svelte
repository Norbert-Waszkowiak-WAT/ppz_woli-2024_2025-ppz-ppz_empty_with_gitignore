<script>
    import { goto } from '$app/navigation';

    export let icon = '';
    export let heading = '';
    export let content = '';

    export let href = '/';

    export let color = '#FFFFFF';
    export let width = '100px';
    export let height = '70px';

    function goToHref() {
        goto(href);
    }
</script>

<div on:click={goToHref} class="container" style="background-color: {color}; width: {width}; height: {height};">
    {#if icon != ""}
    <img class="icon" src="{icon}" alt="Doesn't work" />
    {/if}
    
    <div class="title"><h3>{heading}</h3></div>
    <div class="content">
        {content}
    </div>
</div>

<style>
.container {
    display: inline-grid;
    grid-template-columns: auto auto; /* Left column for the item, right column for text */
    grid-template-rows: auto auto; /* Two rows for title and content */
    gap: 0px; /* Optional gap between elements */
    padding: 10px;
    align-items: start;
    border-radius: 10px;
}

.icon {
    grid-row: 1 / span 2; /* Span both rows */
    align-self: center; /* Center vertically */
    height: 50px;
    width: 50px;
}

.title {
    grid-column: 2;
    align-self: start; /* Align title at the top */
    text-align: center;
    font-weight: bold;
}

.content {
    grid-column: 2;
    align-self: end; /* Align content at the bottom */
    text-align: center;
    color: gray;
}
</style>