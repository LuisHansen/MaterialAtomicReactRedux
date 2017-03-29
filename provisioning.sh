sudo apt-get update
wget https://nodejs.org/dist/v7.7.4/node-v7.7.4-linux-x64.tar.xz
sudo apt-get install xz-utils
tar -C /usr/local --strip-components 1 -xJf node-v7.7.4-linux-x64.tar.xz
sudo rm -rf ~/node-v7.7.4-linux-x64.tar.xz
cd /dashboard-app
npm install
exit 0
