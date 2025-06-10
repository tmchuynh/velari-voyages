"use client";

import Loading from "@/components/Loading";
import { Cruise } from "@/lib/interfaces/services/cruises";
import {
  ArtGallery,
  Casino,
  Entertainment,
  EntertainmentCategory,
  FitnessCenter,
  Library,
  Shopping,
  Spa,
} from "@/lib/interfaces/services/venues";
import { getArtGalleriesByVesselId } from "@/lib/utils/get/art-gallery";
import { getCasinosByVesselId } from "@/lib/utils/get/casinos";
import { getCruiseById } from "@/lib/utils/get/cruises";
import {
  getEntertainmentByVesselId,
  getEntertainmentCategories,
} from "@/lib/utils/get/entertainment";
import { getFitnessCentersByVesselId } from "@/lib/utils/get/fitness";
import { getLibrariesByVesselId } from "@/lib/utils/get/library";
import { getShoppingByVesselId } from "@/lib/utils/get/shopping-stores";
import { getSpasByVesselId } from "@/lib/utils/get/spas";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CruiseDetailsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cruiseId = searchParams.get("cruiseId");
  const cruise = searchParams.get("cruise");
  const [cruiseData, setCruiseData] = useState<Cruise>();
  const [loading, setLoading] = useState(true);
  const [artGallery, setArtGallery] = useState<ArtGallery[]>();
  const [entertainment, setEntertainment] = useState<Entertainment[]>();
  const [entertainmentCategories, setEntertainmentCategories] =
    useState<EntertainmentCategory[]>();
  const [casinos, setCasinos] = useState<Casino[]>();
  const [spas, setSpas] = useState<Spa[]>();
  const [library, setLibrary] = useState<Library[]>();
  const [fitnessCenter, setFitnessCenter] = useState<FitnessCenter[]>();
  const [shoppingStores, setShoppingStores] = useState<Shopping[]>();

  console.log("Cruise ID:", cruiseId);
  console.log("Cruise Data:", cruise);

  useEffect(() => {
    const fetchCruiseData = async () => {
      if (!cruiseId) {
        console.error("Cruise ID is required");
        return;
      }
      try {
        const data = await getCruiseById(cruiseId);
        if (!data) {
          console.error(`No cruise found with ID: ${cruiseId}`);
          return;
        }
        setCruiseData(data);
        console.log("Fetched Cruise Data:", data);

        const shopping = await getShoppingByVesselId(data.vesselId);
        if (!shopping || shopping.length === 0) {
          console.error(
            `No shopping stores found for vessel ID: ${data.vesselId}`
          );
          return;
        }
        setShoppingStores(shopping);
        console.log("Fetched Shopping Stores:", shopping);

        const artGallery = await getArtGalleriesByVesselId(data.vesselId);
        if (!artGallery || artGallery.length === 0) {
          console.error(`No art gallery found for vessel Id: ${data.vesselId}`);
        }
        setArtGallery(artGallery);
        console.log("Fetched Art Gallery:", artGallery);

        const entertainmentCategories = await getEntertainmentCategories(
          data.departureLocation.city,
          data.vesselId
        );
        if (!entertainmentCategories || entertainmentCategories.length === 0) {
          console.error(
            `No entertainment categories found for vessel ID: ${data.vesselId}`
          );
        }
        setEntertainmentCategories(entertainmentCategories);
        console.log(
          "Fetched Entertainment Categories:",
          entertainmentCategories
        );

        const entertainment = await getEntertainmentByVesselId(data.vesselId);
        if (!entertainment || entertainment.length === 0) {
          console.error(
            `No entertainment found for vessel ID: ${data.vesselId}`
          );
        }
        setEntertainment(entertainment);
        console.log("Fetched Entertainment:", entertainment);

        const casinos = await getCasinosByVesselId(data.vesselId);
        if (!casinos || casinos.length === 0) {
          console.error(`No casinos found for vessel ID: ${data.vesselId}`);
        }
        setCasinos(casinos);
        console.log("Fetched Casinos:", casinos);

        const spas = await getSpasByVesselId(data.vesselId);
        if (!spas || spas.length === 0) {
          console.error(`No spas found for vessel ID: ${data.vesselId}`);
        }
        setSpas(spas);
        console.log("Fetched Spas:", spas);

        const library = await getLibrariesByVesselId(data.vesselId);
        if (!library || library.length === 0) {
          console.error(`No library found for vessel Id: ${data.vesselId}`);
        }
        setLibrary(library);
        console.log("Fetched Library:", library);

        const fitnessCenter = await getFitnessCentersByVesselId(data.vesselId);
        if (!fitnessCenter || fitnessCenter.length === 0) {
          console.error(
            `No fitness center found for vessel Id: ${data.vesselId}`
          );
          return;
        }
        setFitnessCenter(fitnessCenter);
        console.log("Fetched Fitness Center:", fitnessCenter);
      } catch (error) {
        console.error("Error fetching cruise data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCruiseData();
  }, [cruiseId]);

  if (loading) {
    return <Loading />;
  }

  if (!cruiseData) {
    return (
      <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
        <header>
          <h1>
            Information Details for {cruise}: Not Publically Available Yet
          </h1>
          <h5>We are planning the best experiences for your adventure</h5>
          <p>Please check back later for more information on this cruise.</p>
        </header>
      </div>
    );
  }

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <header>
        <h1>{cruise}</h1>
      </header>
    </div>
  );
}
