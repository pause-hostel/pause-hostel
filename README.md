# React/Wordpress website for the nonprofit Pause Hostel and animal rescue shelter in Mexico and Belize.

## Project setup

Frontend - React spa application

Backend - Wordpress headless api

The react app will be loaded as wordpress theme. The wordpress theme can be
found in the project at `pause-theme`

The theme needs to be copied to over the `wp-content/themes` folder of the
wordpress install in production.

All content can be changed in wordpress. Documentation regarding the content
fields can be found in the folder `wordpress-content-guide`

## Developing locally

Run `npm start`

Server should be fired up at `localhost:3000`

We use the production api as we can only read from it which is
`http://www.pausehostel.com/newsite/wp-json/wp/v2/`;

## Used plugins
This Project has a strong dependency with the following plugins:
 - Advanced custom fields ( used to create the components )
 - ACF TO REST API (this will add a `acf` prop to each response which we consume)
 - Custom post type ui - This allows us to create custom pages and endpoints to consume via the api
## Headless API

The rest api lives at http://www.pausehostel.com/wp-json/wp/v2/
With the following endpoint:
 - `/navigation`
 - `/contact`
 - `/about`
 - `/home`
 - `/chetumal`
 - `/cayecaulker`


## Deploying to production (WIP)

Before deploying to production always make a copy of the current site. Download
the theme via ftp, incase anything goes wrong.

To run the build: Run `npm build`.

This command will build/bundle the src code and copy the files to
`pause-theme/css pause-theme/js` & `pause-theme/css pause-theme/css`

`pause-theme/functions.php` will load the scripts.

To upload the theme you have two options:

1. Upload via ftp and replace the remote `pause-theme` with your local
   `pause-theme`
2. Or zip `pause-theme` and upload it via the admin panel.

## Email functionality

Configuration of the recipent email address must be done via the wordpress interace.
The email address lives in the navigation page.

The email functionality is managed by `/pause_mailer` which is also on the live
deployment.

If anything goes wrong with the mail functionality, you can try re-upload the
folder to the `plugin` directory on the server, before doing so update line `42`
in `/pause-mailer/includes/endpoint.php` with the email secret. 
