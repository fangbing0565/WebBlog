/*
/!**
 * Created by fang on 2017/8/31.
 *!/
!function (exports, module, win) {

    class Router {

        constructor(opts) {
            this.opts = opts;
            this.routes = opts.routes;
            this.mode = detectSupport(opts.mode);
            this.routerView = document.querySelector('router-view');
            this.init();
            this.to(location.pathname, true);
        }

        to(path, replace) {
            if (replace) {
                history.replaceState(null, null, path);
            } else {
                history.pushState(null, null, path);
            }
        }

        handle() {

            const url = location.pathname;
            const matchedRoute = this.routes.filter(route => route.url === url);
            if (matchedRoute.length <= 0) throw new Error('No matching route found');
            this.emit(this.routerView, matchedRoute[0].component);
        }

        emit(container, component) {
            container.innerHTML = component;
        }


        init() {
            if (this.mode === 'history') {
                win.addEventListener('popstate', this.handle.bind(this), false);
            } else {
                win.addEventListener('hashchange', this.handle.bind(this), false);
            }

            const links = document.querySelectorAll('a');
            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener('click', (event) => {
                    let href = event.target.getAttribute('href');
                    console.log(location.pathname, '->', href);
                    this.to(href, false);
                    this.handle();
                    event.preventDefault();
                    return false;
                }, false);
            }
        }
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Router;
    } else {
        win.Router = Router;
    }

    function detectSupport(mode = '') {

        if (mode && ['history', 'hash'].indexOf(mode) >= 0) return mode;

        return 'hash';
    }
}(undefined, undefined, window);
*/
