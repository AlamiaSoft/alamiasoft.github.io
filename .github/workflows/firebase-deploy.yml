name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main # Change this to 'master' if that is your default branch

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Project
        run: npm run build
        # This command must generate the 'dist' folder configured in firebase.json

      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          # Replace the variable below with the actual secret name created in Step 2
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_ALAMIASOFTFIREBASESITE }}'
          channelId: live
          projectId: alamiasoftfirebasesite # Replace with your actual Firebase project ID
