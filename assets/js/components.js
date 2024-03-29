class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
      <div class="container">
        <div class="header-content d-flex flex-wrap align-items-center ">
          <div class="logo">
            <a href="index.html" title=""><img class="logo" src="assets/img/logo.svg" alt="icon" srcset="assets/img/logo.svg"/></a>
          </div>
          <!--logo end-->
          <ul class="contact-add d-flex flex-wrap justify-content-end">
            <li>
              <div class="contact-info">
                <img src="assets/img/icon1.png" alt="" />
                <div class="contact-tt">
                  <h4>Call</h4>
                  <span>+91 9747178401</span>
                </div>
              </div>
              <!--contact-info end-->
            </li>

            <li>
              <div class="contact-info">
                <img src="assets/img/icon3.png" alt="" />
                <div class="contact-tt">
                  <h4>Address</h4>
                  <span>Near Al Shifa Hospital, Perinthalmanna - Nilambur Rd, Perintalmanna, Kerala 679322</span>
                </div>
              </div>
              <!--contact-info end-->
            </li>
          </ul>
          <!--contact-information end-->
          <div class="menu-btn">
            <a href="#"
              ><span class="bar1"></span> <span class="bar2"></span>
              <span class="bar3"></span
            ></a>
          </div>
          <!--menu-btn end-->
        </div>
        <!--header-content end-->
        <div class="navigation-bar d-flex flex-wrap align-items-center">
          <nav>
            <ul>
              <li>
                <a href="index.html" title="">Home</a>
              </li>
              <li>
                <a href="about.html" title="">About us</a>
              </li>
              <li>
                <a href="services.html" title="">Services</a>
              </li>
              <li>
                <a href="gallery.html" title="">Gallery</a>
              </li>
              <li><a href="contacts.html" title="">Contact us</a></li>
            </ul>
          </nav>
          <!--nav end-->
          <ul class="social-links ml-auto">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100092584939763" target="_blank" title=""><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="https://instagram.com/pcsneeds?igshid=NTc4MTIwNjQ2YQ==" target="_blank" title=""><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
        <!--navigation-bar end-->
      </div>
    </header>
      `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="top-footer">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="widget widget-about">
                  <img src="assets/img/logo.svg" alt="icon" />
                  <p>
                  Phoenix centre with its expertise and know-how on can make a difference to their future. 
                  Providing a conductive environment for vocational and Life Skills Training leading to their 
                  employment, self dependance and acceptance in society.
                  </p>
                </div>
                <!--widget-about end-->
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="widget widget-contact">
                  <ul class="contact-add">
                    <li>
                      <div class="contact-info">
                        <img src="assets/img/icon1.png" alt="" />
                        <div class="contact-tt">
                          <h4>Call</h4>
                          <span>+91 9747178401</span>
                        </div>
                      </div>
                      <!--contact-info end-->
                    </li>
                    <li>
                      <div class="contact-info">
                        <img src="assets/img/icon2.png" alt="" />
                        <div class="contact-tt">
                          <h4>Work Time</h4>
                          <span>Mon - Fri 8 AM - 5 PM</span>
                        </div>
                      </div>
                      <!--contact-info end-->
                    </li>
                    <li>
                      <div class="contact-info">
                        <img src="assets/img/icon3.png" alt="" />
                        <div class="contact-tt">
                          <h4>Address</h4>
                          <span>Near Al Shifa Hospital, Perinthalmanna</span>
                          <span>Nilambur Rd, Perintalmanna, Kerala 679322</span>
                        </div>
                      </div>
                      <!--contact-info end-->
                    </li>
                  </ul>
                </div>
                <!--widget-contact end-->
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="widget widget-links">
                  <h3 class="widget-title">Quick Links</h3>
                  <ul>
                    <li><a href="index.html" title="">Home</a></li>
                    <li><a href="about.html" title="">About Us</a></li>
                    <li>
                      <a href="services.html" title="">Services</a>
                    </li>
                    <li><a href="gallery.html" title="">Gallery</a></li>
                    <li><a href="contacts.html" title="">Contact Us</a></li>
                  </ul>
                </div>
                <!--widget-links end-->
              </div>
            </div>
          </div>
          <!--top-footer end-->
          <div class="bottom-footer">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <p class="kraftloop">© Copyrights 2023. Developed by <a href="https://www.kraftloop.in">Kraftloop</a></p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <ul class="social-links">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100092584939763" target="_blank" title=""><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="https://instagram.com/pcsneeds?igshid=NTc4MTIwNjQ2YQ==" target="_blank" title=""><i class="fab fa-instagram"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--bottom-footer end-->
        </div>
      </footer>
      `;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);
