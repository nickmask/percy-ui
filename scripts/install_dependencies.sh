#!/bin/bash

# need to first somehow get the files to the right locations and ready to go.
# something in here: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html

sudo apt-get update # Update machine
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - sudo apt-get install -y nodejs # install node and npm
cd percy-ui
npm install