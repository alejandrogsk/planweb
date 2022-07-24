import React, {useState} from 'react'
import useCheckbox from '../../../hooks/useChecks';
import useForm from '../../../hooks/useForm';
import TextareaAutosize from "react-textarea-autosize";
import { ClipLoader } from 'react-spinners';


const ContactForm = ({form_fields}) => {
    //For loading in submit button, success message and error message
    const [exceptions, setExceptions] = useState({
        loading: false,
        message: null,
        isOk: true,
    });
    const { loading, message, isOk } = exceptions;

    //For Checkbox
    const [services, handleChecks, resetCheck] = useCheckbox();

    //For Inputs
    const [formValues, handleImputChange, resetInputs] = useForm({
        userName: "",
        userLastName: "",
        userEmail: "",
        userPhone: "",
        userCompany:"",
        userLocation: "",
        userMessage: "",
    });

    const { userName, userLastName, userEmail, userPhone, userMessage, userLocation, userCompany } =
        formValues;

    const handeSubmit = async (e) => {
        e.preventDefault();
        setExceptions({ ...exceptions, loading: true });
        const data = JSON.stringify({ ...formValues, services: services });

        const req = await fetch("/api/sendForm", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: data,
        });
        const respuesta = await req.json();

        setExceptions({ ...exceptions, message: respuesta.message });

        if (respuesta.ok === true) {
            resetCheck();
            resetInputs();

            setExceptions({
                ...exceptions,
                message: respuesta.message,
                isOk: true,
            });
        } else
            setExceptions({
                ...exceptions,
                message: respuesta.message,
                isOk: false,
            });
    };


  return (
    <form onSubmit={handeSubmit} className="contact__form">
                        <div className="contact__form-input userName">
                            <input
                            autoComplete="off"
                                type="text"
                                onChange={handleImputChange}
                                value={userName}
                                name="userName"
                                id="userName"
                                required
                                placeholder={`${form_fields.name}`}
                            />
                        </div>

                        <div className="contact__form-input">
                            <input
                            autoComplete="off"
                                type="text"
                                name="userLastName"
                                id="userLastName"
                                placeholder={`${form_fields.lastName}`}
                                required
                                onChange={handleImputChange}
                                value={userLastName}
                            />
                        </div>

                        <div className="contact__form-input">
                            <input
                            autoComplete="off"
                                type="email"
                                name="userEmail"
                                id="userEmail"
                                placeholder={`${form_fields.email}`}
                                required
                                onChange={handleImputChange}
                                value={userEmail}
                            />
                        </div>

                        <div className="contact__form-input">
                            <input
                            autoComplete="off"
                                type="text"
                                name="userPhone"
                                id="userPhone"
                                placeholder={`${form_fields.phone}`}
                                required
                                onChange={handleImputChange}
                                value={userPhone}
                            />
                        </div>

                        <div className="contact__form-input">
                            <input
                            autoComplete="off"
                                type="text"
                                name="userCompany"
                                id="userCompany"
                                placeholder={`${form_fields.company}`}
                                required
                                onChange={handleImputChange}
                                value={userCompany}
                            />
                        </div>

                        <div className="contact__form-input">
                            <input
                            autoComplete="off"
                                type="text"
                                name="userLocation"
                                id="userLocation"
                                placeholder={`${form_fields.location}`}
                                required
                                onChange={handleImputChange}
                                value={userLocation}
                            />
                        </div>

                        <div className="contact__form-box">
                            <span>{form_fields.services.title}</span>

                            <div className="contact__form-box--list">
                                {form_fields.services.options.map(
                                    (service, i) => (
                                        <div key={i}>
                                            <input
                                                type="checkbox"
                                                value={service.placeholder}
                                                name={service.id}
                                                id={service.id}
                                                onChange={handleChecks}
                                            />
                                            <label htmlFor={service.id}>
                                                {service.placeholder}
                                            </label>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* <div className="contact__form-file">
            <input 
              type="file" 
              name="userPDF" 
              id="userPDF" 
              value={} 
              onChange={}
            />
            <label htmlFor="userPDF">Adjuntar archiv <span>(opcional)</span></label>
          </div> */}

                        <div className="contact__form-message">
                            <TextareaAutosize
                                name="userMessage"
                                id="userMessage"
                                placeholder="mensaje"
                                onChange={handleImputChange}
                                value={userMessage}
                            />
                        </div>

                        {message && (
                            <p
                                className={`contact__form-alert ${
                                    isOk ? "success" : "error"
                                }`}
                            >
                                {message}
                            </p>
                        )}

                        <button type="submit" disabled={loading}>
                            {loading
                                ? <ClipLoader size={18} color="#1A1A1A" />
                                : form_fields.btn.title
                                
                                }
                        </button>


                    </form>

  )
}

export default ContactForm