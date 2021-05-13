import React, { Component } from 'react';
import NavSection from '../components/organisms/nav-section/index'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class shopCategory extends Component {
    state = {}
    render() {
        return (<div>
            <NavSection />
            <div className="heading">
                <center className="heading-sub">SHOP BY CATEGORY!</center>
            </div>
            <div className="catrgories-homepage">
                <div className="catrgories-homepage-sub-div">
                    <Link to="/category/Science and technology">
                        <div className="home-prod-img-div">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCq3B5DTsctpMYFDWHgh3KzmXNqQhyt2SQ4A&usqp=CAU" className="home-prod-img" />
                        </div>
                        <p>Science and technology</p>
                    </Link>
                </div>
                <div className="catrgories-homepage-sub-div">
                    <Link to="/category/Literature">
                        <div className="home-prod-img-div">
                            <img src="https://i2.wp.com/highschool.latimes.com/wp-content/uploads/2019/02/classic-lit-.jpg?fit=1024%2C768&ssl=1" className="home-prod-img" />
                        </div>
                        <p>Literature</p>
                    </Link>
                </div>
                <div className="catrgories-homepage-sub-div">
                    <Link to="/category/History">
                        <div className="home-prod-img-div">
                            <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_660,h_382/https://discoverpods.com/wp-content/uploads/2018/12/maps-atlantic-oldtimer-car-compass-vintage-1442539-pxhere.com_-660x382.jpg" className="home-prod-img" />
                        </div>
                        <p>History</p>
                    </Link>
                </div>


                <div className="catrgories-homepage-sub-div">
                    <Link to="/category/Geography">
                        <div className="home-prod-img-div">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-EkVmG9VcCzhwHSJvZ8Cqt43tToBuqUCTw&usqp=CAU" className="home-prod-img" />
                        </div>
                        <p>Geography</p>
                    </Link>
                </div>  <div className="catrgories-homepage-sub-div">
                    <Link to="/category/Civics">
                        <div className="home-prod-img-div">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyX6j5DzlD38nIos9cD04FH9aat9EpU7ofMg&usqp=CAU" className="home-prod-img" />
                        </div>
                        <p>Civics</p>
                    </Link>
                </div>
                <div className="catrgories-homepage-sub-div">
                    <Link to="/category/Kids">
                        <div className="home-prod-img-div">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyThjCQCI2zDap7xUG0YlvQkWz_OoF1NbIg&usqp=CAU" className="home-prod-img" />
                        </div>
                        <p>Kids</p>
                    </Link>
                </div>
                <div className="catrgories-homepage-sub-div">
                    <Link to="/category/Novel">
                        <div className="home-prod-img-div">
                            <img src="https://specials-images.forbesimg.com/imageserve/5d6ed75caea4d30008f00258/960x0.jpg?fit=scale" className="home-prod-img" />
                        </div>
                        <p>Novels</p>
                    </Link>
                </div>
                <div className="catrgories-homepage-sub-div">
                    <Link to="/category/Audiobooks">
                        <div className="home-prod-img-div">
                            <img src="https://www.tckpublishing.com/wp-content/uploads/2015/02/Audiobook-Companion-PDF.jpg" className="home-prod-img" />
                        </div>
                        <p>Audiobooks</p>
                    </Link>
                </div>
                <div className="catrgories-homepage-sub-div">
                    <Link to="/category/Encyclopedia">
                        <div className="home-prod-img-div">
                            <img src="https://media.gettyimages.com/photos/encyclopedia-on-a-white-background-picture-id471099459?s=170667a" className="home-prod-img" />
                        </div>
                        <p>Encyclopedia</p>
                    </Link>
                </div>
                <div className="catrgories-homepage-sub-div">
                    <Link to="/category/Upsc">
                        <div className="home-prod-img-div">
                            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-10/18/full/1571362897-281.jpg" className="home-prod-img" />
                        </div>
                        <p>Upsc prepration</p>
                    </Link>
                </div>
                <div className="catrgories-homepage-sub-div">
                    <Link to="/category/Jee">
                        <div className="home-prod-img-div">
                            <img src="https://educationbytes.in/wp-content/uploads/2019/11/unnamed.jpg" className="home-prod-img" />
                        </div>
                        <p>Jee prepration</p>
                    </Link>
                </div>
                <div className="catrgories-homepage-sub-div">
                    <Link to="/category/Neet">
                        <div className="home-prod-img-div">
                            <img src="https://english.mathrubhumi.com/polopoly_fs/1.5360187.1610702143!/httpImage/image.jpg_gen/derivatives/landscape_894_577/image.jpg" className="home-prod-img" />
                        </div>
                        <p>Neet prepration</p>
                    </Link>
                </div>
            </div>
        </div>);
    }
}

export default shopCategory;