<script>
    import BarButton from '$lib/bar/BarButton.svelte'
    import BarAccount from '$lib/bar/BarAccount.svelte'
    import { isLoggedIn } from '$lib/account/account'
</script>

<main>
    <div class="top">
        <h4>Apps</h4>
        <div class="buttons">
            <BarButton/>
            {#if $isLoggedIn === true}
            <BarButton text="Calendar" link="/Calendar" icon="calendar"/>
            <BarButton text="Tasks" link="/Tasks" icon="checkbox-outline"/>
            <BarButton text="Habit Tracking" link="/Habits" icon="analytics-outline"/>
            <BarButton text="Notes" link="/Notes" icon="document-text-outline"/>
            {/if}
        </div>
    </div>
    <div class="down">
        <BarAccount/>
    </div>
</main>

<style>
    main {
        background-color: #333333;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;

        height: 100%;
    }
    .top,
    .buttons,
    .down {
        margin: 10px;
    }

    .top {
        margin-top: 0px;
        margin-left: 10px;
        text-align: center;
    }
</style>