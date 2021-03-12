import axios from 'axios';

export const callBreadScrum = async (siteMapIdx) => {
    const res = await axios.get(
        `/servlet/api/bizhows/views/common/menu/breadcrumb`,
        {
            params: {
                siteMapIdx,
            },
        },
    );
    return res.data;
};
