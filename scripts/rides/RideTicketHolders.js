const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("click", customEvent => {
        if (customEvent.target.id === "rideTicket") {
            console.log(customEvent.target.id)
            contentTarget.innerHTML += `<div class="person rider" > </div>`
        }
    })
}

