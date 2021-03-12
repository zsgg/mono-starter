import { locationHref } from './axiosCallWrap';

describe.skip('location.href', (): void => {
    beforeAll((): void => {
        delete window.location;
        // @ts-ignore
        window.location = {
            ...window.location,
            pathname: '/v/option',
            search: '?code1=8000&code2=200&code3=7101&siteMapIdx=17101',
        };
    });

    it('should handle assignments to location.href correctly', async () => {
        const response = await locationHref();
        expect(response).toEqual(
            expect.objectContaining([
                {
                    title: '스티커 / 봉투',
                    url: '/cms/envelope-sticker/',
                    value: 3,
                },
            ]),
        );
        // expect(response).toMatchObject([
        //     { value: 3, title: '스티커 / 봉투', url: '/cms/envelope-sticker/' },
        // ]);
        console.log(`< res >`, response);
    });
});
