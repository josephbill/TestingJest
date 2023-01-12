const englishCode = "en-US";
const spanishCode = "es-ES"

//  function getAboutUsLink(language){
//     switch (language.toLowerCase()){
//       case englishCode.toLowerCase():
//         return '/about-us';
//       case spanishCode.toLowerCase():
//         return '/acerca-de';
//     }
//     return '';
// };

// function addSum (a,b){
//     return a + b;
// }

const indexOperations = {
    getAboutUsLink: function getAboutUsLink(language){
    switch (language.toLowerCase()){
      case englishCode.toLowerCase():
        return '/about-us';
      case spanishCode.toLowerCase():
        return '/acerca-de';
    }
    return '';
    },

    addSum :  function addSum (a,b){
             return a + b;
         }
}

module.exports = indexOperations
