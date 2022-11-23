import React, { useEffect } from 'react'
import profileImg from "../images/pImage.jpeg"
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';


function About() {
    const history = useHistory();
    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
           // const data = await res.json();
            //console.log(data);

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
          //  console.log(err);
            history.push('/login');

        }
    }
    useEffect(() => {
        callAboutPage();
    }, []);


    
    return (
        <>
                <div className="container emp-profile">
                    <form method="GET">
                        <div className="row  justify-content-center mt-3 pt-5 pb-5">
                            <div className="col-sm-4 col-4">
                                <div className="profile-img">
                                    <img src={profileImg} alt="profile" />
                                </div>
                            </div>
                            <div className="col-sm-8 col-8">
                                <div className="profile-head">
                                    <h5>Keshav Tayal</h5>
                                    <h6>Web Developer</h6>
                                    <p className="profile-head mt-3 mb-5">Profile</p>
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* left side */}
                            {/* <div className="col-sm-3">
                                <div className="profile-work mt-2">
                                    <p>Work-link</p>
                                    <a href="#0" target="_keshav">Facebook</a><br />
                                    <a href="#0" target="_keshav">Instagram</a><br />
                                    <a href="#0" target="_keshav">LinkedIn</a><br />
                                    <a href="#0" target="_keshav">Github</a><br />
                                </div>
                            </div> */}
                            {/* right side */}
                            <div className="col-sm-12 pb-5 about-info">
                                <div className="tab-content profile-tab mx-5" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    
                                        <div className="row mt-3">
                                            <div className="col-sm-6 col-4">
                                                <p>User Id</p>
                                            </div>
                                            <div className="col-sm-6 col-8">
                                                <p>g75fhffdb6gn5hg6jsr98h</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-sm-6 col-4">
                                                <p>Nmae</p>
                                            </div>
                                            <div className="col-sm-6 col-8">
                                                <p>Keshav</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-sm-6 col-4">
                                                <p>Email</p>
                                            </div>
                                            <div className="col-sm-6 col-8">
                                                <p>keshavtayal002@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-sm-6 col-4">
                                                <p>Phone</p>
                                            </div>
                                            <div className="col-sm-6 col-8">
                                                <p>98989898989</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-sm-6 col-4">
                                                <p>Profession</p>
                                            </div>
                                            <div className="col-sm-6 col-8">
                                                <p>Web Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row mt-3">
                                            <div className="col-md-6 col-4">
                                                <p>Experiance</p>
                                            </div>
                                            <div className="col-md-6 col-8 px-5">
                                                <p>4 years</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6 col-4">
                                                <p>Experiance</p>
                                            </div>
                                            <div className="col-md-6 col-8 px-5">
                                                <p>4 years</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6 col-4">
                                                <p>Experiance</p>
                                            </div>
                                            <div className="col-md-6 col-8 px-5">
                                                <p>4 years</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6 col-4">
                                                <p>Experiance</p>
                                            </div>
                                            <div className="col-md-6 col-8 px-5">
                                                <p>4 years</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6 col-4">
                                                <p>Experiance</p>
                                            </div>
                                            <div className="col-md-6 col-8 px-5">
                                                <p>4 years</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
}

export default About
