import React from 'react';
import styles from './ArticleImage.module.css';
class ArticleImage extends React.Component{ 
   constructor(props){
       super(props);
       this.state = {};
   }

    render(){

     return(
        <div className={styles.height}>
        
        <img className={styles.imageCrop}alt="" src={this.props.url}/>
        <h1 className={styles.header}>{this.props.title}</h1>    
        </div>
     );   

    }
}
export default ArticleImage;