import React from "react";


const Productlist = ({ setInputText }) => {
    return (
        <form>
            <div classname="content">
                <h4>Hello, My name is </h4>
                <h1>
                    Nny <span style={{ fontFamily: '"Tangerine", serif' }}>Nhi</span>
                </h1>
                <h3>I'm a Web Developer</h3>
            </div>

            <div className="about">
                <h1>Contact</h1>
                <p>My real name is Nguyen Ngoc Yen Nhi, everyone usually call my nickname is Annie. I was born in 2002 (20 years old). I'm currently studying at Ho Chi Minh City University of Education, majoring in information technology.I entered the programming environment when I finished 12th grade. Now I am on my way to pursue my programming dream. With a sociable personality, a quick learner and a special ability to self-study, I can work under pressure, so I can adapt to any different environment.</p>
                <p>Let Me Get You A Beautiful Website</p>
                <ul>

                    <a href="https://mail.google.com/mail">
                        <i className="fa-solid fa-envelope" />
                        Gmail
                    </a>
                    <br />
                    <a href="https://www.facebook.com/profile.php?id=100033294522764">
                        <i className="fa-brands fa-facebook-square" />
                        Facebook
                    </a>
                    <br />
                    <a href="https://www.facebook.com/messages">
                        <i className="fa-brands fa-facebook-messenger" />
                        Messages
                    </a>
                    <br />
                    <a href="https://www.instagram.com/kdi452k2/">
                        <i className="fa-brands fa-instagram-square" />
                        Instagram
                    </a>
                    <br />
                    <a>
                        <i className="fa fa-phone" />
                        <strong>Phone:</strong>
                        <span>079 77 45 043</span>
                    </a>
                    <br />
                    <a href="https://goo.gl/maps/eQJtcFK2MGrkWt979">
                        <i className="fa fa-map-marker" />
                        <strong>Home town:</strong> <span>Chi Minh city, Việt Nam country</span>
                    </a>

                </ul>
            </div>
        </form>
    );
};
export default Productlist;