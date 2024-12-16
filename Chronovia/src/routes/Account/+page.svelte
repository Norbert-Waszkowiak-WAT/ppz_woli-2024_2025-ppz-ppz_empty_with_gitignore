<script>
    import AuthOption from "$lib/account/AuthPalette/AuthOption.svelte";
    import { isLoggedIn, username } from "$lib/account/account";
    import { logout } from "$lib/account/logout";
    import { goto } from "$app/navigation";
    
    function removeAccountRedirect() {
        goto('/Account/removeAccount');
    }
</script>

<main>
    {#if $isLoggedIn === true }
        <div class="loggedin">
            <h2>Hello, { $username } to Chronovia!</h2>
            <p>What do you want to do with your account?</p>
            <br/><br/><br/>
            <button class="button" on:click={logout}>Log out</button>
            <button class="button" on:click={removeAccountRedirect}>Remove Account</button>
        </div>
    {:else}
    <div class="palette">
        <div class="ao">
            <AuthOption
            icon="/src/lib/i/log-in.svg"
            href='/Account/Login'
            heading="Log in"
            content="to your account"
            color="#444444"
            make_white="true"
            width="200px"  />
        </div>
        <div class="ao">
            <AuthOption
            icon="/src/lib/i/person-add.svg"
            href='/Account/Register'
            heading='Register'
            content='a new account'
            color="#444444"  
            make_white="true"
            width="200px"/>
        </div>
    </div>
    {/if}
</main>

<style>
    .loggedin {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
    }

    main {
        text-align: center;
        display:flex;
        justify-content: center;
    }

    .palette {
        display: flex; /* Use flexbox for layout */
        justify-content: center; /* Center items horizontally */
        align-items: center; /* Center items vertically */

        gap: 20px; /* Space between AuthOption components */
        padding: 20px; /* Padding around the container */
        border-radius: 10px; /* Rounded corners */
        background-color: #494949; /* Light background color */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    
        flex-wrap: wrap;

        text-align: center;

        max-width: fit-content;
    }

    .button {
        text-decoration: none;
        background-color: #6200ea;

        border: 0;
        border-radius: 10px;

        box-shadow: 0 5px #332f38;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-bottom: 20px;
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;

        transition: 0.1s ease;
    }
  
    .button:hover {
        cursor: pointer;
        filter: invert(5%); /* Darker shade on hover */
    }

    .button:active {
        background-color: #3700b3;
        box-shadow: 0 0px #1c053b;
        transform: translateY(5px);
    }

</style>