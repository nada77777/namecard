

class ImgUpload {

    upload = (file) => {

        const url = "https://api.cloudinary.com/v1_1/dyh89cs5ea/image/upload";
        const formData = new FormData();
    
        formData.append("file", file);
        formData.append("upload_preset", "euucjzaj");
    
        const fileInfo = fetch(url, {
                          method: "POST",
                          body: formData
                        })//
                        .then(response => response.json());
                        // .then(reseult => console.log(reseult));
        return fileInfo;
    };

    // string = (param) => {
    //     console.log(param);
    // };

}

export default ImgUpload;