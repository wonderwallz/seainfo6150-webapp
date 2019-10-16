import React from 'react';
import styles from './SlugButton.module.css';
class SlugButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         
        };
    }


    render() {
      return(
            <div className={styles.h}>
            <button className={styles.b} onClick={()=>alert(this.props.slug)}>{this.props.buttonText}
                
            </button>  
            </div>

      );
    }
} 

export default SlugButton;
