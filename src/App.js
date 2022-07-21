import "./App.css";
function App() {
  return (
    <>
      {/* navbar */}
      <div className="App">
        <img className="TOPBAR" src="TOPBAR.png" />
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img className="img-responsive" src="Logo.png" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav   ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  THIS MONTH <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  SKIN
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  HAIR
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  BATH
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  SALE
                </a>
              </li>
            </ul>
            <div className="login">
              <div className="log">LOG IN</div>
            </div>
          </div>
        </nav>
      </div>

      <div className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <h1 className="heading">
                Look good without
                <br />
                leaving your house.
              </h1>
              <p className="paragraph">
                Update is the easiest way to look your best without
                <br />
                having to hunt for the perfect makeup combination
                <br />
                .Our stylists curate the lastest trends and send them
                <br />
                directly to door every month
              </p>
              <div className="button">
                <p className="btn-size">SIGN UP</p>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12">
              <img className="markerclass" src="Marker.png"></img>
              <img src="BOX.png" class="img-fluid" alt="Responsive image"></img>
              <img className="img col-lg-6" src="Marker.png" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="pick text-center">pick your plan</h2>

      <div class="container">
        <div class="row justify-content-center ">
          <div class="col-12 col-sm-6 col-lg-6 ">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Monthly</h5>
                <h6 class="card-subtitle mb-2 text-muted">$18/mo</h6>
                <div class="text-center">
                  <button type="button" class="btn">
                    FIND YOUR BOX
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-6  ">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Yearly</h5>
                <h6 class="card-subtitle mb-2 text-muted">$15/mo</h6>
                <div class="text-center">
                  <button type="button" class="btn">
                    FIND YOUR BOX
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="paragraph-one text-center">
          Your plan auto-renews at the end of 30 days from the 1st day you
          signed-up.
        </p>
        <h2 className="how text-center">how it works ?</h2>
      </div>

      <div class="container">
        <div class="row justify-content-center ">
          <div class="col-12 col-sm-6 col-lg-4 ">
            <img className="image-size" src="art.png" alt="no" />
            <img className="size" src="Group.png" alt="no" />
            <img className="images-size" src="one.png" alt="no" />
          </div>

          <div class="col-12 col-sm-6 col-lg-6  ">
            <div class="card-size ">
              <h1>Setup your profile & preferences</h1>
              <p>
                Once you create an account, you can start to tell us your likes
                and dislikes so we can tailor the experience just for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-8">
            <div className="div">
              <img src="blackpic.png" class="responsive"></img>
              <img src="art2.png" className="img-fluid-one"></img>
              <img src="boxxxx.png" className="img-fluid-three"></img>
              <img src="two.png" className="img-fluid-two "></img>
              <h2 className="title">Review your custom box</h2>
              <p className="paragraph1">
                Once we get to know you, we will show you the box we’ve crafted.
                This is your chance to approve it before we ship it to your
                house.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="totale">
              <img className="art-responsive" src="art3 .png" alt="no"/>
              <img className="mekup-responsive " src="mekup.png" />
              <img className="three-responsive" src="three.png" />
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="class-try">Try it on at home</h2>
            <p>
              Your box will arrive within 3-5 days (usually sooner) and you get
              the joy to unbox your Upbox. Try it all on and send back whatever
              you’re not in love with.
            </p>
          </div>
        </div>
      </div>

      {/* thereare secondry button */}

      <div class="text-center">
        <button type="button" class="btn-secondry">
          TRY IT FOR YOURSELF
        </button>
      </div>

      <footer>
        <h2 className="text-center">Social Posts</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 text-center">
              <img className="img1-responsive" src="img1.png"></img>
              <p>How to rock the lip look that turns heads</p>
            </div>
            <div className="col-lg-3 text-center">
              <img className="img2-responsive" src="img2.png"></img>
              <p>Find the perfect shade for the season</p>
            </div>
            <div className="col-lg-3 text-center">
              <img className="img3-responsive" src="img3.png"></img>
              <p>The 5 eye shadow secrets you never knew</p>
            </div>
            <div className="col-lg-3 text-center">
              <img className="img4-responsive" src="img4.png"></img>
              <p>The pro-tips for at home hair dying</p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="button" class="btn-last">
            FOLLOW US ON INSTAGRAM
          </button>
        </div>
      </footer>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div></div>
            <img className="logo-responsive" src="Logo.png" />

            <h4 className="headsize">UPBOX</h4>
            <p>Upbox Bag</p>
            <p>Upbox Box Platinum</p>
            <p>Upbox Box VIP</p>
            <p>Deals</p>
            <p>Seasonal Items</p>
            <p>Upbox Promise</p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="mediumclass">Find Us On</h4>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>TikTok</p>
            <p>SnapChat</p>
            <p>Twitter</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="mediumclass">Product</h4>
            <p>Get the App</p>
            <p>Loyalty Program</p>
            <p>Affiliates</p>
            <p>Press</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="icon">
              <img className="insta" src="insta.png"></img>
              <img className="facebook" src="facebook.png"></img>
              <img className="twitter" src="twitter.png"></img>
              <img className="sc" src="sc.png"></img>
            </div>

            <h4 className="headsize-help">Help</h4>
            <p>Returns</p>
            <p>FAQ</p>
            <p>Contact</p>
            <p>Community</p>
            <p>Videos</p>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
         <p className="classpara   ">
          © 2020 Quest AI. Upbox is a Sample Project and open source design
          project free for personal and commercial use.
        </p> 
        <p className="terms">Terms</p>
        <p className="privacy">Privacy Policy</p>
      </div>
    </>
  );
}
export default App;

