import { logos } from '../img';

const SubHeader = () => {
  return (
    <section className="sub-header">
      <img src={logos} alt="logos" />
      <div>
        <h4>Bundle with any Hulu plan &amp; save</h4>
        <h3>Get Hulu, Disney+, and ESPN+.</h3>
        <a href="#!" className="sub-link">
          Details
        </a>
      </div>
      <div>
        <a href="#!" className="btn btn-outline">
          Get Bundle
        </a>
        <a href="#!" className="sub-link">
          Terms apply
        </a>
      </div>
    </section>
  );
};

export default SubHeader;
