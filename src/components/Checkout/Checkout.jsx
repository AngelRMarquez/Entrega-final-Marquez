// Checkout.js

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { sendOrder } from "../../firebase/firebase";
import Swal from "sweetalert2";
import { CartContext } from "../context/CartContext";


export default function Checkout() {
    const { cartList, cantidadCarrito, removeList, totalPrice } = useContext(CartContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm(); 
    const [isProcessing, setProcessing] = useState(false);

    const accesorioPedidos = cartList.map((acces) => ({
        id: acces.id,
        nombre: acces.nombre,
        quantity: acces.quantity,
        precio: acces.precio,
    }));

    const enviar = async (data) => {
        setProcessing(true);
        const date = new Date();
        const pedido = {
            buyer: {
                nombre: data.nombre,
                apellido: data.apellido,
                email: data.email,
                telefono: data.telefono,
            },
            pedido: accesorioPedidos,
            date: date,
            total: totalPrice,
        };

        let tuID = await sendOrder(pedido);

        Swal.fire({
            title: "¡Registro exitoso!",
            text: `Gracias ${data.nombre}. 
            Fecha de Compra: ${date.getDate()}/${date.getMonth() + 1}. 
            Tu número de pedido es: ${tuID}. 
            Nos pondremos en contacto contigo pronto.`,
            icon: "success",
            confirmButtonText: "Volver",
            color: "blue",
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/");
                removeList();
                setProcessing(false);
            }
        });
    };

    return (
        <div className="checkoutContainer">
            <h1>Finalizar compra</h1>
            <div className="summary">
                <h2>Resumen de tu compra:</h2>
                <h4>Productos en carrito: {cantidadCarrito}</h4>
                <h4>Precio final: $ {totalPrice}</h4>
            </div>

            <hr />

            <div className="formContainer">
                <h2>Confirma tus datos para coordinar envío:</h2>
                <form onSubmit={handleSubmit(enviar)}>
                    <div className="inputField">
                        <label className="item-name">
                            Nombre:
                            <input
                                type="text"
                                placeholder="Introduce tu nombre"
                                required
                                {...register("nombre")}
                            />
                        </label>
                    </div>

                    <div className="inputField">
                        <label className="item-name">
                            Apellido:
                            <input
                                type="text"
                                placeholder="Introduce tu apellido"
                                required
                                {...register("apellido")}
                            />
                        </label>
                    </div>

                    <div className="inputField">
                        <label className="item-name">
                            Teléfono:
                            <input
                                type="tel"
                                pattern="[0-9]*"
                                placeholder="Introduce tu teléfono"
                                required
                                {...register("telefono")}
                            />
                        </label>
                    </div>

                    <div className="inputField">
                        <label className="item-name">
                            Correo:
                            <input
                                type="email"
                                placeholder="Introduce tu correo"
                                required
                                {...register("email")}
                            />
                        </label>
                    </div>

                    <div>
                        {isProcessing ? (
                            <button className="submitButton" disabled>
                                Procesando...
                            </button>
                        ) : (
                            <button className="submitButton" type="submit">
                                Finalizar compra
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
