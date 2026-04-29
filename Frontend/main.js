// You must add this header when using free Ngrok to bypass their warning page!
const response = await fetch(`${import.meta.env.VITE_API_URL}/financial-summary`, {
    headers: {
        "ngrok-skip-browser-warning": "69420" 
    }
});
const data = await response.json();

