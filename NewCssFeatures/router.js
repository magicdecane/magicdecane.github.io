class Router {
    constructor(routes) {
        this.routes = routes;

        window.onpopstate = () => {
            this.setState();
        };

        this.setState();
    }

    setState() {
        let path = window.location.hash.slice(1);
        let section = this.routes[path];
        this.onStateChange(section);
    }

    navigate(path) {
        let section = this.routes[path];

        window.history.pushState(
            {},
            section,
            `${window.location.origin}#${path}`
        );
        this.onStateChange(section);
    }

    onStateChange(section) {
        document
            .querySelectorAll('section')
            .forEach((el) => el.classList.add('hide'));
        document.getElementById(section).classList.remove('hide');
    }
}