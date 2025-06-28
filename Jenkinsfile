pipeline {
  agent any

  environment {
    IMAGE_NAME = 'veeruuuu/nodeapp'
    TAG = 'latest'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', url: 'https://github.com/veereshveeruu/Nodeapp.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build("${IMAGE_NAME}:${TAG}")
        }
      }
    }

    stage('Push to Docker Hub') {
      steps {
        withDockerRegistry([credentialsId: 'dockerhub-creds', url: '']) {
          script {
            docker.image("${IMAGE_NAME}:${TAG}").push()
          }
        }
      }
    }

    stage('Deploy (Test)') {
      steps {
        sh """
        docker rm -f testapp || true
        docker run -d --name testapp -p 8080:80 ${IMAGE_NAME}:${TAG}
        """
      }
    }
  }
}




