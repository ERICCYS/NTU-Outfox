const got = require('got');

const calculateDirection = projection => {
	let direction = Math.atan(
		(projection.lat - projection.orig_lat) / (projection.lon - projection.orig_lon)
	);
	if (projection.lat - projection.orig_lat > 0) direction += Math.PI;
	return direction;
};

const getColorBus = async bus => {
	const baseride = `http://baseride.com/routes/apigeo/routevariantvehicle/${bus.id}?format=json`;
	let { body } = await got(baseride, {
		retry: 3,
		timeout: 1000
	});
	body = JSON.parse(body);
	const buses = body.vehicles;
	if (buses) {
		return buses.map(busItem => ({
			bus: bus.name,
			direction: parseFloat(calculateDirection(busItem.projection)),
			load: 'unknown',
			arrival: 'unknown', // implement using contour
			latitude: parseFloat(busItem.lat),
			longitude: parseFloat(busItem.lon)
		}));
	}
	return null;
};

// publicBus.js
const got = require('got');

const findLoad = input => {
	if (input === 'SEA') return 'empty';
	if (input === 'SDA') return 'half';
	if (input === 'LSD') return 'full';
	return 'unknown';
};

const getTextBus = async bus => {
	const dataMall = 'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2';
	const { body } = await got(dataMall, {
		json: true,
		timeout: 1000,
		retry: 3,
		headers: {
			AccountKey: process.env.DATAMALL_TOKEN // delete
		},
		query: {
			BusStopCode: bus.id,
			ServiceNo: bus.name
		}
	});
	const buses = body.Services[0];
	let comingBus = [];
	if (buses) {
		const orders = ['NextBus', 'NextBus2', 'NextBus3'];
		orders.forEach(order => {
			if (
				buses[order] &&
				buses[order].Latitude !== null &&
				buses[order].Latitude !== '0' &&
				buses[order].Latitude !== ''
			)
				comingBus = [
					...comingBus,
					{
						bus: bus.name,
						direction: 0.0, // implement this using contour search.
						load: findLoad(buses[order].Load),
						arrival: new Date(buses[order].EstimatedArrival).getTime(),
						latitude: parseFloat(buses[order].Latitude),
						longitude: parseFloat(buses[order].Longitude)
					}
				];
		});
	}
	return comingBus;
};
