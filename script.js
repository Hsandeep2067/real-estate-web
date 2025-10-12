// Sample property data
const properties = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        price: "$450,000",
        title: "Modern Downtown Apartment",
        location: "New York, NY",
        bedrooms: 2,
        bathrooms: 2,
        area: "1,200 sqft",
        garage: 1,
        type: "Apartment",
        description: "Beautiful modern apartment in the heart of downtown. This spacious 2-bedroom apartment features floor-to-ceiling windows, an open-concept living area, and a gourmet kitchen with stainless steel appliances. The building offers excellent amenities including a fitness center, rooftop terrace, and 24-hour concierge service.",
        features: ["Hardwood Floors", "Central Air Conditioning", "In-unit Laundry", "Balcony", "Gym Access", "Rooftop Terrace", "Concierge Service"]
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        price: "$1,250,000",
        title: "Luxury Family Villa",
        location: "Los Angeles, CA",
        bedrooms: 4,
        bathrooms: 3,
        area: "3,500 sqft",
        garage: 2,
        type: "Villa",
        description: "Stunning luxury villa in a prestigious neighborhood. This magnificent home features 4 spacious bedrooms, 3 luxurious bathrooms, and an open floor plan with high-end finishes throughout. The property includes a gourmet kitchen with top-of-the-line appliances, a master suite with walk-in closet, and a resort-style backyard with swimming pool.",
        features: ["Swimming Pool", "Gourmet Kitchen", "Walk-in Closets", "Home Office", "Fireplace", "Smart Home System", "Landscaped Garden"]
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        price: "$850,000",
        title: "Suburban Family Home",
        location: "Chicago, IL",
        bedrooms: 3,
        bathrooms: 2,
        area: "2,200 sqft",
        garage: 2,
        type: "House",
        description: "Charming family home in a quiet suburban neighborhood. This well-maintained property features 3 bedrooms, 2 bathrooms, and a spacious living area with hardwood floors. The home includes a modern kitchen with granite countertops, a cozy family room with fireplace, and a large backyard perfect for outdoor activities.",
        features: ["Hardwood Floors", "Fireplace", "Updated Kitchen", "Large Backyard", "Patio", "Two-car Garage", "Finished Basement"]
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        price: "$650,000",
        title: "Modern City Condo",
        location: "Miami, FL",
        bedrooms: 2,
        bathrooms: 2,
        area: "1,500 sqft",
        garage: 1,
        type: "Condo",
        description: "Sleek modern condo with stunning city views. This contemporary 2-bedroom unit features an open floor plan, floor-to-ceiling windows, and high-end finishes throughout. The building offers luxury amenities including a fitness center, swimming pool, and rooftop lounge with panoramic views.",
        features: ["City Views", "Modern Finishes", "In-unit Washer/Dryer", "Building Gym", "Swimming Pool", "Rooftop Lounge", "Concierge"]
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1575517114896-9903-5dc5a9158510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        price: "$950,000",
        title: "Waterfront Luxury Home",
        location: "Miami, FL",
        bedrooms: 3,
        bathrooms: 3,
        area: "2,800 sqft",
        garage: 2,
        type: "House",
        description: "Exceptional waterfront property with breathtaking views. This luxurious 3-bedroom home features an open-concept design with premium materials and finishes. The property includes a gourmet kitchen, master suite with spa-like bathroom, and direct waterfront access with private dock.",
        features: ["Waterfront Access", "Private Dock", "Spa-like Bathroom", "Gourmet Kitchen", "Outdoor Deck", "Two-car Garage", "Smart Home Technology"]
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=853&q=80",
        price: "$350,000",
        title: "Cozy Studio Apartment",
        location: "New York, NY",
        bedrooms: 1,
        bathrooms: 1,
        area: "600 sqft",
        garage: 0,
        type: "Apartment",
        description: "Charming studio apartment in a prime location. This efficiently designed space features high ceilings, large windows, and modern finishes. The kitchen is equipped with stainless steel appliances, and the bathroom has been recently renovated. Located near parks, restaurants, and public transportation.",
        features: ["High Ceilings", "Large Windows", "Renovated Bathroom", "Stainless Appliances", "Prime Location", "Near Public Transit", "Laundry in Building"]
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Load properties
    loadProperties(properties);
    
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
    
    // Form submissions
    const propertySearchForm = document.getElementById('property-search');
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    
    // Property search form submission
    if (propertySearchForm) {
        propertySearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const location = document.getElementById('location').value;
            const propertyType = document.getElementById('property-type').value;
            const priceRange = document.getElementById('price-range').value;
            const bedrooms = document.getElementById('bedrooms').value;
            
            // Filter properties based on search criteria
            const filteredProperties = filterProperties(properties, location, propertyType, priceRange, bedrooms);
            loadProperties(filteredProperties);
            
            // Scroll to properties section
            document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            alert(`Thank you ${name}! Your message has been sent. We'll contact you soon.`);
            contactForm.reset();
        });
    }
    
    // Newsletter form submission
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // In a real application, you would send this data to a server
            alert(`Thank you for subscribing with ${email}! You'll receive our latest updates.`);
            newsletterForm.reset();
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if it's a dropdown link
            if (this.parentElement.querySelector('.properties-dropdown')) {
                return; // Let the dropdown handle this
            }
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Handle external links
            if (targetId.startsWith('http') || targetId.startsWith('mailto') || targetId.startsWith('tel')) {
                window.location.href = targetId;
                return;
            }
            
            // Handle internal links
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    nav.style.display = 'none';
                }
            } else if (targetId.includes('.html')) {
                // If it's a page link, navigate to the page
                window.location.href = targetId;
            }
        });
    });
    
    // Hero button functionality
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = document.querySelector('#properties');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            header.style.padding = '20px 0';
        }
    });
    
    // Properties dropdown functionality
    const propertiesLinks = document.querySelectorAll('nav ul li:nth-child(2) > a');
    const propertiesDropdowns = document.querySelectorAll('.properties-dropdown');
    
    propertiesLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.nextElementSibling;
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                } else {
                    dropdown.style.display = 'block';
                }
            }
        });
    });
});

