


let basewebURL;
let meetingbasewebURL;


if (window.location.host === 'localhost:3000'){ 
   basewebURL="https://webapp.diracai.com";
   meetingbasewebURL="https://webapp.diracai.com";
   }


if (window.location.host === '127.0.0.1:8000'){
   basewebURL="http://127.0.0.1:8000";
   meetingbasewebURL=basewebURL;
   }



if (window.location.host === 'webapp.diracai.com'){
   basewebURL="https://webapp.diracai.com";
   meetingbasewebURL=basewebURL;
   }

if (window.location.host === 'app.diracai.com'){
   basewebURL="https://app.diracai.com";
   meetingbasewebURL=basewebURL;

   }






export default basewebURL;

export {meetingbasewebURL};
