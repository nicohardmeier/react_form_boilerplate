import React, { Component } from 'react';


class Form extends Component {
        constructor(props) {
            super(props);
            this.state = {value: ''};
        
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }
        
        handleChange(event) {
            this.setState({value: event.target.value});
        }
        
        handleSubmit(event) {
            console.log('A name was submitted: ' + this.state.value);
            event.preventDefault();
        }
        
        render() {
            return (
            <div className="form-container">
                <h1 className="text-center">FORMULARIO</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Name"/>
                    <div className="submit-container">
                        <input type="submit" value="Submit" />
                    </div>
                    <div>A name was submitted: { this.state.value}</div>
                </form>
            </div>
            );
        }

    }

                        
 export default Form;
