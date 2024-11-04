<div class="container">
    <a href="/">Back to testing panel</a>
    <br/>
    <slot/>
</div>

<style>
    .container {
        display: flex; /* Use flexbox for layout */
        flex-direction: column; /* Stack items vertically */
        justify-content: center; /* Center items vertically */
        align-items: center; /* Center items horizontally */
        width: 80vi; /* Full viewport width */
        height: 80vh; /* Full viewport height */
        background-color: #303030; /* Light background color */
        text-align: center; /* Center text alignment */
    }

    a {
        margin-bottom: 20px; /* Space between the link and the slot content */
        color: gray; /* Link color */
        text-decoration: none; /* Remove underline from link */
        font-weight: bold; /* Bold text for the link */
        align-self: left;
    }

    a:hover {
        text-decoration: underline; /* Underline on hover */
    }

    /* Optional: Style for the slot content */
    ::slotted(*) {
        border: 2px solid #444444; /* Border around the slot area */
        border-radius: 10px; /* Rounded corners */
        padding: 20px; /* Padding inside the slot area */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        max-width: 400px; /* Maximum width for the slot area */
        width: 100%; /* Full width of the container */
        align-self: center;
    }
</style>