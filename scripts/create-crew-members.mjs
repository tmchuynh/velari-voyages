import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { getCityFiles } from "./utils/file-utils.mjs";
import { cityCountryMap, cityToRegionMap } from "./utils/geo-utils.mjs";
import { getRandomLanguages } from "./utils/language-utils.mjs";
import { feminineNames, masculineNames } from "./utils/name-utils.mjs";

// // Basic usage
// node scripts/create-crew-members.mjs

// // Generate or overwrite a specific city's crew
// node scripts/create-crew-members.mjs --city=miami --force=true

// // Add more crew for a specific city and department
// node scripts/create-crew-members.mjs --city=miami --department="Engineering Department"
// node scripts/create-crew-members.mjs --city=sydney --department="Security Department"

// // Add more crew for a specific city, department, and role
// node scripts/create-crew-members.mjs --city=miami --department="Engineering Department" --role="Mechanical Engineer" --count=2

function formatKebebToTitleCase(str) {
  return str
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

// Parse command line arguments
function parseArgs() {
  const args = {};
  process.argv.slice(2).forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");
      args[key] = value;
    }
  });
  return args;
}

// ES Modules fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use imported getCityFiles instead of local function
const cityFiles = getCityFiles();

// Department structure with required counts and roles
const departmentStructure = {
  "Deck Department": {
    count: 8,
    roles: [
      "Captain",
      "First Officer",
      "Second Officer",
      "Third Officer",
      "Navigation Officer",
      "Safety Officer",
      "Deck Cadet",
      "Bosun",
    ],
  },
  "Engineering Department": {
    count: 10,
    roles: [
      "Chief Engineer",
      "First Engineer",
      "Second Engineer",
      "Electrical Engineer",
      "Mechanical Engineer",
      "HVAC Engineer",
      "Environmental Engineer",
      "Systems Engineer",
      "Technical Manager",
      "Maintenance Engineer",
    ],
  },
  "Security Department": {
    count: 7,
    roles: [
      "Security Director",
      "Security Officer",
      "Security Specialist",
      "Cybersecurity Officer",
      "Maritime Security Coordinator",
      "Access Control Officer",
      "Safety Compliance Officer",
    ],
  },
  "Youth & Family Programs": {
    count: 6,
    roles: [
      "Youth Program Director",
      "Family Activities Coordinator",
      "Children's Entertainment Specialist",
      "Teen Activities Coordinator",
      "Educational Program Manager",
      "Child Care Specialist",
    ],
  },
  "Activities & Recreation": {
    count: 4,
    roles: [
      "Activities Director",
      "Water Sports Instructor",
      "Fitness Instructor",
      "Excursion Coordinator",
    ],
  },
  "Photography & Videography": {
    count: 3,
    roles: ["Lead Photographer", "Videographer", "Digital Media Specialist"],
  },
  "Health & Safety": {
    count: 4,
    roles: [
      "Chief Medical Officer",
      "Ship's Doctor",
      "Nurse",
      "Safety Officer",
    ],
  },
  "Hospitality Department": {
    count: 12,
    roles: [
      "Hospitality Director",
      "Guest Relations Manager",
      "Chief Steward",
      "Senior Steward",
      "Butler",
      "Accommodation Manager",
      "Housekeeping Supervisor",
      "Guest Services Specialist",
      "Concierge",
      "Front Desk Manager",
      "VIP Coordinator",
      "Hospitality Trainer",
    ],
  },
  "Culinary Department": {
    count: 13,
    roles: [
      "Executive Chef",
      "Sous Chef",
      "Pastry Chef",
      "Chef de Partie",
      "Specialty Chef",
      "Sushi Chef",
      "Garde Manger",
      "Butcher",
      "Baker",
      "Sommelier",
      "Mixologist",
      "Barista",
      "Nutritionist",
    ],
  },
  "Entertainment Department": {
    count: 16,
    roles: [
      "Entertainment Director",
      "Performance Coordinator",
      "Lead Vocalist",
      "Musician",
      "Dancer",
      "Choreographer",
      "Comedy Performer",
      "Magic Act",
      "DJ",
      "Audio Technician",
      "Lighting Specialist",
      "Stage Manager",
      "Production Manager",
      "Costume Designer",
      "Cultural Program Director",
      "Performance Artist",
    ],
  },
  "Operations Department": {
    count: 5,
    roles: [
      "Operations Manager",
      "Logistics Coordinator",
      "Inventory Specialist",
      "Procurement Officer",
      "Sustainability Coordinator",
    ],
  },
};

// Name datasets by region
const namesByRegion = {
  global: {
    first: [
      "James",
      "Maria",
      "David",
      "Sarah",
      "Michael",
      "Emma",
      "John",
      "Olivia",
      "Robert",
      "Sophia",
    ],
    last: [
      "Baker",
      "Bennett",
      "Campbell",
      "Carpenter",
      "Chambers",
      "Clark",
      "Coleman",
      "Collins",
      "Cooper",
      "Crawford",
      "Curtis",
      "Day",
      "Dean",
      "Dixon",
      "Douglas",
      "Dunn",
      "Ellis",
      "Fisher",
      "Fletcher",
      "Foster",
      "Fox",
      "Gardner",
      "Gibson",
      "Graham",
      "Grant",
      "Graves",
      "Griffin",
      "Hall",
      "Hamilton",
      "Harper",
      "Hawkins",
      "Hayes",
      "Henderson",
      "Holloway",
      "Hudson",
      "Hunter",
      "Jennings",
      "Keller",
      "Knight",
      "Lawson",
      "Marshall",
      "Mason",
      "Maxwell",
      "Mitchell",
      "Montgomery",
      "Morgan",
      "Murray",
      "Nash",
      "Palmer",
      "Parker",
      "Payne",
      "Porter",
      "Price",
      "Reed",
      "Reeves",
      "Russell",
      "Spencer",
      "Stewart",
      "Sutton",
      "Wallace",
      "Warren",
      "Watson",
      "Wells",
      "West",
    ],
  },
  // Add more region-specific names as needed
};

// Replace the hardcoded languages array with imported language utilities
// Languages by region - This is now imported from language-utils.mjs

// Replace the import statement with direct access to cruiseDepartureLocations
// import { cruiseDepartureLocations } from "../src/lib/constants/info/city.js";

