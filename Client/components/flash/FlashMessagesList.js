import React from 'react';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteFlashMesssage } from '../../actions/flashMessages';

class FlashMessagesList extends React.Component{

    render(){
    const messages = this.props.messages.map(message =>
      <FlashMessage key ={message.id} message = {message} deleteFlashMesssage = {this.props.deleteFlashMesssage}/>
    );

      return(
        <div>
         {messages}
        </div>
      );
    }
  }


FlashMessagesList.propTypes = {
  messages:React.PropTypes.array.isRequred,
  deleteFlashMesssage:React.PropTypes.func.isRequred
}

function mapStateToProps(state){
  return{
    messages:state.flashMessages
  }

}


export default connect(mapStateToProps,{deleteFlashMesssage})(FlashMessagesList);
