pipeline {
  agent any
  stages {
    stage('switch to node v.16') {
          steps {
            echo "nvm use v16.14.2"
            sleep 10
          }
        }
    stage('Compile package') {
      steps {
        echo "npm install"
        sleep 10
      }
    }
    stage('Run unit test') {
      steps {
        echo "npm test"
        sleep 30
      }
    }
//     stage('Deploy') {
//       steps {
//         echo "deploying"
//         stageMessage "sample stage message"
//       }
//     }
  }
}
