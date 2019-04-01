import React, { Component } from "react";
import Day from "./day-component";

export default class Month extends Component {
    render() {
        return (
            <div className="month">
                <div>Month</div>
                <Day />
            </div>
        );
    }
}
