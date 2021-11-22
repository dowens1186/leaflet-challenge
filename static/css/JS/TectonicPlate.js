
const tectonicPlatesLineColor = "#fda000";
const tectonicPlatesLineWidth = 3;

/**
 * Create the TectonicPlates' LayerGroup by parsing in the raw data from the d3 json call
 */
function createTectonicPlatesLayerGroup(rawData, err) {
	var layerData = L.geoJson(rawData,
		{
			color: tectonicPlatesLineColor,
			weight: tectonicPlatesLineWidth
		}
	);
	
	// attach the data to a new layer
	return layerData.addTo(new L.LayerGroup());
}