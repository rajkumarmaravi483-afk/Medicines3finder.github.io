
function setGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning, Welcome Back!";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon, Find Your Alternatives!";
    } else if (hour >= 17 && hour < 22) {
        greeting = "Good Evening, Take Care!";
    } else {
        greeting = "Good Night, Have a Restful Sleep!";
    }

    const greetingElement = document.getElementById('greeting-message');
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}
document.addEventListener('DOMContentLoaded', setGreeting);


const DUMMY_DATABASE = {
    "daraprin": [
        { name: "Daraprin",  
          price: "Rs. 250", 
          manufacturer: "Indico Laboratories Pvt Ltd", 
          imageUrl: "https://share.google/bbIyGGzInD423qHjb", 
          purchaseLink: "https://www.1mg.com/drugs/daramin-25mg-tablet-201707", 
          isOriginal: true },
          {
            name:"Daramin",
            price:"Rs. 15",
            manufacturer:"Indico Laboratories Pvt Ltd",
            imageUrl:"https://www.netmeds.com/images/product-v1/600x600/1136339/daramin_25mg_tablet_10s_742022_0_0.jpg",
            purchaseLink:"https://www.1mg.com/drugs/daramin-25mg-tablet-201707"
        }
        
    ],
    "zytiga": [
        { name: "Zytiga",
          price: "Rs. 75000", 
          manufacturer: "Mylan Pharma", 
          imageUrl: "/1.jpg", 
          purchaseLink: "'", 
          isOriginal: true },
        { name: "Mytera", 
          price: "Rs. 15000", 
          manufacturer: "Mylan Pharma", 
          imageUrl: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cx456kwzkuscoxk4bl4d.jpg?format=auto", 
          purchaseLink: "https://www.apollopharmacy.in/medicine/mytera-250mg-tablet-120-s" },
        { name: "Abitate",  
          price: "Rs. 29000", 
          manufacturer: "RPG Life Sciences",
          imageUrl: "https://assets.mrmed.in/product-images/product-images-1632405352428-700552497-100012_1.jpg", 
          purchaseLink: "https://www.apollopharmacy.in/medicine/abitate-250mg-tab-120-s" }
    ],
    "glivec": [
        { name: "Glivec",  
          price: "Rs. 6600", 
          manufacturer: "xyz", 
          imageUrl: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a0f76dfdb04146cfb0ec1f5099800eb6.jpg", 
          purchaseLink: "https://www.1mg.com/drugs/glivec-400mg-tablet-236606?srsltid=AfmBOornCUHbHOOOrbzDerFlKlCNwkmwUZQQ-SVLiJocqFiRtcstyCwq&wpsrc=Google+Organic+Search",
          isOriginal: true },
        { name: "Veenat", 
          price: "Rs. 1500", 
          manufacturer: "Natco Pharma", 
          imageUrl:"https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a5f53d8d234d45a695d7c6f59707c652.jpg",
          purchaseLink: "https://www.1mg.com/drugs/veenat-400-tablet-14360?srsltid=AfmBOoozkKt5QjS2GyIzsogcO_R2FtOGzBoVQFn3fwsoCUwofa590wBc&wpsrc=Google+Organic+Search" }
    ],
    "paracetamol": [
        { name: "Paracetamol", 
          price: "₹20-30 per 10 tabs", 
          manufacturer: "GlaxoSmithKline", 
          imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg", 
          purchaseLink: "https://www.1mg.com/search/all?filter=true&name=Paracetamol", 
          isOriginal: true },
        { name: "Dolo 65", 
          price: "₹20-30 per 10 tabs", 
          manufacturer: "Micro Labs", 
          imageUrl: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_1.png", 
          purchaseLink: "https://www.1mg.com/search/all?name=dolo%2065" },
        { name: "Calpol",
          price: "₹20-30 per 10 tabs",
          manufacturer: "GSK", 
          imageUrl: "https://drugstreet.in/wp-content/uploads/2023/12/1000046750.jpg",
          purchaseLink: "https://www.1mg.com/search/all?name=calpol" },
        {
            name:"Crocin",
            price:"Rs.20-30 per 10 tablets",
            manufacturer:"GlaxoSmithKline", 
            imageUrl:"https://cdn01.pharmeasy.in/dam/products_otc/H45820/crocin-650-tablet-15-nos-3-1689759566.jpg",
           
            purchaseLink:"https://www.1mg.com/search/all?name=crocin"
        }
    ],
    "combiflam": [
        { name: "Combiflam", 
          price: "Rs.20-30 per 10 tablets", 
          manufacturer: "Sanofi ", 
          imageUrl: "https://images.apollo247.in/pub/media/catalog/product/c/o/combiflam_tablet_20_s-1.png?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w", 
          purchaseLink: "https://www.1mg.com/search/all?filter=true&name=Combiflam", isOriginal: true },
        { name: "Brufen", 
          price: "Rs.20-30 per 10 tablets",
          manufacturer: "Abbott", 
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUmWwHGkFj5M1SKY0GM-af-pHOyLMcLqRdQ&s", 
          purchaseLink: "https://www.1mg.com/search/all?name=brufen" },
        {
            name:"Ibuprofen",
            price:"Rs.20-30 per 10 tablets",
            manufacturer:"Abbott",
            imageUrl:"https://5.imimg.com/data5/SELLER/Default/2023/9/344827499/TG/YT/FY/192270567/ibuprofen-tablet-400mg.png",
            purchaseLink:"https://www.1mg.com/search/all?filter=true&name=Ibuprofen"
        }
    ],
    "disprin": [
        { name: "Disprin", 
          price: "Rs. 10-20 for 10 tablets", 
          manufacturer: "Reckitt Benckiser",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfABbWyZY3yywBJtf60mpv4GyfpwTHVj5yGA&s", 
          purchaseLink: "https://www.1mg.com/otc/disprin-regular-325mg-effervescent-tablet-for-fast-relief-from-pain-headaches-migraines-otc543020", 
          isOriginal: true },
        { name: "Ecosprin",  
          price: "₹10-20 for 10 tablets",
          manufacturer: "USV Ltd.", 
          imageUrl: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-012745/ecosprin-75-tablet-14_ecosprin-75-tablet-14--TM-TACR1-012745_1.png", 
          purchaseLink: "https://www.1mg.com/search/all?filter=true&name=Ecosprin" },
        { name: "Asprin", 
          price: "₹10-20 for 10 tablets",
          manufacturer: "Bayer", 
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeIfr0UEUuInFvEhsJRyF3aVQKXuaMSIalA&s", 
          purchaseLink: "https://www.1mg.com/search/all?filter=true&name=Aspirin" },
        {
            name:"Aspro",
            price:"Rs.10-20 for 10 tablets",
            manufacturer:"Nicholas Healtcare Limited",
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SvOcNgxiuLa4yDomGtmGL5e22x6BHuX5qQ&s",
            purchaseLink:""
        }
    ],
    "ors": [
        { name: "ORS", 
          price: "₹15-25 per sachet", 
          manufacturer: "FDC Ltd", 
          imageUrl: "https://cdn01.pharmeasy.in/dam/products_otc/W81928/prolyte-ors-orange-drink-sachet-21-gm-2-1654249497.jpg", 
          purchaseLink: "https://www.1mg.com/search/all?name=ors", 
          isOriginal: true },
        { name: "Electral",
          price: "₹15-25 per sachet", 
          manufacturer: "FDC Ltd", 
          imageUrl: "https://m.media-amazon.com/images/I/81jrDrIJoNL.jpg", 
          purchaseLink: "https://www.1mg.com/search/all?name=ors" },
        { name: "ORSL",
          price: "₹15-25 per sachet", 
          manufacturer: "Dabur", 
          imageUrl:"https://images.apollo247.in/pub/media/catalog/product/o/r/ors0011_1-1-_1_.jpg", 
          purchaseLink: "https://www.1mg.com/search/all?name=ors" },
        {
            name:"Peditral",
            price:"Rs. 15-25 per sachet",
            manufacturer:"Cipla",
            imageUrl:"https://images.apollo247.in/pub/media/catalog/product/P/E/PED0040_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
            purchaseLink:"https://www.1mg.com/search/all?name=ors"
        }
    ],
    "vicks Vaporub": [
        { name: "Vicks Vaporub",
          price: "₹40-60 for 25g", 
          manufacturer: "Procter & Gamble",
          imageUrl: "https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1677525570.jpg", 
          purchaseLink: "https://www.1mg.com/search/all?name=Vicks%20Vaporub&st=vivks%20vaporup&sl=Vicks%20Vapor,Vicks%20Vaporub&s=Vicks%20Vaporub", isOriginal: true },
        { name: "Zandu Balm", 
          price: "₹40-60 for 25g", 
          manufacturer: "Emami", 
          imageUrl: "https://m.media-amazon.com/images/I/617dG3SoVKL.jpg", 
          purchaseLink: "https://www.1mg.com/search/all?filter=true&name=Zandu%20balm" },
        { name: "Amrutanjan",
          price: "₹40-60 for 25g",
          manufacturer: "Amrutanjan Healthcare", 
          imageUrl: "https://cdn01.pharmeasy.in/dam/products_otc/010715/amrutanjan-strong-doub-50-ml-2-1674209955.jpg?dim=400x0&dpr=1&q=100", 
          purchaseLink: "https://www.1mg.com/search/all?filter=true&name=Amrutanjan%20balm" },
        {
            name:"Tiger Balm",
            price:"Rs. 40-60 for 25g",
            manufacturer:"Haw Par Healtcare",
            imageUrl:"https://rukminim2.flixcart.com/image/850/1000/jd1z9u80/body-pain-relief/v/n/b/30-red-ointment-30g-tiger-balm-original-imaf224hjngnfmhs.jpeg?q=90&crop=false",
            purchaseLink:"https://www.1mg.com/search/all?name=tiger%20balm"
        }
    ],
    "digene": [
        { name: "Digene", 
          price: "Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle", 
          manufacturer: "Abbott", 
          imageUrl: "https://cdn01.pharmeasy.in/dam/products_otc/255390/digene-gel-acidity-gas-relief-200ml-mint-flavour-sugar-free-2-1710939921.jpg", 
          purchaseLink: "https://www.1mg.com/search/all?name=digene", isOriginal: true },
        { name: "ENO",
          price: "Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle", 
          manufacturer: "GlaxoSmithKline", 
          imageUrl: "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/home/mobile/homepage-header-carousal-1-v3_mobile.jpg?auto=format",
          purchaseLink: "https://www.1mg.com/search/all?name=eno" },
        { name: "Gelusil", 
          price: "Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle", 
          manufacturer: "Pfizer", 
          imageUrl: "https://images.apollo247.in/pub/media/catalog/product/G/E/GEL0002_3_1.jpg", 
          purchaseLink:"https://www.1mg.com/search/all?name=gelusil" }
    ],
    "benadryl": [
        { name: "Benadryl", 
          price: "₹50-90 per bottle (100 ml)", 
          manufacturer: "Johnson & Johnson",
          imageUrl: "https://images.apollo247.in/pub/media/catalog/product/b/e/ben0053_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w", 
          purchaseLink: "https://www.1mg.com/search/all?filter=true&name=Benadryl", isOriginal: true },
        { name: "Corex", 
        price: "₹50-90 per bottle(100 ml)", 
        manufacturer: "Pfizer", 
        imageUrl: "https://shreedashrath.com/wp-content/uploads/2021/06/corex-600x600.jpg", 
        purchaseLink: "https://www.1mg.com/search/all?name=corex" },
        {
            name:"Ascoril-D",
            price:"Rs. 50-80 per bottle (100 ml)",
            manufacturer:"Gzlenmark",
            imageUrl:"https://images.apollo247.in/pub/media/catalog/product/a/s/asc0019.jpg",
            purchaseLink:"https://www.1mg.com/search/all?filter=true&name=Ascoril"
        }
    ],
    "strepsils": [
        { name: "Strepsils",
          price: "Rs. 30-50 for a pack of 8-10 tablets", 
          manufacturer: "Reckitt Benckiser",
          imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/2/RX/ZI/IF/81505918/strepsils-blister.jpg", 
          purchaseLink: "https://www.1mg.com/categories/featured/top-brands/strepsils-884", isOriginal: true },
        {
            name:"Vicks",
            price:"Rs. 30-50 for a pack of 8-10 tablets",
            manufacturer:"Procter & Gamble",
            imageUrl:"https://images.ctfassets.net/umpxkz97ty8t/4tjmmu8xgFdItABWjhpWTA/88afdcd6055df8b4fac3fdea0098dfa5/VCD4-Packs.png",
            purchaseLink:"https://www.1mg.com/search/all?name=vicks&filter=true&state=1&scroll_id=Rre-0688yDrQYBn-2UkFiY-vOvNzHZ9Vlp5wJSeiWio="
        },
        {
            name:"Dabur Honitus",
            price:"Rs. 30-50 for a pack of 8-10 tablets",
            manufacturer:"Dabur India Ltd",
            imageUrl:"https://5.imimg.com/data5/UF/HY/GLADMIN-43545561/dabur-honitus-cough-drops.png",
            purchaseLink:"https://www.1mg.com/search/all?name=dabur%20honitus"
        },
        {
            name:"Cofsils",
            price:"Rs. 30-50 for a pack of 8-10 tablets",
            manufacturer:"Cipla Healtcare",
            imageUrl:"https://5.imimg.com/data5/SELLER/Default/2020/9/HW/ZE/YJ/14356045/cosils-orange.jpg",
            purchaseLink:"https://www.1mg.com/search/all?name=cofsils"
        }
    ],
    "augmentin 1000 Duo Tablet": [
        { name: "Augmentin 1000 Duo Tablet",  
          price: "Rs. 1000", 
          manufacturer: "Alkem Laboratories",
          imageUrl: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/bodminug3xmfcubbrdix.jpg?format=auto", 
          purchaseLink:"https://www.1mg.com/drugs/augmentin-1000-duo-tablet-163191", isOriginal: true },
        { name: "Clavam", 
          price: "Rs. 193", 
          manufacturer: "Alkem Laboratories",
          imageUrl: "https://images.apollo247.in/pub/media/catalog/product/c/l/cla0004.jpg", 
          purchaseLink: "https://www.1mg.com/drugs/clavam-625-tablet-63841" }
    ],
    
    "crestor": [
        { name: "Crestor",  
          price: "Rs.732", 
          manufacturer: "Astrazeneca", 
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jd-k1uea3upVeTJNmtS8y9ASkNOwsxN8Uw&s", 
          purchaseLink:"https://www.1mg.com/drugs/crestor-40mg-tablet-932668", isOriginal: true },
        {
            name:"Rosuvas",
            price:"Rs. 277",
            manufacturer:"Sun Pharmaceutical Indsutries Ltd",
            imageUrl:"https://5.imimg.com/data5/SELLER/Default/2024/6/425035920/PX/LR/WN/147700842/rosuvas-10-mg-tablet1-500x500.jpg",
            purchaseLink:"https://www.1mg.com/drugs/rosuvas-10-tablet-113791"
        }
        
    ],
    "lantus":[
        {
            name:"Lantus",
            price:"Rs. 634",
            manufacturer:"Sanofi India Ltd",
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pt0WVYQOROwvBFQi4lo5Fy0HvifJla0VUw&s",
            purchaseLink:"https://www.1mg.com/drugs/lantus-solostar-100iu-ml-solution-for-injection-69758",           isOriginal:true
        },
        {
            name:"Basalog",
            price:"Rs. 481",
            manufacturer:"Bicon",
            imageUrl:"https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/0c379a5816da4e63b74cd6889b2d382a.jpg?format=auto",
            purchaseLink:"https://www.1mg.com/drugs/basalog-100iu-ml-refill-cartridge-164232"
        }
    ],
    "tamiflu":[
        {
            name:"Tamiflu",
            price:"Rs. 1238",
            manufacturer:"Roche Products India Pvt Ltd",
            imageUrl:"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_170422580.jpg",
            purchaseLink:"https://www.1mg.com/drugs/tamiflu-75mg-capsule-682558",
            isOriginal:true
        },
        {
            name:"Fluvir",
            price:"Rs.447",
            manufacturer:"Hetero Drugs Ltd",
            imageUrl:"https://images.apollo247.in/pub/media/catalog/product/f/l/flu0174.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
            purchaseLink:"https://www.1mg.com/drugs/fluvir-75mg-capsule-25088"
        }
    ],
    "eppliquis":[
        {
            name:"Eliquis",
            price:"Rs.1086",
            manufacturer:"Pfizer Ltd",
            imageUrl:"https://5.imimg.com/data5/SELLER/Default/2022/9/KS/UI/TA/136059498/eliquis-5mg-tablet.jpg",
            purchaseLink:"https://www.1mg.com/drugs/eliquis-5mg-tablet-172700",
            isOriginal:true
        },
        {
            name:"Apigat",
            price:"Rs. 533",
            manufacturer:"Nacto Pharma Ltd",
            imageUrl:"https://www.practostatic.com/practopedia-images/v3/res-750/apigat-2-5-mg-tablet-30-s_15fa3947-9fad-47f2-bbed-8d5f500e66e9.JPG",
            purchaseLink:"https://www.1mg.com/drugs/apigat-5-tablet-540276"
        }
    ]
};

