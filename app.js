// script.js - Drug Interaction Checker Logic (Fixed and Fine-tuned)

// DOM Elements को कैप्चर करना
const medicineList = document.getElementById('medicine-list');
const addMedicineBtn = document.getElementById('add-medicine-btn');
const checkInteractionBtn = document.getElementById('check-interaction-btn');
const resultsDiv = document.getElementById('results');
const interactionDetails = document.getElementById('interaction-details');
const greetingElement = document.getElementById('greeting-message');

let inputCount = 2; // Assumes 2 inputs are initially in HTML

// --- A. Time-based Greeting Function (Fully English) ---
function setGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning, Stay Healthy!";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon, Use the Checker Wisely!";
    } else if (hour >= 17 && hour < 22) {
        greeting = "Good Evening, Take Care!";
    } else {
        greeting = "Good Night, Have a Restful Sleep!";
    }

    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}
document.addEventListener('DOMContentLoaded', setGreeting);


// --- B. Function to Add New Input ---
addMedicineBtn.addEventListener('click', () => {
    inputCount++;
    
    const newGroup = document.createElement('div');
    newGroup.classList.add('medicine-input-group');
    
    newGroup.innerHTML = `
        <input type="text" class="medicine-name" placeholder="Medicine Name ${inputCount}">
    `;
    
    medicineList.appendChild(newGroup);
});

// --- C. Main Function to Check Interaction ---
checkInteractionBtn.addEventListener('click', () => {
    
    const medicines = [];
    document.querySelectorAll('.medicine-name').forEach(input => {
        if (input.value.trim() !== '') {
            medicines.push(input.value.trim());
        }
    });

    if (medicines.length < 2) {
        alert('Please enter at least two medicines to check for interactions.');
        resultsDiv.style.display = 'none';
        return; 
    }

    // Show loading message
    resultsDiv.style.display = 'block';
    resultsDiv.style.backgroundColor = '#f0f8ff'; 
    resultsDiv.style.borderColor = '#0077b6';
    interactionDetails.innerHTML = '⌛ Checking potential interactions...';


    checkInteractionsAPI(medicines) 
        .then(data => {
            const severityClass = data.severity.toLowerCase().replace(/\s/g, '-'); 
            let bgColor, borderColor;

            if (data.interactionFound) {
                // Set background and border colors based on severity (matching CSS logic)
                if (data.severity.includes('Major')) {
                    bgColor = '#f8d7da'; // Reddish
                    borderColor = '#e76f51'; // Danger
                } else if (data.severity.includes('Moderate')) {
                     bgColor = '#fff3cd'; // Yellowish
                     borderColor = '#e9c46a'; // Warning
                } else {
                     bgColor = '#cce5ff'; // Blueish
                     borderColor = '#00b4d8'; // Secondary/Info
                }
                
                interactionDetails.innerHTML = `<span class="severity-${severityClass}">${data.severity}</span>: ${data.details}`;
            } else {
                bgColor = '#d4edda'; // Green for None
                borderColor = '#2a9d8f'; // Success
                interactionDetails.innerHTML = '✅ <span class="severity-none">None</span>: No significant drug interactions found.';
            }

            // Update result Div
            resultsDiv.style.backgroundColor = bgColor;
            resultsDiv.style.borderColor = borderColor;

        })
        .catch(error => {
            console.error('API Error:', error);
            resultsDiv.style.backgroundColor = '#fff3cd';
            resultsDiv.style.borderColor = '#e9c46a';
            interactionDetails.innerHTML = 'An error occurred while checking interactions. Please try again.';
        });
});

