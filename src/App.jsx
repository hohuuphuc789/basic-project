
import './App.css';
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Searchbar from './Searchbar';
import { RxDoubleArrowRight } from "react-icons/rx";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { IoChevronBackSharp } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";
import Searchbar2 from './Searchbar2';
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";
function App() {


  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };  

  return (
    <div className="App">
      <div className="full-screen-background">
        <nav className="nav">
          <img src={"/lms-logo.png"} className="logo" alt="Logo" />
          <div className="container">
            <a href="#" className="home">Home</a>
            <a href="#" className="courses">Courses</a>
            <a href="#" className="pages">Pages</a>
            <a href="#" className="blog">Blog</a>
            <a href="#" className="gallery">Gallery</a>
            <a href="#" className="shop">Shop</a>
            <a href="#" className="contact">Contact</a>

            <div className="log-regis">
              <a href="#" className="icon-log"> <FaUser /></a>
              <a href="#" className="log">Login</a>
              <a> | </a>
              <a href="#" className="regis">Register</a>
              <a href="#"> <FaShoppingCart /></a>
            </div>
          </div>
        </nav>

        <div className="text-section">
          <Searchbar onSearch={handleSearch} />
          <h3 className="subheading">We have the largest collection of courses</h3>
          <div className="hd1-icon1">
            <a href="#" >View All Courses <RxDoubleArrowRight /></a>
          </div>
        </div>

        <div className="text-section1">
          <div className='subheading-section'>
            <h1 className="subheading1">332</h1>
            <hr className="divider" />
            <h3 className="subheading1">Courses</h3>
          </div>

          <div className='subheading-section'>
            <h1 className="subheading2">1403</h1>
            <hr className="divider" />
            <h3 className="subheading2">Members</h3>
          </div>

          <div className='subheading-section'>
            <h1 className="subheading3">60</h1>
            <hr className="divider" />
            <h3 className="subheading3">Authors</h3>
          </div>

          <div className='subheading-section'>
            <h1 className="subheading4">120</h1>
            <hr className="divider" />
            <h3 className="subheading4">Subjects</h3>
          </div>
        </div>
      </div>

      <div className="body2">
        <div className="container2">
          <img src="/vector22.svg" width="100" alt="Vector Image" />
          <h3 className="subheading1">Best Stimulations</h3>
        </div>

        <div className="container3">
          <img src="/vector19.svg" width="100" alt="Vector Image" />
          <h3 className="subheading2">Group Seminars</h3>
        </div>

        <div className="container4">
          <img src="/vector20.svg" width="100" alt="Vector Image" />
          <h3 className="subheading2">Analysed Syllabus</h3>
        </div>

        <div className="container5">
          <img src="/vector21.svg" width="100" alt="Vector Image" />
          <h3 className="subheading2">Pratical Training</h3>
        </div>
      </div>

      <nav className='nav2'>
        <div className='text-section2'>
          <div className='body3'>
            <h1>COURSES</h1>
            <div className='button-prev-back'>
              <a href="#" className="btn-back"> <IoChevronBackSharp /></a>
                
              <a href='#' className='btn-next'> <GrNext/></a>
            </div>

          </div>

          <div className='divider-2-head'>
            <hr className="divider2" />
          </div>
        </div>

        <div className='text-section3'>
          <div className='text-section-head'>
              <div className='body4'>
                <h2>About Courses</h2>
                <h5>Student Registration and Administration Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit,
                  sed quia consequuntur magni res eos qui ratione voluptatem sequi nesciunt.
                </h5>
                <h5>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                  by injected humour, or randomised believable.
                </h5>
              </div>
              <div className='button_view'>
                <a href="#" className='btn_view' >View All Courses </a>
              </div>
          </div>

          <div className='text-section-body'>
            <div className='text-body-head-1'>
              <img src={"/pic3.jpg"}/>
              <div className='text-hd-1-head'>
                <a className='Intro1'>Free</a>
                <p className='Body-head'>Power Electronics</p>
                <p className='Last-head'>
                  <div className='Info-pic'>Education</div>
                  <span0></span0>
                  <div className='Info-pic2'> 7 Curriculum</div>
                  <hr className='divider0'/>
                  
                    <div className='Info-pic3'><TbClockHour4 />1d 1h 50m</div>
                </p>
              </div>
            </div>
            <div className='text-body-head-2'>
              <img src={"/pic2.jpg"}/>
            </div>
          </div>
        </div>  
      </nav>
      
      <div className='pic2-3-4'>
        <div className='pic2'>
          <img src={"/lms-banner1.jpg"} />
        </div>
        <div className='pic3'>
          <img src={"/lms-banner2.jpg"} />
        </div>
        <div className='pic4'>
          <img src={"/lms-banner3.jpg"} />
        </div>
      </div>

      <div className='text-section4'>
        <div className='body5'>
          <h1 className='blog'>BLOG</h1>
          <hr className="divider3" />
        </div>
      </div>

      <div className='text-pic5-6-7'>
        <div className='text-pic5'>
          <div className='pic5'>
            <img src={"/blog12.jpg"} />
          </div>
          <div className='text-section5'>
            <div className='doc-day'>
              <h4>30 Thu</h4>
              <hr className='divider-horizontal' />
              <a href="#"><IoDocumentTextSharp /></a>
            </div>

            <div className='doc-text'>
              <h3>Contrary to popular</h3>
              <div className='anh1'>
                <a href='#'>dtlmsele</a>
                <a> | </a>
              </div>

              <div className='anh2'>
              <a style={{color: "gray"}}><FaBookmark /></a>
              <a href='#'>blog, </a>
                <a href='#'>chat</a>
              </div>
            </div>
          </div>
        </div>

        <div className='text-pic6'>
          <div className='pic6'>
            <img src={"/blog7.jpg"} />
          </div>
          <div className='text-section6'>
            <div className='doc-day'>
              <h4>30 Thu</h4>
              <hr className='divider-horizontal' />
              <a href="#"><IoDocumentTextSharp /></a>
            </div>
            <div className='doc-text'>
              <h3>Omnis voluptas assumenda</h3>
              <div className='anh1'>
                <a href='#'>dtlmsele</a>
                <a> | </a>
              </div>

              <div className='anh2'>
                <a style={{color: "gray"}}><FaBookmark /></a>
                <a href='#'>blog, </a>
                <a href='#'>chat</a>
              </div>
            </div>
          </div>
        </div>

        <div className='text-pic7'>
          <div className='pic7'>
            <img src={"/blog11.jpg"} />
          </div>
          <div className='text-section7'>
            <div className='doc-day'>
              <h4>30 Thu</h4>
              <hr className='divider-horizontal' />
              <a href="#"><IoDocumentTextSharp /></a>
            </div>
            <div className='doc-text'>
              <h3>Piece of classical</h3>
              <div className='anh1'>
                <a href='#'>dtlmsele</a>
                <a> | </a>
              </div>

              <div className='anh2'>
              <a style={{color: "gray"}}><FaBookmark /></a>
              <a href='#'>blog, </a>
                <a href='#'>chat</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='parallax-light'>
        <div className='head-container-column'>
          <div className="container-column">
            <div className="container-column-icon-group-1">
              <div className='img-icon-vec1'>
                <img src="./vector3.svg" width="" alt="vector image" />
              </div>  
              <div className="container-title">
                  HTML
              </div>
            </div>
        
            <div className="container-column-icon-group-2">
              <div className='img-icon-vec2'>
                <img src="./vector2.svg" width="50px" alt="vector image" />
              </div>
              <div className="container-title1">
                CSS
              </div>
            </div>


            <div className="container-column-icon-group-3">
              <div className='img-icon-vec3'>
                <img src="./vector.svg" width="60px" alt="vector image" />
              </div>
              <div className="container-title">
                Android
              </div>
            </div>

            <div className="container-column-icon-group-4">
              <div className='img-icon-vec4'>
                <img src="./vector4.svg" width="56px" alt="vector image" />
              </div>
              <div className="container-title" >
                Photoshop
              </div>
            </div>

            <div className="container-column-icon-group-5">
              <div className='img-icon-vec5'>
                <img src="./vector4.svg" width="56px" alt="vector image" />
              </div>
              <div className="container-title5">
                JQuery
              </div>
            </div>

            <div className="container-column-icon-group-6">
              <div className='img-icon-vec6'>
                <img src="./vector4.svg" width="56px" alt="vector image" />
              </div>
              <div className="container-title6">
                Ruby
              </div>
            </div>
          </div>
        </div>
      </div> 

      <div className='nav3'>
        <div className='nav3-text-section'>
          <div className="text-section3">
            <div className="body6">
              <h1>UPCOMING EVENTS</h1>
              <span className="divider4" />
            </div> 

            <div className="button-prev-back2">
              <a href="#" className='btn-back2'><GrLinkPrevious /></a>
              <a href="#" className='btn-next2'><GrLinkNext /></a>
            </div> 
          </div>

          <div className="body6-body">
            <div className="pic8">
                <img src={"./pic1.jpg"}/>
              <div className="head-info">
                <h1 className="head-info-1">Welcoming 25th Batch</h1>
                <h1 className="head-info-2">December 12, 2024 @ 8:00 am - December 13, 2025 @</h1>
                <h1 className="head-info-2">5:00 pm</h1>
                <h1 className="head-info-2">Peppard Hill, United States</h1>
              </div>
           </div>
          </div>
        </div>  
      </div>

      <div className="full-screen-background-2">
        <div className="head-bottom-column-bg-2">
          <div className="heading-wrap-column">
            <div className="heading-bg-1">
              <div className="BG-1">GET IN TOUCH WITH US</div>
            </div>
            <div className="heading-bg-2">
              <div className="BG-2">
                There are many variations of passage of Lorem Ipsum available, but the majority have suffered alterations in some form, by injected humour, or randomised
                <p>words which Ipsum slightly believable</p>
              </div>
            </div>
            <div className="Info-address">
              <Searchbar2 onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>

      <div className='text-section8'>
        <div className='body5'>
          <h1 className='blog1'>OUR PROCESS</h1>
          <hr className="divider5" />
        </div>
      </div>

      <div className="body-column-P1-P2-P3-P4">
        <div className='screen-body-middle'>
          <div className='text-section10'>
            <div className='body10'>
              <h1>Step 01</h1>
              <h3>Search for your course</h3>
              <hr className='divider6' />
              <h5>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit,
                sed quia consequuntur magni res. </h5>
            </div>
            <div className='body11'>
              <h5 style={{ color: "#da853d", fontSize: "30px" }}><IoSearchSharp /></h5>
            </div>
            <span className='span1'></span>
          </div>

          <div className='text-section11'>
            <span className='span1'></span>
            <div className='body13'>
              <h5 style={{ color: "#da853d", fontSize: "30px" }}><HiMiniComputerDesktop /></h5>
            </div>
            <div className='body12'>
              <h1>Step 02</h1>
              <h3>Take a Sample Lesson</h3>
              <hr className='divider6' />
              <h5>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit,
                sed quia consequuntur magni res.</h5>
            </div>
          </div>

          <div className='text-section12'>
            <div className='body14'>
              <h1>Step 03</h1>
              <h3>Preview the Syllabus</h3>
              <hr className='divider6' />
              <h5>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit,
                sed quia consequuntur magni res.</h5>
            </div>
            <div className='body15'>
              <h5 style={{ color: "#da853d", fontSize: "30px" }}><HiDocumentMagnifyingGlass /></h5>
            </div>
            <span className='span1'></span>
          </div>

          <div className='text-section13'>
            <span className='span1'></span>
            <div className='body17'>
              <h5 style={{ color: "#da853d", fontSize: "30px" }}><BsCart4 /></h5>
            </div>
            <div className='body16'>
              <h1>Step 04</h1>
              <h3>Purchase the Course</h3>
              <hr className='divider6' />
              <h5>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit,
                sed quia consequuntur magni res.</h5>
            </div>
          </div>
        </div>
      </div>     

      <div className="summary">
        <div className="summary-container">
          <div className="section-container">
            <div className="container-column">
              <div className="column-container-middle">
                <a href="#">
                  <img className="lazy" width="98px" height="99px" src={"/lms-logo.png"}>
                  </img>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="summary-last">
          <div className="summary-last-inside">
            <div className="summary-column">

              <div className="summary-column-1"> 
                <div className='distance-box1'>
                  <div className='sum-info-1'>About Us</div>
                  <div className='sum-info-1-1'>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut et lobortis diam.
                  </div>
                  <div className='sum-info-1-1'>Duis tellus enim, vestibulum eget varius
                    id, vulputate et mi. Nullam feugiat, diam
                    quis interdum varius
                  </div>
                  <div className='sum-info-1-2'>START LEARNING NOW</div>
                </div>
              </div>

              <div className="summary-column-2">
                <div className='distance-box2'>
                  <div className='sum-info-2'>Popular Courses</div>
                  <div className="sum-info-2-1">Power Electronics</div>
                  <div className="sum-info-2-2">Free</div>
                  <div className="width-last-big">
                    <hr className='width-last'/>
                  </div>
                  <div className="sum-info-2-1">Introduction to Calculus</div>
                  <div className="sum-info-2-2">Free</div>
                  <div className="width-last-big">
                    <hr className='width-last'/>
                  </div>
                  <div className="sum-info-2-1">Basic Laws and Policies</div>
                  <div className="sum-info-2-2">Free</div>
                  
                </div>
              </div>

              <div className="summary-column-3">
                <div className="distance-box3">
                  <div className="sum-info-3">Quick Links</div>
                  <div className='ic-first'>
                    <div className='icon-first'>
                      <div className="icon-last"><MdOutlineNavigateNext /></div>
                      All Courses
                    </div>
                    <div className="width-last-big">
                      <hr className='width-last'/>
                    </div>

                    <div className='icon-first'>
                      <div className="icon-last"><MdOutlineNavigateNext /></div>
                      Summer Sessions
                    </div>
                    <div className="width-last-big">
                      <hr className='width-last'/>
                    </div>

                    <div className='icon-first'>
                      <div className="icon-last"><MdOutlineNavigateNext /></div>
                      Professional Courses
                    </div>
                    <div className="width-last-big">
                      <hr className='width-last'/>
                    </div>

                    <div className='icon-first'>
                      <div className="icon-last"><MdOutlineNavigateNext /></div>
                      Privacy Policy
                    </div>
                    <div className="width-last-big">
                      <hr className='width-last'/>
                    </div>

                    <div className='icon-first'>
                      <div className="icon-last"><MdOutlineNavigateNext /></div>
                      Terms of Use
                    </div>
                    <div className="width-last-big">
                      <hr className='width-last'/>
                    </div>
                  </div>
                </div>  
              </div>

              <div className="summary-column-4">
                <div className="distance-box4">
                  <div className="sum-info-4">Contact Us</div>
                  <div className='group-location-ic'>
                    <div className='icon-location'> <FaLocationArrow /> </div>
                    <div className='info-content-bottom'>The Design Themes Inc. Mary Jane St, Sydney 2233 Australia</div>
                  </div>
                  <hr className='width-last'/>
                  <div className='group-phone-ic'>
                    <div className="icon-phone"> <MdLocalPhone /></div>
                    <div className='phone-content-bottom'>+11 (2) 7654 2233</div>
                  </div>  
                  
                  <hr className='width-last'/>
                  <div className='group-table-phone-ic'>
                    <div className='group-ic-table-phone'>
                      <div className="icon-table-phone"><img className="vector5" src="../public/vector5.svg" alt="vector" /></div>
                    </div>  
                    <div className='table-phone-content-bottom'>+11 (5) 7654 2244</div>
                  </div>
                  <hr className='width-last'/>
                  <div className="group-mail-ic">
                    <div className="icon-mail"><AiOutlineMail /></div>
                    <div className='mail-content-bottom'>lms@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      <div className="heading-last-page">
          <div className='last-head-big'>
            <div className='last-head-small'>
              <div className='heading-last-1'>Copyright © 2020 LMS Theme All Rights Reserved</div>
                <div className='last-distance'>
                  <span className='last'></span>
                </div>
              <div className='heading-last-2'>Design Themes</div>
            </div>
            <div className='last-ic-head'>
              <div className='last-ic'>
                <div className="ic-1"> <FaTwitter /> </div>
                <div className="ic-2"> <FaYoutube /></div>
                <div className="ic-3"> <FaFacebookF /></div>
                <div className="ic-4"> <FaSkype /></div>
              </div>
            </div>
          </div>
      </div>    
    </div>  
  );
}

export default App;
