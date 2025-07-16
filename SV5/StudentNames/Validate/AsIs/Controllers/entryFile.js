import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;

    let LocalFromRepo = postDefaultFuncFromRepo({});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KTF);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.KTF);
};

export {
    postFilterDataFromBodyFunc
};