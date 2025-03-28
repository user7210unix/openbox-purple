// Function to open the image viewer with zoom-in
function openImageViewer() {
    const viewer = document.getElementById('imageViewer');
    viewer.classList.add('active');
}

// Function to close the image viewer with zoom-out
function closeImageViewer() {
    const viewer = document.getElementById('imageViewer');
    const img = document.getElementById('viewerImage');
    img.style.transform = 'scale(0.5)'; // Zoom out
    viewer.style.opacity = '0'; // Fade out
    setTimeout(() => {
        viewer.classList.remove('active');
    }, 300); // Match the transition duration
}
