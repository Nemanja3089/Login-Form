import React from 'react';
import classnames from 'classnames';


class FlashMessage extends React.Component{
constructor(props){
  super(props);
  this.onClick=this.onClick.bind(this);

}
onClick(){
  this.props.deleteFlashMesssage(this.props.message.id);
}
    render(){
    const { id,type,text } = this.props.message;

      return(
        <div className={classnames('alert', {
        'alert-success': type === 'succes',
        'alert-danger': type === 'error'
})}>
      <button onClick={this.onClick} className="close"><span>&times;</span></button>
         {text}
        </div>
      );
    }
  }
  FlashMessage.propTypes = {
    message:React.PropTypes.object.isRequred,
    deleteFlashMesssage:React.PropTypes.func.isRequred
  }

 export default FlashMessage;
