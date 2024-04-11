function onCookieConsentChange(cookie) {
    if (cookie.categories.includes("contact")) {
        document.getElementById('cookieConsentChangeForContact').innerHTML = '<iframe id="JotFormIFrame-230436398346058" title="Kapcsolat" onload="" allowtransparency="true" allowfullscreen="true" allow="geolocation" src="https://form.jotform.com/230436398346058" frameborder="0" style="min-width:100%;max-width:100%;height:539px;border:none;z-index: 5;" scrolling="no" ></iframe>';
    }

    if (cookie.categories.includes("marketing")) {
        document.getElementById('shareButton').innerHTML = '<div class="fb-share-button" data-href="https://szarkavivien.hu" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fszarkavivien.hu%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Megosztás</a></div>';
    }
}

document.addEventListener('DOMContentLoaded', function(){
    
    // obtain plugin
    var cc = initCookieConsent();

    // run plugin with your configuration
    cc.run({
        current_lang: 'hu',
        autoclear_cookies: true,                   // default: false
        page_scripts: true,                        // default: false
        force_consent: true,
        cookie_expiration: 9999,
        cookie_necessary_only_expiration: 1,

        // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
        // delay: 0,                               // default: 0
        // auto_language: '',                      // default: null; could also be 'browser' or 'document'
        // autorun: true,                          // default: true
        // force_consent: false,                   // default: false
        // hide_from_bots: true,                   // default: true
        // remove_cookie_tables: false             // default: false
        // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
        // cookie_expiration: 182,                 // default: 182 (days)
        // cookie_necessary_only_expiration: 182   // default: disabled
        // cookie_domain: location.hostname,       // default: current domain
        // cookie_path: '/',                       // default: root
        // cookie_same_site: 'Lax',                // default: 'Lax'
        // use_rfc_cookie: false,                  // default: false
        // revision: 0,                            // default: 0

        onFirstAction: function(user_preferences, cookie){
            // callback triggered only once on the first accept/reject action
        },

        onAccept: function (cookie) {
            // callback triggered on the first accept/reject action, and after each page load
            onCookieConsentChange(cookie);
        },

        onChange: function (cookie, changed_categories) {
            // callback triggered when user changes preferences after consent has already been given
            onCookieConsentChange(cookie);
        },
        
        languages: {
            'hu': {
                consent_modal: {
                    title: 'Tájékoztatás sütik használatáról',
                    description: 'A weboldal sütiket használ a helyes működéséhez, továbbá a felhasználói élmény javításához és a biztonságos kapcsolatfelvétel érdekében igénybe veszi harmadik fél szolgáltatásait, sütijeit. A harmadik féltől származó sütik használatához az Ön kifejezett hozzájárulása szükséges.<br><br>További információkért a sütikről és más személyes adatokról, kérjük, olvassa el az <a target="_blank" href="https://szarkavivien.hu/feltetelek.html#adatkezeles" class="cc-link">Adatkezelési tájékoztatót</a>.',
                    primary_btn: {
                        text: 'Hozzájárulok',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'További lehetőségek',
                        role: 'settings'        // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'Személyreszabás',
                    save_settings_btn: 'Személyreszabott beállítások alkalmazása',
                    accept_all_btn: 'Hozzájárulok',
                    reject_all_btn: '',
                    close_btn_label: 'Bezárás',
                    blocks: [
                        {
                            title: 'Tájékoztatás sütik használatáról',
                            description: 'A weboldal sütiket használ a helyes működéséhez, továbbá a felhasználói élmény javításához és a biztonságos kapcsolatfelvétel érdekében igénybe veszi harmadik fél szolgáltatásait, sütijeit. A harmadik féltől származó sütik használatához az Ön kifejezett hozzájárulása szükséges.<br><br>További információkért a sütikről és más személyes adatokról, kérjük, olvassa el az <a target="_blank" href="https://szarkavivien.hu/feltetelek.html#adatkezeles" class="cc-link">Adatkezelési tájékoztatót</a>.<br><br>További információkért a cookie-kra vonatkozóan, látogasson el a www.aboutcookies.org weboldalra, amely átfogó és független tájékoztatást nyújt a cookie-k letiltásáról a böngésző beállításaiban, illetve a számítógépen található cookie-k törléséről.'
                        }, {
                            title: 'A weboldal a működéséhez nélkülözhetetlen sütik',
                            description: 'Ezek a sütik elengedhetetlenek a weboldal helyes működéséhez.',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true
                            }
                        }, {
                            title: 'A kapcsolat funkció működéséhez nélkülözhetetlen, harmadik féltől származó sütik',
                            description: 'A weboldal egyik fő funkciója, hogy a látogató konzultáció céljából felvehesse a kapcsolatot a szakemberrel. Az üzemeltető harmadik fél szolgáltatását veszi igénybe.',
                            toggle: {
                                value: 'contact',
                                enabled: true,
                                readonly: false
                            }
                        }, {
                            title: 'Webanalitikai és személyreszabáshoz használt, harmadik féltől származó sütik',
                            description: 'A felhasználói élmény fejlesztése céljából, ezeknek a sütiknek a használatával, az üzemeltető megismerheti, hogy a látogatók milyen módon használják a weboldalt. A gyűjtött adatok anonimizáltak, így az üzemeltető nem képes beazonosítani Önt.',
                            toggle: {
                                value: 'analytics',
                                enabled: false,
                                readonly: false
                            }
                        }, {
                            title: 'Kényelmi, marketing célú, harmadik féltől származó sütik',
                            description: 'Például ezeknek a funkcióknak a segítségével a látogató maga is megoszthatja, népszerűsítheti a weboldalt. A harmadik fél által biztosított marketing célú kényelmi funkciók sütiket vehetnek igénybe.',
                            toggle: {
                                value: 'marketing',
                                enabled: false,
                                readonly: false
                            }
                        }
                    ]
                }
            }
        }
    });
});