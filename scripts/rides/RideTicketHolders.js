const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("click", customEvent => {
        console.log("clicked the ride button")
        contentTarget.innerHTML = `<div class="person"> </div>`
    })
}

