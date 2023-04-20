
sudo apt install httpd -y

sudo systemctl enable httpd

sudo systemctl start httpd

sudo apt install git -y

sudo mkdir -p /home/ubuntu/demo

sudo cd /home/ubuntu/demo

sudo git clone https://github.com/ooghenekaro/cohort-quote-generator-static-demo.git

sudo cd cohort-quote-generator-static-demo

sudo cp index.html /var/www/html/

sudo cp barber-shop.png /var/www/html/

sudo cp quote.js /var/www/html/

sudo cp style.css /var/www/html/

copy your server ip and paste on a browser to test your application.
