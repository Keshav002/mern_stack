import React, { useEffect, useState } from 'react'
import contactImg from '../images/contact.jpg'
import 'bootstrap/dist/css/bootstrap.css';


function Contact() {
	const [userData, setUserData] = useState({ name: "", email: "", subject: "", message: "" });
	const callContactPage = async () => {
		try {
			const res = await fetch('/getdata', {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
			});
			const data = await res.json();
			//console.log(data);
			setUserData({ ...userData, name: data.name, email: data.email });

			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			//  console.log(err);

		}
	}
	useEffect(() => {
		callContactPage();
	}, []);

	//Storing data in states
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserData({ ...userData, [name]: value })
	}

	// send the data to backend
	const contactForm = async (e) => {
		e.preventDefault();
		const { name, email, subject, message } = userData;
		const res = await fetch('/contact', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name, email, subject, message
			})
		});
		const data = await res.json();
		if (!data) {
			console.log("Message not send");
		} else {
			alert('Message send');
			setUserData({ ...userData, message: "", subject: "" });
		}
	}

	return (
		<>

			<section class="ftco-section">
				<div class="page-container contact-container">
					<div class="row justify-content-center">
						<div class="col-md-12">
							<div class="wrapper">
								<div class="row mb-5 media-icons">
									<div class="col-md-3">
										<div class="dbox w-100 text-center">
											<div class="icon d-flex align-items-center justify-content-center">
												<i class="zmdi zmdi-pin"></i>
											</div>
											<div class="text">
												<p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
											</div>
										</div>
									</div>
									<div class="col-md-3">
										<div class="dbox w-100 text-center">
											<div class="icon d-flex align-items-center justify-content-center">
												<i class="zmdi zmdi-phone in talk"></i>
											</div>
											<div class="text">
												<p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
											</div>
										</div>
									</div>
									<div class="col-md-3">
										<div class="dbox w-100 text-center">
											<div class="icon d-flex align-items-center justify-content-center">
												<i class="zmdi zmdi-email"></i>
											</div>
											<div class="text">
												<p><span>Email:</span> <a href="mailto:keshavtayal002@gmail.com">keshavtayal002@gmail.com</a></p>
											</div>
										</div>
									</div>
									<div class="col-md-3">
										<div class="dbox w-100 text-center">
											<div class="icon d-flex align-items-center justify-content-center">
												<i class="zmdi zmdi-view-web"></i>
											</div>
											<div class="text">
												<p><span>Website</span> <a href="#">yoursite.com</a></p>
											</div>
										</div>
									</div>
								</div>
								<div class="row no-gutters">
									<div class="col-md-7">
										<div class="contact-wrap w-100 p-md-5 p-4">
											<h3 class="mb-4">Contact Us</h3>
											<form method="POST" id="contactForm" name="contactForm" class="contactForm">
												<div class="row">
													<div className="group">
														<div classsName="col-md-6">
															<div className="cform-group">

																<input type="text" className="form-control" name="name" id="name" value={userData.name} onChange={handleInput} placeholder="Name" required="true" />
															</div>
														</div>
														<div className="col-md-6">
															<div className="cform-group">

																<input type="email" className="form-control" name="email" id="email" value={userData.email} onChange={handleInput} placeholder="Email" required="true" />
															</div>
														</div>
													</div>
													<div class="col-md-12">
														<div class="cform-group">

															<input type="text" class="form-control" name="subject" id="subject" value={userData.subject} onChange={handleInput} placeholder="Subject" required="true" />
														</div>
													</div>
													<div class="col-md-12">
														<div class="cform-group">

															<textarea name="message" class="cform-control" id="message" cols="50" rows="6" placeholder="Message"
																value={userData.message} onChange={handleInput} required="true"></textarea>
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group form-button">
															<input type="submit" name="contact" id="contact" class="form-submit" value="Send Message" onClick={contactForm} />
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div class="col-md-5 d-flex align-items-stretch">
										<div class="info-wrap w-100 p-5 contact-image" style={{ backgroundImage: `url(${contactImg})` }}  >
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


		</>
	)
}

export default Contact