// Function to load properties into the DOM
function loadProperties(propertiesArray) {
    const container = document.getElementById('properties-container');
    
    if (!container) return;
    
    if (propertiesArray.length === 0) {
        container.innerHTML = '<p class="no-properties">No properties match your search criteria. Please try different filters.</p>';
        return;
    }
    
    container.innerHTML = '';
    
    propertiesArray.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.dataset.id = property.id; // Add data-id attribute for identification
        propertyCard.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <div class="property-type">${property.type}</div>
            </div>
            <div class="property-details">
                <div class="price">${property.price}</div>
                <h3>${property.title}</h3>
                <p><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-bed"></i> ${property.bedrooms} Beds
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i> ${property.bathrooms} Baths
                    </div>
                    <div class="feature">
                        <i class="fas fa-ruler-combined"></i> ${property.area}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(propertyCard);
        
        // Add click event listener to navigate to property detail page
        propertyCard.addEventListener('click', function() {
            window.location.href = `property-detail.html?id=${property.id}`;
        });
    });
}

// Function to filter properties based on search criteria
function filterProperties(properties, location, propertyType, priceRange, bedrooms) {
    return properties.filter(property => {
        // Location filter
        if (location && property.location.toLowerCase().indexOf(location.replace('-', ' ')) === -1) {
            return false;
        }
        
        // Property type filter
        if (propertyType && property.type.toLowerCase() !== propertyType) {
            return false;
        }
        
        // Bedrooms filter
        if (bedrooms && property.bedrooms < parseInt(bedrooms)) {
            return false;
        }
        
        // Price range filter
        if (priceRange) {
            const price = parseInt(property.price.replace(/[^0-9]/g, ''));
            if (priceRange === '0-100000' && price > 100000) return false;
            if (priceRange === '100000-300000' && (price < 100000 || price > 300000)) return false;
            if (priceRange === '300000-500000' && (price < 300000 || price > 500000)) return false;
            if (priceRange === '500000+' && price < 500000) return false;
        }
        
        return true;
    });
}

