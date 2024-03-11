pipeline {
  agent any
  stages {
//     stage('Switch To Node Version 16') {
//           steps {
//             sh 'nvm use v16.14.2'
//           }
//         }
    stage('Compile Package') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Unit Test') {
      steps {
        sh 'npm test:unit'
      }
    }
    stage('Deploy in staging') {
       environment {
               EVN = 'staging'
          }
       steps {
           echo env.EVN
           sh 'npm start'
       }
   }
  }
}
