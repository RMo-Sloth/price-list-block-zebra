<?php
/**
 * Plugin Name:       Price List Block Zebra
 * Description:       A wordpress block for creating price lists. You can use it to create a menu for a restaurant, prices for a barber shop or anything like it. All editing is done inside the block editor. No confusing menus, no settings. Just easy to use!
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            robmo
 * License:           GPL-2.0-or-later ( modify later )
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html ( modify later )
 * Text Domain:       price-list-block-zebra
 *
 * @package           price-list-block-zebra
 */

add_action( 'init', function() {

	register_block_type( __DIR__ . '/block.json');

});
