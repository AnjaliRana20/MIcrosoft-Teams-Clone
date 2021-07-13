
// Chat PopUp
import React from 'react';
import Modal from 'react-modal';
import ModalButton from './ChatPopupButton';
import style from './styles.css';
import App from './components/Chat/src/App';
class Chat extends React.Component {
  constructor() {
    super();

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  // Open/Close Popup on click
  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
  }

  render() {
    const { data } = this.props;
    return (
      <div className={style.modalWrapper}>
        <ModalButton handleClick={this.toggleModal}>
        </ModalButton>
        <Modal
          className={{ base: [style.base]}}
          overlayClassName={{ base: [style.overlayBase] }}
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal} 
        >
          {/* Chat App from components is rendered here */}
          <App />          
        </Modal>
      </div>
    );
  }
}

export default Chat;