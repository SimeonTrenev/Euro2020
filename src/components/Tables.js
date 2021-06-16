import React from 'react';

class Tables extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    render() {
        const { value1, value2, value3 } = this.props;
        return(
            <div>
                <form>
                    <input value={value1} />
                    <input value={value2} />
                    <input value={value3} />
                </form>
            </div>
        )
    }
}

export default Tables;