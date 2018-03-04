'use strict';

var toggle = false;

var toggleVisibilty = function toggleVisibilty() {
    toggle = !toggle;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Toggle Visibility'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibilty },
            toggle ? 'Hide details' : 'Show details'
        ),
        toggle && React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
