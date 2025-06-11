#!/usr/bin/env node

/**
 * Vessel Assignment Validation Script
 * ===================================
 *
 * This script validates that all cruises in the system have proper vessel assignments.
 * It checks all cruise files and reports any missing or invalid vessel IDs.
 * It also provides a summary of the validation results.
 * Usage:
 *   node scripts/validate-cruise-vessels.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all cruise files
const cruisesDir = path.join(
  __dirname,
  "..",
  "src",
  "lib",
  "constants",
  "cruises",
  "cruises",
);

async function validateAllCruiseVesselAssignments() {
  console.log("🚢 Validating cruise vessel assignments...\n");

  if (!fs.existsSync(cruisesDir)) {
    console.error(`❌ Cruises directory not found: ${cruisesDir}`);
    return;
  }

  const cruiseFiles = fs
    .readdirSync(cruisesDir)
    .filter((file) => file.endsWith("-cruises.ts"));

  let totalCruises = 0;
  let cruisesWithVessels = 0;
  let cruisesWithoutVessels = 0;
  const problemFiles = [];

  console.log(`📁 Found ${cruiseFiles.length} cruise files\n`);

  for (const file of cruiseFiles) {
    const filePath = path.join(cruisesDir, file);
    const content = fs.readFileSync(filePath, "utf8");

    // Count total cruise objects in the file (exclude contactPersonnel IDs)
    // Look for cruise objects specifically by matching the cruise structure pattern
    const cruiseObjectMatches = content.match(
      /{\s*id:\s*"[^"]+",\s*vesselId|{\s*id:\s*"[^"]+",\s*basePrice/g,
    );
    const cruiseCount = cruiseObjectMatches ? cruiseObjectMatches.length : 0;

    // Count vessel ID assignments
    const vesselIdMatches = content.match(/vesselId:\s*"[^"]+"/g);
    const vesselIdCount = vesselIdMatches ? vesselIdMatches.length : 0;

    totalCruises += cruiseCount;
    cruisesWithVessels += vesselIdCount;
    cruisesWithoutVessels += cruiseCount - vesselIdCount;

    const city = file.replace("-cruises.ts", "").replace(/-/g, " ");

    if (vesselIdCount === 0 && cruiseCount > 0) {
      console.log(`❌ ${city}: ${cruiseCount} cruises, 0 vessel assignments`);
      problemFiles.push({ file, city, cruiseCount, vesselIdCount });
    } else if (vesselIdCount < cruiseCount) {
      console.log(
        `⚠️  ${city}: ${cruiseCount} cruises, ${vesselIdCount} vessel assignments (${cruiseCount - vesselIdCount} missing)`,
      );
      problemFiles.push({ file, city, cruiseCount, vesselIdCount });
    } else if (vesselIdCount === cruiseCount && cruiseCount > 0) {
      console.log(
        `✅ ${city}: ${cruiseCount} cruises, ${vesselIdCount} vessel assignments`,
      );
    }
  }

  console.log("\n📊 Summary:");
  console.log(`Total cruises: ${totalCruises}`);
  console.log(`Cruises with vessels: ${cruisesWithVessels}`);
  console.log(`Cruises without vessels: ${cruisesWithoutVessels}`);
  console.log(
    `Coverage: ${((cruisesWithVessels / totalCruises) * 100).toFixed(1)}%`,
  );

  if (problemFiles.length > 0) {
    console.log(
      `\n🔧 Files needing vessel assignment fixes: ${problemFiles.length}`,
    );

    console.log("\nTo fix these files, run:");
    console.log("node scripts/create-city-cruise-files.mjs --rewrite");
  } else {
    console.log("\n🎉 All cruises have proper vessel assignments!");
  }

  return {
    totalCruises,
    cruisesWithVessels,
    cruisesWithoutVessels,
    problemFiles,
    coverage: (cruisesWithVessels / totalCruises) * 100,
  };
}

// Run validation
validateAllCruiseVesselAssignments()
  .then((result) => {
    if (result && result.cruisesWithoutVessels > 0) {
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error("Error during validation:", error);
    process.exit(1);
  });
