React/Wordpress website for the nonprofit Pause Hostel and animal rescue shelter
in Mexico and Belize.

## Project setup

Frontend - React spa application

Backend - Wordpress headless api

The react app will be loaded as wordpress theme. The wordpress theme can be
found in the project at `pause-theme`

The theme needs to be copied to over the `wp-content/themes` folder of the
wordpress install in production.

All content can be changed in wordpress.  Information regarding the content fields can be found in the folder `wordpress-content-guide`

## Developing locally

You need to have local wordpress installed

Also the following plugins installed: <add list here >

Download and bootstrap the data (TODO)

Run `npm start`

## Deploying to production (WIP)

Run `npm build` Copy build to `theme location` Ftp theme to production.
