// Barn Buddies - Hall of Fame Horse Data
// Add new horses to this array to display them on the website

const horses = [
    {
        id: 1,
        name: "Buttercup",
        image: "images/horses/buttercup.jpg",
        description: "A golden palomino with the sweetest personality"
    },
    {
        id: 2,
        name: "Thunder",
        image: "images/horses/thunder.jpg",
        description: "A majestic dark bay with white markings"
    },
    {
        id: 3,
        name: "Starlight", 
        image: "images/horses/starlight.jpg",
        description: "A beautiful gray mare with a flowing mane"
    },
    {
        id: 4,
        name: "Moonbeam",
        image: "images/horses/moonbeam.jpg", 
        description: "A gentle pinto with striking markings"
    }
    // Add new horses here following the same format:
    // {
    //     id: 5,
    //     name: "Your Horse Name",
    //     image: "images/horses/your-horse-filename.jpg",
    //     description: "Description of the horse (optional)"
    // }
];

// Export for use in the website (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = horses;
}