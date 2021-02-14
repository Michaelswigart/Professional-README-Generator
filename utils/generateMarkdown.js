// Global declaration of lincense details
const lincenseInfoList = [
  {
    name: 'GNU GPLv3',
    badge: "",
    link: ""
  },
  {
    name: 'Mozilla Public License 2.0',
    badge: "",
    link: ""
  },
  {
    name: 'Apache License 2.0',
    badge: "",
    link: ""
  },
  {
    name: 'MIT License',
    badge: "",
    link: ""
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
  // badge of the license
     return `
    ${renderLicenseBadge(data.license)}
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
    This repository is covered under the license '${renderLicenseSection(data.license)}' 
    Refer ${renderLicenseLink(data.license)} for more detailed info 
    
  
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