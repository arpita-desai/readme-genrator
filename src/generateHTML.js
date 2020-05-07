function generateHTML(data){
    return `
    # Project Title: ${data.projectTitle}

    ## Description 
    ${data.description}

    ## Table Of Contents

    * [Installation](#installation)
    * [License](#license)
    * [Project URL](#projecturl)
    * [Usage](#usage)
    * [Test](#test)
    
    ### Installation
    ${data.install}

    ### License
    ${data.license}

    ### Project URL
    ${data.projectUrl}

    ### Usage
    Usage of the project is to generate readme.md file dynamically.

    ### Test
    ${data.test}

    ## Question
    If do you have any query email on: ${data.email}
    `;
}



module.exports = generateHTML;