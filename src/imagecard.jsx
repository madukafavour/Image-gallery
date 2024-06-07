import downloadIcon from './download-icon.svg'
const ImageCard = ({image}) => {

    const handleDownload = () => {
        fetch(image.webformatURL)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `image-${image.id}.jpg`); // Specify the desired filename and extension
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link); // Clean up after download
            })
            .catch(error => console.error('Error downloading image:', error));
    };
    return(
        <div className="imagecard">
            <div className="imgcontainer">
                <img src={image.webformatURL} alt="" />
                <div onClick={handleDownload} className="download-icon">
                    <img src={downloadIcon} alt="download"/>
                </div>
            </div>
            <div className="image-text">
                <h4>Photo by {image.user}</h4>
                <div className="tags">
                    {image.tags.split(',').map((tag, index) => (
                        <span key={index}>#{tag}</span>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default ImageCard