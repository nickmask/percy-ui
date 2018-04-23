So:

Currently deploys by

1. Travis kicking off a build from a push to master or PR
2. Travis then zips the projects and puts it into an s3 bucket
3. Travis then kicks off codedeploy which grabs the zip and puts it in the EC2 instance where the appspec.yml file tells it to.
4. appspec.yml can link into deployment lifecycle hooks and run shell scripts that are saved.

Questions

* Does it just dump the zip where the appspec.yml file says and end?
* How do I think install nginx and serve the react app over HTTPS.

appspec.yml: https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html
