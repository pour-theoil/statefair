const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("click", customEvent => {
        if (customEvent.target.id === "sideshowTicket") {
            console.log(customEvent.target.id)
            contentTarget.innerHTML += `<div class="person gawker" > </div>`
        }
    })
}