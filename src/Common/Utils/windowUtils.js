import Router from '@/router';
var savedPosition = 0;

export default {
    blockScroll() {
        savedPosition = JSON.stringify(window.pageYOffset);
        document.body.style.position = "fixed";
        document.body.style.top = "-" + savedPosition + "px";
    },
    blockScrollAtPos(yPos) {
        savedPosition = JSON.stringify(yPos);
        document.body.style.position = "fixed";
        document.body.style.top = "-" + savedPosition + "px";
    },
    enableScroll() {
        document.body.style.position = "relative";
        document.body.style.top = "0px";
        window.scrollTo(0, savedPosition);
        savedPosition = 0;
    },
    enableScrollAtPos(yPos) {
        // alert(savedPosition);
        document.body.style.position = "relative";
        document.body.style.top = "0px";
        window.scrollTo(0, yPos);
        savedPosition = 0;
    },
    /**
     * Smooth scroll to top
     */
    scrollToTopNoAnim() {
        window.scrollTo(0, 0);
    },
    /**
     * Smooth scroll to top
     */
    scrollToTop() {
        const scrollToTop = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, c - c / 4);
            }
        };
        scrollToTop();
    },

    isMobile: function() {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            || window.innerWidth <= 767)
            return true;
        else
            return false;
    },

    /**
     * Return object with direction: up or down and lastScrollTop: current scrollPosition
     * @param lastScrollTop
     * @return {{lastScrollTop: *, direction: string}}
     */
    scrollDirection(lastScrollTop) {
        let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        let direction = (st > lastScrollTop) ? "down" : "up";

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        return { lastScrollTop: lastScrollTop, direction: direction }
    },

    /**
     * Get real scroll position
     * @return {number}
     */
    scrollPosition() {
        return window.scrollY + window.innerHeight;
    }
}
