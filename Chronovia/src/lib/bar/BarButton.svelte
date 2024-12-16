<script>
    import Icon from '$lib/Icon.svelte';

    export let text = "Default page";
    export let link = '/';
    export let icon = "accessibility-outline";
</script>

<a href={link}>
    <div class="text">{text}</div>
    <div class="icon">
        <Icon icon={icon} />
    </div>
</a>
 
<style>
    a {
        text-decoration: none;
        background-color: #2F2F2F;

        border: 0;
        border-radius: 10px;

        box-shadow: 0 5px #222;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-bottom: 20px;
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;

        transition: 0.1s ease;
    }

    a:hover {
        filter: invert(5%);
    }

    a:active {
        background-color: #444444;
        box-shadow: 0 0px #666;
        transform: translateY(5px);
    }

    .text {
        color: #D4D4D4;

        font-size: 16px;
        white-space: nowrap; /* Prevent text from wrapping to the next line */
        overflow: hidden;    /* Hide overflow content */
        text-overflow: ellipsis; /* Add ellipsis when content is too large */
        max-width: 200px;    /* Set the maximum width */

        margin-right: 10px;
    }
</style>