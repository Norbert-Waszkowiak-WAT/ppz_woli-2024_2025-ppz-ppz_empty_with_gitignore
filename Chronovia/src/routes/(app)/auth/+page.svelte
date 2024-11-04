<script>
    import AuthOption from "$lib/AdvancedOption.svelte";
</script>

<div class="container">
    <AuthOption
        href='/auth/login'
        heading="Log in"
        content="to your account"
        color="#444444"
        width="200px"  />
    <AuthOption
        icon="/i/person-add.svg"
        href='/auth/register'
        heading='Register'
        content='a new account'
        color="#444444"  
        width="200px"/>
</div>