import React, { useState } from "react"
import TicketForm from './ticket-form.js'
import TicketPreview from './ticket-preview.js'

function Ticket() {
    const [ticketData, setTicketData] = useState(null);
    const [showTicket, setShowTicket] = useState(false);

    const handleGenerateTicket = (data) => {
        setTicketData(data);
        setShowTicket(true);
    };

    return (
        <>
            {!showTicket ? (
                <TicketForm onGenerateTicket={handleGenerateTicket} />
            ) : (
                <TicketPreview ticketData={ticketData} />
            )}
        </>
    )
}

export default Ticket;