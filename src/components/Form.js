import React, { Component } from 'react';
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";


class Form extends Component {

    addContact = (e) => {
        e.preventDefault();
        addDoc(collection(db, "contacts"),{
            prenom : e.target.prenom.value,
            nom : e.target.nom.value,
            email : e.target.email.value,
            direction : e.target.direction.value,
            notes : e.target.notes.value
        })
        document.getElementById("addContact").reset();
    }
    render() {
        return (
            <div className="row">
                <form className="col s12" id='addContact' onSubmit={this.addContact.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" id="prenom" className="validate" />
                            <label htmlFor="prenom">Prénom</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" id="nom" className="validate" />
                            <label htmlFor="nom">Nom</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" id="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" id="direction" className="validate" />
                            <label htmlFor="direction">Direction</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" id="notes" className="validate" />
                            <label htmlFor="notes">Notes</label>
                        </div>
                        <div className="input-field col s4">
                            <button className="btn waves-effect wave-light" type='qubmit' name='action'>Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;