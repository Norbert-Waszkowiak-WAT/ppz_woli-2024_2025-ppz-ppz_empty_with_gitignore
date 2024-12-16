<script>
    export let icon = "accessibility-outline";
    export let white = true; 
    export let height = "20px";
</script>


{#if white === true} 
<img src="/src/lib/i/{icon}.svg" height={height} alt="not found" style="filter: invert(50%) sepia(100%) saturate(0%) hue-rotate(180deg);" />
{:else}
<img src="/src/lib/i/{icon}.svg" height={height} alt="not found" />
{/if}