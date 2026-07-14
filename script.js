'use strict';

const oneRoomRegularPrice = 120;
const oneRoomDeepPrice = 199;
const oneRoomMoveInOutPrice = 280;
const oneRoomCommercialPrice = 350;

const prices = {
    "residential": oneRoomRegularPrice,
    "deep": oneRoomDeepPrice,   
    "commercial": oneRoomCommercialPrice,
    "move-in-out": oneRoomMoveInOutPrice
};

document.addEventListener("DOMContentLoaded", () => {
    const serviceSelect = document.getElementById("services-l");
    const roomsSelect = document.getElementById("rooms"); 
    const estimatedCostSpan = document.getElementById("estimatedCost");
    const calculateBtn = document.getElementById("calculateBtn"); 

    function calculateCost() {
        const selectedService = serviceSelect.value;
        const roomsCount = parseInt(roomsSelect.value) || 0; 
        if (!selectedService || roomsCount <= 0) {
            estimatedCostSpan.textContent = "$0.00";
            return;
        }
        const pricePerRoom = prices[selectedService];
        if (pricePerRoom === undefined) {
            console.error(`Key "${selectedService}" not found in prices object`);
            estimatedCostSpan.textContent = "$0.00";
            return;
        }
        const totalCost = pricePerRoom * roomsCount;
        estimatedCostSpan.textContent = `$${totalCost.toFixed(2)}`;
    }
    if (calculateBtn) calculateBtn.addEventListener("click", calculateCost);
    if (serviceSelect) serviceSelect.addEventListener("change", calculateCost);
    if (roomsSelect) roomsSelect.addEventListener("change", calculateCost);
});
