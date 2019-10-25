//window.alert("Hey!")


  var rootRef = firebase.database().ref().child("Heading");

  rootRef.on('child_added',snap =>{
  window.alert(snap.val());

  });
