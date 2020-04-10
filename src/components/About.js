import React from 'react';

function about() {
    return (
        <div class="row about-me mx-0">
            <div class="col-xs-12 col-sm-6 col-md-4 pr-4 about-me-pic"><a name="targetabout"></a>
                <img class="profile-pic rounded-circle justify-content-end" src="/profile-picture.png" alt="Valentina Arango Eastman" />
            </div>
            <div class="col-xs-12 col-sm-6 col-md-8 px-5 about-me-info">
                <h2><b>About me</b></h2>
                <p class="about-me-text">Advertising and communications professional with more than 5 years of experience in marketing,
                social media, and advertising campaigns.
                <br />
                    Creative, proactive, and responsible professional with
                    extensive international work experience.
            </p>
                <a href="./pages/profile.html" class="button btn btn-primary read-more mt-2">Read more</a>
            </div>
        </div>

    )
}

export default about;