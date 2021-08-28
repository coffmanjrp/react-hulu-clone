import { useEffect, useRef } from 'react';
import { close } from '../img';

const Modal = ({ openModal, setOpenModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    window.addEventListener('click', outsideClick);

    return () => window.removeEventListener('click', outsideClick);

    // eslint-disable-next-line
  }, []);

  const outsideClick = (e) => {
    if (e.target === modalRef.current) {
      setOpenModal(false);
    }
  };

  return (
    <div
      ref={modalRef}
      className="modal "
      style={{ display: openModal ? 'block' : 'none' }}
    >
      <div className="modal-box">
        <div className="modal-body">
          <h3>Log In</h3>
          <form>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <p>
              <a href="#!">Forgot your email or password?</a>
            </p>
            <button className="btn btn-dark">Log In</button>
          </form>
        </div>
        <div className="modal-footer">
          <p>
            Don't have an account? <a href="#!">Start your free trial</a>
          </p>
        </div>
        <img
          src={close}
          alt="Close"
          className="close"
          onClick={() => setOpenModal(false)}
        />
      </div>
    </div>
  );
};

export default Modal;
