import React from 'react';
import { Pagination } from 'antd';

class DropdownAD extends React.Component {
    
    render(){
        
        const pagiStyle = {marginTop:'20px', marginBottom:'20px'}

        return(
        <div style={{marginLeft:'30px', marginRight:'30px'}}>

            <h3>Pagination</h3>
            <Pagination style={pagiStyle} defaultCurrent={1} total={50} />
            <Pagination style={pagiStyle} defaultCurrent={6} total={500} />
            <Pagination style={pagiStyle} showQuickJumper defaultCurrent={2} total={500} onChange={(page)=>{console.log(`Go to page ${page}`)}} />

            <hr style={{margin:'50px'}}/>

            {/* <h3></h3> */}
            
        </div>
    )}
}

export default DropdownAD;