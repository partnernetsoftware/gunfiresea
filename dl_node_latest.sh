echo DOWNLOAD NODEJS LINUX OF LATEST/V10LTS/V8LTS:

#cat <<EE > download_nodes.sh
#wget https://nodejs.org/dist/latest/node-\`wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p'\`.tar.gz
#NODE_VERSION_NUM=\`wget -qO- https://nodejs.org/dist/latest-v8.x/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p'\` && wget https://nodejs.org/dist/\$NODE_VERSION_NUM/node-\$NODE_VERSION_NUM.tar.gz
#NODE_VERSION_NUM=\`wget -qO- https://nodejs.org/dist/latest-v10.x/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p'\` && wget https://nodejs.org/dist/\$NODE_VERSION_NUM/node-\$NODE_VERSION_NUM.tar.gz
#NODE_VERSION_NUM=\`wget -qO- https://nodejs.org/dist/latest-v12.x/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p'\` && wget https://nodejs.org/dist/\$NODE_VERSION_NUM/node-\$NODE_VERSION_NUM.tar.gz
#EE
#
#bash download_nodes.sh

#NODE_VERSION_NUM=`wget -qO- https://nodejs.org/dist/latest-v12.x/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p'` && wget https://nodejs.org/dist/$NODE_VERSION_NUM/node-$NODE_VERSION_NUM.tar.gz

export NODE_VERSION_NUM=`wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p'`
wget -O node-$NODE_VERSION_NUM-linux-x64.tgz https://nodejs.org/dist/$NODE_VERSION_NUM/node-$NODE_VERSION_NUM-linux-x64.tar.gz 
tar xzvf node-$NODE_VERSION_NUM-linux-x64.tgz
rm -rf node-latest
cp -rvf node-$NODE_VERSION_NUM-linux-x64 node-latest

echo docker run -ti -v \$PWD:/work/ -w /work/ partnernetsoftware/auto_alpine_glibc node-latest/bin/node -p process.versions
docker run -ti -v $PWD:/work/ -w /work/ partnernetsoftware/auto_alpine_glibc node-latest/bin/node -p process.versions

