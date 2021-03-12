const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("click", customEvent => {
        if (customEvent.target.id === "gameTicket") {
            console.log("clicked the game button")
            contentTarget.innerHTML += `<div class="person player" > </div>`
        }
    })
}
