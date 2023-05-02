export default class utils {
    public static handleScroll(element: HTMLElement): boolean {

        if (element) {
            const elementRect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop >= elementRect.top && scrollTop < elementRect.bottom)
                return true;


        }

        return false;
    }
}