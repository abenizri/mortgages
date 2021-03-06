import React from 'react';
import Card from './../card.js'

const Home = () => {
        return (
                <div className="container">

      <h1 className="my-4">Welcome to Let's Remortgage</h1>

      <div className="row">
      <Card key="1" name='Mortgages' list={[
        'Self-employed mortgages',
       'Low deposit mortgages',
       'Less than perfect credit mortgages',
       'Help to buy mortgages',
       'First time buyer mortgages',
       'Later life lending mortgages',
       'Moving home',
       'Buy-to-let mortgages'
       ]} />
       
      <Card key="2" name='Remortgage' list={['Remortgage', 'Landlord support']} />
        <div className="col-lg-4 mb-4">
          <div className="card h-100">   
          <h4 className="card-header">Contect Us</h4>
         <div className="card-body"> 
                        <form className="text-center border border-light p-1 ">              
                        <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name"/>
                        <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail"/>
                        <div className="custom-control custom-checkbox mb-4">
                                <input type="checkbox" class="custom-control-input" id="defaultContactFormCopy"/>
                                <label class="custom-control-label" for="defaultContactFormCopy">Send me a copy of this message</label>
                        </div>
                        <button class="btn btn-info btn-block" type="submit">Send</button>                        
                </form>
                </div>  
                <div className="card-footer">
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div> 
    </div>
      </div>
 
      <h2>Portfolio Heading</h2>

      <div className="row">
        <div className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project One</a>
              </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Two</a>
              </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Three</a>
              </h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
            </div>
          </div>
        </div>
      </div>
 
      <div className="row">
        <div className="col-lg-6">
          <h2>Modern Business Features</h2>
          <p>The Modern Business template by Start Bootstrap includes:</p>
          <ul>
            <li>
              <strong>Bootstrap v4</strong>
            </li>
            <li>jQuery</li>
            <li>Font Awesome</li>
            <li>Working contact form with validation</li>
            <li>Unstyled page elements for easy customization</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid rounded" src="http://placehold.it/700x450" alt=""/>
        </div>
      </div>
    
      <hr/>
      <div className="row mb-4">
        <div className="col-md-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
        </div>
        <div className="col-md-4">
          <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
        </div>
      </div>
    </div>
        );
}
export default Home;