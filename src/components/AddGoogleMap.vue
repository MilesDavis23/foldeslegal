<template>
        <div>
            <gmap-map
                :zoom="18"    
                :center="center"
                style="width:100%;  height: 400px;"
            >
            <gmap-marker
                :key="index"
                v-for="(m, index) in locationMarkers"
                :position="m.position"
                @click="center=m.position"
            ></gmap-marker>
            </gmap-map>
        </div>

    </template>
    
    <script>
    export default {
    name: "AddGoogleMap",
    data() {
        return {
        center: { 
            lat: 47.5279429,
            lng: 21.6247668
        },
        locationMarkers: [],
        locPlaces: [],
        existingPlace: null
        };
    },
    
    mounted() {
        this.addLocationMarker();
    },
    
    methods: {
        initMarker(loc) {
        this.existingPlace = loc;
        },
        addLocationMarker() {
            const marker = {
                lat: 47.5279429,
                lng: 21.6247668
            };
            this.locationMarkers.push({ position: marker });
            this.locPlaces.push(this.existingPlace);
            this.center = marker;
            this.existingPlace = null;
        },
        relocate(){
            const center = {
                lat: 47.5279429,
                lng: 21.6247668
            };
            this.$children[0].panTo(center);
        }
    }
    };
</script>