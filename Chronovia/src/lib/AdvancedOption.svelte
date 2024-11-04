<script>
    export let icon = '';
    export let heading = '';
    export let content = '';
    export let href = '/';
    export let color = '#444444';
    export let width = '200px';
    export let make_white = '';
</script>

<a class="container" href={href} style="width: {width}; background-color: {color};">
    {#if icon && make_white == 'true'}
        <div class="icon">
            <img src="{icon}" 
                alt="Icon"
                style="filter: invert(50%) sepia(100%) saturate(0%) hue-rotate(180deg);" />
        </div>
    {:else}
        <div class="icon">
            <img src="{icon}" 
                alt="Icon" />
        </div>
    {/if}
    <div class="text-content">
        <div class="title"><h3>{heading}</h3></div>
        <div class="content">{content}</div>
    </div>
</a>

<style>
    .container {
        display: flex; /* Use flexbox for layout */
        align-items: center; /* Center items vertically */
        justify-content: center; /* Center items horizontally */
        border: 2px solid #444444; /* Border around the container */
        border-radius: 10px; /* Rounded corners */
        padding: 20px; /* Padding inside the container */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        min-height: 100px; /* Minimum height for the container */
        text-decoration: none; /* Remove underline from the link */
        color: inherit; /* Inherit color for text */
    }

    .container:hover {
        background-color: #f0f0f0; /* Change background on hover */
    }

    .icon {
        margin-right: 15px; /* Space between icon and text */
        display: flex; /* Use flexbox for icon */
        align-items: center; /* Center icon vertically */
    }

    .icon img {
        max-width: 40px; /* Set a maximum width for the icon */
        max-height: 40px; /* Set a maximum height for the icon */
        width: auto; /* Maintain aspect ratio */
        height: auto; /* Maintain aspect ratio */
    }

    .text-content {
        display: flex; /* Use flexbox for text content */
        flex-direction: column; /* Stack title and content vertically */
        justify-content: center; /* Center text vertically */
    }

    .title {
        font-weight: bold; /* Bold text for the title */
        margin: 0; /* Remove default margin */
    }

    .content {
        color: gray; /* Color for the content text */
        margin-top: 5px; /* Space between title and content */
    }

    /* Make text unselectable */
    .container {
        user-select: none; /* Prevent text selection */
    }
</style>
