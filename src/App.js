import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            stageHeading: '',

            email: '',
            password: '',
            dob: '',
            aboutus: '',
            gender: 'male'
        }
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onPasswordChange(e) {
        console.log('came here');
        this.setState({
            password: e.target.value
        });
    }

    onGenderChange(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onDobChange(e) {
        this.setState({
            dob: e.target.value
        });
    }

    onAboutusChanged(e) {
        this.setState({
            aboutus: e.target.value
        });
    }

    renderEmailPasswordFields() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email"
                           className="form-control"
                           type="email"
                           value={this.state.email}
                           onChange={(e) => this.onEmailChange(e)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password"
                           className="form-control"
                           type="text"
                           value={this.state.password}
                           onChange={e => this.onPasswordChange(e)}
                    />
                </div>

                <div>
                    <button className="btn btn-primary" onClick={() => {
                        if(!this.state.email.length || !this.state.password.length) {
                            alert('please enter email and password');
                            return;
                        }
                        this.setState({step: 2})
                    }}>Next</button>
                </div>
            </div>
        );
    }

    renderAboutusFields() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="dob">Date of birth</label>
                    <input type="date"
                           className="form-control"
                           value={this.state.dob}
                           onChange={e => this.onDobChange(e)}
                    />
                </div>

                <div className="form-group">
                    <legend>Gender</legend>
                    <input type="radio"
                           id="male"
                           name="gender" value={'male'} checked={true}
                           onChange={e => this.onGenderChange(e)} />
                    <label htmlFor="male"> Male</label>

                    <br/>
                    <input type="radio"
                           id="female"
                           name="gender" value={'female'} checked={true}
                           onChange={e => this.onGenderChange(e)} />
                    <label htmlFor="female"> Female</label>
                </div>

                <div className="form-group">
                    <textarea value={this.state.aboutus}
                              onChange={(e) => this.onAboutusChanged(e)}
                    >{this.state.aboutus}</textarea>
                </div>

                <div>
                    <button className="btn btn-primary" onClick={() => {
                        if(!this.state.dob.length || !this.state.aboutus.length) {
                            alert('please fill the fields');
                            return;
                        }

                        this.setState({step: 3})
                    }}>Next</button>
                </div>
            </div>
        )
    }

    renderThankyouContent() {
        return(
            <div>
                <h1>Thankyou</h1>
                <h2>Your details</h2>
                <div>
                    Email: {this.state.email}
                </div>

                <div>
                    DOB: {this.state.dob}
                </div>

                <div>
                    Gender: {this.state.gender}
                </div>

                <div>
                    Aboutus: {this.state.aboutus}
                </div>
            </div>
        )
    }

    renderForm() {
        switch(this.state.step) {
            case 1:
                return this.renderEmailPasswordFields();
            case 2:
                return this.renderAboutusFields();
            case 3:
                return this.renderThankyouContent();
            default:
                // do nothing
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.stageHeading}
                    <div className="col-md-6">
                        <h2>{this.state.stageHeading}</h2>
                        <div>
                            {this.renderForm()}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
