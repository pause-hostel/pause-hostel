# React/Wordpress website for the nonprofit Pause Hostel and animal rescue shelter
in Mexico and Belize.

## Project setup

Frontend - React spa application

Backend - Wordpress headless api

The react app will be loaded as wordpress theme. The wordpress theme can be
found in the project at `pause-theme`

The theme needs to be copied to over the `wp-content/themes` folder of the
wordpress install in production.

All content can be changed in wordpress.  Documentation regarding the content fields can be found in the folder `wordpress-content-guide`

## Developing locally

Run `npm start`

Server should be fired up at `localhost:3000`

We use the production api as we can only read from it which is `http://www.pausehostel.com/newsite/wp-json/wp/v2/`;

## Used plugins

## Headless API 

## Deploying to production (WIP)

Before deploying to production always make a copy of the current site. Download the theme via ftp, incase anything goes wrong.

Run `npm build`.

This command will build/bundle the src code and copy the files to pause-theme/css pause-theme/js

`pause-theme/functions.php` will load the scripts.

To uplodad the theme you have two options: 

1) Upload via ftp and replace the remote `pause-theme` with your local `pause-theme`
2) Or zip `pause-theme` and upload it via the admin panel.
