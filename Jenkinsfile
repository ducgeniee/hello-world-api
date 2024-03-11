pipeline {
  agent any
  stages {
    stage('Switch To Node Version 16') {
          steps {
            echo "nvm use v16.14.2"
            sleep 2
          }
        }
    stage('Compile Package') {
      steps {
        echo "npm install"
        sleep 2
      }
    }
    stage('Run Unit Test') {
      steps {
        echo "npm test:unit"
        sleep 2
      }
    }
    stage('Deploy in staging') {
       environment {
               EVN = 'staging'
          }
       steps {
           echo env.EVN
           echo "npm start"
       }
   }
  }
}