// --- D. Interaction Logic (Mock API - Fully English Details) ---
function checkInteractionsAPI(meds) {
    
    return new Promise((resolve) => {
        // 2 second delay (Simulating API call latency)
        setTimeout(() => {
            
            let response;
            const medsLower = meds.map(m => m.toLowerCase()); 

            // Helper function
            const checkGroup = (group) => group.some(drug => medsLower.includes(drug.toLowerCase()));
            
            // =========================================================================
            //  UPDATED DRUG GROUPS (Based on your image data and alternatives)
            // =========================================================================
            
            // 1. Paracetamol (Acetaminophen) Group
            const PARACETAMOL_GROUP = ['paracetamol', 'dolobig', 'dolo 65', 'colipul'];
            
            // 2. Pain Relief / NSAIDs Group (Aspirin, Ibuprofen, Tramadol etc. which interact with many)
            const NSAID_PAIN_GROUP = ['aspirin', 'ibuprofen', 'tramadol', 'barbitall', 'wegolin', 'aggrel', 'domitrilbum'];
            
            // 3. CNS Depressants (Sedative/Drowsiness inducing group)
            // Benadryl (Diphenhydramine) + Tramadol/Barbitall (from Domitrilbum)
            const CNS_DEPRESSANT_GROUP = ['benadryl', 'corcex', 'ascoril-d', 'tramadol', 'barbitall'];

            // 4. Statin Group (Cholesterol Reducers) - Simvastatin & alternatives
            const STATIN_GROUP = ['simpusola', 'simvastatin', 'vadmin', 'dolor', 'datofix']; 
            
            // 5. Electrolytes/Antacids Group (Which affect absorption)
            // EMS (Electrolytes) contains salts/sugars, Magnesium
            const ELECTROLYTE_ANTACID_GROUP = ['ems', 'electrol', 'oral', 'salto', 'magnesium 1200 deus tulikal'];
            
            // 6. Anticonvulsant/Epilepsy Group
            const ANTICONVULSANT_GROUP = ['slyconc', 'sabril', 'gabapin'];
            
            // 7. General Groups
            const ALL_PAIN_RELIEF_GROUP = [...PARACETAMOL_GROUP, ...NSAID_PAIN_GROUP];
            
            
            // =========================================================================
            //  INTERACTION LOGIC (Now using new groups and FULLY ENGLISH details)
            // =========================================================================

            // Major/Severe Interactions
            if (checkGroup(NSAID_PAIN_GROUP) && checkGroup(CNS_DEPRESSANT_GROUP)) {
                 response = {
                    interactionFound: true,
                    severity: 'Major', 
                    details: 'Combining an NSAID/Painkiller (e.g., Tramadol, Aspirin) with CNS Depressants (e.g., Benadryl group) significantly increases the risk of severe **drowsiness, respiratory depression, and dizziness**. AVOID this combination without expert medical advice.'
                };
            }
             else if (medsLower.includes('warfarin') && checkGroup(NSAID_PAIN_GROUP)) {
                response = {
                    interactionFound: true,
                    severity: 'Major', 
                    details: 'Concomitant use of **Warfarin** (a blood thinner) and the **NSAID/Aspirin group** (painkillers) significantly increases the risk of **serious bleeding**. Consult your doctor immediately!'
                };
            }
            // Moderate/Overdose Risk Interactions
            else if (checkGroup(PARACETAMOL_GROUP) && medsLower.includes('combiflam')) {
                response = {
                    interactionFound: true,
                    severity: 'Moderate to Major', 
                    details: 'Combiflam already contains Paracetamol. Taking another Paracetamol-containing medicine with it significantly increases the risk of Paracetamol **overdose and acute liver damage**. AVOID this combination.'
                };
            }
             else if (checkGroup(ALL_PAIN_RELIEF_GROUP) && medsLower.includes('alcohol')) {
                 response = {
                    interactionFound: true,
                    severity: 'Moderate', 
                    details: 'Combining Painkillers (Paracetamol or NSAIDs) with **Alcohol** increases the risk of **liver or stomach damage**. Limit or completely avoid alcohol intake while on treatment.'
                };
            } 
            // Minor/Monitoring Required Interactions
            else if (checkGroup(STATIN_GROUP) && checkGroup(ELECTROLYTE_ANTACID_GROUP)) {
                 response = {
                    interactionFound: true,
                    severity: 'Minor', 
                    details: 'Antacids/Magnesium (Electrolyte group) may reduce the **absorption** of Statins (Cholesterol meds). Take the Statin at least **2 hours before or 4 hours after** the antacid for best efficacy.'
                };
            }
            // No Interaction Found
            else {
                response = {
                    interactionFound: false,
                    severity: 'None',
                    details: ''
                };
            }
            
            resolve(response);
        }, 2000); 
    });
}
