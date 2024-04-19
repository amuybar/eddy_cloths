
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Shop/NavigationBar.css';


const NavigationBar = ({count}) => {

  const navigate= useNavigate();



 const handleNavigation=()=>{
   navigate('/Shop');
 }
 const handleBack=()=>{
   navigate('/');
 }
  return (
    <div className="navigation-bar">
      <button className="back-button" onClick={handleBack} >
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="navigation-title">Kids Cloth Shop</div>
       <button className="cart-button" onClick={handleNavigation}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-count">{count}</span>

      </button>
    </div>
  );
};

export default NavigationBar;
