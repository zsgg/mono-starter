import { callBreadScrum } from './axiosCall';

export const direct = () => callBreadScrum(17101);
export const locationHref = () => {
    const search = new URLSearchParams(window.location.search);
    const siteMapIdx = search.get('siteMapIdx');
    return callBreadScrum(siteMapIdx);
};
