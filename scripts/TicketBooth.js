const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


const rideEvent = new CustomEvent("rideTicketPurchased",{
    detail: {
        selectedPurchase: ".rides"
    }
})


eventHub.dispatchEvent(rideEvent)



eventHub.addEventListener("rideTicketPurchased", customEvent => {
    const userChoiceElement = document.querySelector(".rides")
    userChoiceElement.innerHTML = customEvent.detail.selectedPurchase
})



export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button> 
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}