// Instead, read and parse the city.ts file content
let cruiseDepartureLocations = [];
try {
  const cityTsFile = fs.readFileSync(
    path.join(__dirname, "../src/lib/constants/info/city.ts"),
    "utf8",
  );
  // Extract the cruiseDepartureLocations array using regex
  const locationsMatch = cityTsFile.match(
    /export const cruiseDepartureLocations: Location\[\] = (\[[\s\S]*?\n\];)/,
  );
  if (locationsMatch && locationsMatch[1]) {
    // Basic string manipulation to make it valid JSON (remove type annotations and convert to proper JSON)
    let jsonStr = locationsMatch[1]
      .replace(/: Location\[\]/g, "")
      .replace(/(\w+):/g, '"$1":')
      .replace(/'/g, '"');

    try {
      cruiseDepartureLocations = JSON.parse(jsonStr);
    } catch (jsonError) {
      console.error("Error parsing cruiseDepartureLocations:", jsonError);
      // Fallback to empty array, which will use default location data
    }
  }
} catch (error) {
  console.error("Could not read city.ts file:", error);
  // Fallback to using default location data when city information is needed
}

// Expanded bio templates by role
const bioTemplates = {
  Captain: [
    "{name} brings over {experience} years of experience navigating {region}'s waters, specializing in coastal and offshore operations with a focus on safety and efficiency.",
    "With {experience} years at sea, Captain {lastName} is renowned for expertise in {region} navigation, crew leadership, and passenger safety protocols.",
    "Captain {lastName} has navigated the challenging waters of {region} for over {experience} years, consistently prioritizing sustainable maritime practices and regulatory compliance.",
    "{name} leads vessel operations with a deep understanding of {region}'s maritime environment, backed by {experience} years of commanding large crews and complex vessels.",
    "Captain {lastName}'s strategic decision-making and crisis management skills, honed over {experience} years, ensure smooth and safe voyages throughout {region}.",
    "Drawing on {experience} years of command, {name} expertly manages all aspects of vessel operation in {region}, emphasizing crew development and operational excellence.",
    "Captain {lastName} is a veteran mariner with {experience} years in {region}, known for meticulous voyage planning and a steadfast commitment to maritime law.",
    "With a distinguished {experience}-year career, {name} ensures the highest standards of safety and seamanship aboard, navigating {region} with precision and authority.",
  ],
  "First Officer": [
    "{name} specializes in {region} navigation with {experience} years of experience managing bridge operations and ensuring adherence to safety standards.",
    "Former {background} officer {name} brings exceptional navigational precision and leadership with {experience} years sailing throughout {region}.",
    "With {experience} years of maritime expertise, {name} coordinates watchkeeping duties and emergency response, expertly navigating {region}'s waterways.",
    "First Officer {lastName} supports the Captain by managing daily operations and maintaining vessel readiness, backed by extensive experience in {region}.",
    "{name} applies comprehensive knowledge of {region}'s tides, currents, and weather patterns, contributing to efficient and safe ship navigation.",
    "Leveraging {experience} years of experience in {region}, {name} is adept at cargo operations, stability calculations, and bridge resource management.",
    "First Officer {lastName}'s {experience}-year background includes robust training in advanced navigation systems and crew supervision within {region}.",
    "{name}, with {experience} years navigating {region}, plays a vital role in safety drills, crew training, and maintaining navigational equipment.",
  ],
  "Second Officer": [
    "{name} applies {experience} years of navigational skills to support safe and efficient voyages across {region}, with strong expertise in chart plotting and communication systems.",
    "With a strong focus on electronic navigation and safety equipment, {name} brings {experience} years of experience navigating {region}'s challenging routes.",
    "{name} ensures compliance with navigation protocols and supports bridge team operations, leveraging {experience} years in maritime operations across {region}.",
    "Second Officer {lastName} is adept at monitoring vessel position and environmental conditions, contributing to safe passage through {region}.",
    "{name} plays a critical role in voyage planning and watchkeeping, backed by {experience} years ensuring operational integrity in {region}.",
    "Utilizing {experience} years of expertise, {name} meticulously maintains navigational charts and publications crucial for safe transit in {region}.",
    "Second Officer {lastName}'s responsibilities include managing the ship's medical stores and providing medical assistance, drawing on {experience} years of maritime service in {region}.",
    "{name} is skilled in passage planning software and integrated bridge systems, contributing {experience} years of knowledge to operations in {region}.",
  ],
  "Third Officer": [
    "As a vigilant watchkeeper, {name} has {experience} years supporting navigation, safety drills, and emergency procedures aboard vessels in {region}.",
    "{name}'s expertise in safety and lifesaving equipment maintenance comes from {experience} years at sea within {region}, ensuring crew and passenger preparedness.",
    "With {experience} years dedicated to bridge operations, {name} contributes to seamless voyages through {region}'s waterways by monitoring safety and compliance.",
    "Third Officer {lastName} conducts regular safety inspections and coordinates emergency drills, enhancing onboard security across {region}.",
    "{name} supports communication and lookout duties during watches, maintaining high situational awareness in {region}'s maritime environment.",
    "Drawing on {experience} years of experience in {region}, {name} is responsible for the upkeep of firefighting appliances and lifesaving apparatus.",
    "Third Officer {lastName} assists with cargo operations and ballast management, a key part of their {experience} years of development in {region}.",
    "{name} meticulously updates ship's logs and navigational records, ensuring accuracy and compliance during voyages in {region} over {experience} years.",
  ],
  "Navigation Officer": [
    "{name} utilizes advanced navigational technology with {experience} years ensuring precise route planning and safe passage in {region}.",
    "Experienced in electronic chart systems (ECDIS) and radar, {name} has {experience} years navigating the complex and often congested waters of {region}.",
    "{name} collaborates with the bridge team to optimize voyage efficiency, integrating real-time data and weather information specific to {region}.",
    "Navigation Officer {lastName} maintains detailed voyage records and monitors navigation aids, ensuring compliance with maritime regulations in {region}.",
    "{name}'s expertise in navigational risk assessment supports proactive decision-making for safe operations within {region}'s ports and coastal areas.",
    "With {experience} years dedicated to {region} routes, {name} excels in dynamic positioning and integrated navigation systems management.",
    "Navigation Officer {lastName} ensures all navigational equipment is calibrated and fully operational, leveraging {experience} years of technical expertise in {region}.",
    "{name} plays a key role in training junior officers on {region}-specific navigational challenges and best practices, backed by {experience} years of experience.",
  ],
  "Safety Officer": [
    "{name} has implemented rigorous safety protocols over {experience} years to protect crew and passengers, focusing on compliance with SOLAS and IMO standards in {region}.",
    "With {experience} years overseeing maritime safety, {name} ensures strict adherence to international safety regulations and promotes a culture of safety onboard vessels operating in {region}.",
    "{name} conducts regular safety audits, risk assessments, and emergency preparedness drills to minimize hazards in {region}'s maritime operations.",
    "Safety Officer {lastName} leads training programs on lifesaving equipment, firefighting, and pollution prevention, emphasizing {region}-specific challenges.",
    "{name} collaborates closely with all departments to ensure comprehensive safety management, leveraging {experience} years of expertise in {region} waters.",
    "Drawing on {experience} years in maritime safety within {region}, {name} is an expert in incident investigation and corrective action implementation.",
    "Safety Officer {lastName} meticulously maintains all safety documentation and ensures the vessel is prepared for any external audits in {region}.",
    "{name} champions a proactive safety culture, empowering every crew member to contribute to a secure environment through {experience} years of leadership in {region}.",
  ],
  "Deck Cadet": [
    "{name} is an aspiring maritime professional with foundational training and practical experience in ship operations and navigation within {region}.",
    "As a dedicated Deck Cadet, {name} is gaining {experience} years of hands-on knowledge in deck maintenance, watchkeeping, and safety procedures in {region}.",
    "{name} supports deck crew activities while developing skills in seamanship, navigation, and emergency response tailored to {region}'s maritime environment.",
    "Deck Cadet {lastName} learns shipboard operations under experienced officers, preparing for a future leadership role in {region} waters.",
    "With a strong commitment to professional growth, {name} actively participates in drills and training to build competence for safe vessel operation.",
    "Eager to learn, Deck Cadet {name} diligently assists with bridge duties and deck maintenance tasks, absorbing essential skills for navigating {region}.",
    "{name}, a promising Deck Cadet, is quickly mastering the fundamentals of seamanship and safety protocols specific to {region} maritime operations.",
    "Under the guidance of senior officers, Deck Cadet {lastName} is developing a strong foundation in practical navigation and ship handling in {region}.",
  ],
  Bosun: [
    "Bosun {lastName} supervises deck crew operations with {experience} years of expertise ensuring maintenance, safety, and efficient handling of equipment aboard ships in {region}.",
    "With {experience} years managing deck teams, {name} coordinates tasks such as mooring, cargo handling, and routine repairs, maintaining operational readiness in {region}.",
    "{name} ensures compliance with safety standards during deck operations, fostering teamwork and discipline among crew members across {region}'s vessels.",
    "Bosun {lastName} mentors junior deck crew, promoting professional development and adherence to best practices in {region}'s maritime industry.",
    "{name} plays a pivotal role in implementing maintenance schedules and overseeing deck inventory to support smooth voyages through {region}.",
    "Leveraging {experience} years of seamanship, Bosun {lastName} is an expert in rigging, anchoring, and all aspects of deck machinery operation in {region}.",
    "{name}'s leadership ensures the deck department operates efficiently and safely, drawing from {experience} years of hands-on experience in {region}.",
    "Bosun {lastName} maintains the vessel's exterior appearance and structural integrity, a testament to {experience} years of dedication in {region}.",
  ],

  // Engineering Department
  "Chief Engineer": [
    "{name} oversees all vessel systems with {experience} years of expertise in maritime engineering, specializing in {specialty} and ensuring compliance with safety and environmental regulations.",
    "With {experience} years in marine engineering, {name} ensures optimal performance and reliability of propulsion, power generation, and auxiliary systems onboard.",
    "{name} brings {experience} years of engineering excellence, leading innovations in sustainable maritime technology and driving continuous improvement in vessel operations.",
    "Chief Engineer {lastName} manages engineering teams and coordinates preventative maintenance programs to maximize uptime and efficiency throughout voyages.",
    "Known for strategic problem-solving, {name} directs all technical operations, balancing safety, performance, and cost-effectiveness aboard vessels.",
    "With {experience} years at the helm of engineering departments, {name} excels in {specialty} systems and guarantees adherence to strict environmental MARPOL regulations.",
    "Chief Engineer {lastName}'s extensive {experience}-year background includes overseeing major overhauls and ensuring peak operational readiness of all machinery.",
    "{name} leads the engineering department with a focus on fuel efficiency and emissions reduction, drawing upon {experience} years of innovative practice and {specialty} knowledge.",
  ],
  "First Engineer": [
    "First Engineer {lastName} coordinates maintenance and repairs with {experience} years of experience in marine mechanical systems, ensuring seamless engine room operations.",
    "With a focus on propulsion and power systems, {name} applies {experience} years of expertise to optimize engine performance and troubleshoot complex mechanical issues.",
    "{name} supervises engineering staff during watch shifts, maintaining operational readiness and compliance with maritime safety standards.",
    "First Engineer {lastName} manages spare parts inventory and oversees condition monitoring programs to prevent system failures.",
    "{name} plays a key role in implementing engineering upgrades and system modifications, leveraging extensive technical knowledge.",
    "Drawing on {experience} years, {name} takes charge of the engine room in the Chief Engineer's absence, ensuring all systems run smoothly and efficiently.",
    "First Engineer {lastName} is responsible for the main propulsion machinery and auxiliary systems, bringing {experience} years of hands-on expertise.",
    "With {experience} years in marine engineering, {name} excels in diagnosing faults and executing prompt, effective repairs to critical shipboard machinery.",
  ],
  "Second Engineer": [
    "{name} supports engineering operations with {experience} years focused on mechanical maintenance, diagnostics, and equipment troubleshooting aboard vessels.",
    "Experienced in engine room management, {name} brings {experience} years ensuring mechanical integrity, safety, and regulatory compliance.",
    "Second Engineer {lastName} conducts routine inspections and coordinates repairs for critical propulsion and auxiliary machinery.",
    "With strong technical acumen, {name} assists in crew training on engineering systems and emergency response procedures.",
    "{name} plays an integral role in maintaining fuel efficiency and reducing emissions through optimized machinery operation.",
    "With {experience} years of experience, {name} is responsible for specific auxiliary engines, boilers, and associated systems, ensuring their reliability.",
    "Second Engineer {lastName} meticulously manages bunkering operations and ensures the quality of fuel and lubricants, drawing on {experience} years of practical knowledge.",
    "{name}'s {experience} years include supervising junior engineers and engine room ratings, fostering a culture of safety and competence.",
  ],
  "Electrical Engineer": [
    "{name} manages all electrical systems on board, applying {experience} years of expertise in marine electrical engineering and system integration.",
    "With {experience} years designing, installing, and maintaining vessel electrical infrastructure, {name} ensures continuous power supply and safety.",
    "Electrical Engineer {lastName} conducts regular testing and troubleshooting of generators, switchboards, and control systems to prevent downtime.",
    "{name} implements energy-saving technologies and complies with international standards for electrical safety aboard ships.",
    "Responsible for wiring upgrades and automation system maintenance, {name} supports enhanced operational efficiency and crew safety.",
    "Drawing on {experience} years, {name} ensures the integrity of high-voltage systems and sophisticated electronic controls throughout the vessel.",
    "Electrical Engineer {lastName} specializes in fault-finding within complex circuits and automation logic, a skill honed over {experience} years.",
    "{name}'s expertise covers power distribution, electric propulsion components, and emergency backup systems, backed by {experience} years in the field.",
  ],
  "Mechanical Engineer": [
    "Mechanical Engineer {lastName} specializes in propulsion, HVAC, and auxiliary machinery with {experience} years ensuring operational efficiency and reliability.",
    "With {experience} years of mechanical expertise, {name} maintains critical ship machinery, including pumps, compressors, and hydraulic systems.",
    "{name} performs root cause analysis for mechanical failures and implements corrective action plans to minimize operational disruptions.",
    "Mechanical Engineer {lastName} collaborates closely with the engineering team to enhance machinery performance and lifecycle management.",
    "{name} is skilled in preventive maintenance scheduling and compliance with technical documentation and safety protocols.",
    "With {experience} years dedicated to marine mechanics, {name} excels in the overhaul and alignment of engines and rotating machinery.",
    "Mechanical Engineer {lastName} provides vital support in dry-docking operations, overseeing repairs and upgrades to mechanical systems based on {experience} years of insight.",
    "{name}'s problem-solving abilities are crucial for addressing unexpected mechanical challenges, ensuring vessel safety and uptime through {experience} years of service.",
  ],
  "HVAC Engineer": [
    "{name} designs, installs, and maintains heating, ventilation, and air conditioning systems with {experience} years of maritime specialization.",
    "HVAC Engineer {lastName} ensures optimal climate control aboard vessels, leveraging {experience} years of system optimization and energy efficiency knowledge.",
    "{name} monitors system performance and implements upgrades to enhance passenger comfort and crew wellbeing.",
    "With expertise in refrigeration cycles and ventilation design, {name} addresses environmental control challenges in varying maritime conditions.",
    "HVAC Engineer {lastName} coordinates with other engineering disciplines to integrate HVAC solutions with overall ship systems.",
    "Drawing on {experience} years, {name} is proficient in troubleshooting and repairing complex refrigeration plants and air handling units.",
    "HVAC Engineer {lastName}'s focus includes maintaining air quality and compliance with health standards across all vessel compartments, a skill developed over {experience} years.",
    "{name} plays a key role in energy conservation by optimizing HVAC operations, backed by {experience} years of specialized experience.",
  ],
  "Environmental Engineer": [
    "With {experience} years focused on sustainability, {name} develops and implements environmental protection measures aboard ships, ensuring regulatory compliance.",
    "{name} applies expertise in waste management, ballast water treatment, and pollution control, promoting eco-friendly maritime operations.",
    "Environmental Engineer {lastName} monitors emissions and advises on strategies to minimize the vessel’s environmental footprint.",
    "With in-depth knowledge of MARPOL regulations, {name} leads training and awareness programs on environmental best practices among crew members.",
    "{name} conducts environmental impact assessments to support sustainable voyage planning and operational improvements.",
    "Leveraging {experience} years in marine environmental science, {name} ensures strict adherence to all international and local environmental laws.",
    "Environmental Engineer {lastName} manages the ship's garbage management plan and oversees the operation of pollution prevention equipment, with {experience} years of dedication.",
    "{name} champions innovative solutions for waste reduction and energy efficiency, reflecting {experience} years of commitment to maritime sustainability.",
  ],
  "Systems Engineer": [
    "{name} integrates complex onboard systems, ensuring operational synergy and reliability with {experience} years of maritime engineering expertise.",
    "Systems Engineer {lastName} leads technical solutions for navigation, communication, automation, and control systems with {experience} years of service.",
    "With extensive knowledge of software and hardware interfaces, {name} enhances system interoperability and cybersecurity aboard vessels.",
    "{name} manages system diagnostics and upgrades to improve vessel performance and crew operational efficiency.",
    "Systems Engineer {lastName} collaborates across departments to implement new technologies aligned with industry standards.",
    "Drawing upon {experience} years, {name} specializes in the architecture and maintenance of integrated automation systems (IAS) critical for modern vessel operations.",
    "Systems Engineer {lastName}'s proficiency in network engineering and data management ensures seamless information flow across shipboard platforms, built over {experience} years.",
    "{name} is pivotal in troubleshooting and resolving complex issues across interconnected electronic and control systems, thanks to {experience} years of in-depth experience.",
  ],
  "Technical Manager": [
    "{name} manages technical operations, upgrades, and team leadership, leveraging {experience} years in maritime technology and project management.",
    "With {experience} years leading technical teams, {name} ensures vessel systems meet all regulatory, safety, and performance standards.",
    "Technical Manager {lastName} oversees budgeting, procurement, and scheduling of maintenance to optimize vessel availability and lifecycle costs.",
    "{name} drives continuous improvement initiatives and implements emerging maritime technologies to maintain competitive operational capabilities.",
    "Known for strong leadership, {name} fosters a culture of technical excellence and cross-functional collaboration onboard.",
    "With a strategic overview honed over {experience} years, {name} directs fleet-wide technical policies and ensures best practices are implemented.",
    "Technical Manager {lastName} has {experience} years of experience managing dry-dock specifications, contract negotiations, and supervision of major refit projects.",
    "{name} provides expert guidance on complex technical challenges and long-term asset management, drawing from {experience} years of senior engineering leadership.",
  ],
  "Maintenance Engineer": [
    "Maintenance Engineer {lastName} applies {experience} years of hands-on expertise maintaining and repairing shipboard mechanical and electrical equipment.",
    "{name} ensures all vessel machinery operates smoothly and safely, backed by {experience} years in preventive and corrective maintenance programs.",
    "{name} develops maintenance schedules and coordinates with crew to minimize downtime and extend equipment service life.",
    "Maintenance Engineer {lastName} troubleshoots system faults and implements timely repairs, maintaining vessel operational readiness.",
    "With a focus on reliability-centered maintenance, {name} optimizes maintenance practices in accordance with industry best practices.",
    "Leveraging {experience} years, {name} is skilled in using diagnostic tools to predict and prevent equipment failures across a wide range of ship systems.",
    "Maintenance Engineer {lastName}'s {experience} years include managing workshop resources and training junior staff in effective repair techniques.",
    "{name} meticulously documents all maintenance activities, ensuring a comprehensive history for all critical machinery, built over {experience} years of service.",
  ],

  // Security Department
  "Security Director": [
    "Former {background} {name} leads our security team with {experience} years of expertise in maritime safety protocols, risk assessment, and crisis management.",
    "With {experience} years in maritime security, {name} ensures comprehensive protection for passengers, crew, and assets through proactive strategy and coordination.",
    "{name} oversees all security operations with {experience} years of specialized training in international maritime safety, regulatory compliance, and emergency preparedness.",
    "Security Director {lastName} leads threat analysis initiatives and implements advanced security measures to safeguard vessel integrity.",
    "Known for decisive leadership, {name} fosters a culture of vigilance and continuous improvement in maritime security standards.",
    "Drawing on {experience} years and a {background} background, {name} develops and executes sophisticated security plans tailored to high-risk maritime environments.",
    "Security Director {lastName} has {experience} years of experience liaising with international maritime security agencies and port authorities.",
    "{name}, with {experience} years in the field, is an expert in ISPS Code implementation and maritime counter-terrorism strategies.",
  ],
  "Security Officer": [
    "{name} conducts routine security patrols and enforces safety regulations, backed by {experience} years in maritime security operations and incident response.",
    "With keen attention to risk, {name} has {experience} years experience protecting vessel personnel, property, and critical infrastructure against diverse threats.",
    "Security Officer {lastName} performs access control duties and monitors surveillance systems to maintain a secure onboard environment.",
    "{name} is trained in conflict resolution and emergency protocols, ensuring rapid and effective response to security incidents.",
    "Focused on maintaining order, {name} collaborates with other departments to enhance overall passenger and crew safety.",
    "Leveraging {experience} years of maritime security experience, {name} excels in threat detection and proactive deterrence measures.",
    "Security Officer {lastName} is proficient in emergency communication procedures and crowd management, vital skills honed over {experience} years.",
    "With {experience} years on watch, {name} is adept at identifying suspicious activities and ensuring adherence to the ship's security plan.",
  ],
  "Security Specialist": [
    "Security Specialist {lastName} develops tailored security plans and threat mitigation strategies based on {experience} years of maritime threat analysis and intelligence gathering.",
    "{name} provides expert assessment and response coordination to maritime security challenges, leveraging advanced knowledge in risk management and compliance.",
    "With extensive training in security technologies, {name} leads specialized investigations and security audits to strengthen vessel defenses.",
    "Security Specialist {lastName} advises senior management on emerging security trends and implements best practices in security operations.",
    "Known for analytical expertise, {name} conducts vulnerability assessments and designs contingency plans to address evolving threats.",
    "Drawing on {experience} years, {name} has in-depth knowledge of non-lethal defense tactics and anti-piracy measures.",
    "Security Specialist {lastName} designs and delivers bespoke security training programs for crew members, reflecting {experience} years of practical insight.",
    "{name}'s {experience} years include proficiency in evidence collection and report writing for maritime security incidents.",
  ],
  "Cybersecurity Officer": [
    "Cybersecurity Officer {lastName} protects vessel networks and data with {experience} years of specialized cybersecurity expertise in maritime digital infrastructure.",
    "With a background in IT security, {name} safeguards shipboard communication and control systems against cyber threats, ensuring data integrity and system availability.",
    "Cybersecurity Officer {lastName} implements firewalls, intrusion detection systems, and incident response protocols tailored for maritime environments.",
    "Experienced in compliance with maritime cybersecurity regulations, {name} conducts training to enhance crew awareness of digital risks.",
    "Known for proactive defense strategies, {name} continuously monitors network activity and coordinates responses to cyber incidents onboard.",
    "Leveraging {experience} years in cyber defense, {name} specializes in securing operational technology (OT) unique to maritime assets.",
    "Cybersecurity Officer {lastName} conducts regular penetration testing and vulnerability assessments of ship systems, drawing on {experience} years of expertise.",
    "{name} ensures all onboard digital systems comply with stringent maritime cybersecurity guidelines like IMO MSC.428(98), backed by {experience} years of focused work.",
  ],
  "Maritime Security Coordinator": [
    "{name} coordinates security protocols and emergency responses, drawing on {experience} years in maritime operations and multi-agency collaboration.",
    "Maritime Security Coordinator {lastName} implements compliance programs, conducts drills, and trains crew on security best practices and regulatory requirements.",
    "{name} manages communication between security teams and external authorities to ensure swift resolution of maritime security incidents.",
    "With strong organizational skills, {name} maintains detailed records and reports to support continuous security improvement.",
    "Maritime Security Coordinator {lastName} leads risk assessment initiatives and supports vessel security certification processes.",
    "With {experience} years in the role, {name} is adept at developing and updating the Ship Security Plan (SSP) and ensuring its effective implementation.",
    "Maritime Security Coordinator {lastName} facilitates seamless security operations between ship and shore, a skill honed over {experience} years of dedicated service.",
    "{name}'s {experience} years include expertise in crisis communication and liaising with flag state and port state control on security matters.",
  ],
  "Access Control Officer": [
    "Access Control Officer {lastName} manages secure boarding and access with {experience} years maintaining maritime entry protocols and identification verification.",
    "{name} ensures all personnel and visitors comply with security clearance, manifests, and international maritime access regulations.",
    "Access Control Officer {lastName} coordinates with port authorities and crew to facilitate smooth and secure passenger and cargo flow.",
    "With expertise in surveillance and monitoring, {name} detects and prevents unauthorized access to restricted vessel areas.",
    "Focused on security integrity, {name} conducts regular audits of access logs and assists in security incident investigations.",
    "Drawing on {experience} years of experience, {name} is proficient in operating and maintaining advanced access control systems and screening equipment.",
    "Access Control Officer {lastName} plays a crucial role in gangway security and managing visitor identification processes, a responsibility held for {experience} years.",
    "{name} is trained in search procedures and contraband detection, contributing {experience} years of vigilance to vessel security.",
  ],
  "Safety Compliance Officer": [
    "{name} oversees adherence to maritime safety regulations, leveraging {experience} years ensuring compliance, risk management, and regulatory audits.",
    "Safety Compliance Officer {lastName} conducts safety audits, training, and inspections to uphold the highest standards throughout vessel operations.",
    "{name} works closely with regulatory bodies to ensure the vessel meets all international safety conventions and company policies.",
    "With a thorough understanding of hazard identification and mitigation, {name} leads incident investigations and corrective action plans.",
    "Safety Compliance Officer {lastName} promotes a safety-first culture through continuous education and enforcement of best practices.",
    "Leveraging {experience} years, {name} ensures the vessel's Safety Management System (SMS) is effectively implemented and continuously improved.",
    "Safety Compliance Officer {lastName} is an expert in ISM, ISPS, and MLC compliance, bringing {experience} years of dedicated focus to these areas.",
    "{name} meticulously prepares the vessel for internal and external safety audits, ensuring all documentation and practices meet or exceed standards, backed by {experience} years.",
  ],

  // Youth & Family Programs
  "Youth Program Director": [
    "{name} designs and leads engaging youth programs, applying {experience} years in educational, recreational, and developmental management onboard.",
    "With a passion for youth development, {name} crafts innovative activities fostering learning, social growth, and cultural awareness during voyages.",
    "Youth Program Director {lastName} manages program staff and coordinates resources to deliver safe, inclusive, and dynamic youth experiences.",
    "Committed to positive youth engagement, {name} integrates educational content with fun, age-appropriate activities tailored to diverse passenger groups.",
    "Known for creative leadership, {name} continuously evaluates and improves youth programming to meet evolving passenger needs.",
    "With {experience} years shaping children's experiences at sea, {name} excels at creating memorable and enriching programs for all age groups.",
    "Youth Program Director {lastName} ensures all youth activities are not only fun but also adhere to the highest safety and child protection standards, drawing on {experience} years.",
    "{name} has a knack for inspiring young minds, developing innovative curriculums over {experience} years that make learning an adventure onboard.",
  ],
  "Family Activities Coordinator": [
    "{name} organizes family-friendly events and activities, ensuring inclusive participation and memorable experiences with {experience} years of expertise.",
    "Family Activities Coordinator {lastName} designs multi-generational programs that promote bonding and enjoyment throughout the voyage.",
    "With strong communication skills, {name} liaises with hospitality and entertainment teams to deliver seamless family-oriented services.",
    "Focused on safety and accessibility, {name} ensures all family activities comply with onboard regulations and guest expectations.",
    "Family Activities Coordinator {lastName} gathers feedback to adapt programs that enhance passenger satisfaction and engagement.",
    "Leveraging {experience} years in family entertainment, {name} curates a diverse schedule of events appealing to all members of the family.",
    "Family Activities Coordinator {lastName} is adept at creating a welcoming and fun atmosphere where families can create lasting memories, a skill honed over {experience} years.",
    "{name}, with {experience} years of experience, excels in logistics and planning, ensuring every family event runs smoothly and delights guests.",
  ],
  "Children's Entertainment Specialist": [
    "{name} engages young guests with creative entertainment programs, leveraging {experience} years in children’s recreational services and event planning.",
    "Experienced in youth engagement, {name} provides fun, educational, and culturally sensitive activities tailored for children of all ages.",
    "Children's Entertainment Specialist {lastName} collaborates with youth program teams to develop diverse content promoting creativity and social interaction.",
    "With strong interpersonal skills, {name} ensures a safe and welcoming environment for all child participants.",
    "Known for energetic delivery and adaptability, {name} adjusts programming to accommodate different group sizes and interests.",
    "Drawing on {experience} years of delighting young audiences, {name} brings a unique blend of magic, storytelling, and interactive games to the ship.",
    "Children's Entertainment Specialist {lastName} has a talent for making every child feel special, using {experience} years of experience to tailor activities to individual personalities.",
    "{name} is passionate about sparking imagination, developing new and exciting entertainment formats for kids over {experience} years in the field.",
  ],
  "Teen Activities Coordinator": [
    "{name} develops dynamic programs catering to teenage guests, drawing on {experience} years of youth facilitation and event management expertise.",
    "Teen Activities Coordinator {lastName} fosters positive social environments with interactive, age-appropriate activities that encourage peer bonding.",
    "With knowledge of adolescent development, {name} balances fun and educational content to engage teens effectively onboard.",
    "Focused on safety and inclusivity, {name} maintains open communication with parents and guardians regarding teen program activities.",
    "Teen Activities Coordinator {lastName} monitors participation and feedback to continuously refine and innovate teen programming.",
    "Leveraging {experience} years working with adolescents, {name} creates cool and engaging hangouts and events that resonate with teens.",
    "Teen Activities Coordinator {lastName} is skilled at mentoring and connecting with teenagers, ensuring they have a fantastic and safe experience, drawing on {experience} years.",
    "{name} uses {experience} years of insight to design activities like themed parties, sports tournaments, and creative workshops specifically for teen cruisers.",
  ],
  "Educational Program Manager": [
    "{name} oversees onboard educational initiatives, combining {experience} years of academic and program management experience to enrich passenger learning.",
    "With a commitment to lifelong learning, {name} curates curriculum and interactive sessions that enhance passenger knowledge and engagement.",
    "Educational Program Manager {lastName} coordinates with external educators and experts to deliver diverse and culturally relevant content.",
    "Focused on accessibility, {name} ensures programs accommodate different learning styles and abilities for broad passenger appeal.",
    "Known for strong organizational skills, {name} evaluates program effectiveness and implements improvements based on passenger feedback.",
    "Drawing on {experience} years in educational programming, {name} designs enriching lectures, workshops, and cultural immersion activities related to the voyage itinerary.",
    "Educational Program Manager {lastName} forges partnerships with guest speakers and institutions to provide high-quality learning experiences, leveraging {experience} years of networking.",
    "{name}, with {experience} years in curriculum development, ensures educational content is engaging, accurate, and inspiring for passengers of all ages.",
  ],
  "Child Care Specialist": [
    "{name} provides attentive care and supervision for young passengers, backed by {experience} years in professional child care and early childhood education.",
    "Child Care Specialist {lastName} ensures safety, comfort, and developmentally appropriate activities in a nurturing onboard environment.",
    "With expertise in child health and safety protocols, {name} manages routines and responds to individual needs of children under care.",
    "Known for patience and professionalism, {name} communicates effectively with parents and crew to support child wellbeing.",
    "Child Care Specialist {lastName} promotes social and emotional development through structured play and educational activities.",
    "With {experience} years dedicated to early childhood development, {name} creates a stimulating and secure setting for the youngest guests.",
    "Child Care Specialist {lastName} is certified in pediatric first aid and CPR, bringing {experience} years of trusted care to families onboard.",
    "{name} excels at engaging children with age-appropriate crafts, stories, and games, drawing from {experience} years of experience in child-focused roles.",
  ],

  // Activities & Recreation
  "Activities Director": [
    "{name} plans and coordinates all recreational activities, utilizing {experience} years of event management expertise to create engaging, inclusive programs.",
    "With a focus on guest engagement and satisfaction, {name} designs diverse activity schedules that cater to a wide range of interests and age groups onboard.",
    "Activities Director {lastName} leads a team of specialists, ensuring seamless execution of events that enhance the overall passenger experience.",
    "Known for innovative programming, {name} continuously evaluates activity trends and passenger feedback to refresh and improve offerings.",
    "With strong organizational skills, {name} manages budgets, resources, and partnerships to deliver high-quality recreational services.",
    "Drawing on {experience} years in recreation management, {name} curates an exciting and varied daily program of entertainment and activities for all guests.",
    "Activities Director {lastName} is passionate about creating vibrant social atmospheres, a skill perfected over {experience} years of orchestrating memorable onboard events.",
    "{name}, with {experience} years in the cruise industry, expertly blends classic cruise activities with fresh, innovative entertainment options.",
  ],
  "Water Sports Instructor": [
    "{name} teaches water sports safely and effectively, leveraging {experience} years of professional instruction and certification in aquatic activities.",
    "Water Sports Instructor {lastName} ensures guests enjoy safe, fun, and memorable water-based experiences while strictly adhering to safety protocols.",
    "With expertise in various water sports, {name} provides personalized coaching that accommodates different skill levels and abilities.",
    "Known for excellent communication and risk management skills, {name} maintains vigilance during all aquatic activities to protect participants.",
    "Water Sports Instructor {lastName} stays current with industry certifications and safety standards to uphold best practices onboard.",
    "Leveraging {experience} years of experience, {name} is certified to instruct activities such as snorkeling, kayaking, and paddleboarding in diverse marine environments.",
    "Water Sports Instructor {lastName} possesses an in-depth knowledge of local water conditions and marine life, enhancing guest experiences over {experience} years.",
    "{name}'s primary focus for {experience} years has been ensuring every guest feels confident and secure while exploring the water.",
  ],
  "Fitness Instructor": [
    "Fitness Instructor {lastName} promotes wellness and physical health through tailored exercise programs, backed by {experience} years of fitness training and client engagement.",
    "{name} leads group fitness classes, personal training sessions, and wellness workshops designed to meet diverse passenger needs.",
    "With a focus on motivation and proper technique, {name} helps passengers adopt and maintain healthy lifestyles during their voyage.",
    "Fitness Instructor {lastName} integrates modern fitness trends and equipment to provide dynamic and effective workout options.",
    "Committed to inclusivity, {name} adapts programming to accommodate varying fitness levels and any physical limitations.",
    "Drawing on {experience} years of expertise, {name} offers specialized classes like yoga, Pilates, and high-intensity interval training (HIIT).",
    "Fitness Instructor {lastName} provides nutritional advice and wellness coaching, empowering guests to achieve their health goals over {experience} years.",
    "{name} is passionate about inspiring guests to discover the joy of movement, bringing energy and expertise from {experience} years in the fitness industry.",
  ],
  "Excursion Coordinator": [
    "{name} manages shore excursions with {experience} years coordinating logistics, safety, and guest engagement across diverse international destinations.",
    "Excursion Coordinator {lastName} plans enriching off-ship experiences that promote cultural immersion and memorable interactions for passengers.",
    "With expertise in vendor relations and itinerary planning, {name} ensures smooth, safe, and enjoyable excursions tailored to passenger interests.",
    "Excursion Coordinator {lastName} prioritizes compliance with local regulations and emergency preparedness during all shore activities.",
    "Known for excellent problem-solving, {name} adapts plans efficiently to address unexpected challenges or changing conditions.",
    "Leveraging {experience} years of experience, {name} curates a portfolio of unique and authentic shore excursions that showcase the best of each port.",
    "Excursion Coordinator {lastName} has built strong relationships with local tour operators worldwide over {experience} years, guaranteeing quality and value.",
    "{name}'s meticulous planning and attention to detail, developed over {experience} years, ensure every guest's off-ship adventure is seamless and unforgettable.",
  ],

  // Photography & Videography
  "Lead Photographer": [
    "Lead Photographer {lastName} captures stunning imagery of ship life, landscapes, and destinations, backed by {experience} years of professional photography expertise.",
    "{name} directs all photographic projects onboard, blending technical skill and artistic vision to create visually compelling narratives.",
    "With extensive experience in portrait, event, and environmental photography, {name} ensures high-quality imagery that reflects the voyage’s unique character.",
    "Lead Photographer {lastName} manages photographic equipment, editing workflows, and passenger portrait sessions with precision and professionalism.",
    "Known for creativity and attention to detail, {name} collaborates with other departments to produce visual content that enhances onboard marketing and memory-making.",
    "Drawing on {experience} years behind the lens, {name} expertly captures the essence of the cruise experience, from grand events to intimate moments.",
    "Lead Photographer {lastName}'s portfolio showcases {experience} years of diverse work, including breathtaking drone shots and artistic compositions from around the world.",
    "{name} leads the photo team with {experience} years of experience, mentoring staff and ensuring consistent, high-quality photographic services for all guests.",
  ],
  Videographer: [
    "{name} documents ship activities, excursions, and special events, delivering high-quality video content with {experience} years of professional videography experience.",
    "Videographer {lastName} crafts compelling visual stories that highlight onboard experiences and diverse destinations through expert filming and editing.",
    "With a strong understanding of narrative flow and audience engagement, {name} produces videos for promotional and archival purposes.",
    "Videographer {lastName} maintains technical equipment and coordinates with production teams to ensure seamless content delivery.",
    "Known for creativity and adaptability, {name} effectively captures the dynamic atmosphere and human moments aboard.",
    "Leveraging {experience} years in filmmaking, {name} produces cinematic-quality videos that beautifully encapsulate the journey and its destinations.",
    "Videographer {lastName} is skilled in aerial videography and underwater filming, adding unique perspectives to cruise documentation over {experience} years.",
    "{name} uses {experience} years of editing expertise to transform raw footage into engaging narratives that resonate with passengers and promote future voyages.",
  ],
  "Digital Media Specialist": [
    "{name} manages digital content and multimedia production, applying {experience} years in digital media, marketing, and audience engagement strategies.",
    "Digital Media Specialist {lastName} ensures an engaging online presence by creating and curating multimedia content tailored to diverse passenger demographics.",
    "With expertise in social media, video editing, and graphic design, {name} drives effective digital campaigns that promote the voyage experience.",
    "Digital Media Specialist {lastName} analyzes content performance and audience metrics to optimize digital strategies and engagement.",
    "Known for technical proficiency and creative vision, {name} collaborates closely with marketing and entertainment teams to maximize reach and impact.",
    "With {experience} years in the digital realm, {name} crafts compelling online stories and manages the ship's social media channels to connect with guests.",
    "Digital Media Specialist {lastName} is proficient in SEO, content management systems, and digital advertising, skills honed over {experience} years.",
    "{name} uses {experience} years of experience to leverage emerging digital trends, enhancing guest communication and brand visibility online.",
  ],

  // Health & Safety
  "Chief Medical Officer": [
    "Chief Medical Officer {lastName} leads all medical operations onboard, leveraging {experience} years of clinical and maritime healthcare expertise to ensure passenger and crew wellbeing.",
    "{name} oversees health protocols, emergency medical services, and public health compliance, coordinating medical teams and resources effectively.",
    "With extensive knowledge in maritime medicine and emergency response, {name} ensures readiness for diverse medical situations at sea.",
    "Chief Medical Officer {lastName} maintains medical supplies and liaises with shore-based health facilities to support comprehensive care.",
    "Committed to preventive care, {name} promotes health education and wellness initiatives throughout the voyage.",
    "Drawing on {experience} years as a medical leader, {name} ensures the ship's medical facility operates to the highest international healthcare standards.",
    "Chief Medical Officer {lastName} has {experience} years of experience in managing public health emergencies at sea and implementing robust infection control measures.",
    "{name}, with a distinguished {experience}-year career in {specialty} and maritime health, provides expert medical oversight for thousands of passengers and crew.",
  ],
  "Ship's Doctor": [
    "Dr. {lastName} provides comprehensive medical care with {experience} years of expertise in maritime and travel medicine, addressing acute and chronic conditions onboard.",
    "With specialization in emergency response, preventative medicine, and maritime health protocols, Dr. {lastName} ensures passenger and crew safety.",
    "Ship's Doctor {lastName} conducts routine health assessments and manages medical records in compliance with international maritime standards.",
    "Known for calm professionalism, Dr. {lastName} leads medical emergency interventions and coordinates evacuation when necessary.",
    "Dr. {lastName} collaborates with medical officers and safety teams to uphold the highest health standards aboard.",
    "With {experience} years practicing medicine in diverse environments, Dr. {lastName} is adept at diagnosing and treating a wide array of conditions encountered at sea.",
    "Ship's Doctor {lastName} is skilled in minor surgical procedures and advanced cardiac life support, bringing {experience} years of critical care experience.",
    "Dr. {lastName}, drawing from {experience} years in travel and maritime health, offers expert advice on pre-existing conditions and destination-specific health risks.",
  ],
  Nurse: [
    "{name} delivers compassionate nursing care onboard, backed by {experience} years of clinical practice in maritime and travel healthcare settings.",
    "Nurse {lastName} supports the medical team by administering treatments, monitoring patient conditions, and maintaining comprehensive medical records.",
    "With {experience} years of experience, {name} is proficient in emergency care, routine medical procedures, and health education for passengers and crew.",
    "Nurse {lastName} provides empathetic and skilled assistance, ensuring patient comfort and adherence to strict hygiene and infection control protocols.",
    "Known for meticulous attention to detail and a caring demeanor, {name} has been a vital part of shipboard medical teams for {experience} years.",
    "Leveraging {experience} years in diverse nursing roles, {name} excels in triage, wound care, and patient advocacy within the unique maritime environment.",
    "Nurse {lastName} is experienced in managing chronic health conditions at sea and providing ongoing support to guests with specific medical needs, drawing from {experience} years of practice.",
  ],
  "Safety Officer": [
    "{name} enforces safety standards and conducts training programs, drawing on {experience} years of maritime safety expertise to minimize risks onboard.",
    "Safety Officer {lastName} works proactively to prevent accidents by inspecting equipment, conducting drills, and ensuring regulatory compliance.",
    "With a thorough understanding of hazard identification and mitigation, {name} fosters a culture of safety awareness among crew and passengers.",
    "Safety Officer {lastName} documents incidents and implements corrective actions to continuously improve onboard safety performance.",
    "Committed to regulatory adherence, {name} stays updated on maritime safety laws and best practices, facilitating crew training and certification.",
  ],
  // Health & Safety (Updating Safety Officer based on your new input)
  "Safety Officer": [
    "{name} enforces safety standards and conducts training programs, drawing on {experience} years of maritime safety expertise to minimize risks onboard.",
    "Safety Officer {lastName} works proactively to prevent accidents by inspecting equipment, conducting drills, and ensuring regulatory compliance.",
    "With a thorough understanding of hazard identification and mitigation, {name} fosters a culture of safety awareness among crew and passengers.",
    "Safety Officer {lastName} documents incidents and implements corrective actions to continuously improve onboard safety performance.",
    "Committed to regulatory adherence, {name} stays updated on maritime safety laws and best practices, facilitating crew training and certification.",
    "Leveraging {experience} years in maritime safety, {name} excels at developing and implementing targeted safety training programs relevant to {region}'s specific operational hazards.",
    "With {experience} years overseeing maritime safety, {name} ensures strict adherence to international safety regulations (SOLAS, MARPOL) and promotes a culture of vigilance onboard vessels operating in {region}.",
    "{name} conducts comprehensive safety audits, meticulous risk assessments, and coordinates emergency preparedness drills to minimize hazards and ensure readiness in {region}'s maritime operations.",
  ],

  // Hospitality Department
  "Hospitality Director": [
    "{name} manages all hospitality services, ensuring exceptional guest experiences with {experience} years of leadership.",
    "With {experience} years in hospitality management, {name} drives operational excellence and team performance onboard.",
    "Hospitality Director {lastName} orchestrates a seamless guest journey, from arrival to departure, leveraging {experience} years of expertise in luxury service.",
    "{name} is dedicated to fostering a welcoming and memorable atmosphere for all guests, drawing upon {experience} years of cultivating outstanding hospitality teams.",
    "Overseeing a diverse team, Hospitality Director {lastName} implements innovative service strategies and maintains the highest quality standards, reflecting {experience} years in the industry.",
  ],
  "Guest Relations Manager": [
    "{name} coordinates guest services and resolves issues, leveraging {experience} years of customer relations expertise.",
    "Guest Relations Manager {lastName} enhances passenger satisfaction through attentive and personalized service.",
    "With a passion for service excellence developed over {experience} years, {name} leads the guest relations team to anticipate and exceed passenger expectations.",
    "Guest Relations Manager {lastName} is adept at handling complex guest inquiries and ensuring swift, satisfactory resolutions, fostering loyalty and positive experiences.",
    "{name} champions a guest-first culture, utilizing {experience} years of experience to train and motivate staff in delivering exceptional, personalized care.",
  ],
  "Chief Steward": [
    "Chief Steward {lastName} supervises housekeeping and guest services with {experience} years of maritime hospitality experience.",
    "{name} ensures the highest standards of cleanliness and comfort throughout passenger accommodations.",
    "With {experience} years leading stewardship teams, Chief Steward {lastName} meticulously manages cabin services, laundry operations, and public area upkeep.",
    "{name} excels in inventory management for linens and amenities, maintaining premium standards across all staterooms and suites with {experience} years of dedication.",
    "Chief Steward {lastName} trains and mentors the housekeeping staff, instilling a keen eye for detail and a commitment to impeccable service honed over {experience} years.",
  ],
  "Senior Steward": [
    "Senior Steward {lastName} delivers attentive guest services and supports stewardship operations, drawing on {experience} years onboard.",
    "{name} is skilled in managing cabin maintenance and guest requests with professionalism and care.",
    "With {experience} years of dedicated service, Senior Steward {lastName} ensures guest accommodations are impeccably maintained and personalized to preferences.",
    "{name} provides exceptional valet services and anticipates guest needs, contributing to a luxurious and comfortable onboard experience over {experience} years.",
    "Senior Steward {lastName} also assists in training junior stewards, sharing expertise gained from {experience} years in maritime hospitality.",
  ],
  Butler: [
    "Butler {lastName} provides personalized guest services, backed by {experience} years of elite hospitality expertise.",
    "{name} anticipates guest needs to deliver tailored luxury experiences throughout the voyage.",
    "With discreet professionalism honed over {experience} years, Butler {lastName} offers bespoke services, including in-suite dining, wardrobe management, and personalized arrangements.",
    "{name} crafts unforgettable moments for discerning guests, drawing on {experience} years of experience in curating exclusive and seamless luxury service.",
    "Butler {lastName} is a master of personal assistance, ensuring every detail of a guest's stay is flawless, reflecting {experience} years in top-tier hospitality.",
  ],
  "Accommodation Manager": [
    "{name} oversees accommodation services, ensuring comfort and efficiency with {experience} years in maritime hospitality.",
    "Accommodation Manager {lastName} coordinates housekeeping and maintenance teams for optimal guest satisfaction.",
    "With {experience} years managing large-scale accommodation facilities, {name} ensures all guest cabins and public areas meet exacting standards of cleanliness and repair.",
    "Accommodation Manager {lastName} plays a key role in inventory control for linens, amenities, and cleaning supplies, optimizing resources over {experience} years.",
    "{name} expertly handles guest feedback regarding accommodations, implementing swift solutions and driving continuous improvement based on {experience} years of experience.",
  ],
  "Housekeeping Supervisor": [
    "Housekeeping Supervisor {lastName} leads cleaning teams, maintaining impeccable standards across all guest areas.",
    "{name} ensures smooth operations and staff training, supported by {experience} years in hospitality management.",
    "With a keen eye for detail developed over {experience} years, Housekeeping Supervisor {lastName} conducts rigorous inspections to uphold pristine conditions.",
    "{name} manages daily assignments, motivates the housekeeping team, and ensures efficient use of cleaning resources, drawing on {experience} years of leadership.",
    "Housekeeping Supervisor {lastName} is committed to sustainability in cleaning practices, implementing eco-friendly procedures throughout their {experience} years of service.",
  ],
  "Guest Services Specialist": [
    "{name} assists guests with inquiries and special requests, drawing on {experience} years in customer service roles.",
    "Guest Services Specialist {lastName} facilitates seamless guest interactions to enhance onboard experiences.",
    "With {experience} years providing frontline support, {name} is adept at information sharing, problem-solving, and ensuring guests feel valued and well-informed.",
    "Guest Services Specialist {lastName} efficiently handles onboard account management, reservations for activities, and general assistance with a friendly and professional demeanor.",
    "{name}'s communication skills, honed over {experience} years, are key to creating positive first impressions and lasting guest satisfaction.",
  ],
  Concierge: [
    "Concierge {lastName} offers expert local knowledge and personalized recommendations to enrich guest journeys.",
    "{name} leverages {experience} years of service to provide exceptional concierge support onboard.",
    "With an extensive network and {experience} years of experience, Concierge {lastName} arranges bespoke shore excursions, dining reservations, and special occasion services.",
    "{name} acts as a personal guide to onboard and onshore experiences, providing insider tips and tailored advice to create unique memories for guests.",
    "Concierge {lastName}'s dedication over {experience} years ensures every guest request, no matter how unique, is handled with sophistication and efficiency.",
  ],
  "Front Desk Manager": [
    "Front Desk Manager {lastName} oversees reception operations, ensuring efficient guest check-in and issue resolution.",
    "{name} leads front office teams with a focus on excellent customer service and operational efficiency.",
    "With {experience} years in front office management, {name} ensures a welcoming and organized reception area, managing all aspects of guest registration and billing.",
    "Front Desk Manager {lastName} trains staff in handling diverse guest interactions and maintaining accurate records, drawing on {experience} years of best practices.",
    "{name} is pivotal in managing high-traffic periods and resolving escalated guest concerns with professionalism and grace, reflecting {experience} years in the field.",
  ],
  "VIP Coordinator": [
    "VIP Coordinator {lastName} manages exclusive guest services, ensuring privacy and personalized attention throughout the voyage.",
    "{name} designs and executes VIP programs that exceed the highest standards of luxury and discretion.",
    "With {experience} years catering to high-profile clientele, {name} curates bespoke itineraries and ensures flawless execution of all VIP arrangements.",
    "VIP Coordinator {lastName} liaises with all departments to provide seamless, anticipatory service for distinguished guests, maintaining utmost confidentiality.",
    "{name}'s expertise over {experience} years lies in creating unparalleled experiences, making every VIP guest feel exceptionally valued and pampered.",
  ],
  "Hospitality Trainer": [
    "{name} develops training programs to elevate hospitality team skills, with {experience} years in workforce development.",
    "Hospitality Trainer {lastName} focuses on enhancing guest service quality through targeted education and coaching.",
    "With {experience} years of designing and delivering impactful training, {name} empowers staff with the knowledge and skills to provide outstanding service.",
    "Hospitality Trainer {lastName} specializes in areas like luxury service standards, complaint resolution, and upselling techniques, drawing on {experience} years of industry best practices.",
    "{name} conducts needs assessments and measures training effectiveness to ensure continuous improvement across all hospitality departments, reflecting {experience} years in adult learning.",
  ],

  // Culinary Department
  "Executive Chef": [
    "Chef {lastName} creates exceptional {cuisine} cuisine with {experience} years of culinary expertise from around the world.",
    "With {experience} years in fine dining, Chef {lastName} specializes in {cuisine} flavors using locally sourced ingredients.",
    "Executive Chef {lastName} leads a brigade of talented chefs, orchestrating all culinary operations and menu development with {experience} years of innovative leadership.",
    "Mastering {cuisine} and international gastronomy, {name} ensures every dish reflects the highest standards of quality, presentation, and flavor, backed by {experience} years of award-winning experience.",
    "Beyond crafting exquisite {cuisine}, Chef {lastName} expertly manages kitchen hygiene, inventory, and food cost control, honed over {experience} years in demanding culinary environments.",
  ],
  "Sous Chef": [
    "Sous Chef {lastName} supports kitchen operations with {experience} years of culinary expertise and leadership.",
    "{name} excels in menu execution and team management to maintain high culinary standards.",
    "As second-in-command, Sous Chef {lastName} ensures seamless kitchen workflow and consistent dish quality, drawing on {experience} years of hands-on {cuisine} experience.",
    "{name} trains and supervises junior chefs, playing a key role in maintaining discipline and motivation within the culinary team with {experience} years of mentorship.",
    "With {experience} years in high-volume kitchens, Sous Chef {lastName} is adept at managing specific stations and stepping in for the Executive Chef as needed.",
  ],
  "Pastry Chef": [
    "Pastry Chef {lastName} crafts exquisite desserts with {experience} years of baking and pastry artistry.",
    "{name} blends creativity and technique to deliver memorable pastry experiences for guests.",
    "Specializing in delicate {cuisine} pastries and innovative dessert creations, Pastry Chef {lastName} brings {experience} years of refined skill to the culinary team.",
    "{name} manages the pastry section, from artisan breads to elaborate cakes and plated desserts, ensuring exceptional quality over {experience} years.",
    "With a passion for sweet masterpieces, Pastry Chef {lastName} continually develops new recipes, delighting guests with {experience} years of dedication to the art of patisserie.",
  ],
  "Chef de Partie": [
    "Chef de Partie {lastName} manages specific kitchen stations with {experience} years of focused culinary skill.",
    "{name} ensures consistency and quality in dish preparation across assigned kitchen areas.",
    "Specializing in the {specialty} station (e.g., Saucier, Grillardin), Chef de Partie {lastName} brings {experience} years of expertise in preparing precise {cuisine} components.",
    "{name} maintains immaculate standards of organization and hygiene at their station, contributing to the kitchen's overall efficiency with {experience} years of discipline.",
    "With {experience} years as a section chef, {name} is responsible for stock control and guiding commis chefs within their designated area of the {cuisine} kitchen.",
  ],
  "Specialty Chef": [
    "{name} specializes in unique culinary styles, offering guests diverse flavors based on {experience} years of expertise.",
    "Specialty Chef {lastName} brings innovation and authenticity to the onboard dining experience.",
    "Master of {cuisineSpecific} cuisine, {name} creates authentic dishes that transport guests to {region}, drawing on {experience} years of dedicated culinary exploration.",
    "Specialty Chef {lastName} curates exclusive menus for themed dining venues, showcasing {experience} years of passion for {cuisineSpecific} traditions and techniques.",
    "With {experience} years perfecting {cuisineSpecific} artistry, {name} ensures each plate is a true representation of its cultural heritage and bold flavors.",
  ],
  "Sushi Chef": [
    "Sushi Chef {lastName} prepares fresh and artistic sushi dishes, drawing on {experience} years of Japanese culinary tradition.",
    "{name} combines precision and creativity to deliver an authentic sushi experience at sea.",
    "With {experience} years dedicated to the art of sushi and sashimi, Chef {lastName} meticulously selects the freshest seafood and crafts each piece with mastery.",
    "{name} delights guests with traditional Edomae-style sushi and contemporary maki rolls, showcasing skills honed over {experience} years of rigorous training.",
    "Sushi Chef {lastName} manages the sushi bar operations, ensuring exceptional quality and presentation, reflecting {experience} years of Japanese culinary excellence.",
  ],
  "Garde Manger": [
    "Garde Manger {lastName} expertly prepares cold dishes and appetizers with {experience} years of culinary proficiency.",
    "{name} maintains high standards in food presentation and safety for all cold kitchen offerings.",
    "With {experience} years specializing in charcuterie, salads, and elaborate cold platters, Chef {lastName} brings artistry and precision to the Garde Manger station.",
    "{name} is responsible for creating visually stunning and delicious cold appetizers, canapés, and buffet displays, backed by {experience} years of {cuisine} expertise.",
    "Garde Manger {lastName} ensures all cold food items are stored and handled with the utmost care, upholding critical food safety protocols over {experience} years.",
  ],
  Butcher: [
    "Butcher {lastName} ensures quality meat preparation, supported by {experience} years of skilled butchery work.",
    "{name} is responsible for precise meat cuts that meet kitchen and guest expectations.",
    "With {experience} years of expertise, Butcher {lastName} expertly handles all meat and poultry, providing custom cuts and ensuring optimal yield for various {cuisine} dishes.",
    "{name} maintains the highest standards of hygiene and technique in meat processing, a skill perfected over {experience} years in professional butchery.",
    "Butcher {lastName} manages meat inventory and advises chefs on the best cuts for specific culinary applications, drawing on {experience} years of specialized knowledge.",
  ],
  Baker: [
    "Baker {lastName} produces fresh breads and baked goods, leveraging {experience} years of baking expertise.",
    "{name} combines traditional techniques with innovation to delight guests with baked specialties.",
    "With {experience} years dedicated to the art of baking, {name} fills the ship with the aroma of freshly baked artisan breads, pastries, and viennoiserie.",
    "Baker {lastName} meticulously prepares a wide array of {cuisine}-inspired and classic baked goods daily, showcasing skills honed over {experience} years.",
    "{name} manages the bakery's production schedule and ingredient inventory, ensuring consistent quality and freshness, backed by {experience} years of professional baking.",
  ],
  Sommelier: [
    "Sommelier {lastName} curates wine selections, offering expert pairing advice with {experience} years in fine wine service.",
    "{name} enhances dining experiences by sourcing and recommending premium wines.",
    "Certified Sommelier {lastName} navigates an extensive cellar to find the perfect wine for every palate and {cuisine}, drawing on {experience} years of oenological expertise.",
    "{name} provides engaging wine education and tasting experiences for guests, sharing insights from {experience} years exploring global viticulture.",
    "With {experience} years in Michelin-starred establishments, Sommelier {lastName} elevates the dining journey through impeccable wine service and cellar management.",
  ],
  Mixologist: [
    "Mixologist {lastName} crafts creative cocktails, combining flavor expertise with {experience} years of bartending skill.",
    "{name} delivers exceptional beverage experiences tailored to guest preferences onboard.",
    "With {experience} years behind the bar, {name} designs innovative signature cocktails and perfectly executes classic recipes using premium spirits and fresh ingredients.",
    "Mixologist {lastName} delights guests with flair, technique, and a deep understanding of flavor profiles, creating personalized drink experiences over {experience} years.",
    "{name} manages bar inventory and contributes to menu development, ensuring a sophisticated and exciting beverage program, backed by {experience} years in the art of mixology.",
  ],
  Barista: [
    "Barista {lastName} prepares specialty coffees with precision, backed by {experience} years in coffee service.",
    "{name} combines artistry and technique to serve quality espresso and coffee beverages.",
    "With {experience} years of expertise in coffee origins, brewing methods, and latte art, {name} crafts the perfect cup for every guest.",
    "Barista {lastName} ensures consistently excellent coffee quality, from bean grinding to final pour, reflecting {experience} years of dedication to the craft.",
    "{name} provides friendly and efficient service at the coffee bar, sharing knowledge and passion for specialty coffee honed over {experience} years.",
  ],
  Nutritionist: [
    "Nutritionist {lastName} designs balanced menus catering to health-conscious guests, leveraging {experience} years of dietary expertise.",
    "{name} collaborates with chefs to ensure nutritious and delicious meal options onboard.",
    "With {experience} years in clinical and culinary nutrition, {name} provides personalized dietary consultations and develops specialized meal plans for guests with specific needs.",
    "Nutritionist {lastName} works closely with the culinary team to create wholesome {cuisine} options that are both flavorful and aligned with wellness goals, drawing on {experience} years of expertise.",
    "{name} conducts onboard wellness seminars and workshops, empowering guests with nutritional knowledge gained over {experience} years in the field.",
  ],

  // Entertainment Department
  "Entertainment Director": [
    "{name} plans and oversees all entertainment activities, applying {experience} years of event and talent management.",
    "Entertainment Director {lastName} curates diverse programming to engage and delight guests throughout voyages.",
    "With {experience} years orchestrating spectacular onboard entertainment, {name} manages everything from Broadway-style shows to intimate musical performances and themed parties.",
    "Entertainment Director {lastName} leads a dynamic team of performers and technicians, ensuring flawless execution and high-energy engagement across all venues, backed by {experience} years of industry leadership.",
    "{name} constantly seeks innovative entertainment concepts and top-tier talent, leveraging {experience} years to keep the onboard experience fresh, exciting, and memorable.",
  ],
  "Performance Coordinator": [
    "{name} manages scheduling and logistics for performers, ensuring smooth entertainment operations onboard.",
    "Performance Coordinator {lastName} supports talent and technical teams to deliver seamless shows.",
    "With {experience} years in arts administration, {name} expertly coordinates rehearsal schedules, venue allocations, and technical requirements for a multitude of acts.",
    "Performance Coordinator {lastName} serves as the key liaison between artists, production staff, and management, ensuring clear communication and efficient problem-solving.",
    "{name}'s organizational skills, honed over {experience} years, are crucial for maintaining a complex entertainment calendar and ensuring all performers are well-supported.",
  ],
  "Lead Vocalist": [
    "Lead Vocalist {lastName} captivates audiences with dynamic performances, backed by {experience} years of professional singing.",
    "{name} brings charisma and vocal expertise to the ship's entertainment lineup.",
    "With a versatile range and powerful stage presence developed over {experience} years, Lead Vocalist {lastName} shines in genres from pop and rock to jazz and musical theatre.",
    "{name} consistently delivers show-stopping performances, connecting with audiences through emotive storytelling and exceptional vocal talent honed across {experience} years on stage.",
    "As a key figure in production shows, Lead Vocalist {lastName} collaborates with the cast and creative team, bringing {experience} years of professional discipline and artistry.",
  ],
  Musician: [
    "Musician {lastName} performs live music across genres, engaging guests with {experience} years of performance experience.",
    "{name} enriches onboard ambiance through skilled instrumental and vocal performances.",
    "A master of the {instrument}, {name} brings {experience} years of versatile musicianship, performing solo or as part of an ensemble in various ship venues.",
    "Musician {lastName} adapts their repertoire to suit different moods and themes, from relaxing background melodies to upbeat sets, drawing on {experience} years of diverse musical experience.",
    "With {experience} years entertaining audiences worldwide, {name} creates an engaging atmosphere, taking requests and interacting with guests through the power of live music.",
  ],
  Dancer: [
    "Dancer {lastName} delivers energetic and polished routines, drawing on {experience} years of dance training.",
    "{name} engages audiences with versatile dance styles across entertainment programs.",
    "With {experience} years of professional training in {danceStyle} and contemporary dance, {name} executes complex choreography with precision and artistry in mainstage productions.",
    "Dancer {lastName} brings dynamism and grace to every performance, captivating audiences with technical skill and expressive movement honed over {experience} years.",
    "{name} is a dedicated member of the ensemble, contributing to high-energy production numbers and themed events, showcasing {experience} years of professional dance experience.",
  ],
  Choreographer: [
    "Choreographer {lastName} creates captivating dance routines, blending creativity with {experience} years of dance expertise.",
    "{name} leads rehearsals and performance design to enhance the entertainment experience onboard.",
    "With an innovative vision and {experience} years in professional choreography, {name} designs dynamic and original dance pieces for production shows and special events.",
    "Choreographer {lastName} works closely with dancers to teach and refine intricate movements, ensuring performances are polished and impactful, reflecting {experience} years of artistic direction.",
    "{name} collaborates with costume and lighting designers to create a cohesive and visually stunning spectacle, drawing on {experience} years of experience in stage production.",
  ],
  "Comedy Performer": [
    "{name} entertains guests with humor and timing, backed by {experience} years in comedy performance.",
    "Comedy Performer {lastName} delivers engaging and memorable stand-up routines onboard.",
    "With a sharp wit and {experience} years on the comedy circuit, {name} offers hilarious observational humor and storytelling that resonates with diverse audiences.",
    "Comedy Performer {lastName} masterfully crafts clean and engaging sets suitable for a cruise environment, ensuring evenings are filled with laughter and amusement.",
    "{name}'s ability to connect with the audience and improvise, developed over {experience} years, makes each show a unique and highly enjoyable experience.",
  ],
  "Magic Act": [
    "Magic Act specialist {lastName} mystifies audiences with skilled illusions and interactive performances.",
    "{name} blends showmanship and technique to deliver captivating magic shows at sea.",
    "With {experience} years honing the art of illusion, {name} performs mind-bending feats of magic, from close-up tricks to grand stage illusions, delighting guests of all ages.",
    "Magic Act specialist {lastName} combines masterful sleight of hand with engaging patter, creating an atmosphere of wonder and excitement during every {duration} show.",
    "{name} brings a unique brand of enchantment to the ship's entertainment, drawing on {experience} years of professional magic and a flair for theatrical presentation.",
  ],
  DJ: [
    "DJ {lastName} creates vibrant atmospheres with expertly mixed music, drawing on {experience} years in live DJing.",
    "{name} keeps dance floors lively with dynamic sets tailored for diverse guest preferences.",
    "With an extensive music library and {experience} years of reading crowds, DJ {lastName} seamlessly blends genres to create the perfect soundtrack for any onboard event or nightclub.",
    "{name} utilizes professional mixing skills and an energetic presence to ensure high-energy parties and memorable nights for guests, backed by {experience} years of club experience.",
    "DJ {lastName} stays current with music trends while also mastering classics, offering {experience} years of expertise in curating unforgettable musical journeys.",
  ],
  "Audio Technician": [
    "Audio Technician {lastName} manages sound systems and ensures optimal audio quality for performances onboard.",
    "{name} supports entertainment events with technical expertise in live sound engineering.",
    "With {experience} years of experience in mixing live sound for theatre, music, and events, {name} guarantees crystal-clear audio for all onboard productions.",
    "Audio Technician {lastName} expertly operates and maintains complex soundboards, microphones, and speaker systems, ensuring every note and word is perfectly heard.",
    "{name}'s keen ear and technical proficiency, developed over {experience} years, are essential for delivering immersive and high-quality auditory experiences.",
  ],
  "Lighting Specialist": [
    "Lighting Specialist {lastName} designs and operates lighting systems to enhance onboard shows and events.",
    "{name} applies {experience} years of technical skill to create immersive visual experiences.",
    "With {experience} years in theatrical lighting design and operation, {name} transforms stages and venues with dynamic and atmospheric lighting cues.",
    "Lighting Specialist {lastName} programs and operates sophisticated lighting consoles, working closely with directors to achieve the desired visual impact for each performance.",
    "{name}'s artistic vision and technical mastery over {experience} years ensure that lighting plays a crucial role in the storytelling and excitement of onboard entertainment.",
  ],
  "Stage Manager": [
    "Stage Manager {lastName} coordinates all aspects of live performances, ensuring flawless execution of entertainment programs.",
    "{name} supervises stage operations and talent, drawing on {experience} years of event management.",
    "With {experience} years in professional stage management, {name} meticulously calls cues, manages backstage operations, and ensures the smooth running of every show.",
    "Stage Manager {lastName} is the organizational backbone of the production, liaising between performers, technicians, and the director to maintain artistic integrity and timing.",
    "{name}'s calm under pressure and attention to detail, honed over {experience} years, are vital for delivering complex, multi-layered performances without a hitch.",
  ],
  "Production Manager": [
    "Production Manager {lastName} oversees logistics and technical coordination for large-scale entertainment productions.",
    "{name} ensures timely and efficient delivery of shows, leveraging {experience} years in production management.",
    "With {experience} years managing complex theatrical and event productions, {name} oversees budgeting, scheduling, staffing, and technical riders for all entertainment.",
    "Production Manager {lastName} collaborates with creative teams and technical departments to bring ambitious show concepts to life, on time and within budget.",
    "{name}'s strategic planning and problem-solving skills, developed over {experience} years, are crucial for the successful execution of a high-quality entertainment program.",
  ],
  "Costume Designer": [
    "Costume Designer {lastName} creates unique and period-appropriate costumes, enhancing visual storytelling in performances.",
    "{name} combines creativity and craftsmanship with {experience} years of design expertise.",
    "With {experience} years of experience in theatrical costume design, {name} conceives and produces stunning wardrobes that define characters and elevate productions.",
    "Costume Designer {lastName} manages the entire costume lifecycle, from initial sketches and fabric sourcing to fittings and maintenance, ensuring every garment is show-ready.",
    "{name}'s artistic flair and attention to historical detail, honed over {experience} years, bring visual richness and authenticity to the stage.",
  ],
  "Cultural Program Director": [
    "Cultural Program Director {lastName} curates culturally enriching events and experiences for guests.",
    "{name} promotes diversity and cultural awareness through engaging onboard programming.",
    "With {experience} years in arts and cultural programming, {name} develops insightful lectures, workshops, and performances that reflect the destinations visited.",
    "Cultural Program Director {lastName} collaborates with local artists, historians, and experts to provide authentic and immersive cultural experiences for guests.",
    "{name}'s passion for cultural exchange, cultivated over {experience} years, enriches the voyage by fostering understanding and appreciation of diverse traditions.",
  ],
  "Performance Artist": [
    "Performance Artist {lastName} delivers unique and innovative acts, blending multiple disciplines with {experience} years of artistic practice.",
    "{name} captivates audiences with original performances tailored to shipboard entertainment.",
    "A specialist in {artisticDiscipline}, {name} presents breathtaking and thought-provoking performances honed over {experience} years of dedicated artistic exploration.",
    "Performance Artist {lastName} combines elements of {artisticDisciplineCombination} to create truly unique and memorable entertainment experiences for discerning audiences.",
    "With {experience} years pushing artistic boundaries, {name} offers a distinctive and captivating addition to the ship's diverse entertainment offerings.",
  ],

  // Operations Department
  "Operations Manager": [
    "{name} oversees daily operations and coordinates departments to maintain smooth vessel functioning.",
    "Operations Manager {lastName} applies {experience} years of leadership in maritime operations.",
    "With {experience} years streamlining vessel-wide processes, {name} ensures optimal efficiency, resource allocation, and inter-departmental synergy.",
    "Operations Manager {lastName} is adept at problem-solving complex logistical challenges and implementing solutions that enhance overall ship performance and guest satisfaction.",
    "{name} plays a crucial role in port operations coordination, safety compliance oversight, and emergency response planning, backed by {experience} years of maritime expertise.",
  ],
  "Logistics Coordinator": [
    "Logistics Coordinator {lastName} manages supply chain and transport logistics, ensuring efficient resource allocation.",
    "{name} leverages {experience} years in logistics to optimize onboard operations.",
    "With {experience} years coordinating complex supply chains, {name} ensures timely delivery of provisions, spare parts, and equipment essential for uninterrupted voyages.",
    "Logistics Coordinator {lastName} meticulously plans and tracks shipments, manages customs documentation, and optimizes storage solutions onboard.",
    "{name}'s expertise in procurement and vendor management, developed over {experience} years, ensures cost-effective and reliable sourcing for all vessel needs.",
  ],
  "Inventory Specialist": [
    "Inventory Specialist {lastName} tracks and manages stock levels, maintaining operational readiness.",
    "{name} ensures accurate inventory control using advanced management systems.",
    "With {experience} years in inventory management, {name} meticulously maintains records for all consumables, technical spares, and retail goods onboard.",
    "Inventory Specialist {lastName} implements efficient stock rotation (FIFO) and conducts regular audits to prevent shortages and minimize waste.",
    "{name}'s analytical skills, honed over {experience} years, are key to forecasting demand and optimizing stock levels across various departments.",
  ],
  "Procurement Officer": [
    "Procurement Officer {lastName} sources and negotiates contracts for goods and services needed onboard.",
    "{name} applies expertise in vendor management and cost optimization to benefit ship operations.",
    "With {experience} years in strategic sourcing, {name} identifies reliable suppliers and negotiates favorable terms for all shipboard necessities, from fuel to food.",
    "Procurement Officer {lastName} manages supplier relationships, monitors market trends, and ensures compliance with ethical purchasing policies.",
    "{name}'s sharp negotiation skills and {experience} years of experience contribute significantly to controlling operational costs while maintaining quality standards.",
  ],
  "Sustainability Coordinator": [
    "Sustainability Coordinator {lastName} implements green initiatives to minimize environmental impact.",
    "{name} promotes sustainable practices aligned with maritime environmental standards.",
    "With {experience} years dedicated to environmental stewardship in the maritime sector, {name} develops and manages programs for waste reduction, recycling, and energy conservation.",
    "Sustainability Coordinator {lastName} ensures compliance with international environmental regulations (e.g., MARPOL) and promotes a culture of sustainability among crew and guests.",
    "{name} champions innovative eco-friendly technologies and practices, leveraging {experience} years to enhance the vessel's environmental performance and reputation.",
  ],
};

// Default bio template for roles not specifically defined
const defaultBioTemplates = [
  "{name} has dedicated {experience} years to perfecting the art of {role} with exceptional attention to detail.",
  "With {experience} years in the maritime industry, {name} brings expertise and passion to the role of {role}.",
  "{name} provides outstanding service as {role}, drawing on {experience} years of experience in luxury cruise operations.",
  "{name} is a seasoned {role} with {experience} years of dedication to guest satisfaction and operational excellence.",
  "Bringing {experience} years of industry experience, {name} excels in the role of {role} with a focus on service quality.",
  "{name} brings a refined approach to {role}, backed by {experience} years of hands-on experience and leadership.",
  "With {experience} years of experience, {name} is known for professionalism and excellence as a {role}.",
  "{name}'s {experience}-year journey in the cruise industry has shaped a strong foundation for their role as {role}.",
  "Known for reliability and attention to detail, {name} has spent {experience} years excelling as a {role}.",
  "As a trusted {role}, {name} brings {experience} years of practical expertise and dedication to every voyage.",
  "{name} combines skill, passion, and {experience} years of experience to deliver excellence as a {role}.",
  "For {experience} years, {name} has been a vital part of cruise operations, making an impact as a {role}.",
  "With {experience} years of proven service, {name} continues to raise standards in the role of {role}.",
  "{name} has cultivated a reputation for excellence in the role of {role} over {experience} years of service.",
  "A dependable leader and skilled {role}, {name} brings {experience} years of industry knowledge.",
  "{name} is committed to enhancing the guest experience, drawing on {experience} years as a {role}.",
  "As {role}, {name} ensures smooth operations and guest satisfaction with {experience} years of experience.",
  "{name} has been shaping unforgettable guest experiences as a {role} for the past {experience} years.",
  "Over the course of {experience} years, {name} has proven to be an invaluable {role} aboard luxury cruises.",
  "With deep industry insight and {experience} years of service, {name} thrives in the role of {role}.",
  "Guests trust {name}'s {experience} years of experience in delivering excellence as a {role}.",
  "As a dedicated {role}, {name} relies on {experience} years of industry insight and attention to detail.",
  "A key member of the crew, {name} brings {experience} years of specialized experience to the {role} position.",
  "{name} has honed their craft over {experience} years, delivering top-tier service as a {role}.",
  "From embarkation to destination, {name}'s {experience} years in the industry shine in the role of {role}.",
  "With {experience} years under their belt, {name} ensures a seamless experience in the role of {role}.",
  "{name} uses {experience} years of cruise industry experience to elevate the standards of the {role} role.",
  "Serving as a {role} for {experience} years, {name} has mastered the balance of service and operational precision.",
  "{name} brings a wealth of knowledge and {experience} years of experience to every cruise as a {role}.",
  "Known for a calm and professional demeanor, {name} has delivered excellence as a {role} for {experience} years.",
];

// Background options for security and naval roles
const backgroundOptions = [
  "military",
  "naval",
  "coast guard",
  "law enforcement",
  "special forces",
  "security services",
  "maritime safety",
  "police",
  "intelligence",
  "border control",
  "customs enforcement",
  "private security",
  "emergency response",
  "search and rescue",
  "firefighting",
  "crisis management",
  "investigations",
  "surveillance",
  "anti-piracy",
];

// Specialty options for engineers
const engineeringSpecialties = [
  "propulsion systems",
  "marine electronics",
  "sustainable technologies",
  "vessel automation",
  "power management",
  "hydraulic systems",
  "mechanical systems",
  "electrical systems",
  "HVAC systems",
];

// Cuisine types for culinary roles
const cuisineTypes = [
  "Mediterranean",
  "Pacific Rim",
  "Continental",
  "Asian fusion",
  "Caribbean",
  "Nordic",
  "French",
  "Italian",
  "Japanese",
  "Pan-Asian",
  "Latin American",
];

const feminineNames = [
  "Maria",
  "Sarah",
  "Emma",
  "Olivia",
  "Sophia",
  "Isabella",
  "Charlotte",
  "Amelia",
  "Mia",
  "Harper",
  "Evelyn",
  "Abigail",
  "Emily",
  "Elizabeth",
  "Sofia",
  "Avery",
  "Ella",
  "Scarlett",
  "Grace",
  "Chloe",
  "Victoria",
  "Riley",
  "Aria",
  "Lily",
  "Hannah",
  "Layla",
  "Brooklyn",
  "Zoe",
  "Samantha",
  "Nora",
  "Leah",
  "Savannah",
  "Audrey",
  "Claire",
  "Eleanor",
  "Skylar",
  "Ellie",
  "Stella",
  "Bella",
  "Maya",
  "Anna",
  "Caroline",
  "Genesis",
  "Aaliyah",
  "Kennedy",
  "Kinsley",
  "Allison",
  "Maya",
  "Sarah",
  "Madelyn",
  "Adeline",
  "Alexa",
  "Ariana",
  "Elena",
  "Gabriella",
  "Naomi",
  "Alice",
  "Rebecca",
  "Dorothy",
  "Jane",
  "Mary",
  "Patricia",
  "Jennifer",
  "Linda",
  "Barbara",
  "Susan",
  "Jessica",
  "Nancy",
  "Margaret",
  "Lisa",
  "Betty",
  "Sandra",
  "Ashley",
  "Kimberly",
  "Donna",
  "Carol",
  "Michelle",
  "Amanda",
  "Melissa",
  "Deborah",
  "Stephanie",
  "Rachel",
  "Laura",
  "Cynthia",
  "Amy",
  "Angela",
  "Helen",
  "Brenda",
  "Pamela",
  "Nicole",
  "Samantha",
  "Katherine",
  "Christine",
  "Janet",
  "Catherine",
  "Virginia",
  "Julie",
  "Joan",
  "Sophia",
  "Valentina",
  "Isabella",
  "Priya",
  "Amina",
  "Zola",
  "Lerato",
  "Nomsa",
  "Thandiwe",
];

const masculineNames = [
  "James",
  "David",
  "Michael",
  "John",
  "Robert",
  "William",
  "Richard",
  "Thomas",
  "Daniel",
  "Matthew",
  "Christopher",
  "Joseph",
  "Anthony",
  "Mark",
  "Paul",
  "Steven",
  "Andrew",
  "Kenneth",
  "George",
  "Joshua",
  "Kevin",
  "Brian",
  "Edward",
  "Ronald",
  "Timothy",
  "Jason",
  "Jeffrey",
  "Ryan",
  "Jacob",
  "Gary",
  "Nicholas",
  "Eric",
  "Jonathan",
  "Stephen",
  "Larry",
  "Justin",
  "Scott",
  "Brandon",
  "Frank",
  "Benjamin",
  "Gregory",
  "Raymond",
  "Samuel",
  "Patrick",
  "Alexander",
  "Jack",
  "Dennis",
  "Jerry",
  "Tyler",
  "Aaron",
  "Henry",
  "Douglas",
  "Jose",
  "Peter",
  "Adam",
  "Nathan",
  "Zachary",
  "Walter",
  "Harold",
  "Kyle",
  "Carl",
  "Arthur",
  "Gerald",
  "Roger",
  "Keith",
  "Jeremy",
  "Terry",
  "Lawrence",
  "Sean",
  "Christian",
  "Albert",
  "Joe",
  "Ethan",
  "Austin",
  "Jesse",
  "Willie",
  "Billy",
  "Bryan",
  "Bruce",
  "Jordan",
  "Ralph",
  "Roy",
  "Noah",
  "Dylan",
  "Eugene",
  "Wayne",
  "Alan",
  "Juan",
  "Louis",
  "Russell",
  "Gabriel",
  "Randy",
  "Philip",
  "Harry",
  "Vincent",
  "Bobby",
  "Johnny",
  "Logan",
  "Liam",
  "Mason",
  "Oliver",
  "Lucas",
  "Aiden",
  "Elijah",
  "Sebastian",
  "Diego",
  "Marcus",
  "Javier",
  "Carlos",
  "Miguel",
  "Antonio",
  "Luis",
  "Victor",
  "Joel",
  "Blake",
  "Darrell",
  "Thabo",
  "Rajesh",
  "Chen",
  "Wei",
  "Mateo",
  "Gabriel",
];

// Add this function to determine gender based on first name
function determineGenderFromName(firstName) {
  // Check if name is in masculine or feminine lists
  if (masculineNames.includes(firstName)) {
    return "men";
  } else if (feminineNames.includes(firstName)) {
    return "women";
  }

  // If we can't determine, use first letter as a simple heuristic
  // Names starting with A-M more likely to be assigned male, N-Z female
  // This is an arbitrary rule for names not in our lists
  return firstName.charAt(0).toUpperCase() <= "M" ? "men" : "women";
}

// Function to generate a crew member
function generateCrewMember(city, department, role, index) {
  // Get city data from cruiseDepartureLocations
  const cityData = cruiseDepartureLocations.find(
    (location) =>
      location.city.toLowerCase() ===
      formatKebebToTitleCase(city).toLowerCase(),
  );

  const countryName = cityCountryMap[city] || "";
  const regionName = cityToRegionMap[city] || "";

  // If city not found in cruiseDepartureLocations, use a default
  const defaultLocation = {
    city: formatKebebToTitleCase(city),
    country: countryName,
    region: regionName,
  };

  const locationData = cityData || defaultLocation;

  const decision = Math.random() > 0.5;

  const firstName = decision
    ? feminineNames[Math.floor(Math.random() * feminineNames.length)]
    : masculineNames[Math.floor(Math.random() * masculineNames.length)];

  const lastName =
    namesByRegion.global.last[
      Math.floor(Math.random() * namesByRegion.global.last.length)
    ];
  const name = `${firstName} ${lastName}`;

  const experienceYears = Math.floor(Math.random() * 20) + 3; // 5-20 years

  // Generate random languages based on region
  const region = cityToRegionMap[city] || "";
  let regionForLanguages;

  // Map maritime regions to language regions
  switch (region) {
    case "Mediterranean":
    case "Northern Europe":
    case "Western Europe":
      regionForLanguages = "europe";
      break;

    case "Asia Pacific":
      regionForLanguages = "asia";
      break;

    case "Caribbean":
    case "East Coast USA":
    case "West Coast USA":
    case "East Coast Canada":
    case "South America":
      regionForLanguages = "americas";
      break;

    case "Middle East":
      regionForLanguages = "middleEast";
      break;

    case "Africa":
      regionForLanguages = "africa";
      break;

    default:
      regionForLanguages = "global";
      break;
  }

  // Get appropriate languages for crew member
  const languageCount = Math.floor(Math.random() * 3) + 2; // 2-4 languages
  const selectedLanguages = getRandomLanguages(
    languageCount,
    regionForLanguages,
  );
  const languages = selectedLanguages.map((lang) => lang.name);

  // For simplicity, always include English if not already
  if (!languages.includes("English")) {
    languages.push("English");
  }

  // Generate bio using templates based on role
  let bio;
  let templates = bioTemplates[role] || defaultBioTemplates;
  let template = templates[Math.floor(Math.random() * templates.length)];

  // Fill in bio template variables
  bio = template
    .replace("{name}", name)
    .replace("{lastName}", lastName)
    .replace("{experience}", experienceYears)
    .replace("{role}", role)
    .replace("{region}", locationData.region);

  // Add specialty details for certain roles
  if (bio.includes("{background}")) {
    bio = bio.replace(
      "{background}",
      backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)],
    );
  }

  if (bio.includes("{specialty}")) {
    bio = bio.replace(
      "{specialty}",
      engineeringSpecialties[
        Math.floor(Math.random() * engineeringSpecialties.length)
      ],
    );
  }

  if (bio.includes("{cuisine}")) {
    bio = bio.replace(
      "{cuisine}",
      cuisineTypes[Math.floor(Math.random() * cuisineTypes.length)],
    );
  }

  // Generate profile image using randomuser.me
  // Determine gender based on first name
  const gender = decision ? "women" : "men";
  const randomId = Math.floor(Math.random() * 99); // Random number for the image
  const profileImage = `https://randomuser.me/api/portraits/${gender}/${randomId}.jpg`;

  return {
    name,
    role,
    department,
    bio,
    languages,
    experienceYears,
    profileImage,
    city: locationData.city,
    country: locationData.country,
    state: locationData.state,
    region: locationData.region,
  };
}

