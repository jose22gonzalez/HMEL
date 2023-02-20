import { useState, useEffect } from 'react';
import './style.css'

import { calcularCaudal } from '../../functions.js'

const Stove = () => {

    const [count, setcount] = useState(0);
    const [count2, setcount2] = useState(0)

    const [aceite, setAceite] = useState(0)
    const [agua, setAgua] = useState(0)


    useEffect(() => {
        if (count == 6) {
            setcount(0)
        }
        //Funcion que evalua el tiempo de ebullicion del aceite



    }, [count]);

    useEffect(() => {

        if (count2 == 6) {
            setcount2(0)
        }
        //Funcion que evalua el tiempo de ebullicion del agua 


    }, [count2])

    useEffect(() => {


        //   console.log( convertirGalonesPorMinutoAMetrosCubicosPorHora(1))
        //   console.log( calcularVelocidadDeFluido(10, 2))
        console.log("Resultado Caudal por tiempo por diametro y longitud de manguera teniendo en cuenta la presion del tanque: " + calcularCaudal(10))

    }, [])

    return (
        <html>
            <body>
                <div className="kitchen">

                    <button className='button1' id={count == 0 && count <= 5 ? "" : "switch1"} onClick={() => setcount((count) => count + 1)}></button>
                    <button className='button2' id={count2 == 0 && count2 <= 5 ? "" : "switch2"} onClick={() => setcount2((count) => count + 1)}></button>



                    <div className="stove-wrap">
                        <div className="stove">
                            <label htmlFor="switch1"><button className='button1' id={count == 0 && count <= 5 ? "" : "switch1"} onClick={() => setcount((count) => count + 1)}>{count}</button></label>
                            <label htmlFor="switch2"> <button className='button2' id={count2 == 0 && count2 <= 5 ? "" : "switch2"} onClick={() => setcount2((count) => count + 1)}>{count2}</button></label>
                        </div>
                        <span className="burner">
                            <span className="stand"></span>
                            {count == 1 &&
                                <>
                                    <span className="flame2"></span>
                                    <span className="flame2"></span>
                                    <span className="flame2"></span>
                                    <span className="flame2"></span>
                                    <span className="flame2"></span>
                                </>
                            }
                            {count == 2 &&
                                <>

                                    <span className="flame3"></span>
                                    <span className="flame3"></span>
                                    <span className="flame3"></span>
                                    <span className="flame3"></span>
                                    <span className="flame3"></span>

                                </>
                            }
                            {count == 3 &&
                                <>

                                    <span className="flame4"></span>
                                    <span className="flame4"></span>
                                    <span className="flame4"></span>
                                    <span className="flame4"></span>
                                    <span className="flame4"></span>

                                </>
                            }
                            {count == 4 &&
                                <>

                                    <span className="flame5"></span>
                                    <span className="flame5"></span>
                                    <span className="flame5"></span>
                                    <span className="flame5"></span>
                                    <span className="flame5"></span>

                                </>
                            }
                            {count == 5 &&
                                <>
                                    <span className="flame"></span>
                                    <span className="flame"></span>
                                    <span className="flame"></span>
                                    <span className="flame"></span>
                                    <span className="flame"></span>
                                </>
                            }

                        </span>

                        <span className="burner">
                            <span className="stand"></span>
                            {count2 == 1 &&
                                <>
                                    <span className="flame2"></span>
                                    <span className="flame2"></span>
                                    <span className="flame2"></span>
                                    <span className="flame2"></span>
                                    <span className="flame2"></span>
                                </>
                            }
                            {count2 == 2 &&
                                <>
                                    <span className="flame3"></span>
                                    <span className="flame3"></span>
                                    <span className="flame3"></span>
                                    <span className="flame3"></span>
                                    <span className="flame3"></span>
                                </>
                            }
                            {count2 == 3 &&
                                <>
                                    <span className="flame4"></span>
                                    <span className="flame4"></span>
                                    <span className="flame4"></span>
                                    <span className="flame4"></span>
                                    <span className="flame4"></span>
                                </>
                            }
                            {count2 == 4 &&
                                <>
                                    <span className="flame5"></span>
                                    <span className="flame5"></span>
                                    <span className="flame5"></span>
                                    <span className="flame5"></span>
                                    <span className="flame5"></span>
                                </>
                            }
                            {count2 == 5 &&
                                <>
                                    <span className="flame"></span>
                                    <span className="flame"></span>
                                    <span className="flame"></span>
                                    <span className="flame"></span>
                                    <span className="flame"></span>
                                </>
                            }



                        </span>

                        <div className="pot1">
                            <span className="vapour"></span>
                            <span className="vapour"></span>
                            <span className="vapour"></span>
                            <span className="vapour"></span>
                            <span className="vapour"></span>
                        </div>
                        <div className="pot">
                            <span className="vapour"></span>
                            <span className="vapour"></span>
                            <span className="vapour"></span>
                            <span className="vapour"></span>
                            <span className="vapour"></span>
                        </div>
                        
                        <div>
                            <input className='aceite' type="number"  onChange={(e) => setAceite(e.target.value)}></input>

                        </div>

                        <div>
                            <input className='agua' type="number" onChange={(e) => setAgua(e.target.value)}></input>
                        </div>

                        <h5 className="badge">. LPG .</h5>


                    </div>
                    <div className="table">
                        <span className="box">
                            <span className="key"></span>
                        </span>
                        <span className="box">
                            <span className="key"></span>
                        </span>
                        <div className="cylinder">
                            <span className="stick"></span>
                            <span className='stick'></span>
                            
                            <div className='valve'>
                                <span className="circulo"></span>
                            </div>

                            <span className="mid-body"></span>
                            <span className="pipe1"></span>
                            <span className="pipe2"></span>
                            <h5 className="badge">. GAS .</h5>
                            <span className="bottom-block"></span>
                            <span className="bottom-block"></span>
                        </div>
                    </div>

                </div>


            </body>
        </html>

    )
}

export default Stove