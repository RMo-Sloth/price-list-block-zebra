<?php
/**
 * Plugin Name:       Price List Block
 * Description:       A wordpress block for creating price lists. You can use it to create a menu for a restaurant, prices for a barber shop or anything like it. All editing is done inside the block editor. No confusing menus. Just easy to use!
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Rob Monhemius
 * Author URI:		  https://waardwebsites.nl
 * Plugin URI: 		  https://pricelist-block.waardwebsites.nl/
 * Text Domain:       price-list-block-zebra
 * @package           price-list-block-zebra
 */

add_action( 'init', function() {

	register_block_type( __DIR__ . '/build');

});