// Function to generate all crew members for a city
function generateCityCrewMembers(
  city,
  specificDepartment = null,
  specificRole = null,
  count = 1,
) {
  const crewMembers = [];

  Object.entries(departmentStructure).forEach(([department, details]) => {
    // Skip if a specific department is requested and this isn't it
    if (specificDepartment && department !== specificDepartment) return;

    for (let i = 0; i < details.count; i++) {
      const role = details.roles[i % details.roles.length];

      // Skip if a specific role is requested and this isn't it
      if (specificRole && role !== specificRole) continue;

      // If we're adding specific roles, generate the requested count
      if (specificRole && role === specificRole) {
        for (let j = 0; j < count; j++) {
          crewMembers.push(generateCrewMember(city, department, role, i));
        }
      } else if (!specificRole) {
        crewMembers.push(generateCrewMember(city, department, role, i));
      }
    }
  });

  return crewMembers;
}

// Function to check if crew members file exists and read it
function readExistingCrewMembers(city) {
  const filePath = path.join(
    __dirname,
    "../src/lib/constants/crewMembers",
    `${city}.ts`,
  );

  if (fs.existsSync(filePath)) {
    try {
      const fileContent = fs.readFileSync(filePath, "utf8");
      const match = fileContent.match(
        /export const [a-zA-Z0-9_]+ = (\[[\s\S]*\]);/,
      );
      if (match && match[1]) {
        return JSON.parse(match[1]);
      }
    } catch (error) {
      console.error(`Error reading existing crew for ${city}:`, error);
    }
  }

  return null;
}

