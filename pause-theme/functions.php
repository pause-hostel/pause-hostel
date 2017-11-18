<?php

function add_react_bundle() {
  // Update placeholder to contain your built css
  wp_enqueue_style( 'css-bundle', get_template_directory_uri() . '/css/placeholder.css',false,'1.1','all');
  // Update placeholder to contain your built js
	wp_enqueue_script( 'js-bundle', get_template_directory_uri() . '/js/placeholder.js', array(), '20151215', true );
}
add_action( 'wp_enqueue_scripts', 'add_react_bundle' );
 ?>
