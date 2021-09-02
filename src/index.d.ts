
declare module '@mapbox/mapbox-gl-directions-cittati' {
    /**
     * The Directions control
     * @class MapboxDirections
     *
     * @param {Object} options
     * @param {Array} [options.styles] Override default layer properties of the [directions source](https://github.com/mapbox/mapbox-gl-directions/blob/master/src/directions_style.js). Documentation for each property are specified in the [Mapbox GL Style Reference](https://www.mapbox.com/mapbox-gl-style-spec/).
     * @param {String} [options.accessToken=null] Required unless `mapboxgl.accessToken` is set globally
     * @param {String} [options.api="https://api.mapbox.com/directions/v5/"] Override default routing endpoint url
     * @param {Boolean} [options.interactive=true] Enable/Disable mouse or touch interactivity from the plugin
     * @param {String} [options.profile="mapbox/driving-traffic"] Routing profile to use. Options: `mapbox/driving-traffic`, `mapbox/driving`, `mapbox/walking`, `mapbox/cycling`
     * @param {Boolean} [options.alternatives=false] Whether to enable alternatives.
     * @param {Boolean} [options.congestion=false] Whether to enable congestion along the route line.
     * @param {String} [options.unit="imperial"] Measurement system to be used in navigation instructions. Options: `imperial`, `metric`
     * @param {Function} [options.compile=null] Provide a custom function for generating instruction, compatible with osrm-text-instructions.
     * @param {Object} [options.geocoder] Accepts an object containing the query parameters as [documented here](https://www.mapbox.com/api-documentation/#search-for-places).
     * @param {Object} [options.controls]
     * @param {Boolean} [options.controls.inputs=true] Hide or display the inputs control.
     * @param {Boolean} [options.controls.instructions=true] Hide or display the instructions control.
     * @param {Boolean} [options.controls.profileSwitcher=true] Hide or display the default profile switch with options for traffic, driving, walking and cycling.
     * @param {Number} [options.zoom=16] If no bbox exists from the geocoder result, the zoom you set here will be used in the flyTo.
     * @param {String} [options.language="en"] The language of returned turn-by-turn text instructions. See supported languages : https://docs.mapbox.com/api/navigation/#instructions-languages
     * @param {String} [options.placeholderOrigin="Choose a starting place"] If set, this text will appear as the placeholder attribute for the origin input element.
     * @param {String} [options.placeholderDestination="Choose destination"] If set, this text will appear as the placeholder attribute for the destination input element.
     * @param {Boolean} [options.flyTo=true] If false, animating the map to a selected result is disabled.
     * @param {String} [options.exclude=null] Exclude certain road types from routing. The default is to not exclude anything. Search for `exclude` in `optional parameters`: https://docs.mapbox.com/api/navigation/#retrieve-directions
     * @param {number | PaddingOptions} [options.routePadding=80] Specify padding surrounding route. A single number of pixels or a [PaddingOptions](https://docs.mapbox.com/mapbox-gl-js/api/#paddingoptions) object.
     * @example
     * var MapboxDirections = require('../src/index');
     * var directions = new MapboxDirections({
     *   accessToken: 'YOUR-MAPBOX-ACCESS-TOKEN',
     *   unit: 'metric',
     *   profile: 'mapbox/cycling'
     * });
     * // add to your mapboxgl map
     * map.addControl(directions);
     *
     * @return {MapboxDirections} `this`
     */
    export default class MapboxDirections {


        constructor(options: {
            styles?: Array,
            accessToken?: string,
            api?: string,
            interactive?: boolean,
            profile?: string,
            alternatives?: boolean,
            congestion?: boolean,
            unit?: string,
            compile?: Function,
            geocoder?: any,
            controls?: {
                inputs?: boolean,
                instructions?: boolean,
                profileSwitcher?: boolean
            },
            zoom?: number,
            language?: string,
            placeholderOrigin?: string,
            placeholderDestination?: string,
            flyTo?: boolean,
            exclude?: string,
        })


        onAdd();
        onRemove();
        once(type: string, fn: Function): MapboxDirections;
        fire();

