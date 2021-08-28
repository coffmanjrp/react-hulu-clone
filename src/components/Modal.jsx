import { close } from '../img';

const Modal = () => {
  return (
    <div className="modal">
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
        <img src={close} alt="Close" className="close" />
      </div>
    </div>
  );
};

export default Modal;
