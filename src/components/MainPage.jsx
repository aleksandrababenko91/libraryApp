import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
  const featureIconStyle = {
    width: '4rem',
    height: '4rem',
    borderRadius: '0.75rem'
  };
  return (
    <div>
      {<div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-body-emphasis">Read with Joy</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Welcome to our website, where we are on a mission to 
          provide boundless access to knowledge and imagination. 
          As a sanctuary for avid readers, curious minds, 
          and knowledge seekers, our library stands as a haven for exploration, 
          learning, and discovery. Our library offers a convenient opportunity 
          to borrow books online. You can enjoy reading anytime and anywhere 
          by simply visiting our website. We have an extensive collection of 
          eBooks and audiobooks available to download or read directly in your browser. 
          Just register on our website, select the books you are interested 
          in and start immersing yourself in the world of literature!
        </p>
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
        <div>
          <img 
            src="src/images/Preview(book).jpeg"
            className="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Example image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>}
      {<div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Why you have to come to our Library?</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-white fs-2 mb-3" style={featureIconStyle}>
            <img src="./src/images/book.svg" alt="book image" height="40" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Book Borrowing for more than 40 days:</h3>
          <p>Explore our website to uncover a wealth of resources, events, and opportunities tailored to ignite your imagination, fuel your curiosity, and enrich your life.</p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-white fs-2 mb-3" style={featureIconStyle}>
            <img src="./src/images/wifi.svg" alt="wifi image" height="40" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Internet Access:</h3>
          <p>We offer free internet access and computer facilities, bridging the digital divide for those who may not have access at home.</p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-white fs-2 mb-3" style={featureIconStyle}>
            <img src="./src/images/balloon-heart-fill.svg" alt="baloon image" height="40" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Community Events</h3>
          <p>Our library frequently organizes community events like book clubs, author talks, lectures, and cultural programs to engage and connect people.</p>
        </div>
      </div>
    </div>}

      {<div className="container">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="src/images/image1.jpeg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="src/images/image2.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="src/images/image3.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

      </footer>
    </div>}
      {/* ... */}

      {/* Bootstrap JS */}
    </div>
  );
}

export default MainPage