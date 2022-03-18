#!/bin/bash
sudo yum -y install httpd
sudo systemctl enable httpd.service
sudo systemctl start  httpd.service
sudo aws s3 cp s3://dzmitry-karneyenka-s3-static-website /var/www/html/staticwebsite --recursive