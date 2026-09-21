const serS= document.getElementById("services-l");
const rommS = document.getElementById("rooms");
const costDisplay = document.getElementById("estimatedCost");

    function calculateCost() {
        const price = parseFloat(serS?.selectedOptions[0]?.dataset.price || 0);
        const rooms = parseInt(rommS?.value, 10) || 0;
        costDisplay.textContent = `$${(price * rooms).toFixed(2)}`;
    }

    serS?.addEventListener("change", calculateCost);
    rommS?.addEventListener("input", calculateCost);
    document.getElementById("calculateBtn")?.addEventListener("click", calculateCost);
