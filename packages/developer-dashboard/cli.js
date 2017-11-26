#! /bin/sh
NPM_ROOT="$(npm root -g)";
DD_PATH="${NPM_ROOT}/@rafaelcalpena/developer-dashboard";
CONFIG_PATH=${PWD}/config.js npm start --prefix ${DD_PATH}
