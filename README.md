#!/bin/bash
# We Install Apache HTTP Server
sudo apt update -y
sudo apt install apache2 -y

# We Enable and start Apache
sudo systemctl enable apache2
sudo systemctl start apache2

# We Install Git
sudo apt install git -y

# We Clone the repository
mkdir -p /home/ubuntu/demo
cd /home/ubuntu/demo
git clone https://github.com/ooghenekaro/cohort-quote-generator-static-demo.git

# we Copy the static files to Apache's web root
cd cohort-quote-generator-static-demo
cp index.html barber-shop.jpg quote.js style.css /var/www/html/
