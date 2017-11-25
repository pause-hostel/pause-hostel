<?php
/*
Plugin Name: Email Proxy
Version: 0.0.1
Description: Proxy for sending email from remote WordPress servers.
Author:
Author URI:
Plugin URI:
*/

namespace PAUSE\EmailProxy;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action( 'plugins_loaded', 'PAUSE\EmailProxy\bootstrap' );
/**
 * Loads the rest of the REST Email Proxy.
 *
 * @since 0.0.1
 */
function bootstrap() {
	include_once __DIR__ . '/includes/endpoint.php';
}
