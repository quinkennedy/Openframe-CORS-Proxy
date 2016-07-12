#!/usr/bin/env bash
openssl req -x509 -newkey rsa:3072 -keyout cors-proxy-key.pem -out cors-proxy-cert.pem -days 11499 -nodes -subj "/C=US/ST=New York/L=New York City/O=Banal Inc./OU=CORS Dept./CN=localhost"
