import React from "react"
import './ticket.css'
import logo from './assets/images/logo-mark.svg'

function TicketPreview({ ticketData }) {
    // Créer une URL pour l'image de l'avatar si elle existe
    const avatarUrl = ticketData?.avatar ? URL.createObjectURL(ticketData.avatar) : null;

    return (
        <div className="ticket-preview-container">
            <div className="ticket-preview-header">
                <div className="ticket-title">
                    <div>
                        <img src={logo} alt="mark" />
                    </div>
                    <div>
                        <h1>Coding Conf</h1>
                    </div>
                </div>
            </div>
            
            <div className="ticket-preview-content">
                <div className="congrats-message">
                    <h1>
                        Congrats, <span className="highlight">{ticketData?.fullName || 'User'}</span>!
                    </h1>
                    <p className="ticket-ready">Your ticket is ready.</p>
                    <p className="email-message">
                        We've emailed your ticket to <span className="highlight">{ticketData?.email || 'email@example.com'}</span> 
                         and will send updates in the run up to the event.
                    </p>
                </div>

                <div className="ticket-card">
                    <div className="ticket-main">
                        <div className="ticket-logo-section">
                            <img src={logo} alt="Coding Conf" />
                            <span>Coding Conf</span>
                        </div>
                        <div className="ticket-date-location">
                            Jan 31, 2025 / Austin, TX
                        </div>
                        <div className="ticket-user-info">
                            {avatarUrl && (
                                <img src={avatarUrl} alt="Avatar" className="ticket-avatar" />
                            )}
                            <div className="ticket-user-details">
                                <h2>{ticketData?.fullName || 'User Name'}</h2>
                                <div className="ticket-github">
                                    <span>@{ticketData?.github || 'username'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-stub">
                        <div className="ticket-number">#01609</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketPreview;

