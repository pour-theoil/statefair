const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


const rideEvent = new CustomEvent("rideTicketPurchased",{
    detail: {
        selectedPurchase: "Rides"
    }
})

eventHub.dispatchEvent(rideEvent)

eventHub.addEventListener("rideTicketPurchased", customEvent => {
    const userChoiceElement = document.querySelector(".people rides")
    userChoiceElement.innerHTML = customEvent.detail.selectedPurchase
})


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="gameTicket">Game Ticket</button>
        </div>
    `
}


