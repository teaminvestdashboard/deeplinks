export const deeplinks = {
    marketplace: {
        android_prom: {link: "pfm/marketplace", param: "marketPlaceId"},
        android_test: {link: "pfm/marketplace", param: "marketPlaceId"},
        ios: {link: "pfm/marketplace", param: "marketPlaceId"},
        smart_sms: {link: "pfmmp", param: ""},
        smart_id: {link: "mp_all", param: ""}
    },
    pif: {
        android_prom: {link: "welfare/invest-pif/product", param: "productCode"},
        android_test: {link: "welfare/invest-pif/product", param: "productCode"},
        ios: {link: "welfare/invest-pif/product", param: "productCode"},
        smart_sms: {link: "invfund", param: "productCode", appendCode: true},
        smart_id: {link: "invfund-website", param: "productCode"}
    },
    trust: {
        android_prom: {link: "investments/tm/product/card", param: "productCode"},
        android_test: {link: "investments/tm/product/card", param: "productCode"},
        ios: {link: "investments/tm/product/card", param: "productCode"},
        smart_sms: {link: "pfmmp_tc/", param: ""},
        smart_id: {link: "iia_all", param: ""}
    }
};