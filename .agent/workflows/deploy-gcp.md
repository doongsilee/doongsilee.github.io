---
description: Deploy the application to Google Cloud Run
---

To deploy this Next.js application to Google Cloud Run, follow these steps:

1. **Prerequisites**: Ensure you have the [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) installed and initialized.

2. **Login to GCP**:
```bash
gcloud auth login
```

3. **Configure Project ID**:
// turbo
Replace `YOUR_PROJECT_ID` with your actual GCP project ID.
```bash
gcloud config set project YOUR_PROJECT_ID
```

4. **Deploy to Cloud Run**:
This command will build the image using Google Cloud Build and deploy it to Cloud Run.
// turbo
```bash
gcloud run deploy doongsilee-portfolio \
  --source . \
  --region asia-northeast3 \
  --allow-unauthenticated \
  --port 3000
```

*Note: The `--source .` flag automatically builds the container using the Dockerfile we created.*
