const Categories = () => {
  return (
    <section className="categories">
      <h4>Included in all plans</h4>
      <p className="text-xl">All The TV You Love</p>
      <p className="sub-text">
        Stream full seasons of exclusive series, current-season episodes, hit
        movies, Hulu Originals, kids shows, and more.
      </p>
      <div className="covers">
        <div className="cover-1">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <p className="sub-title">Past &amp; Current Seasons</p>
            <h3>TV Shows</h3>
          </div>
        </div>
        <div className="cover-2">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <p className="sub-title">New &amp; Classics</p>
            <h3>Movies</h3>
          </div>
        </div>
        <div className="cover-3">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <p className="sub-title">Groundbreaking</p>
            <h3>Hulu Originals</h3>
          </div>
        </div>
        <div className="cover-4">
          <div className="cover-grad"></div>
          <div className="cover-text">
            <p className="sub-title">Add-On</p>
            <h3>Premiums</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
