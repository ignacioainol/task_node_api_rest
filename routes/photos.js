const router = require('express').Router();
const repoPhotos = require('./../repositorios/photos');
const repoAlbums = require('./../repositorios/albums');

router.get('/', (req,res) => {
    try {
        let photos = repoPhotos.getAll();

        if(req.query.fields != null){
            const fields = req.query.fields;

            if(fields == "album"){
                photos = photos.map(photo => {
                    let album = repoAlbums.getAlbumByPhoto(photo.albumId);
                    return {...photo, album};
                });
            }
        }

        res.send(photos);

    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;