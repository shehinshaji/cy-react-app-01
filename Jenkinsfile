pipeline {
    agent any
    options {
        disableConcurrentBuilds(abortPrevious: true)
    }
    environment {
            NODE_TAG = "18-alpine3.17"
        }
    stages {
        stage("Analysis") {
            agent {
                docker {
                    image "node:${NODE_TAG}"
                    reuseNode true
                }
            }
            stages {
                    stage("Setup") {
                        steps {
                            catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                                sh script: 'npm install', label: 'node module installation'
                            }
                        }
                    }

                    stage("Build") {
                        steps {
                            catchError(buildResult: 'UNSTABLE', stageResult: 'FAILURE') {
                                sh script: 'npm run build', label: 'react build'
                            }
                        }
                    }

            }
                    
        }
    }
    post {
        cleanup {
            cleanWs deleteDirs: true
        }
    }
}
