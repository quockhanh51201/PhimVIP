
//++++TẤT CẢ API URL phải khai báo ở đây+++++

const API_URL = {
    //---1 SỐ CODE DEMO MẪU KO CẦN XOÁ---
    getPhimMoi: (page: number) => `/danh-sach/phim-moi-cap-nhat?page=${page}`,
    getPhimLe: (page: number) => `/v1/api/danh-sach/phim-le?page=${page}`,
    getPhimBo: (page: number) => `/v1/api/danh-sach/phim-bo?page=${page}`,
    getPhimHoatHinh: (page: number) => `/v1/api/danh-sach/hoat-hinh?page=${page}`,
    getTVShow: (page: number) => `/v1/api/danh-sach/tv-shows?page=${page}`,
    getPhim: (slug: string) => `https://phimapi.com/phim/${slug}`

    // posAPIDemo: () => `/api/posAPIDemo`,
    // getDSDemoParam: (params) => `/api/getDSDemo?${params}`,
    // postFullDemo: () => `http://abc.com/api/postFullDemo`,
    // apiDomainNewDemo: (domain) => `${domain}/api/apiDomainNew`,
    // apiDomainNewDemo2: (domain, params) => `${domain}/api/apiDomainNew2?${params}`,
    //--------------------------------
    //--Thêm mới ở dưới dòng này--

}
export default API_URL;