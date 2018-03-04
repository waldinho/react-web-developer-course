let toggle = false;

const toggleVisibilty = () => {
        toggle = !toggle;
        render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Toggle Visibility</h1>
            <button onClick={toggleVisibilty}>{toggle ? 'Hide details' : 'Show details'}</button>
            {toggle && (
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        )} 
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();