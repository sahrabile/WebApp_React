#!/bin/bash
#don't forget to make this script file executable by the comand
#chmod u+x ./file-name.sh

#now yo can execute by typing ./file-name.sh

#download babel.js into current directory
curl -L https://unpkg.com/babel-standalone/babel.min.js > ./babel.js


#for curl in windows powershell see
#https://www.delftstack.com/howto/powershell/run-curl-command-via-powershell/