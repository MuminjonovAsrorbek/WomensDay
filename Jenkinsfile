pipeline {
    agent any

    environment {
        IMAGE_NAME = "asrorbek/womenday:${env.BUILD_NUMBER}"
        LATEST_IMAGE = "asrorbek/womenday:latest"
        CONTAINER_NAME = 'womenday-container'
        HOST_PORT = '5174'   // 5173 band bo'lgani uchun
        CONTAINER_PORT = '80'
    }

    stages {
        stage('1. Clone Repo') {
            steps {
                cleanWs()
                echo 'Cloning repository...'
                git branch: 'main',
                    url: 'https://github.com/MuminjonovAsrorbek/WomensDay.git',
                    credentialsId: 'github-token'
                echo 'Repository cloned successfully.'
            }
        }

        stage('2. Build Docker Image') {
            steps {
                echo "Building Docker image: ${IMAGE_NAME}"
                sh "docker build -t ${IMAGE_NAME} -t ${LATEST_IMAGE} ."
                echo "Docker image built: ${IMAGE_NAME} and ${LATEST_IMAGE}"
            }
        }

        stage('3. Deploy Application') {
            steps {
                echo "Deploying container: ${CONTAINER_NAME}"
                sh "docker rm -f ${CONTAINER_NAME} || true"

                sh "docker run -d --name ${CONTAINER_NAME} --restart unless-stopped -p ${HOST_PORT}:${CONTAINER_PORT} ${LATEST_IMAGE}"
                echo "Application deployed at http://localhost:${HOST_PORT}"
            }
        }

        stage('4. Cleanup Old Images') {
            steps {
                echo "Cleaning old images for repo asrorbek/womenday"
                sh '''
                    set -e
                    # Remove dangling layers first
                    docker image prune -f --filter "dangling=true"

                    # Remove old tags for this repo except latest and current build
                    docker images --format '{{.Repository}}:{{.Tag}} {{.ID}}' --filter "reference=asrorbek/womenday:*" \
                      | awk '$1 !~ /:latest$/ && $1 !~ /:'"$BUILD_NUMBER"'$/ {print $2}' \
                      | sort -u \
                      | xargs -r docker rmi -f
                '''
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished. Cleaning workspace...'
            cleanWs()
        }
    }
}
