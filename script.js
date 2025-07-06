// Itinerary data
const itineraryData = [
    {
        day: 1,
        date: 'Friday, August 15',
        theme: 'Arrival & Geothermal Welcome',
        activities: [
            {
                time: 'Morning (9:30 AM - 1:00 PM)',
                title: 'Arrival & Campervan Pickup',
                description: 'Arrive at KEF, clear customs, and collect your campervan. Stock up on groceries before heading out.'
            },
            {
                time: 'Afternoon (1:00 PM - 6:00 PM)',
                title: 'Scenic Drive to Laugarvatn',
                description: 'Enjoy the changing landscapes as you drive to Hotel Laugarvatn.'
            },
            {
                time: 'Evening (6:00 PM onwards)',
                title: 'Laugarvatn Fontana Geothermal Baths',
                description: 'Relax in natural steam rooms and outdoor mineral baths with stunning lake views.',
                link: 'https://www.fontana.is/'
            }
        ],
        campsites: [
            {
                name: 'Hotel Laugarvatn',
                description: 'Your pre-booked accommodation with access to geothermal baths.',
                link: 'https://www.hotellaugarvatn.com/'
            }
        ]
    },
    {
        day: 2,
        date: 'Saturday, August 16',
        theme: 'Golden Circle & South Coast',
        activities: [
            {
                time: 'Morning (9:00 AM - 1:00 PM)',
                title: 'Þingvellir National Park & Geysir',
                description: 'Walk between tectonic plates and witness the powerful Strokkur geyser.',
                link: 'https://www.thingvellir.is/en/'
            },
            {
                time: 'Afternoon & Evening',
                title: 'South Coast Waterfalls',
                description: 'Visit Seljalandsfoss and the hidden Gljúfrabúi waterfall.'
            }
        ],
        campsites: [
            {
                name: 'Þakgil (Thakgil)',
                description: 'Nestled in a dramatic, mossy canyon with incredible hiking trails.',
                link: 'https://www.thakgil.is/'
            },
            {
                name: 'Skógar Campsite',
                description: 'Camp with the thunderous Skógafoss waterfall as your backdrop.',
                link: 'https://www.south.is/en/place/skogar-campsite'
            }
        ]
    },
    // Add more days following the same structure
    {
        day: 3,
        date: 'Sunday, August 17',
        theme: 'Black Sands & Puffins',
        activities: [
            {
                time: 'All Day',
                title: 'Reynisfjara Black Sand Beach',
                description: 'Explore the famous black sand beach and basalt columns.',
                link: 'https://safetravel.is/reynisfjara'
            },
            {
                title: 'Puffin Watching at Dyrhólaey',
                description: 'See puffins in their natural habitat on the dramatic cliffs.',
                link: 'https://www.south.is/en/place/dyrholaey'
            }
        ],
        campsites: [
            {
                name: 'Skaftafell Camping',
                description: 'Ideal base for exploring Vatnajökull National Park with excellent facilities.',
                link: 'https://www.vatnajokulsthjodgardur.is/en/areas/skaftafell/service/camping'
            },
            {
                name: 'Kirkjubæjarklaustur Camping',
                description: 'Well-located, full-service campsite between Vík and Skaftafell.',
                link: 'https://www.south.is/en/place/tjaldsvaedid-kirkjubaearklaustri-ii'
            }
        ]
    },
    {
        day: 4,
        date: 'Monday, August 18',
        theme: 'Glacier Wonderland',
        activities: [
            {
                title: 'Vatnajökull National Park',
                description: 'Hike to Svartifoss and explore Europe\'s largest ice cap.',
                link: 'https://www.vatnajokulsthjodgardur.is/'
            },
            {
                title: 'Jökulsárlón Glacier Lagoon',
                description: 'Witness icebergs breaking off the glacier and floating in the lagoon.',
                link: 'https://www.vatnajokulsthjodgardur.is/en/areas/jokulsarlon'
            }
        ],
        campsites: [
            {
                name: 'Camping Höfn',
                description: 'Modern campsite near the charming fishing town of Höfn, known for its lobster restaurants.',
                link: 'https://www.campinghofn.is/'
            },
            {
                name: 'Skaftafell Camping',
                description: 'Stay another night to explore more of Vatnajökull National Park.',
                link: 'https://www.vatnajokulsthjodgardur.is/en/areas/skaftafell/service/camping'
            }
        ]
    },
    {
        day: 5,
        date: 'Tuesday, August 19',
        theme: 'Scenic Journey West',
        activities: [
            {
                title: 'Fjaðrárgljúfur Canyon',
                description: 'Hike along the rim of this stunning canyon with breathtaking views.',
                link: 'https://www.south.is/en/place/fjadrargljufur'
            },
            {
                title: 'Eldhraun Lava Field',
                description: 'See the vast moss-covered lava fields.'
            },
            {
                title: 'Sólheimasandur Plane Wreck',
                description: 'Visit the famous DC-3 plane wreck on the black sand beach (2.5 mile/4 km walk each way).'
            }
        ],
        campsites: [
            {
                name: 'Hella Camping',
                description: 'Well-regarded campsite with good facilities, convenient for your journey back west.',
                link: 'https://www.south.is/en/place/hella-camping-ground'
            },
            {
                name: 'Hvolsvöllur Camping',
                description: 'Full-service option in a small town, perfectly positioned for your journey.',
                link: 'https://www.south.is/en/place/hvolsvollur-campsite'
            }
        ]
    },
    {
        day: 6,
        date: 'Wednesday, August 20',
        theme: 'Return to Reykjavík',
        activities: [
            {
                title: 'Kerið Volcanic Crater',
                description: 'Visit this stunning volcanic crater with its blue-green lake.',
                link: 'https://www.south.is/en/place/kerid'
            },
            {
                title: 'Campervan Return Preparation',
                description: 'Clean and prepare the campervan for return.'
            }
        ],
        campsites: [
            {
                name: 'Hafnarfjörður Camping',
                description: 'Located in a park in a town just outside Reykjavík, offering a quieter setting.',
                link: 'https://www.campinghafnarfjordur.com/'
            },
            {
                name: 'Grindavík Campsite',
                description: 'Modern campsite close to the airport, convenient for campervan return.',
                link: 'https://www.visitreykjanes.is/en/travel/services/grindavik-campsite'
            }
        ]
    },
    {
        day: 7,
        date: 'Thursday, August 21',
        theme: 'City Life & Marathon Prep',
        activities: [
            {
                title: 'Campervan Drop-off',
                description: 'Return the campervan and check into Exeter Hotel.'
            },
            {
                title: 'Marathon Bib Pickup',
                description: 'Collect your race packets at Laugardalshöll Sport Centre.',
                link: 'https://www.rmi.is/en'
            },
            {
                title: 'Explore Laugardalur Valley',
                description: 'Visit the botanical garden and Laugardalslaug public pool.'
            }
        ],
        accommodation: {
            name: 'Exeter Hotel',
            description: 'Your comfortable base in Reykjavík for the final days of your trip.',
            link: 'https://www.exeterhotel.is/'
        }
    },
    {
        day: 8,
        date: 'Friday, August 22',
        theme: 'Pre-Race Relaxation',
        activities: [
            {
                title: 'Explore Reykjavík',
                description: 'Visit Hallgrímskirkja, Sun Voyager, and Harpa Concert Hall.'
            },
            {
                title: 'Pre-Race Dinner',
                description: 'Enjoy a carb-focused meal to prepare for race day.'
            }
        ],
        accommodation: {
            name: 'Exeter Hotel',
            description: 'Your comfortable base in Reykjavík for the final days of your trip.',
            link: 'https://www.exeterhotel.is/'
        }
    },
    {
        day: 9,
        date: 'Saturday, August 23',
        theme: 'Race Day & Departure',
        activities: [
            {
                title: 'Reykjavík Marathon & 10K',
                description: 'Race through the beautiful streets of Reykjavík!',
                link: 'https://www.rmi.is/en/'
            },
            {
                title: 'Celebration & Culture Night',
                description: 'Celebrate your achievement at Reykjavík\'s annual Menningarnótt (Culture Night) festival.'
            },
            {
                title: 'Departure',
                description: 'Head to KEF for your 7:45 PM flight home.'
            }
        ],
        accommodation: {
            name: 'Flight Home',
            description: 'Safe travels!',
            link: 'https://www.kefairport.is/'
        }
    }
];

