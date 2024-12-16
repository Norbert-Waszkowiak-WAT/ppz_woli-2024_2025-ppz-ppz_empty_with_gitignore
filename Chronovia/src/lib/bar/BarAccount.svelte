<script lang=ts>
    import Icon from "$lib/Icon.svelte";
    import { username, userId } from '$lib/account/account';
</script>

<a href="/Account">
    <div class="info">
        <h4>{ $username }</h4>
        <p class="id">uID: { $userId }</p>    
    </div>
    <div class="icon">
        <Icon icon="person-outline" height="45px" />
    </div>
</a>

<style>
    a {
        text-decoration: none;
        background-color: #2F2F2F;

        border: 0;
        border-radius: 10px;

        box-shadow: 0 5px #222;
        
        padding: 0px;
        padding-left: 10px;
        padding-right: 10px;

        display: flex;
        flex-direction: row;

        justify-content: space-between;
        align-items: center;
    }

    a:hover {
        filter: invert(5%);
    }

    a:active {
        background-color: #444444;
        box-shadow: 0 0px #666;
        transform: translateY(5px);
    }

    h4,
    p {
        color: #D4D4D4;
        white-space: nowrap; /* Prevent text from wrapping to the next line */
        overflow: hidden;    /* Hide overflow content */
        text-overflow: ellipsis; /* Add ellipsis when content is too large */
        margin-right: 10px;  /* Add some space between info and icon */
        max-width: 150px;        /* Set a fixed width for the ellipsis to work */
    }

    .icon {
        width: 50px;
        height: 50px;
        padding: 7px;
        background-color: #222222;
        border-radius: 50px;

        text-align: center;
    }
</style>