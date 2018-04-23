#!/bin/bash

# need to first somehow get the files to the right locations and ready to go.
# something in here: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html

sudo apt-get update # Update machine
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts

cd ~/percy-ui
npm install