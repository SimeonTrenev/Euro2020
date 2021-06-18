import React from 'react';
import './Tables.css';

class Tables extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    render() {
        const { value1, value2, value3 } = this.props;
        return(
            <div>
             <table className="styled-table">
                 <thead>
                    <tr>
                        <th>Държава</th>
                        <th>Година на отбора</th>
                        <th>Брой играчи</th>
                    </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>{value1}</td>
                         <td>{value2}</td>
                         <td>{value3}</td>
                     </tr>
                     <tr className="active-row">
                        <td></td>
                        <td></td>
                     </tr>
                 </tbody>
             </table>
            </div>
        )
    }
}

export default Tables;