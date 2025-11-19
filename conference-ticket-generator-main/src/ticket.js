import React from "react"
import './ticket.css'
import logo from './assets/images/logo-mark.svg'
import upload from './assets/images/icon-upload.svg'

function Ticket() {
    return (
        <>
            <div className="ticket-container">
                {/* <img src={design} alt="design" /> */ }
                <div> 
                    
                </div>
                <div className="ticket-title">
                    <div>
                        <img src={logo} alt="mark" />
                    </div>
                    <div>
                        <h1>Coding Conf</h1>
                    </div>
                </div>
                <div className="ticket-presentation">
                    <h1>Your journey to coding conf 2025 starts here !</h1>
                </div>
                <div className="ticket-score">
                    <h4>Secure your spot at next year's biggest coding conference</h4>
                </div>
                {/* form body */ }
                <div className="upload-ticket">
                    <div className="avatar">
                        <h3>Upload Avatar</h3>
                        <div className="upload-tag">
                            <div className="avatar">
                                <img src={upload} alt="icon-upload"/>
                            </div>
                            <p>Drag & drop or click to upload</p>
                        </div>
                    </div>
                    <div className="fullName">
                        <label for="fullName">Full Name</label> <br></br>
                        <input type="text" name="fullName" className="fullName" />
                    </div>
                    
                    <div className="email">
                        <label for="email">Email adress</label> <br></br>
                        <input type="email" className="email" />
                    </div>
                    <div className="github">
                        <label for="github">Github Username</label> <br></br>
                        <input type="text" className="github" />
                    </div>
                    <div className="generateBtn">
                        <button>Generate My ticket </button>
                    </div>
                    
                </div>
            </div>
            
           
        </>        
        
    )

}

export default Ticket;