import Button from './Button'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const Header=({title, onAdd, showAdd})=>{
    const location=useLocation()
    
    return(
        <header className="header">
            <h1>{title}</h1>
            
            {location.pathname==='/' && (
            <Button 
            color= {showAdd? 'red': 'green'}
            text={showAdd? 'Close': 'Add'} 
            onClick={onAdd}/>
            )}
            {/* <Button color='blue' text='button3'/> */}
            {/* the above takes the default props */}
            {/* the below is CSS in JS */}
            {/* <h1 style={{color:'red',backgroundColor:'black'}}>{title}</h1> */}
        </header>
    )
}
Header.defaultProps={
    title:"Task Tracker",
}
Header.propTypes={
    title: PropTypes.string,
}
// CSS in JS
// const headingStyle={
//     color:'red',
//     backgroundColor:'black',
// }
export default Header;