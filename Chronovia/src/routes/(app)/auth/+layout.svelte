<div class="container">
    <slot />
</div>

<style>
    .container {
        display: flex; /* Use flexbox for centering */
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        width: 50vw; /* Full viewport width */
        height: 50vh; /* Full viewport height */
        background-color: #f0f0f0; /* Light background color */
        
    }

    /* Slot area styling */
    ::slotted(*) {
        background-color: #ffffff; /* Background color for the slot content */
        border: 2px solid #444444; /* Border around the slot area */
        border-radius: 10px; /* Rounded corners */
        padding: 20px; /* Padding inside the slot area */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        max-width: 400px; /* Maximum width for the slot area */
        width: 100%; /* Full width of the container */
        text-align: center; /* Center text inside the slot */
    }
</style>
