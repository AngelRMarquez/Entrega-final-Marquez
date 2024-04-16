import React from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function ContactComponent() {
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        Swal.fire({
          title: "Mensaje enviado!",
          text: `Gracias ${data.nombre} por comunicarte con nosotros.`,
          icon: "success",
          confirmButtonText: "Volver",
          color: "blue",
        });
      };
    return (
        <>
            <div className='cart-container'>
                <h1 className='h2'>Contacto</h1>
                <p className='item-name h2'>Colocate en contacto con nosotros</p>

                <div className='formulario'>
                    <form  onSubmit={handleSubmit(enviar)}>
                        <label className='item-name'>
                        Nombre:
                        <input
                            type="text"
                            placeholder="Introduce tu nombre"
                            required
                            {...register("nombre")}
                        />
                        </label>
                        <label className='item-name'  >
                        Correo: 
                        <input
                            type="email"
                            placeholder="Introduce tu correo"
                            required
                            {...register("correo")}
                        />
                        </label>
                        <label className='item-name'>
                        Mensaje: 
                        <textarea
                            type="text"
                            placeholder="Déjanos tu mensaje"
                            required
                            {...register("mensaje")}
                        />
                        </label>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            
        </>
    );
}
