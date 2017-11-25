<?php

namespace PAUSE\EmailProxy\Endpoint;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action( 'rest_api_init', 'PAUSE\EmailProxy\Endpoint\register_routes' );

/**
 * Registers the email-proxy/v1/email REST API endpoint.
 *
 * @since 0.0.1
 */
function register_routes() {
	register_rest_route( 'v2/email-proxy/v1', '/email', array(
		'methods' => 'POST',
		'callback' => 'PAUSE\EmailProxy\Endpoint\callback',
	) );
}

/**
 * Handles the email-proxy/v1/email endpoint callback and sends
 * an email when valid information is provided.
 *
 * @since 0.0.1
 *
 * @param \WP_REST_Request $data
 * @return \WP_REST_Response
 */
function callback( $data ) {
	$req = $data->get_body();
	$email = json_decode(($req), true);


	// // Do not send email by default. Another plugin should control the secret to success.
	// if ( ! isset( $email['secret_key'] ) || ! $email['secret_key'] == 'testy' ) {
	// 	return new \WP_Rest_Response( array(
	// 		'error' => 'Invalid secret.',
	// 	), 403 );
	// }

	$expected = array(
		'send_to',
		'reply_to',
		'send_from_name',
		'subject',
		'message',
		'secret_key',
	);
	foreach ( $expected as $expect ) {
		if ( ! isset( $email[ $expect ] ) ) {
			return new \WP_REST_Response( array(
				'error' => 'An required parameter was not provided in the request.',
			), 400 );
		}
	}

	$send_to = sanitize_email( $email['send_to'] );
	$subject = sanitize_text_field( $email['subject'] );
	$message = wp_kses_post( $email['message'] );

	$headers = array(
		'from: "' . sanitize_text_field( $email['send_from_name'] ) . '" <' . sanitize_email( $email['reply_to'] ) . '>',
		'reply-to: ' . sanitize_email( $email['reply_to'] ),
	);

	$result = wp_mail( $send_to, $subject, $message, $headers );

	return new \WP_REST_Response( array(
		'success' => $result,
	), 200 );
}
