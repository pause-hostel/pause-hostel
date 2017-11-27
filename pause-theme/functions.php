<?php

function add_react_bundle() {
  wp_enqueue_style('css-bundle', get_template_directory_uri() . '/css/prod.css', false, filemtime(get_stylesheet_directory() . '/css/prod.css'));
	wp_enqueue_script( 'js-bundle', get_template_directory_uri() . '/js/prod.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'add_react_bundle' );
 ?>
