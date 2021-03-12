const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("click", customEvent => {
        if (customEvent.target.id === "foodTicket") {
            console.log("clicked the food button")
            contentTarget.innerHTML += `<div class="person eater" > </div>`
        }   
        
    })
}