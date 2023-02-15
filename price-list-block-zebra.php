<?php
/**
 * Plugin Name:       Price List Block Zebra
 * Description:       A wordpress block for creating price lists. You can use it to create a menu for a restaurant, prices for a barber shop or anything like it. All editing is done inside the block editor. No confusing menus. Just easy to use!
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Rob Monhemius
 * Text Domain:       price-list-block-zebra
 * @package           price-list-block-zebra
 */

add_action( 'init', function() {

	register_block_type( __DIR__ . '/build');

});
