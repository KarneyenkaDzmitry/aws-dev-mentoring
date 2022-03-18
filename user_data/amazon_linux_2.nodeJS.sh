#!/bin/bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
export NVM_DIR="$HOME/.nvm" && \
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  && \
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  
nvm install 16.14.1

aws s3 cp s3://dzmitry-karneyenka-s3-versioning/aws-developer-project-master.zip ./
unzip aws-developer-project-master.zip
cd aws-developer-project-master || exit
npm install
npm run build
npm run start