function generateHTML(data){
    return `
    # Project Title: ${data.projectTitle}

    ## Description 
    ${data.description}

    ## Table Of Contents

    * [Installation](#installation)
    * [License](#license)
    * [Project URL](#projecturl)
    
    ### Installation
    ${data.install}

    ### License
    ${data.license}

    ### Project URL
    ${data.projectUrl}
    `;
}



module.exports = generateHTML;