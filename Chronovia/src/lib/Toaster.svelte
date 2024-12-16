<script lang="ts" context="module">
    export type ToastData = {
      title: string
      description: string
      color: string
    }
   
    const {
      elements: { content, title, description, close },
      helpers,
      states: { toasts },
      actions: { portal }
    } = createToaster<ToastData>()
   
    export const addToast = helpers.addToast
</script>

<script lang="ts">
    import { createToaster, melt } from '@melt-ui/svelte'

    import { quartInOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    
    import Icon from '$lib/Icon.svelte';
</script>

<div class="toast-container" use:portal>
    {#each $toasts as { id, data } (id)}
    <div 
    use:melt={$content(id)}
    animate:flip={{ duration: 500 }}
    in:fly={{ duration: 400, x: '100%', easing: quartInOut }}
    out:fly={{ duration: 400, x: '100%', easing: quartInOut }}
    class="toast">
        <div class="toast-content">
            <div>
                <h3 use:melt={$title(id)} class="toast-title">
                    <span class="toast-indicator" style="border-color: {data.color};"></span>

                    {data.title}
                </h3>
            <div use:melt={$description(id)}>
                {data.description}
            </div>
        </div>
        <button use:melt={$close(id)} class="toast-close">
            <Icon icon="close-outline"/>
        </button>
        </div>
    </div>
    {/each}
</div>

<style>
    .toast-container {
        position: fixed;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        right: 0;
        top: 0;
        bottom: 0;
        top: auto;

        z-index: 50;
        
        margin: 1rem;
        gap: 0.5rem;
    }

    .toast {
        border-radius: 0.5rem;
        background-color: #3b3b3b;
        color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        max-width: calc(100vw - 2rem);
    }

    .toast-content {
        position: relative;
        display: flex;

        align-items: center;
        justify-content: space-between;
        
        width: 24rem;
        

        padding: 1.25rem;
    }

    .toast-title {
        display: flex;
        align-items: center;
        font-weight: 600;
        margin: 0;
    }

    .toast-indicator {
        display: inline-block;
        width: 0;
        height: 0;

        margin-right: 0.5rem;

        border: 4px solid;
        border-radius: 50%;
    }

    .toast-close {
        position: absolute;
        right: 1rem; /* 16px */
        top: 1rem; /* 16px */
        display: grid;
        width: 1.5rem; /* 24px */
        height: 1.5rem; /* 24px */
        justify-items: center;
        place-content: center;
        border-radius: 50%; /* Fully rounded */
        
        border: 0;
        box-shadow: 0 5px #222;

        background-color: #2F2F2F;
        transition: 0.1s ease;
    }
    
    .toast-close:hover {
        filter: invert(5%);
    }

    .toast-close:active {
        background-color: #444444;
        box-shadow: 0 0px #666;
        transform: translateY(5px);
    }

    .icon {
        align-self: center;
    }
</style>