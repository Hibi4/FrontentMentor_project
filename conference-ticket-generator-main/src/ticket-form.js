import React, { useRef, useState } from "react"
import './ticket.css'
import logo from './assets/images/logo-mark.svg'
import upload from './assets/images/icon-upload.svg'
import info from './assets/images/icon-info.svg'

function TicketForm({ onGenerateTicket }) {
    /**
     * This function returns the validated email.
     * @param {*} email to validate
     * @returns true is the email is valid
     */
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase);
    }
    
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadError, setUploadError] = useState('');
    const [nameError, setnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [githubError, setGithubError] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        github: ''
    });

    // Handler for when the input loses focus (onBlur)

    const handleBlur = () => {
        if(formData.email && !validateEmail(formData.email)) {
            setEmailError('Please enter a valid email address.');
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }

        if (file.size > 500 * 1024) {
            setUploadError('Please upload a file smaller than 500 KB.');
            setSelectedFile(null);
            return;
        }

        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            setUploadError('File does not support. You must use .png or .jpeg.');
            setSelectedFile(null);
            return;
        }

        setSelectedFile(file);
        setUploadError('');
    };

    /**
     * Update the input's value 
     * @param {*} e entered value 
     */

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // validate input field
        if(!formData.fullName) {
            setnameError('Please enter a name');
            return;
        }
        
        if(!formData.email) {
            setEmailError('Please enter a valid email');
            return;
        }

        if(!formData.github) {
            setGithubError('Please enter a github name');
            return;
        }

        // pass the data to the parent component
        onGenerateTicket({
            ...formData,
            avatar: selectedFile
        });
    };

    return (
        <div className="ticket-form-container">
            
            <div className="ticket-container">
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
                {/* form body */}
                <div className="upload-ticket">
                    <div className="avatar">
                        <h3>Upload Avatar</h3>
                        <div className="upload-tag" onClick={() => fileInputRef.current?.click()}>
                            <div className="avatar">
                                <img src={upload} alt="icon-upload" />
                            </div>
                            <p>Drag & drop or click to upload</p>
                            <input ref={fileInputRef}
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                className="file-input"
                                onChange={handleFileChange} />
                        </div>
                        <div className="file-feedback">
                            {selectedFile && <p className="file-name">{selectedFile.name}</p>}
                            {uploadError && <p className="file-error">{uploadError}</p>}
                        </div>
                        <div className="warning-tag">
                            <div>
                                <img src={info} alt="icon-info" />
                            </div>
                            <div>
                                <p id="warning-upload">Upload your photo (JPG or PNG, max-size: 500KB).</p>
                            </div>
                        </div>
                    </div>
                    <div className="fullName">
                        <label htmlFor="fullName">Full Name</label> <br></br>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="file-feedback">
                        {nameError && <p className="input-error"> {nameError} </p>}
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email adress</label> <br></br>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="email"
                            value={formData.email}
                            onBlur={handleBlur} // Validate on blur for better UX
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="file-feedback">
                        {emailError && <p className="input-error"> {emailError} </p>}
                    </div>
                    <div className="github">
                        <label htmlFor="github">Github Username</label> <br></br>
                        <input
                            type="text"
                            name="github"
                            id="github"
                            className="github"
                            value={formData.github}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="file-feedback">
                        {githubError && <p className="input-error"> {githubError} </p>}
                    </div>
                    <div className="generateBtn">
                        <button onClick={handleSubmit}>Generate My ticket</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default TicketForm;
