import firebase from 'firebase';


const settings = {timestampsInSnapshots: true};

const config = {
    projectId: 'reactchat-c707c', 
    apiKey: 'AlzaSyBvoxxV_cKWej-x3bEaMOwCZcwFrRahyp4',
    databaseURL: 'firebase-adminsdk-aihjf@reactchat-c707c.iam.gserviceaccunt.com'
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;