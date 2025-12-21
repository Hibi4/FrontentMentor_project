import React from "react"
import './ticket.css'
import logo_mark from './assets/images/logo-mark.svg'
import github from './assets/images/icon-github.svg'

function TicketPreview({ ticketData }) {
    // Create an URL for avartar's image if it exists
    const avatarUrl = ticketData?.avatar ? URL.createObjectURL(ticketData.avatar) : null;

    return (
        <div className="ticket-preview-container-wrapper">
            <div className="ticket-preview-container">
                <div className="ticket-preview-header">
                    <div className="ticket-title">
                        <div>
                            <img src={logo_mark} alt="mark" />
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
                                <img src={logo_mark} alt="Coding Conf" />
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
                                        <div>
                                            <img src={github} alt="Avatar" className="github-avatar" />
                                        </div>
                                        <div>
                                            <span>@{ticketData?.github || 'username'}</span>
                                        </div>

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
        </div>
    )
}

export default TicketPreview;