// Function to load property details on property detail page
function loadPropertyDetails(propertyId) {
    // Find the property with the matching ID
    const property = properties.find(p => p.id == propertyId);
    
    if (!property) {
        // Redirect to properties page if property not found
        window.location.href = 'index.html#properties';
        return;
    }
    
    // Update page title and breadcrumb
    document.title = `${property.title} | Premium Properties`;
    document.getElementById('breadcrumb-property-name').textContent = property.title;
    
    // Populate property details
    document.getElementById('property-title').textContent = property.title;
    document.getElementById('property-location').textContent = property.location;
    document.getElementById('main-image').src = property.image;
    document.getElementById('main-image').alt = property.title;
    document.getElementById('property-price').textContent = property.price;
    document.getElementById('property-bedrooms').textContent = property.bedrooms;
    document.getElementById('property-bathrooms').textContent = property.bathrooms;
    document.getElementById('property-area').textContent = property.area;
    document.getElementById('property-garage').textContent = property.garage;
    document.getElementById('property-description').textContent = property.description;
    
    // Populate features
    const featuresList = document.getElementById('property-features');
    featuresList.innerHTML = '';
    property.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
        featuresList.appendChild(li);
    });
    
    // Populate thumbnails (using the same image for now, but in a real app you would have multiple images)
    const thumbnailsContainer = document.querySelector('.thumbnails');
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        // Create 4 thumbnails using the same image for demo purposes
        for (let i = 0; i < 4; i++) {
            const thumb = document.createElement('img');
            thumb.src = property.image;
            thumb.alt = `${property.title} ${i+1}`;
            thumb.addEventListener('click', function() {
                document.getElementById('main-image').src = property.image;
            });
            thumbnailsContainer.appendChild(thumb);
        }
    }
    
    // Populate related properties (show other properties except the current one)
    const relatedProperties = properties.filter(p => p.id != propertyId).slice(0, 3);
    const relatedContainer = document.getElementById('related-properties-container');
    
    if (relatedContainer) {
        relatedContainer.innerHTML = '';
        
        relatedProperties.forEach(prop => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            propertyCard.dataset.id = prop.id;
            propertyCard.innerHTML = `
                <div class="property-image">
                    <img src="${prop.image}" alt="${prop.title}">
                    <div class="property-type">${prop.type}</div>
                </div>
                <div class="property-details">
                    <div class="price">${prop.price}</div>
                    <h3>${prop.title}</h3>
                    <p><i class="fas fa-map-marker-alt"></i> ${prop.location}</p>
                    <div class="property-features">
                        <div class="feature">
                            <i class="fas fa-bed"></i> ${prop.bedrooms} Beds
                        </div>
                        <div class="feature">
                            <i class="fas fa-bath"></i> ${prop.bathrooms} Baths
                        </div>
                        <div class="feature">
                            <i class="fas fa-ruler-combined"></i> ${prop.area}
                        </div>
                    </div>
                </div>
            `;
            relatedContainer.appendChild(propertyCard);
            
            // Add click event listener to navigate to property detail page
            propertyCard.addEventListener('click', function() {
                window.location.href = `property-detail.html?id=${prop.id}`;
            });
        });
    }
    
    // Add event listener to contact agent button
    const contactAgentBtn = document.getElementById('contact-agent-btn');
    if (contactAgentBtn) {
        contactAgentBtn.addEventListener('click', function() {
            alert(`Thank you for your interest in ${property.title}! We'll contact you soon to schedule a viewing.`);
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional initialization code here
    console.log('Real Estate Landing Page Loaded');
    
    // Add event listener for Get Started button
    const getStartedBtn = document.querySelector('.btn-get-started') || document.querySelector('.cta-button .btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }
    
    // Set active class for current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        // Remove any existing active classes
        link.classList.remove('active');
        
        // Add active class to current page link
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        
        // Special case for index.html
        if (currentPage === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
});