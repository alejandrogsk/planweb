import React from 'react'
import useForm from '../hooks/useForm';
import useCheckbox from '../hooks/useChecks';
//Necesito el placeholder de cada input
import TextareaAutosize from 'react-textarea-autosize'
import Layout from '../components/global/Layout';
import Head from 'next/head';




const Contact = () => {

  const [ exceptions, setExceptions ] = React.useState({
    loading: false,
    message: null
  });
  const { loading, message} = exceptions; 

  //For CHeckbox
  const [ services, handleChecks ] = useCheckbox();
  //For checkbox

  const [ formValues, handleImputChange ] = useForm({
    userName:"",
    userLastName: "",
    userEmail: "",
    userPhone: "",
    userMessage: "",
  });

 

  const { userName, userLastName, userEmail, userPhone, userMessage } = formValues;

  const handeSubmit = async(e) => {
    e.preventDefault()
    setExceptions({...exceptions, loading: true})
    const data = JSON.stringify({...formValues, services: services});

    console.log(data)
    const req = await fetch("/api/sendForm", {
      method: "POST",
      headers:{'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'},
      body: data
    });
    const respuesta = await req.json();
    console.log(respuesta)
    setExceptions({...exceptions, message: respuesta.message})
  }


  

  return (
    <div>
      <Head>
        <title>Agencia en crespo entre ríos.</title>
        <meta name="description" content="Agencia de desarrollo web en crespo entre rios." />
        
        </Head>
        <Layout>

<section className="contact">
      <div className="contact__content">
        <h1>Estamos encantados de conocerte<span className="point-orange">.</span></h1>
        <p>Complatá el formulario y nos pondremos en contacto a la brevedad. Si es que ya tenes una idea de como queres tu proyecto, podes adjuntar un archivo con los detalles.</p>
      </div>
    
        <form onSubmit={handeSubmit} className="contact__form">
          <div className="contact__form-input userName">
            <input 
              type="text" 
              onChange={handleImputChange} 
              value={userName} 
              name="userName" 
              id="userName" 
              required
              placeholder="Nombre"
            />
               
          </div>

          <div className="contact__form-input">
            <input 
              type="text" 
              name="userLastName" 
              id="userLastName" 
              placeholder="Apellido" 
              required 
              onChange={handleImputChange} 
              value={userLastName} 
            />
                   
          </div>

          <div className="contact__form-input">
            <input
              type="text"
              name="userEmail"
              id="userEmail" 
              placeholder="Email" 
              required
              onChange={handleImputChange} 
              value={userEmail} 
            />       
          </div>

          <div className="contact__form-input">
            <input 
            type="text" 
            name="userPhone" 
            id="userPhone" 
            placeholder="Teléfono" 
            required
            onChange={handleImputChange} 
            value={userPhone} 
            />   
          </div>

          <div className="contact__form-box">
            <span>¿Que servicio necesitas?</span>

            <div className="contact__form-box--list"> 
            <div>
              <input type="checkbox" value="Disenio" name="checkDesign" id="checkDesign" onChange={handleChecks} />
              <label htmlFor="checkDesign">Diseño</label>  
            </div> 

            <div>
              <input type="checkbox" value="website" name="checkWeb" id="checkWeb" onChange={handleChecks} />
              <label htmlFor="checkWeb">Sitio Web</label>  
            </div> 

            <div>
              <input type="checkbox" value="ecommerce" name="checkEcommerce" id="checkEcommerce" onChange={handleChecks} />
              <label htmlFor="checkEcommerce">Ecommerce</label>  
            </div> 
 
            <div>
              <input type="checkbox" value="marketing" name="checkMarketing" id="checkMarketing" onChange={handleChecks} />
              <label htmlFor="checkMarketing">Marketing</label>  
            </div>    
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

          {
            message && <p>{message}</p>
          }

          <button type="submit" disabled={ loading } >{loading ? 'cargando...' : 'Enviar'}</button>
        </form> 
    
    </section>
        </Layout>
    </div>
    
  )
}

export default Contact