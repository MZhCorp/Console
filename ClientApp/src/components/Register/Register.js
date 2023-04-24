import React, { Component } from 'react';

export class Register extends Component {
    static displayName = Register.name;

    //constructor(props) {
    //    super(props);
    //    this.state = { forecasts: [], loading: true };
    //}

    //componentDidMount() {
    //    this.populateWeatherData();
    //}

    //static renderForecastsTable(forecasts) {
    //    return (
    //        <table className='table table-striped' aria-labelledby="tabelLabel">
    //            <thead>
    //                <tr>
    //                    <th>Date</th>
    //                    <th>Temp. (C)</th>
    //                    <th>Temp. (F)</th>
    //                    <th>Summary</th>
    //                </tr>
    //            </thead>
    //            <tbody>
    //                {forecasts.map(forecast =>
    //                    <tr key={forecast.date}>
    //                        <td>{forecast.date}</td>
    //                        <td>{forecast.temperatureC}</td>
    //                        <td>{forecast.temperatureF}</td>
    //                        <td>{forecast.summary}</td>
    //                    </tr>
    //                )}
    //            </tbody>
    //        </table>
    //    );
    //}

    registerHandler() {

    }

    render() {
        return (
            <div>
                <div>SIGN UP</div>
                <div>
                    <div>
                        <div>Username</div>
                        <input class="text-field" type="text" id="username" placeholder="MyCoolUsername" required/>
                    </div>
                    <div>
                        <div>Email</div>
                        <input class="text-field" type="text" id="email" placeholder="mymail@cool.domain" required/>
                    </div>
                    <div>
                        <div>Password</div>
                        <input class="text-field" type="password" id="password" placeholder="MySecurePass" required/>
                    </div>
                    <div>
                        <div>Confirm password</div>
                        <input class="text-field" type="password" id="confirm-password" placeholder="MySecurePass" required/>
                    </div>
                </div>
                <div class="pos-button">Register</div>
            </div> 
        );
    }
    
}