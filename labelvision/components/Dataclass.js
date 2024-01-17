import React from "react";
class Dataclass extends React.Component{
    
    constructor () {
        super({})
        this.state = {APIData: null}
    }


    setAPIData (value) {
        this.state.DataclassAPIData = value
    }

    getAPIData() {
        return this.state.APIData
    }
};

export default Dataclass;