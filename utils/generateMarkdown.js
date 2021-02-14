// Global declaration of lincense details
const lincenseInfoList = [
  {
    name: 'GNU GPLv3',
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    link: "(https://www.gnu.org/licenses/gpl-3.0)"
  },
  {
    name: 'Mozilla Public License 2.0',
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]",
    link: "(https://opensource.org/licenses/MPL-2.0)"
  },
  {
    name: 'Apache License 2.0',
    badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
    link: "(https://opensource.org/licenses/Apache-2.0)"
  },
  {
    name: 'MIT License',
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    link: "(https://opensource.org/licenses/MIT)"
  },
  {
    name: 'Boost Software License 1.0',
    badge: "",
    link: ""
  },
  {
    name: 'The Unlicense',
    badge: "",
    link: ""
  }
  ];
  // Created a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    console.log(license);
    const selectedLicenseList = lincenseInfoList.filter(item => item.name === license);
    console.log(selectedLicenseList);
    console.log(selectedLicenseList[0].badge);
    return selectedLicenseList[0].badge;
  }
  
  // Created a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    const selectedLicenseList = lincenseInfoList.filter(item => item.name === license);
    return selectedLicenseList[0].link;
  }
  
  // Created a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license)
    {
      return `${license}`;
    } else return ""
  };
  
  // TODO: Create a function to generate markdown for README
  // function generateMarkdown(data){
  // // badge of the license
  // return `${renderLicenseBadge(data.license)}`
  // } 
  
  
  
  // Created a function to generate markdown for README
  function generateMarkdown(data) {
    if(data.license === "GNU GPLv3"){
      data.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if(data.license === "Mozilla Public License 2.0"){
      data.license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }else if(data.license === "Apache License 2.0"){
      data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }else if(data.license === "MIT License"){
      data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
  // badge of the license
     return `
    
  #  Project Title
     ${data.title}
    
  ##  Description
    ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install dependencies, run the below command :
    ${data.installation}
  ## Usage
     ${data.usage}
  ## License
    This repository is covered under the license '${data.license}' 
    Refer ${data.license} for more detailed info 
    ${data.license}
    
  
  ## Contribution
     ${data.contributing}
  ## Tests
     ${data.tests}
  ## Questions
   If you have any questions reach me @ 
   Email : [sherlockholmes.swigart92@gmail.com](mailto:${data.email})
   Github : [Michaelswigart](https://github.com/${data.email})
  `;
  }
  
  
  module.exports = generateMarkdown;