<script>
    import AuthOption from "$lib/AdvancedOption.svelte";
</script>

<div class="container">
    <AuthOption
        icon="/i/log-in.svg"
        href='/auth/login'
        heading="Log in"
        content="to your account"
        color="#444444"
        make_white="true"
        width="200px"  />
    <AuthOption
        icon="/i/person-add.svg"
        href='/auth/register'
        heading='Register'
        content='a new account'
        color="#444444"  
        make_white="true"
        width="200px"/>
</div>

<style>
    .container {
        display: flex; /* Use flexbox for layout */
        justify-content: center; /* Center items horizontally */
        align-items: center; /* Center items vertically */
        gap: 20px; /* Space between AuthOption components */
        padding: 20px; /* Padding around the container */
        background-color: #494949; /* Light background color */
        border-radius: 10px; /* Rounded corners */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    }

    /* Optional: Add responsive design */
    @media (max-width: 600px) {
        .container {
            flex-direction: column; /* Stack items vertically on small screens */
            gap: 10px; /* Reduce gap on smaller screens */
        }
    }
</style>