// Function to write crew members to a file
function writeCrewMembersToFile(city, crewMembers, append = false) {
  const cityVarName = city.replace(/-/g, "") + "TeamMembers";
  const dirPath = path.join(__dirname, "../src/lib/constants/crewMembers");
  const filePath = path.join(dirPath, `${city}.ts`);

  // If appending and file exists, merge with existing crew
  if (append) {
    const existingCrewMembers = readExistingCrewMembers(city);
    if (existingCrewMembers) {
      // Combine existing and new crew members
      crewMembers = [...existingCrewMembers, ...crewMembers];
      console.log(
        `Added ${crewMembers.length - existingCrewMembers.length} new crew members to existing ${existingCrewMembers.length} for ${city}`,
      );
    }
  }

  const fileContent = `import { CrewMember } from "@/lib/interfaces/people/staff";

export const ${cityVarName}: CrewMember[] = ${JSON.stringify(
    crewMembers,
    null,
    2,
  )};
`;

  // Ensure directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(filePath, fileContent);
  console.log(
    `Generated crew members file for ${city} with ${crewMembers.length} members`,
  );
}

// Main function
async function main() {
  const args = parseArgs();
  const specificCity = args.city;
  const specificDepartment = args.department;
  const specificRole = args.role;
  const count = args.count ? parseInt(args.count) : 1;
  const force = args.force === "true";

  if (
    !fs.existsSync(path.join(__dirname, "../src/lib/constants/crewMembers"))
  ) {
    fs.mkdirSync(path.join(__dirname, "../src/lib/constants/crewMembers"), {
      recursive: true,
    });
  }

  // If specific city is provided
  if (specificCity) {
    if (!cityFiles.includes(specificCity)) {
      console.error(`Error: City '${specificCity}' not found in city files`);
      return;
    }

    const filePath = path.join(
      __dirname,
      "../src/lib/constants/crewMembers",
      `${specificCity}.ts`,
    );

    const fileExists = fs.existsSync(filePath);

    // If we're adding specific crew or forcing overwrite
    if ((specificDepartment || specificRole) && fileExists && !force) {
      // Generate only the specific crew members and append
      const crewMembers = generateCityCrewMembers(
        specificCity,
        specificDepartment,
        specificRole,
        count,
      );
      writeCrewMembersToFile(specificCity, crewMembers, true);
    } else if (!fileExists || force) {
      // Generate all crew members for the city
      const crewMembers = generateCityCrewMembers(specificCity);
      writeCrewMembersToFile(specificCity, crewMembers, false);
    } else {
      console.log(
        `Crew file for ${specificCity} already exists. Use --force=true to overwrite or specify department/role to add more.`,
      );
    }
  } else {
    // Generate for all cities if file doesn't exist
    for (const city of cityFiles) {
      const filePath = path.join(
        __dirname,
        "../src/lib/constants/crewMembers",
        `${city}.ts`,
      );

      if (!fs.existsSync(filePath) || force) {
        const crewMembers = generateCityCrewMembers(city);
        writeCrewMembersToFile(city, crewMembers, false);
      } else {
        console.log(
          `Skipping ${city} - crew file already exists. Use --force=true to overwrite.`,
        );
      }
    }
  }

  console.log("Crew member generation complete!");
}

main().catch(console.error);