const REVERSE_MAPPING = {}; 
function createReverseMapping() {
    for (const genericName in DUMMY_DATABASE) {
        DUMMY_DATABASE[genericName].forEach(alternative => {
            REVERSE_MAPPING[alternative.name.toLowerCase().trim()] = genericName;
        });
    }
}
document.addEventListener('DOMContentLoaded', createReverseMapping);


function searchAlternatives() {
    const inputElement = document.getElementById('medicineInput');
    const resultsContainer = document.getElementById('resultsContainer');
    
    const rawSearchTerm = inputElement.value.trim();
    const searchTerm = rawSearchTerm.toLowerCase();

    if (!searchTerm) {
        resultsContainer.innerHTML = '<p class="error-message">Please enter a medicine name to search.</p>';
        return;
    }

    resultsContainer.innerHTML = `<p class="loading-message">Searching for <strong>${rawSearchTerm}</strong>...</p>`;
    
    setTimeout(() => {
        let baseMedicine = null; 
        let allAlternatives = null;
        let searchedItemData = null; 
        let finalAlternatives = []; 

        if (DUMMY_DATABASE[searchTerm]) {
            baseMedicine = searchTerm;
            allAlternatives = DUMMY_DATABASE[baseMedicine];
        } 
        else if (REVERSE_MAPPING[searchTerm]) {
            baseMedicine = REVERSE_MAPPING[searchTerm];
            allAlternatives = DUMMY_DATABASE[baseMedicine];
        }

        if (!allAlternatives || allAlternatives.length === 0) {
            resultsContainer.innerHTML = `<h2>No match found for: ${rawSearchTerm.toUpperCase()}</h2><p>Please check the spelling or try a different medicine.</p>`;
            return;
        }

        allAlternatives.forEach(alt => {
            if (alt.name.toLowerCase() === searchTerm) {
                searchedItemData = alt;
            } else {
                finalAlternatives.push(alt);
            }
        });
        
        if (!searchedItemData && DUMMY_DATABASE[searchTerm]) {
             const originalItem = allAlternatives.find(alt => alt.isOriginal);
             if (originalItem) {
                 searchedItemData = originalItem;
                 finalAlternatives = allAlternatives.filter(alt => alt.name.toLowerCase() !== originalItem.name.toLowerCase());
             }
        }
        
        let resultsHTML = '';
        
        if (searchedItemData) {
             const originalTag = searchedItemData.isOriginal ? ' (Original Brand)' : '';
             
             resultsHTML += `<h3 class="result-heading searched-heading">🔍 Your Searched Medicine: ${searchedItemData.name}${originalTag}</h3>
                <div id="searchedItemContainer" class="results-container single-item">
                    ${generateCardHTML(searchedItemData, true, searchedItemData.isOriginal)}
                </div>`;
        } else {
            resultsHTML += `<h3 class="result-heading searched-heading">🔍 Results for Generic Group: ${baseMedicine.toUpperCase()}</h3>`;
        }

        if (finalAlternatives.length > 0) {
            resultsHTML += `<h3 class="result-heading alternative-heading">⇌ Alternatives in ${baseMedicine.toUpperCase()} Group</h3>
                <div id="alternativesContainer" class="results-container">`;
            finalAlternatives.forEach((alt) => {
                resultsHTML += generateCardHTML(alt, false, alt.isOriginal);
            });
            resultsHTML += `</div>`;
        } else {
             resultsHTML += `<p class="error-message">No other viable alternatives found in the database for this group.</p>`;
        }
        
        resultsContainer.innerHTML = resultsHTML;

    }, 1000); 
}

function generateCardHTML(alt, isSearched, isOriginalFlag) {
    let cardClass = isSearched ? 'alternative-card searched-item' : 'alternative-card';
    if (isOriginalFlag) {
        cardClass += ' original-item';
    }

    const tagText = isSearched 
        ? '(Your Choice)' 
        : (isOriginalFlag ? '(Original Brand)' : '');

    const originalHeader = isOriginalFlag 
        ? '<div class="original-label">★ ORIGINAL MEDICINE</div>' 
        : '';
    
    return `
        <div class="${cardClass}" onclick="window.open('${alt.purchaseLink}', '_blank')">
            ${originalHeader} 
            <div class="card-image-box">
                <img src="${alt.imageUrl}" alt="${alt.name}" class="medicine-image" >
            </div>
            <div class="card-details">
                <h3 class="medicine-name-h3">${alt.name} </h3>
                <p><strong>Price:</strong> <span class="price">${alt.price}</span></p>
                <p><strong>Manufacturer:</strong> ${alt.manufacturer}</p>
            </div>
            <button class="buy-link-button">Buy Now →</button>
        </div>
    `;
}
