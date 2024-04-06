pipeline {
    agent any
    stages {
       
        stage("run docker compose"){
            steps{
                sh "docker-compose up --build -d"
                echo "all containers are created and running"
            }
        }
    }
}    
        