        // API Methods
        // ============================

        /**
        * Turn on or off interactivity
        * @param {Boolean} state sets interactivity based on a state of `true` or `false`.
        * @returns {MapboxDirections} this
        */
        interactive(state: boolean): MapboxDirections;
        /**
         * Returns the origin of the current route.
         * @returns {Object} origin
         */
        getOrigin(): object
        /**
         * Sets origin. _Note:_ calling this method requires the [map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load)
         * to have run.
         * @param {Array<number>|String} query An array of coordinates [lng, lat] or location name as a string.
         * @returns {MapboxDirections} this
         */
        setOrigin(query: [number, number] | string): MapboxDirections
        /**
        * Returns the destination of the current route.
        * @returns {Object} destination
        */
        getDestination(): object
        /**
        * Sets destination. _Note:_ calling this method requires the [map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load)
        * to have run.
        * @param {Array<number>|String} query An array of coordinates [lng, lat] or location name as a string.
        * @returns {MapboxDirections} this
        */
        setDestination(query: [number, number] | string): MapboxDirections
        /**
       * Swap the origin and destination.
       * @returns {MapboxDirections} this
       */
        reverse(): MapboxDirections
        /**
         * Add a waypoint to the route. _Note:_ calling this method requires the
         * [map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load) to have run.
         * @param {Number} index position waypoint should be placed in the waypoint array
         * @param {Array<number>|Point} waypoint can be a GeoJSON Point Feature or [lng, lat] coordinates.
         * @returns {MapboxDirections} this;
         */
        addWaypoint(index: number, waypoint: [number, number]): MapboxDirections
        /**
        * Change the waypoint at a given index in the route. _Note:_ calling this
        * method requires the [map load event](https://www.mapbox.com/mapbox-gl-js/api/#Map.load)
        * to have run.
        * @param {Number} index indexed position of the waypoint to update
        * @param {Array<number>|Point} waypoint can be a GeoJSON Point Feature or [lng, lat] coordinates.
        * @returns {MapboxDirections} this;
        */
        setWaypoint(index: number, waypoint: [number, number]): MapboxDirections
        /**
         * Remove a waypoint from the route.
         * @param {Number} index position in the waypoints array.
         * @returns {MapboxDirections} this;
         */
        removeWaypoint(index: number): MapboxDirections
        /**
        * Fetch all current waypoints in a route.
        * @returns {Array} waypoints
        */
        getWaypoints(): Array<any>
        /**
         * Removes all routes and waypoints from the map.
         *
         * @returns {MapboxDirections} this;
         */
        removeRoutes(): MapboxDirections
        /**
        * Subscribe to events that happen within the plugin.
        * @param {String} type name of event. Available events and the data passed into their respective event objects are:
        *
        * - __clear__ `{ type: } Type is one of 'origin' or 'destination'`
        * - __loading__ `{ type: } Type is one of 'origin' or 'destination'`
        * - __profile__ `{ profile } Profile is one of 'driving', 'walking', or 'cycling'`
        * - __origin__ `{ feature } Fired when origin is set`
        * - __destination__ `{ feature } Fired when destination is set`
        * - __route__ `{ route } Fired when a route is updated`
        * - __error__ `{ error } Error as string`
        * @param {Function} fn function that's called when the event is emitted.
        * @returns {MapboxDirections} this;
        */
        on(type: string, fn: Function): MapboxDirections

        /**
        * Unsubscribe to events
        * @param {String} type name of event. Available events and the data passed into their respective event objects are:
        *
        * - __clear__ `{ type: } Type is one of 'origin' or 'destination'`
        * - __loading__ `{ type: } Type is one of 'origin' or 'destination'`
        * - __profile__ `{ profile } Profile is one of 'driving', 'walking', or 'cycling'`
        * - __origin__ `{ feature } Fired when origin is set`
        * - __destination__ `{ feature } Fired when destination is set`
        * - __route__ `{ route } Fired when a route is updated`
        * - __error__ `{ error } Error as string`
        * @returns {MapboxDirections} this;
        */
        off(type: string): MapboxDirections;
    }
}
