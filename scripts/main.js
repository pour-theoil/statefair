// Import and invoke the ticket booth component function
import { TicketBooth } from "./TicketBooth.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { GameTicketHolders } from "./games/GameTicketHolders.js";
import { FoodTicketHolders } from './food/FoodTicketHolder.js'
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js";
 
TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideshowTicketHolders();