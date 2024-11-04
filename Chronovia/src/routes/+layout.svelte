<script>
    // You can add any necessary script here
</script>

<div class="container">
    
    <slot />
</div>

<style>
    .container {
        display: flex; /* Use flexbox for layout */
        justify-content: center; /* Center items horizontally */
        align-items: center; /* Center items vertically */
        height: 90vh; /* Full height of the viewport */
        text-align: center; /* Center text alignment */
        font-family: "Outfit", sans-serif;
    }
</style>
