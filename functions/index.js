const { onCall } = require("firebase-functions/v2/https");
const { onRequest } = require("firebase-functions/v2/https");
// const { onDocumentCreated } = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { default: axios } = require("axios");

initializeApp();

exports.getListingFromApi = onCall(async (req) => {
  const listingData = await axios({
    url: "https://api.remax.ca/api/v1/listings/distance?size=10&from=0&distance.centreLat=50.4079569&distance.centreLon=-104.6140568&distance.maxDistanceInMetre=10000&distance.sortByProximity=asc&features.priceListMin=379905&features.priceListMax=419895&features.listingTypeIds=100",
  });

  // console.log("listingData");
  // return "listingData";

  return listingData.data
});