// Function to create itinerary HTML
function createItinerary() {
    const container = document.getElementById('itinerary-container');
    
    itineraryData.forEach((day, index) => {
        // Create day card
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card mb-4 fade-in';
        dayCard.style.animationDelay = `${index * 0.1}s`;
        
        // Create day header
        const dayHeader = document.createElement('div');
        dayHeader.className = 'd-flex align-items-center mb-3';
        dayHeader.innerHTML = `
            <span class="day-number">${day.day}</span>
            <h3 class="mb-0">Day ${day.day}: ${day.date}</h3>
        `;
        
        // Add theme
        const theme = document.createElement('div');
        theme.className = 'day-theme';
        theme.innerHTML = `<i class="bi bi-stars"></i> ${day.theme}`;
        
        // Create activities list
        const activitiesList = document.createElement('div');
        day.activities.forEach(activity => {
            const activityDiv = document.createElement('div');
            activityDiv.className = 'activity';
            
            let activityHTML = '';
            if (activity.time) {
                activityHTML += `<p class="text-muted mb-1"><small>${activity.time}</small></p>`;
            }
            
            activityHTML += `<h5>${activity.title}</h5>`;
            activityHTML += `<p class="mb-2">${activity.description}</p>`;
            
            if (activity.link) {
                activityHTML += `<a href="${activity.link}" target="_blank" class="btn btn-sm btn-outline-primary">Learn More</a>`;
            }
            
            activityDiv.innerHTML = activityHTML;
            activitiesList.appendChild(activityDiv);
        });
        
        // Add accommodations section (campsites or hotel)
        const accommodationSection = document.createElement('div');
        accommodationSection.className = 'mt-4';
        
        // Handle campsites
        if (day.campsites) {
            const campsitesDiv = document.createElement('div');
            campsitesDiv.className = 'p-3 bg-light rounded';
            campsitesDiv.innerHTML = '<h6 class="mb-3"><i class="bi bi-tent"></i> Recommended Campsites:</h6>';
            
            const campsiteList = document.createElement('div');
            campsiteList.className = 'row';
            
            day.campsites.forEach(site => {
                const siteDiv = document.createElement('div');
                siteDiv.className = 'col-md-6 mb-3';
                siteDiv.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h6 class="card-title">${site.name}</h6>
                            <p class="card-text small">${site.description}</p>
                            ${site.link ? `<a href="${site.link}" target="_blank" class="btn btn-sm btn-outline-primary">View Details</a>` : ''}
                        </div>
                    </div>
                `;
                campsiteList.appendChild(siteDiv);
            });
            
            campsitesDiv.appendChild(campsiteList);
            accommodationSection.appendChild(campsitesDiv);
        }
        
        // Handle hotel/accommodation
        if (day.accommodation) {
            const hotelDiv = document.createElement('div');
            hotelDiv.className = 'p-3 bg-light rounded mt-3';
            hotelDiv.innerHTML = `
                <h6 class="mb-3"><i class="bi bi-house"></i> Accommodation:</h6>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${day.accommodation.name}</h5>
                        <p class="card-text">${day.accommodation.description}</p>
                        ${day.accommodation.link ? `<a href="${day.accommodation.link}" target="_blank" class="btn btn-sm btn-outline-primary">View Details</a>` : ''}
                    </div>
                </div>
            `;
            accommodationSection.appendChild(hotelDiv);
        }
        
        if (day.campsites || day.accommodation) {
            activitiesList.appendChild(accommodationSection);
        }
        
        // Assemble the card
        dayCard.appendChild(dayHeader);
        dayCard.appendChild(theme);
        dayCard.appendChild(activitiesList);
        
        container.appendChild(dayCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createItinerary();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
