/*!
* VrijLoon
* Copyright (C) 2018 Pndtech BV
* 
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
* 
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
* 
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
**/
;(function($) {
    var tarief;
        
    // Nieuwsbrief Loonheffingen
    // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/nieuwsbrief-loonheffingen-2024
    
    $.fn.vrijLoon.tarieven['2024'] = tarief = $.extend( {}, $.fn.vrijLoon.basisTarief, {
        kalenderJaar: 2024,
        // https://www.rijksoverheid.nl/onderwerpen/pensioen/toekomst-pensioenstelsel/aow-leeftijd-stijgt-minder-snel
        aowLeeftijd: [67, 0],
        // Alle (zeker) niet ondersteunde codes staan uitgecommentarieerd
        codes: {
            // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/codes-voor-de-aangifte-loonheffingen-2017
            codeLoon: {
                //11: 'Loon of salaris ambtenaren in de zin van de Ambtenarenwet 1929',
                13: 'Loon of salaris directeuren van een nv of bv, wel verzekerd voor de werknemersverzekeringen',
                15: 'Loon of salaris niet onder te brengen onder 11, 13 of 17',
                17: 'Loon of salaris directeuren-grootaandeelhouders van een nv of bv, niet verzekerd voor de werknemersverzekeringen',
                //18: 'Wachtgeld van een overheidsinstelling',
                //22: 'Uitkering in het kader van de Algemene ouderdomswet (AOW)',
                //23: 'Oorlogs- en verzetspensioenen',
                //24: 'Uitkering in het kader van de Algemene nabestaandenwet (Anw)',
                //31: 'Uitkering in het kader van de Ziektewet (ZW) en vrijwillige verzekering Ziektewet',
                //32: 'Uitkering in het kader van de Wet op de arbeidsongeschiktheidsverzekering (WAO) en particuliere verzekering ziekte, invaliditeit en ongeval',
                //33: 'Uitkering in het kader van de Nieuwe Werkloosheidswet (nWW)',
                //34: 'Uitkering in het kader van de Wet inkomensvoorziening oudere en gedeeltelijk arbeidsongeschikte werkloze werknemers (IOAW)',
                //35: 'Vervolguitkering in het kader van de Nieuwe Werkloosheidswet (nWW)',
                //36: 'Uitkering in het kader van de Wet arbeidsongeschiktheidsverzekering zelfstandigen (Waz)',
                //37: 'Wet werk en arbeidsongeschiktheidsvoorziening jonggehandicapten (Wet Wajong)',
                //38: 'Samenloop (gelijktijdig of volgtijdelijk) van uitkeringen van Wet Wajong met Waz, WAO/IVA of WGA',
                //39: 'Uitkering in het kader van de Regeling inkomensvoorziening volledig arbeidsongeschikten (IVA)',
                //40: 'Uitkering in het kader van de Regeling werkhervatting gedeeltelijk arbeidsgeschikten (WGA)',
                //42: 'Uitkering in het kader van het bijstandsbesluit Zelfstandigen (Bbz)',
                //43: 'Uitkering in het kader van de Participatiewet (voorheen Wwb)',
                //45: 'Uitkering in het kader van de Wet inkomensvoorziening oudere en gedeeltelijk arbeidsongeschikte gewezen zelfstandigen (IOAZ)',
                //46: 'Uitkering uit hoofde van de Toeslagenwet',
                //50: 'Uitkeringen in het kader van overige socialeverzekeringswetten; hieronder vallen ook de Ongevallenwet 1921, de Land- en tuinbouwongevallenwet 1922 en de Zeeongevallenwet 1919 (niet 22, 24 tot en met 45 of 52)',
                //52: 'Uitkering in het kader van de Wet inkomensvoorziening oudere werklozen (IOW)',
                //54: 'Opname levenslooptegoed door een werknemer die op 1 januari 61 jaar of ouder is',
                //55: 'Uitkering in het kader van de Algemene Pensioenwet Politieke Ambtsdragers (APPA)',
                //56: 'Ouderdomspensioen dat via de werkgever is opgebouwd',
                //57: 'Nabestaandenpensioen dat via de werkgever is opgebouwd',
                //58: 'Arbeidsongeschiktheidspensioen dat via de werkgever is opgebouwd',
                //59: 'Lijfrenten die zijn afgesloten in het kader van een individuele of collectieve arbeidsovereenkomst',
                //60: 'Lijfrenten die niet zijn afgesloten in het kader van een individuele of collectieve arbeidsovereenkomst',
                //61: 'Aanvulling van de werkgever aan een werknemer op een uitkering werknemersverzekeringen, terwijl de dienstbetrekking is beëindigd',
                //62: 'Ontslagvergoeding/transitievergoeding',
                //63: 'Overige, niet hiervoor aangegeven, pensioenen of samenloop van meerdere pensioenen/lijfrenten (al dan niet hiervoor aangegeven) of een betaling op grond van een afspraak na einde dienstbetrekking',
            },
            codeZvw: {
                A: 'Niet verzekeringsplichtig omdat persoon ook niet verzekerd is voor de Wlz',
                B: 'Niet verzekeringsplichtig omdat persoon militair ambtenaar is in werkelijke dienst of met buitengewoon verlof',
                G: 'Niet verzekeringsplichtig omdat persoon buitenlands artiest of buitenlands beroepssporter is, waarbij code loonbelastingtabel 221, 224 of 225 is toegepast',
                H: 'Wel verzekeringsplichtig, geen tarief toegepast omdat persoon binnenlands artiest is waarbij code loonbelastingtabel 220 is toegepast',
                I: 'Niet verzekeringsplichtig omdat persoon niet verzekerd is voor de Wlz; maar wel pseudobijdrage verschuldigd is, omdat in het woonland recht bestaat op zorg ten laste van Nederland (artikel 69 Zvw)',
                K: 'Wel verzekeringsplichtig, normaal tarief werkgeversheffing',
                L: 'Wel verzekeringsplichtig, 0%-tarief werkgeversheffing (zeelieden)',
                M: 'Wel verzekeringsplichtig, ingehouden bijdrage',
                N: 'Wel verzekeringsplichtig, meer tarieven werkgeversheffing (K en L)',
            },
            codeIvp: {
                A: 'Echtgenoot of familie van de eigenaar of van de DGA',
                B: 'Vorige eigenaar',
                D: 'Oproep-/invalkracht zonder verplichting om te komen',
                E: 'Oproep-/invalkracht met verplichting om te komen',
            },
            tabelSoort: {
                0: 'Tabel zonder herleidingsregels, werknemer is zowel belasting- als premieplichtig',
                3: 'Werknemer alleen premieplichtig voor de volksverzekeringen (AOW/Anw/Wlz)',
                5: 'Werknemer alleen belastingplichtig',
                6: 'Werknemer belastingplichtig en niet premieplichtig voor de Wlz',
                7: 'Werknemer belastingplichtig en alleen premieplichtig voor de Wlz',
            },
            tabelKleur: {
                1: 'Wit',
                2: 'Groen',
            },
            tijdvakSoort: {
                //1: 'Loon per kwartaal',
                2: 'Loon per maand',
                //3: 'Loon per week',
                //4: 'Loon per 4 weken',
                //5: 'Loon per dag',
                //0: 'Uitsluitend tabel voor bijzondere beloningen toegepast',
            },
        },
        // https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon
        minimum: { 
            20240101: {
                23: { dag: 106.16, week: 446.40, maand: 1934.40 },
            }
        },
        // https://www.belastingdienst.nl/wps/wcm/connect/nl/auto-en-vervoer/content/reizen-werk-privegebruik-eigen-vervoer-reiskostenaftrek
        onbelasteKmVergoeding: 0.23,
        // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/boxen_en_tarieven/overzicht_tarieven_en_schijven/
        box1: {
            niet: [
                { naam: 'Schijf 2', bovenGrens: 75518, percentage: 36.97 },
                { naam: 'Schijf 3', percentage: 49.50 },
            ],
            in: [], // TODO?
            voor: [
                { naam: 'Schijf 1', bovenGrens: 40021, percentage: 19.07 },
                { naam: 'Schijf 2', bovenGrens: 75518, percentage: 36.97 },
                { naam: 'Schijf 3', percentage: 49.50 },
            ],
        },
        // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/werk_en_inkomen/zorgverzekeringswet/veranderingen-bijdrage-zvw/
        premieZvw: {
            maxBijdrageInkomen: 71628,
            eigenBijdrage: {
                percentage: 5.32,
            },
            werkgeversHeffing: {
                percentage: 6.57,
            },
        },
        /* / https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/werk_en_inkomen/sociale_verzekeringen/premies_volks_en_werknemersverzekeringen/volksverzekeringen/hoeveel_moet_u_betalen
        volksVerzekeringen: {
            bovenGrens: 38098,
            maximum: 10534,
            premieAow: {
                percentage: 17.90,
            },
            premieAnw: {
                percentage: 0.10,
            },
            premieWlz: {
                percentage: 9.65,
            },
        },/**/
        // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/werk_en_inkomen/sociale_verzekeringen/premies_volks_en_werknemersverzekeringen/werknemersverzekeringen/
        // https://www.belastingdienst.nl/bibliotheek/handboeken/html/boeken/HL/stappenplan-stap_5_premies_werknemersverzekeringen_berekenen.html
        werknemersVerzekeringen: null,
        // https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/
        heffingsKorting: {
            niet: [
                { bovenGrens: 24812, bedrag: 3362 },
                { bovenGrens: 75518, bedrag: function(inkomen) { return tarief.heffingsKorting.niet[0].bedrag - 0.06630 * (inkomen - tarief.heffingsKorting.niet[0].bovenGrens + 1); } },
                { bedrag: 0 },
            ],
            in: false,
            voor: [
                { bovenGrens: 24812, bedrag: 1735 },
                { bovenGrens: 75518, bedrag: function(inkomen) { return tarief.heffingsKorting.voor[0].bedrag - 0.03420 * (inkomen - tarief.heffingsKorting.voor[0].bovenGrens + 1); } },
                { bedrag: 0 },
            ],
        },
        
        arbeidsKorting: {
            niet: [
                { bovenGrens: 11490, percentage: 8.425 },
                { bovenGrens: 24820, bedrag: function(inkomen) { return 968 + 0.31433 * (inkomen - tarief.arbeidsKorting.niet[0].bovenGrens + 1); } },
                { bovenGrens: 39957, bedrag: function(inkomen) { return 4190 + 0.02471 * (inkomen - tarief.arbeidsKorting.niet[1].bovenGrens + 1); } },
                { bovenGrens: 124934, bedrag: function(inkomen) { return 5532 - 0.06510 * (inkomen - tarief.arbeidsKorting.niet[2].bovenGrens + 1); } },
                { bedrag: 0 },
            ],
            in: false,
            voor: [
                { bovenGrens: 11490, percentage: 4.346 },
                { bovenGrens: 24820, bedrag: function(inkomen) { return 501 + 0.15388 * (inkomen - tarief.arbeidsKorting.niet[0].bovenGrens + 1); } },
                { bovenGrens: 39957, bedrag: function(inkomen) { return 2161 + 0.01275 * (inkomen - tarief.arbeidsKorting.niet[1].bovenGrens + 1); } },
                { bovenGrens: 124934, bedrag: function(inkomen) { return 2854 - 0.03358 * (inkomen - tarief.arbeidsKorting.niet[2].bovenGrens + 1); } },
                { bedrag: 0 },
            ],
        }
    });
    
})(jQuery);