@echo off
echo Starting local MongoDB (portable, no install needed)...
if not exist "%~dp0.mongo\data" mkdir "%~dp0.mongo\data"
"%~dp0.mongo\mongodb-win32-x86_64-windows-7.0.14\bin\mongod.exe" --dbpath "%~dp0.mongo\data" --port 27017 --bind_ip 127.0.0.1
