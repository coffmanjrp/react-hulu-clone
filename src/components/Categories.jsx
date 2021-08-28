import categoryData from '../utils/categoryData';
import unescapeHTML from '../lib/unescapeHTML';

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
        {categoryData.length > 0 &&
          categoryData.map((data) => (
            <div
              className="cover"
              key={data.id}
              style={{ backgroundImage: `url(${data.cover})` }}
            >
              <div className="cover-grad" />
              <div className="cover-text">
                <p className="sub-title">{unescapeHTML(data.subTitle)}</p>
                <h3>{unescapeHTML(data.title)}</h3>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Categories;
