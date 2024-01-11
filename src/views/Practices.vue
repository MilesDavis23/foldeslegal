<template>
    <v-container fluid pa-0 ma-0 id="practices">
        <v-container pa-0 fluid style="max-width:1000px">
            <h3 class="text-h5 text-md-h4 text-xl-h3 pa-md-0 px-3 px-md-5 px-lg-5 text-justify mb-0" style="color: #BEAF67"><span class="bottomLine">{{ englishOn ? 'Our Focus' : 'Szakterületeink'}}</span></h3>
            <div v-for="speciality in specialities" :key="speciality.mainTheme" :id="speciality.goto">
                <Practice :speciality="speciality" :englishOn="englishOn"/>
            </div>
        </v-container>

    </v-container>
</template>

<script>
import Practice from '@/components/Practice.vue';

    export default {
        name: 'Practices',
        components: {
            Practice
        },
        props: ['dynamicWidth', 'englishOn'],
        data: () => ({
            specialities: [
                { mainTheme: ['A cégjog teljes vertikuma', 'Company Law'],
                goto: 'cegjog',
                subThemes: [
                    {dynamicTitle: ['Minden típusú cégforma alapítása, módosítása, apportálás', 'Establishment and modification of all types of company forms (apport)']},
                    {dynamicTitle: ['Minden típusú átalakulás, formaváltás', 'All types of company transformation, form changes']},
                    {dynamicTitle: ['Holding struktúra kialakítása', 'Establishment of holding structure']},
                    {dynamicTitle: ['Végelszámolás', 'Voluntary liquidation']},
                    {dynamicTitle: ['Vagyonrendezési eljárás', 'Property distribution proceedings']},
                    {dynamicTitle: ['Csődeljárás, Felszámolás', 'Winding up, insolvency proceedings']},
                ]
                },
                { mainTheme: ['Gazdasági ügyek', 'Business Law'],
                goto: 'gazdjog',
                subThemes: [
                    {dynamicTitle: ['Szerződések készítése, partnere által készített szerződések véleményezése','Drawing up contracts, reviewing contracts drawn up by client']},
                    {dynamicTitle: ['Partnerekkel való együttműködési struktúrák kialakítása','Esteblishing cooperational structures for clients']},
                    {dynamicTitle: ['Permegelőző egyezségek megkötésének elősegítése és egyezség esetén az egyezség megkötése jogvitás helyzetekben','Facilitating the conclusion of a settlement and and in a case of a legal dispute helping the partners to reach an out-of-court settlement']},
                    {dynamicTitle: ['Kintlévőségek kezelése (fizetési meghagyások előterjesztése, ide értve a határon átnyúló EUFMH készítését is, adós cég elleni felszámolási eljárás indítása)', 'Conducting receivables (action to collect, EOP, etc.)']},
                    {dynamicTitle: ['Céges pénzügyi szerződések készítése', 'Drawing up various financial contracts for businesses']},
                    {dynamicTitle: ['Adó és illeték ügyek','Cases relating to taxation and levy']},
                    {dynamicTitle: ['Peren kívüli illetve perelőkészítő előzetes bizonyítási eljárásban közjegyzői eljárásban kirendelésre kerülő szakértő kirendelésére irányuló eljárásban képviselet ellátása a kérelmező és az ellenfél oldalán is', 'Representation in various procedures (notary, administrative processes)']},
                    {dynamicTitle: ['Polgári jogi és gazdasági jogi ügyekben peres képviselet ellátása', 'Legal representation in civil litigation']},
                ]
                },
                { mainTheme: ['Ingatlan ügyek', 'Real Estate'],
                goto: 'ingatlanjog',
                subThemes: [
                    {dynamicTitle: ['Adásvétel, ajándékozás, tulajdonjog rendezés, közös tulajdon megszüntetése, telekalakítás', 'Sale and Purchase agreement, voluntary disposition, property settlement, termination of joint ownership']},
                    {dynamicTitle: ['Osztalék kifizetés jogcímen történő céges ingatlan tulajdonjogának az osztalékra jogosult személyre történő tulajdonjog átszállási okirat készítése', 'Various cases relating to dividend payment ']},
                    {dynamicTitle: ['Társasház alapítás','Establishment of Condominium']},
                ]
                },
                { mainTheme: ['Civil szervezetek alapítása', 'Establishment of Civil Organisations'],
                goto: 'civiljog',
                subThemes: [
                    {dynamicTitle: ['Egyesület, sportegyesület', 'Registered Association, Sports Associations']},
                    {dynamicTitle: ['Alapítvány', 'Foundations']},
                    {dynamicTitle: ['Közhasznú szervezetek alapítása', 'Establishment of benefit corporations']}
                ]
                },
                { mainTheme: ['Védjegy ügyek','Trademark Law'],
                goto: 'vedjog',
                affix: '(SZTNH és EUIPO előtt is)',
                subThemes: [
                    {dynamicTitle: ['A Magyarországi Szellemi Tulajdon Nemzeti Hivatala előtti eljárások', 'Hungarian Intellectual Property Office (HIPO) procedures']},
                    {dynamicTitle: ['EUIPO - Európai Unió Szellemi Tulajdoni Hivatala előtti ügyintézések', 'Our office is authorised to undertake representation in front of European Union Intellectual Property Office (EUIPO) procedures']},
                ]
                }
            ]
        }),
    }
</script>