import  React, { Component } from "react";
import './App.css';
import {collection, getDocs, doc, deleteDoc} from 'firebase/firestore';
import db from '../firebase';
import Grid from './Grid';
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.state = {
      contacts:[]
    }
  }

  async updateData() {
    const contacts = await getDocs(collection(db, "contacts"))
    const contactsFinal = contacts.docs.map(doc => ({...doc.data(), id: doc.id}))
    this.setState({
      contacts: contactsFinal
    })
  }

  componentDidMount() {
    this.updateData();
  }

  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav className="purple darken-4">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center"></a>
            </div>
          </nav>
        </div>
        <div>
            <Form />
            <Grid items={this.state.contacts} />
        </div>
        

      </>
    );
  }


}




export default App;
