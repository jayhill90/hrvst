class DataManager {
    constructor() {
        this.data = null;
        this.isLoaded = false;
    }
    
    async loadData() {
        try {
            // Load release data from JSON
            const response = await fetch('/src/data/releases.json');
            if (!response.ok) {
                throw new Error(`Failed to load data: ${response.status}`);
            }
            
            this.data = await response.json();
            this.isLoaded = true;
            
            console.log('Data loaded successfully:', this.data);
            return this.data;
            
        } catch (error) {
            console.error('Error loading data:', error);
            
            // Fallback data if JSON fails to load
            this.data = this.getFallbackData();
            this.isLoaded = true;
            return this.data;
        }
    }
    
    getData() {
        if (!this.isLoaded) {
            console.warn('Data not loaded yet, returning fallback');
            return this.getFallbackData();
        }
        return this.data;
    }
    
    getLatestRelease() {
        const data = this.getData();
        return data.latestRelease;
    }
    
    getAllReleases() {
        const data = this.getData();
        return data.releases || [];
    }
    
    getRelease(id) {
        const releases = this.getAllReleases();
        return releases.find(release => release.id === id);
    }
    
    getDJMixes() {
        const data = this.getData();
        return data.djMixes;
    }
    
    getArtistInfo() {
        const data = this.getData();
        return data.artistInfo;
    }
    
    // Future: Methods for CMS integration
    async updateRelease(id, updateData) {
        // TODO: Implement API call to update release
        console.log('Update release:', id, updateData);
    }
    
    async addRelease(releaseData) {
        // TODO: Implement API call to add new release
        console.log('Add release:', releaseData);
    }
    
    async deleteRelease(id) {
        // TODO: Implement API call to delete release
        console.log('Delete release:', id);
    }
    
    getFallbackData() {
        return {
            latestRelease: {
                title: "Neon Depths",
                artist: "HRVST",
                releaseDate: "2025-08-15",
                coverArt: "/assets/covers/placeholder.jpg",
                description: "A journey through synthetic soundscapes",
                platforms: {
                    spotify: "#",
                    soundcloud: "#",
                    beatport: "#",
                    traxsource: "#"
                }
            },
            releases: [
                {
                    id: 1,
                    title: "Neon Depths",
                    artist: "HRVST",
                    releaseDate: "2025-08-15",
                    coverArt: "/assets/covers/placeholder.jpg",
                    platforms: {
                        spotify: "#",
                        soundcloud: "#", 
                        beatport: "#",
                        traxsource: "#"
                    }
                },
                {
                    id: 2,
                    title: "Digital Waves",
                    artist: "HRVST",
                    releaseDate: "2025-06-20",
                    coverArt: "/assets/covers/placeholder.jpg",
                    platforms: {
                        spotify: "#",
                        soundcloud: "#",
                        beatport: "#", 
                        traxsource: "#"
                    }
                },
                {
                    id: 3,
                    title: "Synthetic Dreams", 
                    artist: "HRVST",
                    releaseDate: "2025-04-10",
                    coverArt: "/assets/covers/placeholder.jpg",
                    platforms: {
                        spotify: "#",
                        soundcloud: "#",
                        beatport: "#",
                        traxsource: "#"
                    }
                }
            ],
            djMixes: {
                playlistUrl: null,
                alternateUrl: null,
                title: "HRVST DJ Mix Collection",
                description: "Coming soon..."
            },
            artistInfo: {
                bio: "HRVST is an electronic music project exploring the intersection of organic and synthetic sounds. Through procedurally generated visuals and immersive soundscapes, HRVST creates unique auditory experiences that blur the lines between the digital and physical worlds.",
                pressKit: "/assets/HRVST_Press_Kit.pdf",
                social: {
                    soundcloud: "#",
                    spotify: "#",
                    instagram: "#",
                    twitter: "#"
                }
            }
        };
    }
}

export { DataManager };