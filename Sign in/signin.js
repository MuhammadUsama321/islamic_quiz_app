const firebaseConfig = {
    apiKey: "AIzaSyAMsx8rr6blKOk0IBy4Le4yWWWeeiWJ5xc",
    authDomain: "islamic-quiz-2802f.firebaseapp.com",
    projectId: "islamic-quiz-2802f",
    storageBucket: "islamic-quiz-2802f.firebasestorage.app",
    messagingSenderId: "575387644804",
    appId: "1:575387644804:web:d79ed1e0c979d3ffa363d1"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  function signIn(){

    var loginemail = document.getElementById("loginemail")
    var loginPassword = document.getElementById("loginpassword")

    console.log(loginemail , loginPassword);
    
    firebase.auth().createUserWithEmailAndPassword(loginemail.value, loginPassword.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
      window.location.href = "../Home/home.html"
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
    });

  }