<?php
/**
 * Plugin Name:       My First Gutenberg Block Using React
 * Plugin URI:        htttps:/Gutenberg.com
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           1.0.0
 * Author:            Gutenberg
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-gutenberg-block
 *
 * @package Gutenberg
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function gutenberg_custom_gutenberg_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'gutenberg_custom_gutenberg_block_block_init' );
