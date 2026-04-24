/**
 * bawug-gadget-starter — Gadget-HelloStarter.js
 *
 * Lives at MediaWiki:Gadget-HelloStarter.js on the wiki.
 * Inserts a banner above article content on content pages.
 */
( function () {
	'use strict';

	mw.hook( 'wikipage.content' ).add( function ( $content ) {
		// Article namespace only (namespace 0). Adjust as needed.
		if ( mw.config.get( 'wgNamespaceNumber' ) !== 0 ) {
			return;
		}

		// Avoid double-insertion if the hook fires more than once.
		if ( document.getElementById( 'hello-starter-banner' ) ) {
			return;
		}

		var pageName = mw.config.get( 'wgTitle' );
		var $banner = $( '<div>' )
			.attr( 'id', 'hello-starter-banner' )
			.addClass( 'hello-starter-banner' )
			.text( 'Hello from bawug-gadget-starter on "' + pageName + '".' );

		$content.before( $banner );
	} );
}() );
