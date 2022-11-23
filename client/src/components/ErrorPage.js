import React from 'react'
import './ErrorPage.css'
function ErrorPage() {
    return (
        <>
        <section className="error">
            <div className="epage">
                <h1>404</h1>
                <div class="cloak__wrapper">
                    <div class="cloak__container">
                        <div class="cloak"></div>
                    </div>
                </div>
                <div class="info">
                    <h3>We can't find that page</h3>
                    <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p><a href="/">Home</a>
                </div>
            </div>
            </section>
        </>
    )
}

export default ErrorPage
