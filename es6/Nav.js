'use strict';

export default Nav;

import React from 'react';
import Box from './Box';
import Text from './Text';
function Nav(_ref) {
	var items = _ref.items;

	return React.createElement(
		Box,
		{ row: true },
		items.map(function (item) {
			return React.createElement(NavItem, item);
		})
	);
}

function NavItem(_ref2) {
	var title = _ref2.title;
	var url = _ref2.url;

	return React.createElement(
		Box,
		{ url: url, column: true, alignItems: 'center', grow: 1, height: 49 },
		React.createElement(Box, { backgroundColor: '#111', width: 30, height: 30 }),
		React.createElement(
			Text,
			{ align: 'center', size: 13 },
			title
		)
	);
}