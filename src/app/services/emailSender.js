import emailjs from "emailjs-com";
import dotenv from 'dotenv';
dotenv.config();

 /* funcion que toma la info a enviar  y utiliza la api de emailjs */
  const sendEmail = (name,email,password) => {
    
    const data = {
        name,
        email,
        password
    };
  
    emailjs.send(
      process.env.SERVICE_ID,     
      process.env.TEMPLATE_ID,   
        data,
      process.env.PUBLIC_KEY       
    ).then((result) => {
        console.log(result.text);
        alert("Email enviado exitosamente!");
      }, (error) => {
        console.log(error.text);
        alert("Hubo un error al enviar el email.");
      });
  };


  export {sendEmail}