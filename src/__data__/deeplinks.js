export const deeplinks = {
    marketplace: {
        android_prom: {link: "pfm/marketplace", param: "marketPlaceId"},
        android_test: {link: "pfm/marketplace", param: "marketPlaceId"},
        ios: {link: "pfm/marketplace", param: "marketPlaceId"},
        smart_sms: {link: "pfmmp", param: ""},
        web: {link: "", param: "srvUrl"}
    },
    pif: {
        android_prom: {link: "welfare/invest-pif/product", param: "productCode"},
        android_test: {link: "welfare/invest-pif/product", param: "productCode"},
        ios: {link: "welfare/invest-pif/product", param: "productCode"},
        smart_sms: {link: "invfund", param: "productCode", appendCode: true},
        web: {link: "invfund-website", param: "productCode"}
    },
    trust: {
        android_prom: {link: "investments/tm/product/card", param: "productCode"},
        android_test: {link: "investments/tm/product/card", param: "productCode"},
        ios: {link: "investments/tm/product/card", param: "productCode"},
        smart_sms: {link: "pfmmp_tc/", param: ""},
        web: {link: "iia_all", param: ""}
    }
};