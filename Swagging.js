function idk(elementid){
    const p = document.getElementById(elementid);
    if(p.style.display === 'none')
        p.style.display = 'block';
    else if (p.style.display === 'block')
        p.style.display = 'none';
} 

// Function to toggle the image source
function toggleImageSrc(imageId) {
    const img = document.getElementById(imageId);
    if (img.src.includes('icon-plus.svg')) {
        img.src = 'images/icon-minus.svg';
    } else {
        img.src = 'images/icon-plus.svg';
    }
}

// Add event listeners to each image
document.getElementById('Q1').addEventListener('click', function() {
    toggleImageSrc('Q1');  // Toggle image for Q1
});
document.getElementById('Q2').addEventListener('click', function() {
    toggleImageSrc('Q2');  // Toggle image for Q2
});
document.getElementById('Q3').addEventListener('click', function() {
    toggleImageSrc('Q3');  // Toggle image for Q3
});
document.getElementById('Q4').addEventListener('click', function() {
    toggleImageSrc('Q4');  // Toggle image for Q4
});
